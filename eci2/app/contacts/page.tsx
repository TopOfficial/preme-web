import type { Metadata } from "next";
import { company } from "@/lib/company";
import { products } from "@/lib/catalogue";
import { PageIntro } from "@/components/catalogue";
import { EnquiryForm } from "@/components/enquiry-form";
import { Arrow } from "@/components/icons";
export const metadata: Metadata = { title: "Contacts" };
export default async function Contacts({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; product?: string }>;
}) {
  const q = await searchParams;
  const selected = products.find((p) => p.slug === q.product);
  const topic = selected
    ? "product"
    : ["product", "support", "general"].includes(q.topic || "")
      ? q.topic!
      : "general";
  return (
    <>
      <PageIntro
        title="Let’s talk."
        description="Product information, a new project or support for existing equipment. Get in touch with our team in Bangkok."
        items={[{ name: "Contacts" }]}
      />
      <section className="container contact-layout">
        <div className="contact-info">
          <h2>
            E&C Internetwork
            <br />
            Co., Ltd.
          </h2>
          <div>
            <h3>Email</h3>
            <a className="contact-email" href={`mailto:${company.email}`}>
              {company.email}
              <Arrow diagonal />
            </a>
          </div>
          <div>
            <h3>Telephone</h3>
            <a href={`tel:${company.tel}`}>{company.phone}</a>
          </div>
          <div>
            <h3>Visit us</h3>
            <p>
              414/5–6 Nonsi Road, Chongnonsi,
              <br />
              Yannawa, Bangkok 10120, Thailand
            </p>
            <a className="text-link" href={company.maps} target="_blank" rel="noopener noreferrer">
              Get directions <Arrow diagonal />
            </a>
          </div>
          <div className="contact-image">
            <img
              src="/images/defense-security-2025-handoff.webp"
              alt="ECI team at Defense and Security 2025"
              loading="lazy"
            />
            <p>ECI at Defense & Security 2025</p>
          </div>
        </div>
        <EnquiryForm initialTopic={topic} initialProduct={selected?.slug} />
      </section>
    </>
  );
}
