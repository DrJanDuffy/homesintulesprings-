# Vercel Project Settings for This Repo

Use these settings so builds and deploys work correctly with Next.js (static export).

## Framework & Build

| Setting | Value |
|--------|--------|
| **Framework Preset** | **Next.js** |
| **Build Command** | `npm run build` (or leave default) |
| **Output Directory** | `out` |
| **Install Command** | `npm install` (or leave default) |
| **Root Directory** | leave empty |

## Why this matters

- **Framework Preset: Next.js** — Vercel runs the right build and treats output correctly. If it’s set to **Other**, you can get wrong output directory (`public` or `.`) and failed builds.
- **Output Directory: `out`** — This repo uses Next.js **static export** (`output: 'export'` in `next.config.ts`). The build writes to the `out` folder, so Vercel must use **Output Directory = `out`**.

## How to set it in Vercel

1. **Vercel** → your project → **Settings** → **General** (or **Build & Development**).
2. **Framework Preset:** change from **Other** to **Next.js**.
3. **Build Command:** `npm run build` (or leave as default).
4. **Output Directory:** set to **`out`**.
5. **Save** and trigger a new deployment (e.g. **Redeploy** from the Deployments tab, or push a commit).

## If Production Overrides are shown

If you see “Configuration Settings in the current Production deployment differ from your current Project Settings”:

- **Project Settings** = what will be used for the **next** deployment.
- **Production Overrides** = what was used for the **current** production deployment.

Update **Project Settings** as above, then **Redeploy** the latest deployment (or push a new commit) so the new settings apply.

---

## Domain and URL: One site, not two

If **www.homesintulesprings.com** shows a different site than **homesintulesprings-git-main-….vercel.app**, the domain is on a different project or deployment. Use one project and one production URL.

### 1. Use the project that has the new site

- The URL **homesintulesprings-git-main-janet-duffys-projects.vercel.app** is the **Production** deployment of the project connected to this repo (Git branch: main).
- That is the project the custom domain should use.

### 2. Assign the domain to that project

1. **Vercel** → open the **project** whose Production URL is `…-git-main-janet-duffys-projects.vercel.app`.
2. Go to **Settings → Domains**.
3. **Add** `www.homesintulesprings.com` (and optionally `homesintulesprings.com` with redirect to www).
4. Follow Vercel’s DNS instructions for your registrar. If the domain already points to Vercel, it may just verify.

### 3. Remove the domain from any other project

- If **www.homesintulesprings.com** is on another Vercel project (e.g. an old static project), **remove** it from that project’s **Settings → Domains**.
- A domain can only be on one Vercel project. After you add it to the git-main project and remove it from the other, the custom domain will serve the same site as the *.vercel.app URL.

### 4. After changing domains

- DNS can take a few minutes to an hour. If it still looks wrong, hard refresh (Ctrl+Shift+R) or try incognito to avoid cache.
