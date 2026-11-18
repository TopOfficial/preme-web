import Image from 'next/image';
import Link from '@/components/site-link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { AreaNav, PageIntro } from '@/components/catalogue';
import { getArea, getCategory, getProduct, products } from '@/lib/catalogue';
type Params = { area: string; category: string; product: string };
export function generateStaticParams() {
  return products.map((item) => ({
    area: item.area,
    category: item.category,
    product: item.slug,
  }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const p = await params;
  const product = getProduct(p.area, p.category, p.product);
  return {
    title: product?.name ?? 'Page not found',
    description: product?.summary,
  };
}
export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const path = await params;
  const area = getArea(path.area);
  const category = getCategory(path.area, path.category);
  const product = getProduct(path.area, path.category, path.product);
  if (!area || !category || !product) notFound();
  const categoryPath = `/products/${area.slug}/${category.slug}`;
  return (
    <>
      <PageIntro
        title={product.name}
        description={product.summary}
        items={[
          { name: 'Products', href: '/products' },
          { name: area.name, href: `/products/${area.slug}` },
          { name: category.name, href: categoryPath },
          { name: product.name },
        ]}
      />
      <AreaNav active={area.slug} />
      <section className="wrap detail-layout">
        <div className="detail-photos">
          <Image
            unoptimized
            width={1200}
            height={900}
            src={product.image}
            alt={
              product.imageAlt ??
              `${product.name} — illustrative equipment, not a confirmed model`
            }
          />
          <p className="image-caption">
            {product.imageCaption ??
              'Illustrative image. Final product photography will be added with the confirmed model.'}
          </p>
        </div>
        <div className="detail-copy">
          <span className="placeholder-label">Placeholder product</span>
          <h2 className="spaced-heading">Product overview</h2>
          <p>{product.description}</p>
          <dl>
            <dt>Domain</dt>
            <dd>{area.name}</dd>
            <dt>Category</dt>
            <dd>{category.name}</dd>
            <dt>Model & specifications</dt>
            <dd>To be confirmed</dd>
            <dt>Availability</dt>
            <dd>Contact ECI</dd>
          </dl>
          <a
            className="button button-blue"
            href={`mailto:info@eci-inter.com?subject=${encodeURIComponent(`Product enquiry: ${product.name} (sample catalogue entry)`)}`}
          >
            Enquire about this product <ArrowUpRight size={20} />
          </a>
          <p className="notice">
            This is a sample listing, not a confirmed product offer.
          </p>
          <div className="back-link">
            <Link className="text-link" href={categoryPath}>
              <ArrowLeft size={18} /> Back to {category.name.toLowerCase()}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
