import Link from '@/components/site-link';
import { ArrowLeft } from 'lucide-react';
export default function NotFound() {
  return (
    <section className="wrap not-found">
      <h1>Page not found.</h1>
      <p>The page or product you’re looking for isn’t in this catalogue.</p>
      <Link className="button button-blue" href="/products">
        <ArrowLeft size={19} /> Return to products
      </Link>
    </section>
  );
}
