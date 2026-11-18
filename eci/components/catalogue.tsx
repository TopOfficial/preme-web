import Image from 'next/image';
import Link from '@/components/site-link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { areas, productPath, type Product } from '@/lib/catalogue';
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span className="breadcrumb-item" key={`${item.name}-${i}`}>
          <ChevronRight aria-hidden="true" />
          {item.href ? (
            <Link href={item.href}>{item.name}</Link>
          ) : (
            <span aria-current="page">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function PageIntro({
  title,
  description,
  items,
  children,
}: {
  title: string;
  description: string;
  items: { name: string; href?: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <Breadcrumbs items={items} />
        <div className="page-heading-row">
          <div>
            <h1>{title}</h1>
            <p className="lead">{description}</p>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
export function AreaNav({ active = 'all' }: { active?: string }) {
  return (
    <nav className="area-nav wrap" aria-label="Product areas">
      {areas.map((area) => (
        <Link
          key={area.slug}
          href={`/products/${area.slug}`}
          aria-current={active === area.slug ? 'page' : undefined}
        >
          {area.name}
        </Link>
      ))}
      <Link
        href="/products"
        aria-current={active === 'all' ? 'page' : undefined}
      >
        All products
      </Link>
    </nav>
  );
}
export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((product) => (
        <Link
          key={product.slug}
          href={productPath(product)}
          className="product-card"
        >
          <div className="product-image">
            <Image
              unoptimized
              width={1200}
              height={900}
              src={product.image}
              alt={
                product.imageAlt ?? `${product.name} — illustrative equipment`
              }
              loading="lazy"
            />
          </div>
          <div className="product-meta">
            <span>
              {areas.find((area) => area.slug === product.area)?.name}
            </span>
            <span className="placeholder-label">Placeholder product</span>
          </div>
          <div className="domain-title">
            <h3>{product.name}</h3>
            <ArrowUpRight size={23} />
          </div>
          <p>{product.summary}</p>
        </Link>
      ))}
    </div>
  );
}
