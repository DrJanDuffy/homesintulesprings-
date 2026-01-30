# Fix: "Page with redirect" – Google Not Indexing (homesintulesprings.com)

When Google Search Console shows **Page indexing → Page with redirect** and "These pages aren't indexed or served on Google," it usually means Google is seeing redirects (e.g. `http`→`https`, `www`↔ non-`www`) and is not treating those URLs as the final page to index.

This guide is for **www.homesintulesprings.com** (this repo).

---

## 1. Pick one canonical URL

This site uses **https://www.homesintulesprings.com** (with www) everywhere (sitemap, metadata, canonicals). Stick with that.

- **Canonical:** **https://www.homesintulesprings.com**
- Use it in: sitemap, internal links, canonical tags, Google Search Console property.

---

## 2. Redirect everything else to that URL (301)

Configure Vercel (and Cloudflare if used) so that:

| If user or bot requests | Redirect to |
|-------------------------|-------------|
| `http://homesintulesprings.com` | `https://www.homesintulesprings.com` |
| `http://www.homesintulesprings.com` | `https://www.homesintulesprings.com` |
| `https://homesintulesprings.com` | `https://www.homesintulesprings.com` |

- Use **301 (permanent)** redirects.
- No redirect chains; one hop to the canonical URL.

**Vercel:** Project → **Settings → Domains**. Add **www.homesintulesprings.com** as primary. Add **homesintulesprings.com** and set it to **Redirect to www.homesintulesprings.com** (301).

**Cloudflare (if used, DNS only):** At your registrar, point both `www` and apex to the same target; Vercel will handle redirects if you set them in Vercel Domains.

---

## 3. Sitemap and canonicals (this repo)

- **Sitemap** (`app/sitemap.ts`) already lists only **https://www.homesintulesprings.com** URLs.
- **Canonicals:** Layout and pages use `metadataBase` and `openGraph.url` with **https://www.homesintulesprings.com**. No change needed if you keep www as canonical.

---

## 4. Google Search Console

1. **Property:** Use a property for **https://www.homesintulesprings.com**. Add it if you only had the non-www or http version.
2. **Sitemaps:** Submit **https://www.homesintulesprings.com/sitemap.xml**.
3. **URL Inspection:** For important canonical URLs (e.g. `/`, `/listings`, `/about`), use **Request indexing**.
4. **"Page with redirect":** After 301s and canonicals are correct, this count should go down as Google recrawls.

---

## 5. Checklist

- [ ] Canonical base URL: **https://www.homesintulesprings.com**
- [ ] 301 redirects: `http` → `https`, and **homesintulesprings.com** → **www.homesintulesprings.com**
- [ ] Sitemap lists only **https://www.homesintulesprings.com/...** (already done in this repo)
- [ ] GSC property is **https://www.homesintulesprings.com**; sitemap submitted; Request indexing for key pages

After this, "Page with redirect" should decrease as Google recrawls and indexes the canonical URLs.
