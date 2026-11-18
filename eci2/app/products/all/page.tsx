import type { Metadata } from "next";
import { areas, products } from "@/lib/catalogue";
import { PageIntro, AreaNav, ProductGrid } from "@/components/catalogue";
export const metadata: Metadata = { title: "All products" };
export default async function AllProducts({
  searchParams,
}: {
  searchParams: Promise<{ area?: string }>;
}) {
  const { area } = await searchParams;
  const filtered = area ? products.filter((p) => p.area === area) : products;
  return (
    <>
      <PageIntro
        title="All products."
        description="Explore products, solutions and project references from our company profile. Browse by area, then contact our team to discuss your requirements."
        items={[{ name: "Products", href: "/products" }, { name: "All products" }]}
      />
      <AreaNav active="all" />
      <section className="container section">
        <div className="catalogue-toolbar">
          <form action="/products/all" className="filter-form">
            <label htmlFor="area-filter">Product area</label>
            <select id="area-filter" name="area" defaultValue={area || ""}>
              <option value="">All areas</option>
              {areas.map((a) => (
                <option value={a.slug} key={a.slug}>
                  {a.name}
                </option>
              ))}
            </select>
            <button className="button button-blue" type="submit">
              Apply filter
            </button>
          </form>
          <p>{filtered.length} entries</p>
        </div>
        {filtered.length ? (
          <ProductGrid items={filtered} />
        ) : (
          <div className="empty-state">
            <h2>No products in this view.</h2>
            <a className="text-link" href="/products/all">
              View all products
            </a>
          </div>
        )}
      </section>
    </>
  );
}
