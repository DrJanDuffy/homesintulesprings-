# Prepare Your Site for Google

This checklist helps you get **www.homesintulesprings.com** ready for Google Search and Google Business Profile.

---

## Already Done on the Site

- **robots.txt** – Allows Googlebot, points to sitemap: `https://www.homesintulesprings.com/sitemap.xml`
- **sitemap.xml** – Lists all pages with lastmod, changefreq, priority
- **Canonical URLs** – Every page has a canonical link (HTTPS, www)
- **Meta tags** – Unique title and meta description on every page
- **Structured data** – LocalBusiness/RealEstateAgent JSON-LD on all pages; WebSite schema on homepage; FAQ schema on contact
- **Google Analytics** – gtag.js (G-WT2PRE8Q93) on all pages
- **404 page** – Has `noindex, follow` so Google doesn’t index the error page
- **Mobile-friendly** – Viewport meta tag and responsive CSS
- **NAP** – Same business name, address, phone on all pages and in schema (matches GBP)

---

## What You Need to Do

### 1. Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add property: **https://www.homesintulesprings.com** (prefer “Domain” if you can verify DNS).
3. Verify ownership (HTML file, DNS TXT, or Google Analytics).
4. After verification: **Sitemaps** → Add sitemap: `https://www.homesintulesprings.com/sitemap.xml`
5. Use **URL Inspection** to request indexing for the homepage and a few key pages (e.g. Tule Springs, Homes for Sale).

### 2. Google Analytics

- GA4 is already installed (G-WT2PRE8Q93).
- In [Google Analytics](https://analytics.google.com), confirm the property is for **www.homesintulesprings.com** and that data is coming in after you deploy.

### 3. Google Business Profile (GBP)

1. Claim or create your profile at [business.google.com](https://business.google.com).
2. Use **exactly**:
   - **Name:** Dr. Jan Duffy (or your business name as it appears on the site)
   - **Address:** 2627 Nature Park Dr, North Las Vegas, NV 89084
   - **Phone:** (702) 500-1942
   - **Website:** https://www.homesintulesprings.com
3. Set **opening hours** to match the site (e.g. Mon–Fri 9–5, Sat 10–3).
4. Add **categories** (e.g. Real estate agent).
5. Optional: Add a short “View Google Reviews” link on the contact page using your actual GBP URL (replace the current search link when you have it).

### 4. HTTPS & Domain

- Serve the site over **HTTPS** (Vercel/host does this by default).
- In Search Console, use the **www** version (https://www.homesintulesprings.com) consistently; canonicals already use it.

### 5. After Going Live

- In Search Console: submit sitemap, request indexing for the homepage.
- Check **Coverage** and **Mobile Usability** for errors.
- In GBP: add a few posts, keep NAP and hours in sync with the website.

### 6. Test Your Pages

- **Rich Results Test** – [search.google.com/test/rich-results](https://search.google.com/test/rich-results) – Paste a URL to check structured data (LocalBusiness, FAQ, etc.).
- **Mobile-Friendly Test** – [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly) – Confirm pages are mobile-friendly.
- **PageSpeed Insights** – [pagespeed.web.dev](https://pagespeed.web.dev) – Check Core Web Vitals and performance after deploy.

---

## Quick Reference

| Item        | URL or value |
|------------|----------------|
| Sitemap    | https://www.homesintulesprings.com/sitemap.xml |
| Robots     | https://www.homesintulesprings.com/robots.txt |
| Homepage   | https://www.homesintulesprings.com/ |
| GA4 ID     | G-WT2PRE8Q93 |

---

*Update this file if you change domain, analytics ID, or NAP.*
