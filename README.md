# TACTEC (Ventio) – Final Production Build

- Next.js 14 + TypeScript + Tailwind
- next-intl (8 locales) with RTL Arabic
- Images converted to **WebP** only (lighter & faster)
- Localized SEO + OpenGraph in `<Head>`
- **JSON-LD structured data**: Organization, Product, Website, FAQPage (localized via i18n)
- **GA4** integrated: page views (route changes) + CTA events
- **next-sitemap**: auto `sitemap.xml` + `robots.txt` with hreflang

## Run locally
```bash
npm install
npm run dev
```

## Build & serve
```bash
# Set domain for sitemap + JSON-LD
export SITE_URL="https://your-domain.com"
export NEXT_PUBLIC_SITE_URL="https://your-domain.com"
# Set GA4 (optional)
export NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

npm run build     # builds Next.js; postbuild auto-runs next-sitemap
npm start         # start production server
```

## Vercel deploy
- Add environment variables:
  - `SITE_URL=https://your-domain.com`
  - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
  - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
- Import repo → Deploy.

## FAQ Structured Data
- Translations in `locales/*/common.json` under `faq` keys.
- `<Head>` in `components/TacTecLanding.tsx` includes a JSON-LD `FAQPage` using `t("faq.*")` so Google sees localized content.
