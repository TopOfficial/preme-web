"use client";
import { useState, type FormEvent } from "react";
import { products } from "@/lib/catalogue";
import { Arrow } from "./icons";
export function EnquiryForm({
  initialProduct = "",
  initialTopic = "general",
}: {
  initialProduct?: string;
  initialTopic?: string;
}) {
  const [status, setStatus] = useState<"ready" | "sending" | "sent" | "error">("ready");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [notice, setNotice] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    setStatus("sending");
    setErrors({});
    setNotice("");
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: AbortSignal.timeout(20000),
      });
      const data = (await response.json()) as { message?: string; errors?: Record<string, string> };
      if (!response.ok) {
        setErrors(data.errors || {});
        setNotice(
          data.message ||
            "Your enquiry could not be sent. Please try again or email info@eci-inter.com.",
        );
        setStatus("error");
        return;
      }
      setStatus("sent");
      setNotice("Your enquiry has been submitted to ECI. Thank you for getting in touch.");
      form.reset();
    } catch {
      setStatus("error");
      setNotice("We could not confirm submission. Please email info@eci-inter.com or try again.");
    }
  }
  const input = (name: string, label: string, type = "text", required = true, max = 200) => (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
        {!required && <span> (optional)</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={max}
        autoComplete={
          { name: "name", organisation: "organization", email: "email", phone: "tel" }[name]
        }
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={`${name}-error`}>
          {errors[name]}
        </span>
      )}
    </div>
  );
  return (
    <form className="enquiry-form" onSubmit={submit}>
      <h2>Send an enquiry.</h2>
      <p>Tell us a little about your requirements.</p>
      <div className="form-grid">
        {input("name", "Your name", "text", true, 120)}
        {input("organisation", "Organisation")}
        {input("email", "Email address", "email", true, 254)}
        {input("phone", "Phone number", "tel", false, 40)}
        <div className="form-field">
          <label htmlFor="topic">Enquiry topic</label>
          <select id="topic" name="topic" defaultValue={initialTopic}>
            <option value="general">General enquiry</option>
            <option value="product">Product enquiry</option>
            <option value="support">Support</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="product">
            Product <span>(optional)</span>
          </label>
          <select id="product" name="product" defaultValue={initialProduct}>
            <option value="">Select a product</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
                {p.sample ? " (sample)" : ""}
              </option>
            ))}
          </select>
          {errors.product && <span className="field-error">{errors.product}</span>}
        </div>
        <div className="form-field full-width">
          <label htmlFor="message">How can we help?</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            placeholder="Your project, product interest or support requirements"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span id="message-error" className="field-error">
              {errors.message}
            </span>
          )}
        </div>
        <div className="form-trap" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <p className="form-note">We use the details you provide to respond to your enquiry.</p>
      <button className="button button-red" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send enquiry"}
        <Arrow diagonal />
      </button>
      <div role="status" aria-live="polite" className={`form-status ${status}`}>
        {notice}
      </div>
      {status === "error" && (
        <a className="text-link" href="mailto:info@eci-inter.com">
          Email ECI directly <Arrow diagonal />
        </a>
      )}
    </form>
  );
}
