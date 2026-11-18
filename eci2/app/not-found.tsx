export default function NotFound() {
  return (
    <section className="container section not-found">
      <h1>Page not found.</h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <a className="button button-blue" href="/products">
        Explore products
      </a>
      <a className="text-link" href="/">
        Return home
      </a>
    </section>
  );
}
