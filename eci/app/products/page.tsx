import type { Metadata } from 'next';
import { AreaNav, PageIntro, ProductGrid } from '@/components/catalogue';
import { products } from '@/lib/catalogue';
export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse the ECI product catalogue across Air, Naval, Land, Software and Search and Rescue.',
};
export default function ProductsPage() {
  return (
    <>
      <PageIntro
        title="Defence & security products."
        description="Explore our areas of supply. Select a domain to browse categories, or view the full catalogue below."
        items={[{ name: 'Products' }]}
      />
      <AreaNav />
      <section className="wrap catalogue-section">
        <div className="catalogue-heading">
          <h2>All products</h2>
          <p>{products.length} sample products</p>
        </div>
        <ProductGrid items={products} />
        <p className="notice">
          These are placeholder catalogue entries. Images are illustrative;
          contact ECI for confirmed models, availability and specifications.
        </p>
      </section>
    </>
  );
}
