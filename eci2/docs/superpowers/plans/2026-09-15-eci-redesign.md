# ECI Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking. This is a planning deliverable; begin implementation after the user requests it.

**Goal:** Build a concise English ECI company website with five product areas, nested sample catalogue and working enquiries.

**Architecture:** Shared React page templates consume typed company and catalogue content. A server endpoint validates enquiry submissions and calls a separately configured mail transport. Preserve the existing eci project as reference and implement in eci2.

**Tech Stack:** React, TypeScript and CSS, using the supported Sites starter/runtime resolved at implementation. Existing eci uses Vinext; inspect the current Sites environment instructions before selecting starter versions or copying configuration. Do not copy eci's hosting identity into the new site.

**Spec:** ../specs/2026-09-15-eci-redesign-design.md

## Global constraints

- English only; defence and security lead, networking and IT background in About.
- Header: About, Products, Support, Contacts.
- Areas: Air, Naval, Land, Software, Search and Rescue.
- Five sample categories and ten sample products; All products is an aggregate view.
- Address: 414/5–6 Nonsi Road, Chongnonsi, Yannawa, Bangkok 10120, Thailand.
- White and blue dominate, restrained logo-red accents; original ECI mark.
- Enquiries need both direct contact links and actual server-side submission.
- Display partner logos from the PDF on About. Send website enquiries to info@eci-inter.com. Both choices are confirmed by the user.
- Work only in /Users/top/Desktop/myself/eci2; reference eci without changing it.
- Use /Users/top/Desktop/myself/impeccable-main for design guidance. Its context launcher failed during planning; written guidance remains available.
- No fabricated company or product facts. Sample content remains clearly labelled.

## File responsibilities

- PRODUCT.md: confirmed company facts, audience and source references.
- DESIGN.md: approved visual rules and implementation decisions.
- ASSETS.md: origins, captions and intended use for each shipped image.
- lib/company.ts: company name, address and confirmed contact details.
- lib/catalogue.ts: area/category/product records and lookup functions.
- lib/enquiries/validation.ts: request parsing and field validation.
- lib/enquiries/delivery.ts: server-only transport adapter.
- components/site-shell.tsx: header, mobile menu and footer.
- components/catalogue.tsx: area links, breadcrumbs, category/product grids.
- components/product-gallery.tsx: product images and thumbnail selection.
- components/enquiry-form.tsx: accessible form and submission state.
- app/page.tsx, app/about/page.tsx, app/support/page.tsx, app/contacts/page.tsx: company pages.
- app/products/page.tsx, app/products/all/page.tsx: catalogue entrances.
- app/products/[area]/page.tsx, app/products/[area]/[category]/page.tsx, app/products/[area]/[category]/[product]/page.tsx: nested templates.
- app/api/enquiries/route.ts: enquiry HTTP endpoint.
- app/globals.css: responsive layout and visual tokens.
- tests/catalogue.test.ts, tests/enquiries.test.ts: behaviour tests.

## Task 1: Establish the content and asset foundation

- [x] Resolve recipient and partner choices: info@eci-inter.com receives enquiries; display the partner logos from the PDF.
- [ ] Read Sites environment instructions and initialise the new project once; retain these planning documents. Record actual package commands in README.md.
- [ ] Inspect PDF image/logo extraction; choose the cleanest original mark and suitable project photographs. Record page numbers and captions in ASSETS.md.
- [ ] Populate PRODUCT.md from verified source facts, including establishment in 2000 and the confirmed address.
- [ ] Create company and catalogue records with these interfaces:

```ts
type Picture = { src: string; alt: string; caption?: string };
type AreaSlug = "air" | "naval" | "land" | "software" | "search-and-rescue";
type Area = { slug: AreaSlug; name: string; description: string; images: Picture[] };
type Category = {
  slug: string;
  area: AreaSlug;
  name: string;
  description: string;
  images: Picture[];
  sample: boolean;
};
type Product = {
  slug: string;
  area: AreaSlug;
  category: string;
  name: string;
  summary: string;
  description: string;
  images: Picture[];
  sample: boolean;
};
```

- [ ] Implement lookups returning a record or undefined: getArea(slug), getCategory(area, slug), getProduct(area, category, slug). Implement productPath(product) with the nested route.
- [ ] Test the exact five areas, five categories and ten products; unique full product paths; category existence within each product's area; unknown area/category/product returning undefined. Run the selected test runner and confirm the catalogue cases pass.

## Task 2: Establish the shared design and homepage

- [ ] Follow Impeccable's planning outcome and read craft-floor.md before UI edits. Carry the user's approved reference direction into the design; do not replace it with a random visual theme.
- [ ] Implement white header, original logo, four links, keyboard-accessible mobile disclosure, skip link and shared footer.
- [ ] Define the palette in CSS custom properties and choose type sizes that remain readable across desktop and mobile.
- [ ] Build Home in this order: wide photographic opening, five product-area links, short company introduction, selected project photographs, support summary, contact invitation.
- [ ] Give the page a product-specific opening sentence grounded in approved company positioning. Keep factual copy concise.
- [ ] Check menu semantics, focus visibility, link destinations and responsive CSS. Capture the implemented visual decisions in DESIGN.md.

