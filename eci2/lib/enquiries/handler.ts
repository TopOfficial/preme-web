import { validateEnquiry, type Enquiry } from "./validation.ts";
export type EnquiryServices = {
  configured: boolean;
  consume: (request: Request) => Promise<boolean>;
  deliver: (enquiry: Enquiry) => Promise<void>;
};
const reply = (status: number, body: object) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function handleEnquiry(
  request: Request,
  services: EnquiryServices,
): Promise<Response> {
  const origin = request.headers.get("Origin");
  if (origin !== new URL(request.url).origin)
    return reply(403, { message: "Please submit your enquiry from the ECI website." });
  if (request.headers.get("Content-Type")?.split(";")[0].trim() !== "application/json")
    return reply(415, { message: "Please use the enquiry form." });
  const limit = 16384;
  const reader = request.body?.getReader();
  if (!reader) return reply(400, { message: "Please complete the enquiry form." });
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const part = await reader.read();
      if (part.done) break;
      length += part.value.length;
      if (length > limit) {
        await reader.cancel();
        return reply(413, { message: "Your enquiry is too long. Please shorten the message." });
      }
      chunks.push(part.value);
    }
  } catch {
    return reply(400, { message: "The enquiry could not be read. Please try again." });
  }
  let input: unknown;
  try {
    const bytes = new Uint8Array(length);
    let offset = 0;
    for (const part of chunks) {
      bytes.set(part, offset);
      offset += part.length;
    }
    input = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return reply(400, { message: "The enquiry could not be read. Please try again." });
  }
  const parsed = validateEnquiry(input);
  if (!parsed.ok)
    return reply(400, { message: "Please check the highlighted fields.", errors: parsed.errors });
  if (!services.configured)
    return reply(503, {
      message:
        "Online sending is not available yet. Please email info@eci-inter.com or call +66 2 681 0100.",
    });
  try {
    if (!(await services.consume(request)))
      return reply(429, {
        message:
          "Too many enquiries have been submitted. Please wait 15 minutes or email info@eci-inter.com.",
      });
    await services.deliver(parsed.value);
    return reply(200, { ok: true });
  } catch {
    return reply(502, {
      message: "We could not confirm submission. Please email info@eci-inter.com or try again.",
    });
  }
}
