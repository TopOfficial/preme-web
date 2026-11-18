# ECI Website Implementation Plan

**Goal:** Deliver the approved English ECI distributor site with a browsable placeholder catalogue.
**Architecture:** Vinext/React routes sharing a shell, CSS tokens, and one editable typed catalogue. Local imagery and fonts. Server-rendered pages, minimal client navigation state.
**Spec:** PRODUCT.md and the approved conversation page plan.

## Tasks
- [x] Build the home page, header/footer, colours and typography in app/page.tsx, app/layout.tsx, app/globals.css and components/site-shell.tsx.
- [x] Show coherent first preview after dependency repair.
- [x] Define areas, categories and eight sample products in lib/catalogue.ts. Build Products, domain, category and detail routes with breadcrumbs and current-area navigation. Invalid slugs return not-found.
- [x] Add About, Solutions, Contacts and not-found pages. Use confirmed company/contact details and direct email and telephone links.
- [x] Source and locally store the existing logo and original photographs plus relevant public-domain imagery.
- [x] Record provenance in ASSETS.md. Keep sample records clearly marked.
- [x] Verify TypeScript, production build, all catalogue route resolution, invalid paths, and local asset existence. No browser testing unless requested.
- [ ] Save the exact source and publish privately through Sites. Deliver one working private URL.

## Design direction
An industrial corporate catalogue: a navy copy panel beside a large real photograph, white content areas, Barlow typography, generous gutters, rectangular photography, red directional arrows. Plain factual copy. No decorative badges, fake metrics, gradients, technical HUD motifs or gratuitous animations. Product placeholders are intentional requested content.

## Verification
Run npm run build with Node 22.21.1, npm run lint, and tsc --noEmit. Use HTTP requests against the running site to check all defined routes return 200, unknown catalogue paths return 404, and local assets return image/font content types. Confirm catalogue links resolve across four areas, four categories and eight products.
