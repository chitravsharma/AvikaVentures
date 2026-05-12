# AvikaVentures — Technical Design

Living document. Updated as services / decisions change.
Last revised: 2026-05-12.

---

## 1. System overview

```
                Cloudflare R2-style edge (none)
                          │
┌──────────────────┐ HTTPS │  ┌─────────────────┐    HTTPS    ┌──────────────┐
│  Browser (React  │◀─────┼──│  Netlify edge    │             │   Formspree  │
│  19 SPA, CRA)    │  CDN    │  + auto-deploy   │             │  contact API │
└────────┬─────────┘         └─────────┬────────┘             └──────────────┘
         │                             │                              ▲
         │ gtag                        │ Build (npm run build)        │ form POST
         ▼                             ▼                              │
   ┌──────────────┐               ┌──────────┐                        │
   │ Google GA4   │               │  GitHub  │────────────────────────┘
   │ G-EH3R5CJ10S │               │  origin  │
   └──────────────┘               └──────────┘
```

- **Frontend:** Create React App 5.0.1 + React 19 + React Router 7.
  Single-page application; all routing client-side via `<BrowserRouter>`.
- **Backend:** None. Static site only.
- **Forms:** Formspree (form ID `mnjowepg`) → emails `avikaventures.info@gmail.com`.
- **Analytics:** Google Analytics 4 (`G-EH3R5CJ10S`). SPA route changes
  tracked via a `RouteTracker` component in `src/App.js` that calls
  `gtag('config', ..., {page_path})` on every `useLocation()` change.
- **Hosting:** Netlify. Auto-deploys from the `avikaventures.v01` branch.
  Headers + redirects driven from `public/_headers` and `public/_redirects`.
- **Domain:** `avikaventures.com` (Namecheap registrar, Netlify DNS).

---

## 2. Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | CRA 5.0.1 | In maintenance mode upstream; migration away (Vite, etc.) is a separate project |
| UI | React 19 + React Router 7 | |
| Styling | Plain CSS, one file per component | No Tailwind, no CSS-in-JS |
| Forms | Formspree (`@formspree/react`) | No backend needed |
| Analytics | Google Analytics 4 via `gtag.js` | |
| Hosting | Netlify | Free tier; auto-publish LOCKED — pushes trigger builds but require manual publish click |
| Node | 20 LTS pinned via `.nvmrc` | CRA 5 build hangs on Node 25 |

---

## 3. File layout

```
AvikaVentures/
├── public/
│   ├── _headers              # Netlify headers (cache + security + CSP)
│   ├── _redirects            # SPA fallback: /* → /index.html
│   ├── index.html            # OG/Twitter meta, JSON-LD, gtag bootstrap
│   ├── manifest.json         # Kept on disk; not linked from index.html (no PWA)
│   ├── sitemap.xml           # 4 routes, lastmod 2026-04-13
│   ├── robots.txt            # Allow all + sitemap reference
│   ├── favicon.ico
│   ├── logo192.png           # Avika diamond, 192×192 (apple-touch-icon)
│   ├── logo512.png           # Avika diamond, 512×512
│   ├── apple-touch-icon.png  # 180×180 for newer iPhones
│   ├── AvikaV.jpg            # Rectangular logo (header use)
│   ├── AvikaVenturesOG.jpg   # 1200×630 social-share image
│   └── saatsaheli-logo.png   # Used in "featured projects" on Home
├── src/
│   ├── App.js                # Router, RouteTracker (GA4 SPA tracking)
│   ├── App.css
│   ├── index.js              # Mount point
│   ├── components/
│   │   ├── Header.{jsx,css}  # Nav links
│   │   ├── Footer.{jsx,css}  # Contact info, social, copyright
│   │   └── Logo.jsx
│   └── pages/
│       ├── Home.{jsx,css}    # Hero, services summary, featured projects
│       ├── Services.{jsx,css}# 14 service categories
│       ├── About.{jsx,css}
│       └── Contact.{jsx,css} # Formspree form, reCAPTCHA not used
└── TECHNICAL_DESIGN.md       # this file
```

---

## 4. SEO setup

Verified live as of 2026-05-12.

- `public/sitemap.xml` — 4 routes, `<lastmod>2026-04-13</lastmod>`. Bump on
  meaningful content changes.
- `public/robots.txt` — `Allow: /` + sitemap reference.
- `public/index.html`:
  - Canonical link to `https://avikaventures.com/`
  - Full Open Graph meta (type, title, description, image, dimensions, alt)
  - Twitter Card (`summary_large_image`)
  - **JSON-LD Organization schema** — name, URL, logo, image, description,
    email, contactPoint. Visible to Google for rich snippets.
- `og:image` is `AvikaVenturesOG.jpg` (1200×630, ~65 KB, social-optimized).
  Not the small logo.
- **Google Search Console:** property auto-verified via Google Analytics
  (same Google account owns both gtag `G-EH3R5CJ10S` and GSC).
- **Bing Webmaster Tools:** site + sitemap imported from GSC.

---

