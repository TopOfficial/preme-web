import { notFound } from "next/navigation";
import { getArea, categories, areas } from "@/lib/catalogue";
import { AreaNav, PageIntro, ContactBand } from "@/components/catalogue";
import { Arrow } from "@/components/icons";
export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  return { title: getArea(area)?.name || "Product area" };
}
export default async function AreaPage({ params }: { params: Promise<{ area: string }> }) {
  const { area: slug } = await params;
  const a = getArea(slug);
  if (!a) notFound();
  return (
    <>
      <PageIntro
        title={`${a.name}.`}
        description={a.description}
        items={[{ name: "Products", href: "/products" }, { name: a.name }]}
      />
      <AreaNav active={slug} />
      <div className="container area-banner">
        <img src={a.image} alt={a.alt} />
        <p>Representative area imagery</p>
      </div>
      <section className="container section">
        <div className="section-heading">
          <h2>Explore {a.name}.</h2>
          <p>
            Browse categories to find
            <br />
            the equipment you need.
          </p>
        </div>
        {categories
          .filter((c) => c.area === slug)
          .map((c) => (
            <a className="category-row" key={c.slug} href={`/products/${slug}/${c.slug}`}>
              <img src={c.images[0].src} alt={c.images[0].alt} loading="lazy" />
              <div>
                <span className="sample-text">
                  {c.sample ? "Sample category" : "Products & solutions"}
                </span>
                <h3>{c.name}</h3>
                <p>{c.description}</p>
              </div>
              <Arrow diagonal />
            </a>
          ))}
      </section>
      <ContactBand />
    </>
  );
}
