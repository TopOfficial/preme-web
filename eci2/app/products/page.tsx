import type { Metadata } from "next";
import { areas } from "@/lib/catalogue";
import { Arrow } from "@/components/icons";
import { AreaNav, PageIntro, ContactBand } from "@/components/catalogue";
export const metadata: Metadata = { title: "Products" };
export default function Products() {
  return (
    <>
      <PageIntro
        title="Our products."
        description="Explore equipment and systems across five operating environments. Find a starting point, then speak with us about your requirements."
        items={[{ name: "Products" }]}
      />
      <AreaNav />
      <div className="container catalogue-areas">
        {areas.map((a) => (
          <a href={`/products/${a.slug}`} className="catalogue-area" key={a.slug}>
            <img src={a.image} alt={a.alt} loading="lazy" />
            <div>
              <h2>{a.name}</h2>
              <p>{a.description}</p>
              <span className="text-link">
                Explore {a.name} <Arrow diagonal />
              </span>
            </div>
          </a>
        ))}
      </div>
      <ContactBand />
    </>
  );
}
