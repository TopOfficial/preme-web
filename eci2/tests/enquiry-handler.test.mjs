import test from "node:test";
import assert from "node:assert/strict";
import { handleEnquiry } from "../lib/enquiries/handler.ts";
const body = {
  name: "Test",
  organisation: "Example",
  email: "test@example.com",
  topic: "general",
  message: "A test enquiry for validation.",
};
const request = (data = body, origin = "https://eci.example") =>
  new Request("https://eci.example/api/enquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: origin },
    body: JSON.stringify(data),
  });
const ready = { configured: true, consume: async () => true, deliver: async () => {} };
test("rejects cross-origin and invalid requests before sending", async () => {
  assert.equal((await handleEnquiry(request(body, "https://attacker.example"), ready)).status, 403);
  assert.equal((await handleEnquiry(request({ ...body, email: "invalid" }), ready)).status, 400);
  assert.equal(
    (await handleEnquiry(request({ ...body, message: "x".repeat(17000) }), ready)).status,
    413,
  );
});
test("unconfigured delivery and exhausted quota never report success", async () => {
  assert.equal((await handleEnquiry(request(), { ...ready, configured: false })).status, 503);
  assert.equal(
    (await handleEnquiry(request(), { ...ready, consume: async () => false })).status,
    429,
  );
});
test("failed transport never reports a submitted enquiry", async () => {
  assert.equal(
    (
      await handleEnquiry(request(), {
        ...ready,
        deliver: async () => {
          throw Error("offline");
        },
      })
    ).status,
    502,
  );
});
test("accepts a validated enquiry after transport completion", async () => {
  const res = await handleEnquiry(request(), ready);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
});
