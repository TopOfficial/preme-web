# Home and company-profile catalogue update

User requested planning followed by execution in the same turn. This is a bounded extension of the existing site.

## Plan

1. Remove only the blue five-area navigation strip directly beneath the homepage hero shown in the screenshot. Keep product-page area navigation.
2. Home order: Hero, About us, Support from the first conversation, Products, closing contact invitation/footer.
3. Change browser title, site display title and main hero identity to E & C Internetwork.
4. Add one-time entrance motion inspired by the reference page's fadeInLeft/fadeInRight/fadeInUp: hero copy, About image/text, Support rows and product links. Add small arrow hover feedback. Use Web Animations and IntersectionObserver; no library, no scroll hijacking, static readable fallback and reduced-motion path.
5. Add 30 profile-backed product, solution and project records covering every PDF page from 14 to 42. Group repeated Mobile Vehicle (15/16/18) and Control Room LED Display (35/36) pages as galleries; distinguish the named Maritime Enforcement Command Center project (17). Retain clearly identified existing samples.
6. Actual categories: Airport systems (Air); Maritime networks & command (Naval); Monitoring & site security, Mobile operations, Data centre & power, Communications & displays (Land); Radar visualisation, Access & video management (Software). No invented rescue-specific product from this PDF; Search and Rescue samples remain explicit.
7. Use two short original descriptive sentences per new entry, actual PDF imagery, accurate product/solution/project labels and source-page tracking. Update All products, details, category copy, dropdown and enquiry context so source entries are not labelled samples.
8. Test complete source-page coverage, unique routes, consistent taxonomy, image files, and enquiry validation. Run typecheck, lint, production build and HTTP routes. Publish the same private site.

## Evidence

Reference https://commexpress.co.th/ rendered element settings explicitly use fadeInLeft, fadeInRight, fadeInUp and short animation delays. PDF source /Users/top/Desktop/ECI_CompanyProfiles.pdf pp14–42. User screenshot identifies home-area-strip.

## Validation

- 10 behaviour tests passed, including all PDF pages 14–42, 30 distinct profile entries, unique routes, images and enquiry validation.
- Typecheck, lint and production build passed.
- Built-site HTTP checks: 70 pages returned 200, three invalid routes returned 404, all 54 PDF images loaded, homepage title/order/removal and enquiry preselection verified.
- Independent source review matched all catalogue imagery and source pages. Resolved findings: thumbnail galleries now wrap and long page headings use smaller responsive sizing with a safe wrapping fallback.
- No browser visual/interaction checks performed.
