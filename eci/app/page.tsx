import Image from 'next/image';
import Link from '@/components/site-link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { areas } from '@/lib/catalogue';
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <h1>
            Defence &amp; security.
            <br />
            <span>
              From supply
              <br />
              to support.
            </span>
          </h1>
          <p>
            Connecting you with defence and security products, backed by local
            support in Thailand.
          </p>
          <Link className="button button-white" href="/products">
            Explore our products <ArrowUpRight size={20} />
          </Link>
          <div className="hero-footnote">
            E&amp;C Internetwork Co., Ltd.<span>Bangkok, Thailand</span>
          </div>
        </div>
        <div className="hero-photograph">
          <Image
            unoptimized
            width={1200}
            height={900}
            src="/images/hero.jpg"
            alt="A naval vessel underway at sea; representative equipment"
            fetchPriority="high"
            loading="eager"
          />
          <div className="photo-label">Representative naval photography</div>
        </div>
      </section>
      <section className="section wrap" aria-labelledby="products-heading">
        <div className="section-heading">
          <h2 id="products-heading">
            Five domains.
            <br />
            One point of contact.
          </h2>
          <div>
            <p>Explore Air, Naval, Land, Software, and Search and Rescue.</p>
            <Link className="text-link" href="/products">
              View all products <ArrowRight size={19} />
            </Link>
          </div>
        </div>
        <div className="domain-grid">
          {areas.map((area) => (
            <Link
              className="domain-card"
              href={`/products/${area.slug}`}
              key={area.name}
            >
              <div className="domain-image">
                <Image
                  unoptimized
                  width={1200}
                  height={900}
                  src={area.image}
                  alt={
                    area.imageAlt ?? `${area.name} — representative equipment`
                  }
                  loading="lazy"
                />
              </div>
              <div className="domain-title">
                <h3>{area.name}</h3>
                <ArrowUpRight size={25} />
              </div>
              <p>{area.description}</p>
            </Link>
          ))}
        </div>
        <p className="notice">
          Domain photography is representative and does not identify products
          supplied by ECI.
        </p>
      </section>
      <section className="home-solutions">
        <div className="wrap solution-overview">
          <h2>
            More than supply.
            <br />
            Support at every stage.
          </h2>
          <div>
            <p>
              From choosing the right equipment to keeping it in service, ECI
              provides consultation, system design, installation and
              maintenance.
            </p>
            <Link className="text-link" href="/solutions">
              Explore our solutions <ArrowRight size={19} />
            </Link>
          </div>
        </div>
        <div className="wrap service-strip">
          {['Consultation', 'System design', 'Installation', 'Maintenance'].map(
            (name) => (
              <Link
                key={name}
                href={`/solutions#${name.toLowerCase().replace(' ', '-')}`}
              >
                {name}
                <ArrowUpRight size={19} />
              </Link>
            ),
          )}
        </div>
      </section>
      <section className="wrap home-about">
        <h2>
          A local partner.
          <br />A clear way forward.
        </h2>
        <div>
          <p>
            ECI is a Bangkok-based distributor of defence and security products.
            We help clients connect their requirements with suitable equipment
            and ongoing support.
          </p>
          <Link className="text-link" href="/about">
            About ECI <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </>
  );
}
