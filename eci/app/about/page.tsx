import Image from 'next/image';
import type { Metadata } from 'next';
import Link from '@/components/site-link';
import { ArrowRight } from 'lucide-react';
import { PageIntro } from '@/components/catalogue';
export const metadata: Metadata = {
  title: 'About ECI',
  description:
    'E&C Internetwork is a Bangkok-based distributor of defence and security products, with local consultation and support.',
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="Defence expertise. Local support."
        description="ECI connects clients with defence and security equipment, and the support to put it to work."
        items={[{ name: 'About' }]}
      />
      <section className="wrap about-story">
        <h2>
          Your distribution
          <br />
          partner in Thailand.
        </h2>
        <div>
          <p>
            E&amp;C Internetwork Co., Ltd. is a distributor of defence and
            security products based in Bangkok, Thailand.
          </p>
          <p>
            Our product range spans Air, Naval, Land, Software and Search and
            Rescue. We work with clients to understand their requirements and
            discuss suitable equipment, configurations and support.
          </p>
          <p>
            Alongside product supply, our services include consultation, system
            design, installation and maintenance.
          </p>
          <Link href="/products" className="text-link">
            Explore our products <ArrowRight size={19} />
          </Link>
        </div>
      </section>
      <div className="wrap">
        <Image
          unoptimized
          width={1200}
          height={900}
          className="about-image"
          src="/images/naval.jpg"
          alt="Naval vessel at sea at sunset; representative domain photograph"
        />
        <p className="about-caption">
          Representative naval imagery. Product enquiries and local support are
          handled by ECI in Bangkok.
        </p>
      </div>
    </>
  );
}
