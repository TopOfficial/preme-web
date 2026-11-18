import test from "node:test";
import assert from "node:assert/strict";
import { validateEnquiry } from "../lib/enquiries/validation.ts";
const valid = {
  name: "Test Person",
  organisation: "Example company",
  email: "person@example.com",
  phone: "",
  topic: "product",
  product: "air-01",
  message: "Please provide an overview of this product.",
  website: "",
};
test("accepts and trims a legitimate enquiry", () => {
  const r = validateEnquiry({ ...valid, name: " Test Person " });
  assert.equal(r.ok, true);
  assert.equal(r.value.name, "Test Person");
});
test("rejects invalid input and mismatched product context", () => {
  for (const patch of [
    { email: "bad" },
    { email: "a@b.com\r\nBcc: x@y.com" },
    { topic: "spam" },
    { product: "invented" },
    { name: "" },
    { message: "short" },
    { message: "x".repeat(5001) },
    { organisation: "x".repeat(201) },
    { website: "bot" },
  ])
    assert.equal(validateEnquiry({ ...valid, ...patch }).ok, false, JSON.stringify(patch));
  for (const input of [null, [], 42, "oops"]) assert.equal(validateEnquiry(input).ok, false);
});
