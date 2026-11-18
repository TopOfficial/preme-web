import type { Enquiry } from "./validation.ts";
import { products, productLabel } from "../catalogue.ts";
export type MailConfig = { endpoint?: string; token?: string; from?: string };
export function mailConfigured(config: MailConfig) {
  try {
    return !!(
      config.token &&
      config.from &&
      !/[\r\n]/.test(config.from) &&
      new URL(config.endpoint || "").protocol === "https:"
    );
  } catch {
    return false;
  }
}
export async function deliverEnquiry(enquiry: Enquiry, config: MailConfig) {
  if (!mailConfigured(config)) throw new Error("Mail unavailable");
  const product = products.find((p) => p.slug === enquiry.product);
  const text = [
    `Name: ${enquiry.name}`,
    `Organisation: ${enquiry.organisation}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Topic: ${enquiry.topic}`,
    `Product: ${product ? `${product.name} (${product.slug}; ${productLabel(product).toLowerCase()})` : "Not selected"}`,
    "",
    enquiry.message,
  ].join("\n");
  const result = await fetch(config.endpoint!, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.token}` },
    body: JSON.stringify({
      from: config.from,
      to: ["info@eci-inter.com"],
      reply_to: enquiry.email,
      subject: `ECI website: ${enquiry.topic} enquiry`,
      text,
    }),
    signal: AbortSignal.timeout(12000),
    redirect: "error",
  });
  if (!result.ok) throw new Error("Mail rejected");
}
