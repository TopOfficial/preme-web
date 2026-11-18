import { notFound } from "next/navigation";
import { getArea, getCategory, products, categories } from "@/lib/catalogue";
import { PageIntro, AreaNav, ProductGrid } from "@/components/catalogue";
import { ProductGallery } from "@/components/product-gallery";
export function generateStaticParams() {
  return categories.map((c) => ({ area: c.area, category: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; category: string }>;
}) {
  const p = await params;
  return { title: getCategory(p.area, p.category)?.name || "Category" };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ area: string; category: string }>;
}) {
  const p = await params;
  const a = getArea(p.area),
    c = getCategory(p.area, p.category);
  if (!a || !c) notFound();
  return (
    <>
      <PageIntro
        title={c.name}
        description={c.description}
        items={[
          { name: "Products", href: "/products" },
          { name: a.name, href: `/products/${a.slug}` },
          { name: c.name },
        ]}
      />
      <AreaNav active={a.slug} />
      <section className="container category-detail">
        <ProductGallery images={c.images} />
        <div>
          <span className="sample-text">
            {c.sample ? "Sample category" : "Products & solutions"}
          </span>
          <h2>
            A starting point
            <br />
            for your requirements.
          </h2>
          <p>
            {c.sample
              ? "Explore sample entries below or speak with our team about your project. Confirmed equipment and model details will be added as the range develops."
              : "Explore the products, solutions and project references below. Our team can help you identify suitable equipment and discuss how these systems fit your requirements."}
          </p>
          <a className="text-link" href="/contacts?topic=product">
            Discuss this category
          </a>
        </div>
      </section>
      <section className="container section">
        <div className="section-heading">
          <h2>{c.sample ? "Products in this category." : "Products & solutions."}</h2>
          <p>
            {c.sample
              ? "Sample entries · Details to be confirmed"
              : "Equipment, systems and project experience"}
          </p>
        </div>
        <ProductGrid items={products.filter((x) => x.area === a.slug && x.category === c.slug)} />
      </section>
    </>
  );
}