## Task 3: Build catalogue browsing and details

- [ ] Build /products as five area entrances and /products/all as the same ten product records with a filter.
- [ ] Implement area -> category -> product navigation with breadcrumbs and direct links.
- [ ] Build category pages with images, description and products. Build product pages with gallery, overview/details and enquiry action.
- [ ] Make gallery thumbnails real buttons with accessible names; active state must be perceivable without colour alone. Single-image products need no redundant gallery controls.
- [ ] Prefill enquiries through a product slug query parameter, resolve the slug against catalogue data and ignore unknown values. Keep topic/product editable.
- [ ] Verify /products/all is not handled as an invalid area. Check all five area, five category and ten product routes plus invalid combinations.
- [ ] Check that All products contains ten entries and each area filter shows two. Empty results should offer reset/navigation, not a broken grid.

## Task 4: Build company pages

- [ ] About: concise company story, 2000 establishment, IT/networking foundation, mission/values and a small selection of grounded project examples.
- [ ] Extract the partner logos from the PDF and display them in a responsive Partners section on About, preserving proportions and brand labels. Preserve historical dates on awards or events; add no unsupported partner tiers.
- [ ] Support: consultation, system design, installation, maintenance and training supported by source material; link to support enquiries.
- [ ] Contacts: confirmed address, office number, confirmed email, directions link and enquiry form placement. Do not infer office hours or response guarantees.
- [ ] Add unique page titles/descriptions and useful not-found content. Verify internal links and current navigation labels.

## Task 5: Implement actual enquiry submission

**Interfaces:** validateEnquiry(input: unknown) returns validated fields or field errors. deliverEnquiry(enquiry) resolves only after the configured transport accepts the request. POST /api/enquiries returns 400 for invalid input, 413 for excessive body size, 429 for throttling, 503 when unconfigured, 502 for transport failure and 200 for accepted submission.

- [ ] Set info@eci-inter.com as the server-controlled enquiry recipient and inspect authorised mail configuration before selecting a transport. Keep transport-specific setup in delivery.ts; do not expose secrets to the browser.
- [ ] Validate trimmed required name (1–120), organisation (1–200), email (up to 254 with valid shape), optional phone (up to 40), topic enum, optional catalogue product slug, and message (10–5000). Reject malformed JSON and bodies over 16 KiB.
- [ ] Use a verified server-controlled sender and validated Reply-To; never accept arbitrary recipients or sender headers from the request.
- [ ] Implement allowed-origin checks, a honeypot and server-side request throttling supported by the chosen runtime. Do not rely on a process-memory limiter across a distributed deployment.
- [ ] Test missing required fields, invalid email, excessive lengths, invalid topic, unknown product, honeypot, body-size limit, throttling, unavailable configuration, rejected delivery and accepted delivery. Assert failed delivery cannot return a success response.
- [ ] Build labelled fields and ready/invalid/submitting/submitted/error states. Disable duplicate in-flight sends and preserve input on errors. Associate inline field errors with their inputs and announce status changes.
- [ ] Connect the form to POST /api/enquiries. A product enquiry carries the resolved product name and reference. Direct email and phone remain available.
- [ ] After credentials are configured and a controlled recipient is authorised, send a clearly labelled test enquiry and verify receipt. Record the practical delivery limit if receipt cannot be confirmed; do not call the form fully verified on a mock response alone.

## Task 6: Validate and hand off

- [ ] Run catalogue and enquiry behaviour tests, TypeScript checking, lint and the production build using recorded package commands. Fix failures and rerun only affected checks.
- [ ] Verify route status, assets, metadata, form error handling and deployed-runtime compatibility.
- [ ] Review desktop/mobile layout, image crops, long titles and readable text. Follow the active browser-testing rules and the user's approved review scope at execution time.
- [ ] Check visible focus, keyboard menu/gallery/filter operation, labelled fields, image alt text and reduced-motion behaviour.
- [ ] Document how to replace the five categories and ten products and configure enquiry delivery. Keep credentials out of documents and source control.
- [ ] Report implemented scope and verified behaviour separately from unresolved delivery or publication dependencies. Publishing is outside this planning-only turn.

## Plan self-review

All confirmed requirements map to tasks: company facts/assets (1), design/header/home (2), five-area catalogue and detail images (3), About/Support/Contacts (4), both enquiry channels and real delivery (5), validation and maintainability (6). Partner-logo display and the enquiry recipient are confirmed. Mail configuration and delivery verification remain implementation dependencies. The original eci project is not a mutation target.
