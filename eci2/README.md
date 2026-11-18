# E & C Internetwork website

The English company website for E & C Internetwork, with company information, support services, partner logos and a product catalogue across Air, Naval, Land, Software, and Search and Rescue.

Built with Next.js, React, TypeScript and CSS. The catalogue includes 30 products, solutions and project references from the company profile, plus 10 clearly labelled sample entries.

## Quick start

Install **Node.js 24 LTS** (which includes npm) and Git, then run:

```sh
git clone https://github.com/TopOfficial/eci-web.git
cd eci-web
npm ci
npm run dev
```

Open **http://localhost:3000**. If that port is busy, use the address printed in the terminal. Leave the terminal running while you work; press **Ctrl+C** to stop.

No API keys, database account or environment file are needed to browse the website locally. Changes to the source update the development preview automatically.

If you already use nvm, run `nvm install` and `nvm use` inside the project to select the version in `.nvmrc`.

## Run the production build locally

```sh
npm run build
npm start -- --port 3000
```

Open **http://localhost:3000**. This starts the built Next.js site locally; it does not publish anything online. Run the build again after changing the source.

## Useful commands

| Command                    | Purpose                                   |
| -------------------------- | ----------------------------------------- |
| `npm run dev`              | Start the development preview             |
| `npm run build`            | Build the website for production          |
| `npm start -- --port 3000` | Preview the production build locally      |
| `npm test`                 | Check the catalogue and enquiry behaviour |
| `npm run typecheck`        | Check TypeScript                          |
| `npm run lint`             | Check code quality                        |
| `npm run format`           | Format source files                       |

## Where to edit

| File or folder            | Content                                                        |
| ------------------------- | -------------------------------------------------------------- |
| `app/page.tsx`            | Homepage: hero, About, Support, Products                       |
| `app/about/page.tsx`      | About page and partner logos                                   |
| `app/support/page.tsx`    | Support page                                                   |
| `app/contacts/page.tsx`   | Contact page                                                   |
| `lib/company.ts`          | Company contact details                                        |
| `lib/profile-products.ts` | 30 catalogue entries, descriptions, galleries and source pages |
| `lib/catalogue.ts`        | Product areas, shared types, lookups and sample entries        |
| `app/globals.css`         | Colours, typography and responsive layout                      |
| `components/reveal.tsx`   | Scroll entrance animations and reduced-motion support          |
| `public/images/`          | Company, partner, product and representative images            |

Products follow `/products/area/category/product`. Each category and product supports a description and an image array; `/products/all` collects every entry and can filter by area. Replace sample records with confirmed content before removing their sample labels.

Image provenance is recorded in `ASSETS.md`, `ASSETS-pdf.json` and `ASSETS-catalogue.json`. Catalogue source pages 14–42 are covered; repeated slides are combined into galleries. The extracted images needed by the website are included, so the original PDF is not required to run it.

## Contact form

Direct email and telephone links work without setup. **Sending through the enquiry form is not configured yet.** Until a mail gateway is connected, the server returns a service-unavailable response and does not report a successful submission.

To enable sending later, set these **server-only** environment variables in Vercel or in a local `.env.local` file:

- `ECI_MAIL_ENDPOINT`: HTTPS email gateway URL.
- `ECI_MAIL_TOKEN`: gateway token.
- `ECI_MAIL_FROM`: verified sender address.
- `ECI_REDIS_URL`: shared Redis connection URL for the enquiry rate limit; use a TLS `rediss://` connection in production.

The blank `.env.example` documents the names. Never commit actual values or prefix them with `NEXT_PUBLIC_`. Restart the local server or redeploy after changing environment variables. No services are provisioned by this repository.

The gateway must accept Bearer authentication and JSON containing `from`, `to` (an array), `reply_to`, `subject` and `text`. The recipient is fixed server-side to `info@eci-inter.com`. Adapt `lib/enquiries/delivery.ts` if your provider uses another contract.

Redis stores only expiring counters with hashed identifiers, allowing five submissions per client address per fixed 15-minute window. The counter is shared across server instances; no SQL migration is needed. The endpoint uses Vercel's trusted client-IP header only when running on Vercel. Local development and other hosts share a conservative fallback quota. If either service is unconfigured or the rate-limit store fails, the endpoint does not send mail or report success. Verify the sender and receipt before enabling live enquiries.

## Deploy to Vercel

1. Import **TopOfficial/eci-web**, branch **main**, in Vercel.
2. Select **Next.js** as the Application/Framework Preset.
3. Keep Root Directory at **`./`**.
4. Leave Build Command, Output Directory and Install Command at their defaults; remove any previous Vite overrides.
5. Use **Node.js 24.x** (also declared in `package.json`).
6. Leave environment variables empty for a viewing-only deployment. Remove any empty email placeholders auto-detected from `.env.example`.
7. Press **Deploy** and open the URL Vercel provides.

`vercel.json` declares the Next.js framework. No Cloudflare account, D1 database, Sites plugin or API key is needed to deploy and browse the site. Once connected, pushes to the configured production branch trigger Vercel deployments.

Use Vercel's Deployment Protection settings if access should be restricted. A publicly accessible URL can be visited by people beyond the intended reviewers.

The earlier Sites deployment is separate and remains on its previous version. This repository now targets Next.js/Vercel; old Cloudflare configuration is preserved in Git history.

## Troubleshooting

- **`node` or `npm` is not found:** install Node.js 24 LTS and reopen the terminal.
- **Unsupported Node version:** check `node --version`; use Node 24 or run `nvm use` if available.
- **Port 3000 is in use:** stop the other preview or run `npm run dev -- --port 3001`.
- **Dependencies are missing:** run `npm ci` from the directory containing `package.json`.
- **The contact form cannot send:** this is expected until the mail gateway and server bindings are configured.
