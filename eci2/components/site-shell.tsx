"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { company } from "@/lib/company";
import { Arrow } from "./icons";
const links = [
  ["About", "/about"],
  ["Products", "/products"],
  ["Support", "/support"],
  ["Contacts", "/contacts"],
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="brand" aria-label="E & C Internetwork home">
          <img src="/images/eci-logo.png" width="54" height="54" alt="ECI" />
          <span>
            E &amp; C
            <br />
            Internetwork
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {links.map(([name, url]) => (
            <a
              key={url}
              href={url}
              aria-current={
                path === url || (url === "/products" && path.startsWith("/products/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="/contacts">
          Talk to our team <Arrow diagonal />
        </a>
      </div>
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <a href="/" className="brand footer-brand">
            <img src="/images/eci-logo.png" width="54" height="54" alt="ECI" />
            <span>
              E &amp; C Internetwork
              <br />
              Co., Ltd.
            </span>
          </a>
          <p>
            Equipment, systems
            <br />
            and local support.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          {links.map(([name, url]) => (
            <a key={url} href={url}>
              {name}
            </a>
          ))}
        </div>
        <div>
          <h2>Get in touch</h2>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          <a href={`tel:${company.tel}`}>{company.phone}</a>
          <p>{company.address}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} E &amp; C Internetwork Co., Ltd.</span>
        <a href="/image-credits">Image credits</a>
      </div>
    </footer>
  );
}
