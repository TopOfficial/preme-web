import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:net";
import { once } from "node:events";
import { incrementEnquiryCounter, redisConfigured } from "../lib/enquiries/redis.ts";

test("Redis configuration accepts only Redis connection URLs", () => {
  assert.equal(redisConfigured("rediss://user:password@redis.example:6379"), true);
  assert.equal(redisConfigured("redis://localhost:6379"), true);
  for (const url of [undefined, "", "https://example.com", "invalid"])
    assert.equal(redisConfigured(url), false);
});

test("Redis handshake cannot hang an enquiry indefinitely", async () => {
  const sockets = new Set();
  const server = createServer((socket) => {
    sockets.add(socket);
    socket.on("close", () => sockets.delete(socket));
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  let deadline;
  try {
    const operation = incrementEnquiryCounter(
      `redis://127.0.0.1:${server.address().port}`,
      "test:quota",
      900,
    );
    const watchdog = new Promise((_, reject) => {
      deadline = setTimeout(() => reject(Error("test watchdog expired")), 6500);
    });
    await assert.rejects(Promise.race([operation, watchdog]), /Rate limit store timed out/);
  } finally {
    clearTimeout(deadline);
    for (const socket of sockets) socket.destroy();
    await new Promise((resolve) => server.close(resolve));
  }
});
