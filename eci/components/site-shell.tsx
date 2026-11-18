'use client';
import Image from 'next/image';
import Link from '@/components/site-link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
const navigation = [
  ['About', '/about'],
  ['Products', '/products'],
  ['Solutions', '/solutions'],
  ['Contacts', '/contacts'],
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
          aria-label="ECI home"
        >
          <Image
            unoptimized
            src="/images/eci-logo.png"
            alt="ECI"
            loading="eager"
            width="70"
            height="70"
          />
          <span>
            E&amp;C Internetwork
            <br />
            Co., Ltd.
          </span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? 'main-nav is-open' : 'main-nav'}
        >
          {navigation.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname.startsWith(href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
              {name === 'Contacts' && <ArrowUpRight size={17} />}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div>
          <h2>
            Let’s discuss
            <br />
            your requirements.
          </h2>
          <a className="footer-email" href="mailto:info@eci-inter.com">
            info@eci-inter.com <ArrowUpRight size={23} />
          </a>
        </div>
        <div className="footer-address">
          <strong>E&amp;C Internetwork Co., Ltd.</strong>
          <p>
            414/6 Nonsi Road, Chongnonsi,
            <br />
            Yannawa, Bangkok 10120, Thailand
          </p>
          <a href="tel:+6626810100">+66 2 681 0100</a>
          <a href="tel:+66872061000">+66 87 206 1000</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} E&amp;C Internetwork Co., Ltd.</p>
        <nav aria-label="Footer navigation">
          {navigation.map(([name, href]) => (
            <Link href={href} key={href}>
              {name}
            </Link>
          ))}
        </nav>
        <span>Defence &amp; security distribution</span>
      </div>
      <p className="wrap imagery-notice">
        The appearance of U.S. Department of War (DoW) visual information does
        not imply or constitute DoW endorsement.
      </p>
    </footer>
  );
}
