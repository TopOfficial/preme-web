import { handleEnquiry } from "@/lib/enquiries/handler";
import { deliverEnquiry, mailConfigured } from "@/lib/enquiries/delivery";
import { consumeEnquiryQuota } from "@/lib/enquiries/rate-limit";
import { incrementEnquiryCounter, redisConfigured } from "@/lib/enquiries/redis";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const mail = {
    endpoint: process.env.ECI_MAIL_ENDPOINT,
    token: process.env.ECI_MAIL_TOKEN,
    from: process.env.ECI_MAIL_FROM,
  };
  const redisUrl = process.env.ECI_REDIS_URL;
  return handleEnquiry(request, {
    configured: mailConfigured(mail) && redisConfigured(redisUrl),
    consume: (req) =>
      consumeEnquiryQuota(
        (key, ttl) => incrementEnquiryCounter(redisUrl!, key, ttl),
        req,
        mail.token!,
      ),
    deliver: (enquiry) => deliverEnquiry(enquiry, mail),
  });
}
