import { products } from "../catalogue.ts";
export type Enquiry = {
  name: string;
  organisation: string;
  email: string;
  phone: string;
  topic: "product" | "support" | "general";
  product: string;
  message: string;
};
export type Validation =
  | { ok: true; value: Enquiry }
  | { ok: false; errors: Record<string, string> };
export function validateEnquiry(input: unknown): Validation {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, errors: { form: "Please complete the enquiry form." } };
  const data = input as Record<string, unknown>;
  const errors: Record<string, string> = {};
  const read = (key: string, max: number, required = false) => {
    const raw = data[key];
    if (raw !== undefined && typeof raw !== "string") {
      errors[key] = "Please enter text.";
      return "";
    }
    const value = (typeof raw === "string" ? raw : "").trim();
    if (required && !value) errors[key] = "This field is required.";
    if (value.length > max) errors[key] = `Please use ${max} characters or fewer.`;
    return value;
  };
  const name = read("name", 120, true),
    organisation = read("organisation", 200, true),
    email = read("email", 254, true),
    phone = read("phone", 40),
    topic = read("topic", 20, true),
    product = read("product", 100),
    message = read("message", 5000, true);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email))
    errors.email = "Enter a valid email address.";
  if (!["product", "support", "general"].includes(topic)) errors.topic = "Choose an enquiry topic.";
  if (product && !products.some((p) => p.slug === product))
    errors.product = "Choose a product from the catalogue.";
  if (message.length < 10) errors.message = "Please include at least 10 characters.";
  if (data.website) errors.form = "Unable to submit this enquiry. Please contact us by email.";
  return Object.keys(errors).length
    ? { ok: false, errors }
    : {
        ok: true,
        value: {
          name,
          organisation,
          email,
          phone,
          topic: topic as Enquiry["topic"],
          product,
          message,
        },
      };
}
