import { areas, productPath, productLabel, type Product } from "@/lib/catalogue";
import { Arrow } from "./icons";
export function Breadcrumbs({ items }: { items: { name: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      {items.map((it, i) => (
        <span key={i}>
          <span className="breadcrumb-sep" aria-hidden="true">
            /
          </span>
          {it.href ? <a href={it.href}>{it.name}</a> : <span aria-current="page">{it.name}</span>}
        </span>
      ))}
    </nav>
  );
}
export function PageIntro({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { name: string; href?: string }[];
}) {
  return (
    <div className="page-intro container">
      <Breadcrumbs items={items} />
      <div className="intro-grid">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
export function AreaNav({ active }: { active?: string }) {
  return (
    <nav className="area-nav" aria-label="Product areas">
      <div className="container area-nav-inner">
        {areas.map((a) => (
          <a
            key={a.slug}
            href={`/products/${a.slug}`}
            aria-current={active === a.slug ? "page" : undefined}
          >
            {a.name}
          </a>
        ))}
        <a href="/products/all" aria-current={active === "all" ? "page" : undefined}>
          All products <Arrow diagonal />
        </a>
      </div>
    </nav>
  );
}
export function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <a className="product-card" href={productPath(p)} key={p.slug}>
          <div className={p.sample ? "product-image" : "product-image profile-image"}>
            <img src={p.images[0].src} alt={p.images[0].alt} loading="lazy" />
            <span className="sample-label">{productLabel(p)}</span>
          </div>
          <div className="product-card-title">
            <h3>{p.name}</h3>
            <Arrow diagonal />
          </div>
          <p>{p.summary}</p>
        </a>
      ))}
    </div>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container">
        <h2>
          Let’s discuss
          <br />
          your requirements.
        </h2>
        <div>
          <p>
            Speak with our team about products,
            <br />
            project requirements or ongoing support.
          </p>
          <a className="button button-white" href="/contacts">
            Contact ECI <Arrow diagonal />
          </a>
        </div>
      </div>
    </section>
  );
}
