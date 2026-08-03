# Kaldi's Coffee ☕ — Where Coffee Was Born

A production-ready, premium marketing website for **Kaldi's Coffee P.L.C** — Ethiopia's homegrown
coffee house chain, founded in 2005 by Tsedey Asrat and Elias Ketema. Built with
**React 18 + Vite + TypeScript**, styled with **Tailwind CSS**, and animated with **Framer Motion**.

> Named after the Ethiopian goatherd Kaldi — credited with discovering coffee around 850 CE —
> Kaldi's Coffee has been Ethiopia's coffee house chain since 2005.

**Content note:** All company facts on this site (stats, founders, locations, menu items, hours,
milestones) are drawn from a verified fact sheet. Kaldi's does not publish an official online menu
or prices, so the menu shows only customer-confirmed items and prices are "available in store".

## ✨ Features

| Area | Details |
| --- | --- |
| **Pages** | Home, Menu, Locations, About, Shop, Contact, Journal (Blog), Careers, 404 |
| **Menu** | Customer-confirmed items (macchiato, buna, Yirgacheffe, cakes, burgers, sandwiches, retail beans), category filter + search |
| **Locations** | Interactive **Leaflet** map with 8 branches, city filters, fly-to markers, directions links |
| **Animations** | Ken Burns hero, split-letter headline reveal, scroll reveals, 3D tilt cards, mouse spotlight, steam FX, parallax, page transitions |
| **Design** | Brand palette (#003349 / #004562 / #C3BCB1), Playfair Display + Inter + Montserrat + Noto Serif Ethiopic, Amharic accents (ካልዲስ ኮፊ) |
| **SEO** | Per-page meta via `react-helmet-async`, JSON-LD (CoffeeShop, Menu, BlogPosting), sitemap.xml, robots.txt |
| **Forms** | React Hook Form + Zod validation on the Contact form |
| **Performance** | Route-level code splitting (`React.lazy` + `Suspense`), lazy images, preconnects |

## 🚀 Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:5173
npm run build   # typecheck + production build → dist/
npm run preview # preview the production build
npm run typecheck
```

## 📁 Project structure

```
src/
├── components/
│   ├── home/        # Homepage sections (Hero, BrandStory, SignatureCoffees, …)
│   ├── layout/      # Navbar, Footer, ScrollProgress, Layout
│   └── ui/          # Reveal, TiltCard, SmartImage, SectionHeading, Button, Steam
├── data/            # menu, locations, shop, blog, jobs, content (typed)
├── lib/             # utils (cn) + seo (Helmet + JSON-LD builders)
└── pages/           # One file per route, all lazy-loaded
```

Photography is hot-linked from [Unsplash](https://unsplash.com) with a branded SVG fallback for
any image that fails to load (`src/components/ui/SmartImage.tsx`).

## 🌍 Deployment

### Vercel
1. Push the repo to GitHub, then import it at [vercel.com](https://vercel.com).
2. Framework preset is detected automatically (**Vite**).
3. Build command `npm run build`, output directory `dist`.
4. Done — SPA fallback is handled by Vercel automatically.

### Netlify
1. Import the repo at [netlify.com](https://www.netlify.com).
2. Build command `npm run build`, publish directory `dist`.
3. Add a redirect rule so client-side routes work:
   - `public/_redirects` → `/*    /index.html   200`

### Notes
- Update `SITE_URL` in `src/lib/seo.tsx` to your production domain.
- Replace Unsplash photography with licensed brand photos and a real hero video when going live.
- When the company provides official menu prices and online ordering, the cart/checkout flow can
  be re-added (the previous demo cart was removed because no verified prices exist).
