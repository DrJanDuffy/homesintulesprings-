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
