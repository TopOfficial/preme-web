import { notFound } from "next/navigation";
import { getArea, getCategory, getProduct, products, productLabel } from "@/lib/catalogue";
import { PageIntro, AreaNav } from "@/components/catalogue";
import { ProductGallery } from "@/components/product-gallery";
import { Arrow } from "@/components/icons";
export function generateStaticParams() {
  return products.map((p) => ({ area: p.area, category: p.category, product: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string; category: string; product: string }>;
}) {
  const p = await params;
  return { title: getProduct(p.area, p.category, p.product)?.name || "Product" };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<{ area: string; category: string; product: string }>;
}) {
  const q = await params;
  const a = getArea(q.area),
    c = getCategory(q.area, q.category),
    p = getProduct(q.area, q.category, q.product);
  if (!a || !c || !p) notFound();
  return (
    <>
      <PageIntro
        title={p.name}
        description={p.summary}
        items={[
          { name: "Products", href: "/products" },
          { name: a.name, href: `/products/${a.slug}` },
          { name: c.name, href: `/products/${a.slug}/${c.slug}` },
          { name: p.name },
        ]}
      />
      <AreaNav active={a.slug} />
      <section className="container product-detail">
        <ProductGallery images={p.images} />
        <div className="product-details-copy">
          <span className="sample-text">{productLabel(p)}</span>
          <h2>Overview</h2>
          <p>{p.description}</p>
          <dl>
            <div>
              <dt>Product area</dt>
              <dd>{a.name}</dd>
            </div>
            <div>
              <dt>Category</dt>
              <dd>{c.name}</dd>
            </div>
            <div>
              <dt>{p.sample ? "Model information" : "Entry type"}</dt>
              <dd>{p.sample ? "To be confirmed" : productLabel(p)}</dd>
            </div>
          </dl>
          <a href={`/contacts?topic=product&product=${p.slug}`} className="button button-red">
            Discuss your requirements <Arrow diagonal />
          </a>
          <p className="small-copy">
            Tell us about your application. We’ll help you identify the relevant information.
          </p>
        </div>
      </section>
    </>
  );
}
