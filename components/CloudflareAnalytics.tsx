'use client';

import Script from 'next/script';

/**
 * Cloudflare Web Analytics (free, privacy-first).
 * Works with DNS-only (no orange cloud). Add NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN in Vercel env.
 * Get token: Cloudflare Dashboard → Web Analytics → Add a site → copy token.
 */
export function CloudflareAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN;
  if (!token) return null;

  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token })}
      strategy="afterInteractive"
    />
  );
}
