import { createClient } from "redis";

export function redisConfigured(url?: string) {
  try {
    return ["redis:", "rediss:"].includes(new URL(url || "").protocol);
  } catch {
    return false;
  }
}

// Atomic counter + expiry works across concurrent serverless instances.
const incrementScript = `
local hits = redis.call('INCR', KEYS[1])
if hits == 1 then redis.call('EXPIRE', KEYS[1], ARGV[1]) end
return hits
`;
export async function incrementEnquiryCounter(url: string, key: string, ttlSeconds: number) {
  const client = createClient({
    url,
    socket: { connectTimeout: 3000, reconnectStrategy: false },
    disableOfflineQueue: true,
  });
  // Avoid an unhandled EventEmitter error; connect/command rejections are handled
  // by the enquiry handler, which fails closed without sending mail.
  client.on("error", () => {});
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    const operation = async () => {
      await client.connect();
      return client.eval(incrementScript, {
        keys: [key],
        arguments: [String(ttlSeconds)],
      });
    };
    // The socket's connect timeout excludes the Redis handshake. Bound the
    // whole operation, including authentication and any stalled command.
    const deadline = new Promise<never>((_, reject) => {
      timer = setTimeout(() => reject(new Error("Rate limit store timed out")), 5000);
    });
    return await Promise.race([operation(), deadline]);
  } finally {
    clearTimeout(timer);
    if (client.isOpen) client.destroy();
  }
}
