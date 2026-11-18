# ECI website

English distributor overview and placeholder catalogue for E&C Internetwork Co., Ltd. Built with Vinext, React, TypeScript and CSS. Requires Node >=22.13 (validated with 22.21.1).

## Local development

```sh
npm install
npm run dev
```

## Content updates

- Edit `lib/catalogue.ts` for product areas, categories and products. Entries must refer to an existing area/category; names and route slugs are separate.
- Replace files in `public/images/` or change image paths in the catalogue. Keep credits in `ASSETS.md` accurate.
- Homepage copy: `app/page.tsx`. About, Solutions, Contacts: their respective `app/` folders.
- Shared navigation and contact footer: `components/site-shell.tsx`.
- Design tokens and responsive styles: `app/globals.css`.
- Remove placeholder labels and sample notices only after replacing the sample content with confirmed product details. Current listings make no model-specific performance or availability claims.
- Contacts and product enquiries use `mailto:` and `tel:` links. There is no form backend or message storage.

## Validation

```sh
npx tsc --noEmit
npm run lint
npm run build
```

Private deployment metadata is in `.openai/hosting.json`. No credentials belong in repository files.

Lint excludes unused, unmodified starter components in `components/ui/` and `hooks/use-mobile.ts`; all authored site files are checked.

Navigation uses `components/site-link.tsx` (native browser links) to avoid the deployed framework router failure. Run catalogue invariants with `node --experimental-strip-types --test tests/catalogue.test.mjs`.



run:
nvm install 22
nvm use 22
npm install
npm run dev