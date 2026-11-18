import type { Metadata } from 'next';
import { SiteHeader, SiteFooter } from '@/components/site-shell';
import './globals.css';
export const metadata: Metadata = {
  title: { default: 'ECI — Defence & Security', template: '%s | ECI' },
  description:
    'ECI is a Bangkok-based distributor of defence and security products across Air, Naval, Land, Software and Search and Rescue, with consultation, system design, installation and maintenance.',
  icons: { icon: '/images/eci-logo.png' },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
