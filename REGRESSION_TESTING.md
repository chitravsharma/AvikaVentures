# AvikaVentures — Regression Testing

Run this checklist after every prod deploy. Most checks are scriptable
from a terminal; visual / GA4 checks need a browser. Should take
~10–15 min total.

---

## 1. Site reachability + redirects (1 min)

```bash
curl -sI -o /dev/null -w "apex:        HTTP %{http_code}\n" https://avikaventures.com
curl -sI -o /dev/null -w "www:         HTTP %{http_code} (Location: %{redirect_url})\n" https://www.avikaventures.com
curl -sI -o /dev/null -w "/services:   HTTP %{http_code}\n" https://avikaventures.com/services
curl -sI -o /dev/null -w "/about:      HTTP %{http_code}\n" https://avikaventures.com/about
curl -sI -o /dev/null -w "/contact:    HTTP %{http_code}\n" https://avikaventures.com/contact
curl -sI -o /dev/null -w "404 fallback HTTP %{http_code} (should be 200 via _redirects)\n" https://avikaventures.com/this-route-does-not-exist
```

Expected:
- apex: `200`
- All routes: `200` (SPA fallback hits index.html)
- Non-existent route also `200` (SPA fallback — page itself shows app's 404 UI if implemented)

---

## 2. Critical assets load (1 min)

```bash
for path in AvikaVenturesOG.jpg AvikaV.jpg logo192.png logo512.png apple-touch-icon.png favicon.ico saatsaheli-logo.png sitemap.xml robots.txt ; do
  curl -s -o /dev/null -w "%-30s HTTP %{http_code} | %{size_download}b | %{content_type}\n" "https://avikaventures.com/$path"
done
```

Expected: all 200, sizes match what's in the repo (within rounding for compression).

---

## 3. SEO meta tags (2 min)

```bash
curl -s https://avikaventures.com | grep -oE '<(meta|link|title)[^>]+>' | grep -iE 'og:|twitter:|description|canonical|<title|application/ld'
```

Verify present and correct:
- `<title>Avika Ventures | Software & Website Development Services</title>`
- `<meta name="description" ...>` matches marketing copy
- `<link rel="canonical" href="https://avikaventures.com/">`
- `<meta property="og:image" content="https://avikaventures.com/AvikaVenturesOG.jpg">`
- `og:image:width`, `og:image:height`, `og:image:alt` present
- `<meta name="twitter:card" content="summary_large_image">`
- `<meta name="twitter:image" content="...AvikaVenturesOG.jpg">`
- `<script type="application/ld+json">...</script>` present

```bash
# Validate JSON-LD structure
curl -s https://avikaventures.com | python3 -c "
import sys, re, json
html = sys.stdin.read()
m = re.search(r'<script type=\"application/ld\+json\">(.*?)</script>', html, re.S)
print(json.dumps(json.loads(m.group(1)), indent=2)) if m else print('no JSON-LD found')
"
```

Expected: valid Organization schema with name, url, logo, description, email, contactPoint.

---

## 4. Security headers (2 min)

```bash
curl -sI https://avikaventures.com | grep -iE 'strict-transport|x-frame|x-content|referrer-policy|permissions-policy|cross-origin-opener|content-security'
```

All seven required:
- `strict-transport-security: max-age=31536000`
- `x-frame-options: DENY`
- `x-content-type-options: nosniff`
- `referrer-policy: strict-origin-when-cross-origin`
- `permissions-policy: geolocation=(), microphone=(), camera=(), interest-cohort=()`
- `cross-origin-opener-policy: same-origin`
- `content-security-policy-report-only: default-src 'self'; ...` (until flipped to enforcing)

---

## 5. Cache headers (1 min)

```bash
# Hashed bundle should be immutable
JS=$(curl -s https://avikaventures.com | grep -oE 'static/js/main\.[a-f0-9]+\.js' | head -1)
curl -sI "https://avikaventures.com/$JS" | grep -i cache-control
# Expect: cache-control: public, max-age=31536000, immutable

# HTML should always revalidate
curl -sI https://avikaventures.com | grep -i cache-control
# Expect: cache-control: public, max-age=0, must-revalidate

# Long-lived image
curl -sI https://avikaventures.com/AvikaVenturesOG.jpg | grep -i cache-control
# Expect: cache-control: public, max-age=604800
```

---

## 6. Browser checks (5 min — manual)

Open https://avikaventures.com in fresh incognito.

### Visual / content
- Header renders with Avika logo + nav links (Home, Services, About, Contact)
- Home page hero loads, no broken images
- Click each nav link — page transitions are instant (SPA), URL updates, content changes
- Featured projects section shows SaatSaheli logo
- Footer renders with contact email + copyright

### Contact form
- Navigate to `/contact`
- Submit a real test with subject `regression test <date>`
- Confirm success message appears in UI
- Check `avikaventures.info@gmail.com` for the Formspree email arrival (subject prefixed "Avika Ventures: New message from ...")

### DevTools — Console
- No JS errors on any page
- No `[Report Only]` CSP violations from legit code
  (Note: violations from gtag/Formspree are unexpected — if they appear, the CSP allowlist needs updating before flipping to enforcing)
- No 404s in Network tab on any page

### DevTools — Network tab
- `main.<hash>.js` returns 200 with `cache-control: immutable` on first visit
- Reload — same JS now hits browser cache (Status: `200 (from disk cache)` or similar)
- No mixed-content warnings

### Lighthouse (Chrome DevTools → Lighthouse → Run audit)
- Performance: ≥ 90 (static site, should be easy)
- Accessibility: ≥ 95
- Best Practices: 100
- SEO: 100

---

## 7. GA4 SPA route tracking (3 min — manual)

1. Open https://avikaventures.com
2. In another tab, open GA4: https://analytics.google.com → Reports → Realtime → **Events** (filter for `page_view`)
3. Click Home → Services → About → Contact (4 nav clicks)
4. Wait ~15 seconds for Realtime to update
5. **Verify 4–5 separate `page_view` events** (1 initial + 4 navigations)

If only 1 event fires, `RouteTracker` isn't connecting to `window.gtag`. Likely causes:
- gtag bootstrap script in `index.html` was deleted
- `RouteTracker` removed from `App.js`
- React Router was replaced and `useLocation` no longer triggers

---

## 8. Social share preview (2 min — manual)

Test OG card rendering on real platforms:

- **LinkedIn:** https://www.linkedin.com/post-inspector/ → paste `https://avikaventures.com/` → click "Inspect" → verify image, title, description.
- **Twitter:** https://cards-dev.twitter.com/validator → paste URL → preview shows large image card.
- **Facebook:** https://developers.facebook.com/tools/debug/ → paste URL → "Scrape Again" if cached. Verify image is 1200×630 AvikaVenturesOG.jpg, not the small logo.

If any preview shows wrong image, click "Scrape Again" on Facebook (caches OG aggressively).

---

## 9. SEO crawl health (2 min)

```bash
curl -s https://avikaventures.com/sitemap.xml | head -20
curl -s https://avikaventures.com/robots.txt
```

- Sitemap returns valid XML with 4 URLs
- robots.txt allows `/` and references sitemap

**Once a week:** Check Google Search Console → Coverage. New pages should be indexed within 3–7 days.

---

## When to run

- **Every deploy** to `avikaventures.v01` — sections 1, 2, 3, 4, 5 (scriptable in ~5 min).
- **Major content change** — sections 1–8 (~15 min).
- **Pre-launch / major rewrite** — full doc including Lighthouse audit.

---

## Quick all-in-one script

```bash
echo "=== 1. Routes ===" && \
for path in / /services /about /contact /no-such-route ; do
  curl -sI -o /dev/null -w "$path: %{http_code}\n" "https://avikaventures.com$path"
done && \
echo "=== 2. Assets ===" && \
for f in AvikaVenturesOG.jpg AvikaV.jpg logo192.png logo512.png apple-touch-icon.png ; do
  curl -s -o /dev/null -w "$f: HTTP %{http_code} %{size_download}b\n" "https://avikaventures.com/$f"
done && \
echo "=== 3. Headers ===" && \
curl -sI https://avikaventures.com | grep -iE 'strict-transport|x-frame|x-content|referrer|permissions-policy|cross-origin|content-security' && \
echo "=== 4. Cache ===" && \
JS=$(curl -s https://avikaventures.com | grep -oE 'static/js/main\.[a-f0-9]+\.js' | head -1) && \
curl -sI "https://avikaventures.com/$JS" | grep -i cache-control && \
echo "=== 5. JSON-LD ===" && \
curl -s https://avikaventures.com | grep -oE 'application/ld\+json' | head -1
```
