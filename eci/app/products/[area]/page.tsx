import Image from 'next/image';
import Link from '@/components/site-link';
import { notFound } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { AreaNav, PageIntro } from '@/components/catalogue';
import { areas, categories, getArea } from '@/lib/catalogue';
export function generateStaticParams() {
  return areas.map(({ slug }) => ({ area: slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const area = getArea((await params).area);
  return {
    title: area ? `${area.name} products` : 'Page not found',
    description: area?.description,
  };
}
export default async function AreaPage({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const area = getArea((await params).area);
  if (!area) notFound();
  const items = categories.filter((category) => category.area === area.slug);
  return (
    <>
      <PageIntro
        title={area.name}
        description={area.description}
        items={[{ name: 'Products', href: '/products' }, { name: area.name }]}
      />
      <AreaNav active={area.slug} />
      <section className="wrap catalogue-section">
        <div className="catalogue-heading">
          <h2>Explore {area.name.toLowerCase()} categories</h2>
          <p>{items.length} sample category</p>
        </div>
        {items.map((category) => (
          <article className="area-feature" key={category.slug}>
            <Image
              unoptimized
              width={1200}
              height={900}
              src={area.image}
              alt={area.imageAlt ?? `${area.name} — representative equipment`}
            />
            <div className="area-feature-copy">
              <span className="placeholder-label">Placeholder category</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <Link
                className="text-link"
                href={`/products/${area.slug}/${category.slug}`}
              >
                Explore category <ArrowRight size={19} />
              </Link>
            </div>
          </article>
        ))}
        <p className="notice">
          Categories and product entries are samples. Domain photography is
          representative and does not identify a product supplied by ECI.
        </p>
      </section>
    </>
  );
}
