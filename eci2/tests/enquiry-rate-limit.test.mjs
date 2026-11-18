import test from "node:test";
import assert from "node:assert/strict";
import { consumeEnquiryQuota } from "../lib/enquiries/rate-limit.ts";

const request = (ip) =>
  new Request("https://eci.example/api/enquiries", {
    headers: { "x-vercel-forwarded-for": ip, "x-forwarded-for": "untrusted" },
  });
function counter() {
  const hits = new Map();
  const calls = [];
  return {
    calls,
    increment: async (key, ttl) => {
      calls.push({ key, ttl });
      const count = (hits.get(key) || 0) + 1;
      hits.set(key, count);
      return count;
    },
  };
}
test("shared quota allows five per address/window, isolates addresses, and hashes identifiers", async () => {
  const store = counter();
  const options = { now: 900_100, vercel: true };
  for (let i = 0; i < 5; i++)
    assert.equal(
      await consumeEnquiryQuota(store.increment, request("203.0.113.1"), "secret", options),
      true,
    );
  assert.equal(
    await consumeEnquiryQuota(store.increment, request("203.0.113.1"), "secret", options),
    false,
  );
  assert.equal(
    await consumeEnquiryQuota(store.increment, request("203.0.113.2"), "secret", options),
    true,
  );
  assert.equal(
    await consumeEnquiryQuota(store.increment, request("203.0.113.1"), "secret", {
      ...options,
      now: 1_800_000,
    }),
    true,
  );
  assert.match(store.calls[0].key, /^eci:enquiry:[a-f0-9]{64}$/);
  assert.equal(store.calls[0].ttl, 900);
  assert.equal(store.calls[0].key.includes("203.0.113.1"), false);
});
test("untrusted forwarding headers cannot bypass local quotas", async () => {
  const store = counter();
  for (let i = 0; i < 6; i++)
    await consumeEnquiryQuota(store.increment, request(`203.0.113.${i}`), "secret", {
      now: 100,
      vercel: false,
    });
  assert.equal(new Set(store.calls.map((call) => call.key)).size, 1);
});
test("counter failures and invalid replies never allow sending", async () => {
  await assert.rejects(
    consumeEnquiryQuota(
      async () => {
        throw Error("offline");
      },
      request("203.0.113.1"),
      "secret",
    ),
  );
  for (const value of [null, 0, -1, "1", NaN]) {
    assert.equal(
      await consumeEnquiryQuota(async () => value, request("203.0.113.1"), "secret"),
      false,
    );
  }
});
