# Fix: Make www.homesintulesprings.com Show the New Site

Do these steps in order so **www.homesintulesprings.com** shows the same site as **homesintulesprings-git-main-janet-duffys-projects.vercel.app**.

---

## Step 1: Remove the domain from the OLD project

1. Go to **[vercel.com/dashboard](https://vercel.com/dashboard)**.
2. Open the project where **www.homesintulesprings.com** is currently added (likely the one that shows the old/static site).
3. Go to **Settings** → **Domains**.
4. Find **www.homesintulesprings.com** (and **homesintulesprings.com** if listed).
5. Click the **⋯** (three dots) next to each → **Remove**.
6. Confirm removal.

---

## Step 2: Add the domain to the NEW project (git-main)

1. In the Vercel dashboard, open the project whose URL is **homesintulesprings-git-main-janet-duffys-projects.vercel.app** (the one connected to this repo).
2. Go to **Settings** → **Domains**.
3. Click **Add**.
4. Enter: **www.homesintulesprings.com**
5. Click **Add**.
6. (Optional) Add **homesintulesprings.com** and set it to **Redirect to www.homesintulesprings.com**.
7. If Vercel shows DNS instructions (CNAME to cname.vercel-dns.com or similar), add that record at your domain registrar if it is not already there. If the domain was already on Vercel, it may verify automatically.

---

## Step 3: Wait and test

- Give DNS 2–5 minutes (up to an hour in some cases).
- Open **https://www.homesintulesprings.com** in a new incognito/private window (or hard refresh with Ctrl+Shift+R).
- It should match **https://homesintulesprings-git-main-janet-duffys-projects.vercel.app**.

---

## Optional: Add domain via CLI (after linking to the correct project)

If this repo is already linked to the **git-main** project:

```bash
npx vercel link
# Select the project that shows: homesintulesprings-git-main-janet-duffys-projects.vercel.app

npx vercel domains add www.homesintulesprings.com
```

Then still **remove** the domain from the other project in the dashboard (Step 1).
