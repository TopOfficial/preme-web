import { createHmac } from "node:crypto";
export type IncrementCounter = (key: string, ttlSeconds: number) => Promise<unknown>;
export async function consumeEnquiryQuota(
  increment: IncrementCounter,
  request: Request,
  salt: string,
  { now = Date.now(), vercel = process.env.VERCEL === "1" } = {},
): Promise<boolean> {
  const windowMs = 15 * 60 * 1000;
  const bucket = Math.floor(now / windowMs);
  // Vercel overwrites this header. Other hosts use a conservative shared quota
  // until their trusted proxy is explicitly integrated.
  const address = vercel
    ? request.headers.get("x-vercel-forwarded-for")?.split(",")[0].trim() || "unknown"
    : "local";
  const digest = createHmac("sha256", salt).update(`${bucket}:${address}`).digest("hex");
  const ttl = Math.max(1, Math.ceil(((bucket + 1) * windowMs - now) / 1000));
  const count = await increment(`eci:enquiry:${digest}`, ttl);
  return typeof count === "number" && Number.isInteger(count) && count >= 1 && count <= 5;
}
