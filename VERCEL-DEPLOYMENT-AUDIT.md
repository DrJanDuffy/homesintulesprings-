# Vercel Deployment Audit — Git Push Not Triggering Deploy

**Repo:** `https://github.com/DrJanDuffy/homesintulesprings-.git`  
**Production branch:** `main`  
**Project type:** Static HTML (no build); `vercel.json` present.

---

## Why pushes might not trigger Vercel

1. **Git integration not connected** — Project in Vercel is not linked to this GitHub repo.
2. **Wrong repo or branch** — Project is linked to a different repo or production branch is not `main`.
3. **GitHub App permissions** — Vercel’s GitHub App doesn’t have access to `DrJanDuffy/homesintulesprings-`.
4. **Commit author / team** — Commit author not linked to Vercel, or (for Teams) not a member; “Git author must have access to project”.
5. **Webhooks** — GitHub webhook for Vercel missing or broken.

---

## Fix checklist (Vercel Git integration)

Do these in order. After each, push a small commit and see if a deployment starts.

### 1. Confirm Git login connection

- [ ] **Vercel:** [Account → Settings → Authentication](https://vercel.com/account)
- [ ] Ensure **GitHub** is connected (not only “signed in with GitHub”).
- [ ] If not, connect it; if it was disconnected, reconnect.

### 2. Confirm repo and production branch

- [ ] **Vercel:** Your project → **Settings → Git**
- [ ] **Connected Git Repository** must be: `DrJanDuffy/homesintulesprings-` (same org and name, including the trailing `-`).
- [ ] **Production Branch** must be: `main`.
- [ ] If the repo is wrong: **Disconnect** and **Connect** again, then choose `DrJanDuffy/homesintulesprings-` and set Production Branch to `main`.

### 3. GitHub App repo access

- [ ] **GitHub:** Repo **Settings → Integrations → Applications** (or org **Settings → GitHub Apps**).
- [ ] Open **Vercel**.
- [ ] Ensure it has access to **this repository**: `DrJanDuffy/homesintulesprings-`.
- [ ] If it’s “Only select repositories”, add this repo (or switch to “All repositories” if acceptable).

### 4. Webhooks

- [ ] **GitHub:** Repo **Settings → Webhooks**
- [ ] There should be a webhook whose URL contains `vercel.com` (e.g. `https://api.vercel.com/...`).
- [ ] If missing: in Vercel go to **Project → Settings → Git**, disconnect the repo, then connect it again to recreate the webhook.

### 5. Commit author and team (if you see “Git author must have access”)

- [ ] **Vercel:** [Account → Git](https://vercel.com/account) — the connected Git user must be the one you use to push.
- [ ] **Local:** `git config user.email` and `git config user.name` must match the GitHub account linked to Vercel (email case-sensitive).
- [ ] If the project is under a **Team:** you must be a Pro team member (or Hobby team owner); add yourself in **Team Settings → Members**.

### 6. Optional: Deployment Protection

- [ ] **Vercel:** Project → **Settings → Git → Deployment Protection**
- [ ] If “Vercel Authentication” or “Password” is required for Production, deployments may still be created but access is restricted; this doesn’t usually block *triggering* from push.
- [ ] If “Trusted IPs” or similar is on, ensure GitHub’s IPs aren’t blocked (unusual).

---

## Reliable alternative: Deploy via GitHub Actions

If you want **every push to `main` to deploy** even when Vercel’s Git integration is misconfigured, use the workflow in this repo:

- **Workflow file:** `.github/workflows/deploy-vercel.yml`
- **Trigger:** Push to `main`.
- **Behavior:** Runs `vercel deploy --prod`; Vercel receives the source and runs the Next.js build on their side.

### One-time setup

1. **Vercel token**  
   [Create an access token](https://vercel.com/account/tokens) (e.g. “GitHub Actions”) and copy it.

2. **Project and org IDs**  
   In the project folder (with Vercel CLI installed):
   ```bash
   vercel link
   ```
   Then open `.vercel/project.json` and note:
   - `projectId` → **VERCEL_PROJECT_ID**
   - `orgId` → **VERCEL_ORG_ID**

3. **GitHub secrets**  
   Repo **Settings → Secrets and variables → Actions**. Add:
   - `VERCEL_TOKEN` = your Vercel access token  
   - `VERCEL_ORG_ID` = from `project.json`  
   - `VERCEL_PROJECT_ID` = from `project.json`

After that, each push to `main` will run the workflow and deploy to Vercel production. You can keep or remove the Vercel Git connection; the workflow will work either way.

---

## Quick reference

| Check                    | Where to look                          |
|--------------------------|----------------------------------------|
| Git connection           | Vercel → Account → Authentication      |
| Repo & production branch | Vercel → Project → Settings → Git      |
| GitHub App access        | GitHub → Repo/Org → Integrations       |
| Webhooks                 | GitHub → Repo → Settings → Webhooks    |
| Commit author errors     | Vercel deployment logs / PR comments   |

If it still doesn’t deploy after these steps, use [Vercel Help](https://vercel.com/help) and include the **full git SHA** of the commit that should have triggered a deployment.
