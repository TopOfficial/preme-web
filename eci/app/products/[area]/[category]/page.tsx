import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AreaNav, PageIntro, ProductGrid } from '@/components/catalogue';
import { categories, getArea, getCategory, products } from '@/lib/catalogue';
type Params = { area: string; category: string };
export function generateStaticParams() {
  return categories.map((item) => ({ area: item.area, category: item.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const path = await params;
  const category = getCategory(path.area, path.category);
  return {
    title: category?.name ?? 'Page not found',
    description: category?.description,
  };
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const path = await params;
  const area = getArea(path.area);
  const category = getCategory(path.area, path.category);
  if (!area || !category) notFound();
  const items = products.filter(
    (product) =>
      product.area === area.slug && product.category === category.slug,
  );
  return (
    <>
      <PageIntro
        title={category.name}
        description={category.description}
        items={[
          { name: 'Products', href: '/products' },
          { name: area.name, href: `/products/${area.slug}` },
          { name: category.name },
        ]}
      />
      <AreaNav active={area.slug} />
      <div className="wrap detail-layout">
        <div className="detail-photos">
          <Image
            unoptimized
            width={1200}
            height={900}
            src={category.image}
            alt={
              category.imageAlt ?? `${category.name} — illustrative equipment`
            }
          />
          <p className="image-caption">
            {category.imageCaption ??
              'Illustrative image from ECI’s original catalogue.'}
          </p>
        </div>
        <div className="detail-copy">
          <span className="placeholder-label">Placeholder category</span>
          <h2 className="spaced-heading">About this category</h2>
          <p>{category.description}</p>
          <p>
            ECI can help you discuss product selection, system design,
            installation and maintenance. Specific models and configurations are
            confirmed through consultation.
          </p>
          <a
            className="button button-blue"
            href={`mailto:info@eci-inter.com?subject=${encodeURIComponent(`Enquiry: ${category.name}`)}`}
          >
            Discuss your requirements
          </a>
        </div>
      </div>
      <section className="wrap catalogue-section category-products">
        <div className="catalogue-heading">
          <h2>Products in this category</h2>
          <p>{items.length} sample products</p>
        </div>
        <ProductGrid items={items} />
      </section>
    </>
  );
}
