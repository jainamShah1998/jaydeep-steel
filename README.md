# Jaydeep Steel — Website

A Next.js (App Router) marketing site for an Ahmedabad-based iron & steel
merchant / commission agent, built with Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/layout.js` — root layout, loads self-hosted fonts (Oswald, Inter, IBM Plex Mono)
- `app/globals.css` — design tokens (colors, textures, animations)
- `app/page.js` — assembles all homepage sections
- `components/` — Navbar, Hero, SpecTicker, Stats, Products, Sourcing, Industries, ContactFooter, RfqForm

## Customize

- **Company name, address, phone, email**: edit `components/Navbar.js` and `components/ContactFooter.js`
- **Colors**: edit the CSS variables at the top of `app/globals.css`
- **Product range copy**: edit the `PRODUCTS` array in `components/Products.js`
- **Stats**: edit the `STATS` array in `components/Stats.js`
- **RFQ form**: `components/RfqForm.js` currently shows a confirmation state on submit;
  wire it to your email/CRM endpoint (e.g. an API route or a service like Formspree) to
  actually receive submissions.
- **Catalog / spec sheet PDFs**: replace the `href="#"` placeholders in `components/ContactFooter.js`
  with links to your actual PDF files placed in `/public`.
