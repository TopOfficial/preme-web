# ECI redesign design brief

## Status and scope

Planning only. User accepted the photography-led direction and supplied the decisions below. Website implementation has not started. Build the new site in /Users/top/Desktop/myself/eci2. Use /Users/top/Desktop/myself/eci as a read-only reference for company assets and catalogue structure.

## Confirmed decisions

- English only.
- Lead with defence and security; explain networking and IT experience briefly in About.
- Header navigation: About, Products, Support, Contacts. Logo links to Home.
- Product areas, in order: Air, Naval, Land, Software, Search and Rescue.
- All products is a combined catalogue view, not an additional product area.
- Provide both direct email/telephone links and a working enquiry form. Send website enquiries to info@eci-inter.com.
- Display the partner logos from the supplied PDF, as approved by the user.
- Address: 414/5–6 Nonsi Road, Chongnonsi, Yannawa, Bangkok 10120, Thailand.
- Use the existing red ECI logo. No higher-resolution asset is available.
- White and blue dominate; red matches the logo and is used sparingly.
- Keep the site concise and suitable for clients browsing the company and its products.

## Audience and outcome

Prospective institutional and business clients should understand ECI's role, identify a relevant product area, view a category and product overview, and contact ECI. Product pages are informational and carry no purchasing workflow.

## Visual direction

Main reference: https://commexpress.co.th/ for photographic presence and approachable corporate presentation. Secondary reference: https://www.saab.com/ for defence-sector photography and product-area wayfinding. Create a distinct ECI composition.

White header; original red logo; deep blue headings; wide photographic opening; compact product-area directory immediately after the opening; open white content sections; a blue support/contact section. Use real project imagery from the supplied PDF wherever suitable. Avoid making the existing navy split hero the new site's organising pattern.

Proposed colours: white #FFFFFF, deep blue #123B64, primary blue #165B9A, pale blue #EEF4F8, logo red approximately #FE0000. Check contrast before assigning text and button roles. Use red primarily for logo, small navigation indicators and enquiry accents. Body text should use deep blue on white. Use restrained rectangular layouts and a readable sans serif with a distinctive heading treatment. Final type selection belongs to the visual review.

The existing logo is 153 by 153 pixels. Inspect extraction of the original PDF logo before choosing the cleanest available source. Preserve the mark; do not redraw an approximation or enlarge the PNG beyond a sensible display size.

No invented metrics, testimonials, model specifications, partnership claims, decorative dashboards, repetitive icon cards or empty marketing slogans. Keep motion subtle and respect reduced-motion settings.

## Routes and page content

- /: photographic introduction, five area links, short company overview, selected project images, support summary, contact invitation.
- /about: introduction and establishment in 2000; concise mission and values; networking/IT background; relevant project experience; partner section displaying the logos from the supplied PDF.
- /products: overview of the five areas and a link to All products.
- /products/all: combined product grid with area filter and empty state.
- /products/[area]: area image and description followed by category links.
- /products/[area]/[category]: category images and details, then its products.
- /products/[area]/[category]/[product]: product image gallery, summary and details, enquiry link with product context.
- /support: consultation, system design, installation and maintenance; training grounded in PDF material.
- /contacts: address, telephone, email, directions link and enquiry form.
- Unknown routes: useful not-found page with links back to catalogue and Home.

Product-area slugs: air, naval, land, software, search-and-rescue. The literal /products/all route must take precedence over the dynamic area route. Use breadcrumbs throughout the nested catalogue. Mobile menu must expose all navigation links without relying on hover.

## Initial catalogue content

Five areas, one sample category per area, two sample products per category: five categories and ten products. Every category and product supports multiple images plus details.

Suggested sample categories: Air equipment; Naval equipment; Land equipment; Radar and monitoring software; Search and rescue equipment. These are demonstration groupings, not a claim that specific models are currently sold. Label sample entries clearly. Product cards carry image, title, short summary and a direct detail link. All products aggregates the same records, with no duplicate content records.

## Content evidence

Source PDF: /Users/top/Desktop/ECI_CompanyProfiles.pdf (54 pages).

- Pages 2–9: establishment in 2000, networking and IT background, mission and values.
- Pages 10–12: partner material and historical recognition; the user approved displaying the partner logos. Preserve dates on historical awards and avoid adding unsourced partner tiers or certifications.
- Pages 14–42: project, surveillance, radar, mobile command, infrastructure and software material.
- Pages 44–53: seminars, Defense & Security 2025 and training photographs.
- Page 54: confirmed address and office telephone.
  Current website: https://www.eci-inter.com/ supplies public service descriptions and contact links. Treat older placeholder copy as draft material, not independent evidence.

Use selected photographs with accurate captions. Historical project material must not imply a current product model, active certification or current partnership. Do not turn the 54-page deck into 54 web sections or offer the 143 MB original as a default page download.

## Enquiry form

Fields: name, organisation, email, phone (optional), topic (product enquiry / support / general), product reference (optional, prefilled when arriving from a product), message. Use visible labels and clear required fields.

States: ready, validation errors, submitting, submitted, delivery error. Preserve entered text on a delivery error, prevent duplicate submissions while sending, and show success only after the server confirms acceptance. Confirmation copy should say the enquiry was submitted, without promising response times or inbox delivery.

Validate inputs on the server; limit lengths and body size; prevent email-header injection; apply server-side abuse controls. Keep delivery credentials server-side. Avoid retaining message bodies in logs. Do not store enquiries in browser local storage. No attachments for the first version.

The confirmed recipient is info@eci-inter.com. Delivery remains an implementation dependency: inspect authorised existing email facilities, then connect a server-side transport. Development without transport must return an explicit unavailable state and offer direct email/phone. A fake success response does not satisfy the working-form requirement.

## Resolved content decisions and remaining setup

- Website enquiry recipient: info@eci-inter.com, confirmed by the user.
- Display the PDF partner logos in an orderly, responsive Partners section on About, with original proportions and accessible brand labels.
- Use office telephone +66 2 681 0100, supported by the PDF. Omit the unconfirmed mobile number from the initial build.
- Production mail transport and credentials must be configured and delivery verified during implementation.

## Delivery and acceptance

Shared templates and editable content files; no admin dashboard, shopping cart or customer portal. Check responsive layout, keyboard navigation, visible focus, useful image alt text, reduced motion, valid catalogue relationships, route handling, filter results, enquiry-prefill behaviour, validation and transport failure behaviour. Run lint, type checking and production build before reporting the implementation complete. Enquiry delivery requires a controlled end-to-end check after authorised configuration. Publishing and production email setup are separate from this planning deliverable.