## 5. Caching strategy

Set in `public/_headers`:

| Path | Cache-Control |
|---|---|
| `/static/*` (hashed CRA bundles) | `public, max-age=31536000, immutable` |
| `/AvikaV.jpg`, `/AvikaVenturesOG.jpg`, `/logo*.png`, `/apple-touch-icon.png`, `/saatsaheli-logo.png`, `/favicon.ico` | `public, max-age=604800` (7 days) |
| `/manifest.json` | `public, max-age=3600` |
| `/`, `/*.html` | `public, max-age=0, must-revalidate` |
| `/sitemap.xml`, `/robots.txt` | `public, max-age=3600` |

CRA outputs filename-hashed JS/CSS (e.g., `main.57fb7b58.js`) so
`immutable` is safe — content can't change under the same name.

---

## 6. Security headers

All applied via `public/_headers` on `/*`:

| Header | Value |
|---|---|
| `Strict-Transport-Security` | `max-age=31536000` (Netlify default) |
| `X-Frame-Options` | `DENY` (anti-clickjacking) |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=(), interest-cohort=()` |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Content-Security-Policy-Report-Only` | See below — in observation mode |

### CSP Report-Only directive

```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com;
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
font-src 'self' data:;
connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://formspree.io https://*.formspree.io;
form-action 'self' https://formspree.io;
frame-ancestors 'none';
base-uri 'self';
object-src 'none';
upgrade-insecure-requests
```

**Observation period:** 2026-05-12 → ~2026-05-26 (2 weeks). Check
DevTools Console for `[Report Only]` violations from legit code. When
clean, flip the header name from `Content-Security-Policy-Report-Only`
to `Content-Security-Policy` to enforce.

---

## 7. Analytics — GA4

- Measurement ID: `G-EH3R5CJ10S`
- Bootstrap: inline `<script>` in `public/index.html` after the gtag.js loader.
- **SPA route tracking:** `RouteTracker` in `src/App.js` calls
  `window.gtag('config', GA_MEASUREMENT_ID, {page_path})` on every
  `useLocation()` change. Without this, only the initial page load is
  tracked — internal navigations would not fire `page_view`.

---

## 8. Deployment

- **Hosting:** Netlify
- **Build command:** `npm run build` (Netlify-provided)
- **Publish directory:** `build/`
- **Node version:** 20 (pinned via `.nvmrc`; CRA 5 hangs on Node 25)
- **Auto-publish:** **LOCKED (since 2026-05-12).** Pushes to `avikaventures.v01` still trigger a build, but the result does NOT auto-promote to `avikaventures.com`. Must be manually published.
- **To publish a build:** Netlify dashboard → site → **Deploys** tab → find the latest successful build → **⋯** menu → **Publish deploy**.
- **To re-enable auto-publish:** Site configuration → Build & deploy → Continuous deployment → Build settings → **"Start auto publishing"**.

---

## 9. Local dev

```
cd /Users/chitrasharma/Documents/GitHub/AvikaVentures
npm start  # localhost:3000, hot reload
```

If `node_modules` is corrupted/zero-byte (classic iCloud bird daemon
symptom in `~/Documents`):

```
rm -rf node_modules
mkdir -p /tmp/avika-fe-nm
ln -s /tmp/avika-fe-nm node_modules
npm ci
```

`npm start` and `npm run build` both hang when launched as a background
process via Claude Code's Bash tool — same CRA quirk as SaatSaheli. Run
in a real terminal.

---

## 10. Open / planned

| Item | State | Notes |
|---|---|---|
| Replace placeholder icons with brand-quality versions | ✅ Done 2026-05-12 (cropped from AvikaV.jpg) | Could be replaced with higher-res source later for better 512×512 sharpness |
| Flip CSP to enforcing mode | 🟡 Observation period | After ~2 weeks of clean Report-Only logs |
| GA4 SPA route-tracking verification in browser | 🟡 User-side test | Open GA4 Realtime → Events while clicking through pages |
| CRA → Vite migration | 📝 Backlog | CRA in maintenance mode; not urgent for a 4-page site |
| Service worker / PWA support | ❌ Deliberately not committed | `manifest.json` exists on disk but no `<link rel="manifest">` |
| `.nvmrc` and stray `avikaV-gGoogle ag` file uncommitted | 📝 Cleanup | `.nvmrc` should be committed; stray file should be deleted |

---

## 11. Operational reminders

- **Only `avikaventures.v01` builds on Netlify.** Pushes to `main` don't
  trigger anything. Auto-publish is currently LOCKED (see §8) — a build
  succeeding does NOT make it live; manual publish required.
- **GA4 `G-EH3R5CJ10S` is the canonical ID.** Hardcoded in two places:
  `public/index.html` (gtag bootstrap) and `src/App.js` (RouteTracker).
  Keep in sync.
- **Formspree free tier has a monthly submission limit.** If contact
  form starts silently failing, check the Formspree dashboard.
- **CSP Report-Only changes** require a Netlify redeploy (header changes
  are bundled into the build artifact).
