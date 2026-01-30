import type { NextConfig } from 'next';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: false,
  // Use project directory so Next uses this repo's node_modules (fixes multiple lockfile warning)
  outputFileTracingRoot: __dirname,
  images: {
    unoptimized: true,
  },
  // Redirects/headers don't apply with output: 'export' — configure in Vercel dashboard or vercel.json
  async redirects() {
    return [
      { source: '/index', destination: '/', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/buyers.html', destination: '/buyers', permanent: true },
      { source: '/sellers.html', destination: '/sellers', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/tule-springs.html', destination: '/tule-springs', permanent: true },
      { source: '/tule-springs-homes-for-sale.html', destination: '/tule-springs-homes-for-sale', permanent: true },
      { source: '/tule-springs-villages.html', destination: '/tule-springs-villages', permanent: true },
      { source: '/tule-springs-schools.html', destination: '/tule-springs-schools', permanent: true },
      { source: '/tule-springs-amenities.html', destination: '/tule-springs-amenities', permanent: true },
      { source: '/why-tule-springs.html', destination: '/why-tule-springs', permanent: true },
      { source: '/tule-springs-real-estate.html', destination: '/tule-springs-real-estate', permanent: true },
      { source: '/tule-springs-neighborhoods.html', destination: '/tule-springs-neighborhoods', permanent: true },
      { source: '/north-las-vegas-tule-springs.html', destination: '/north-las-vegas-tule-springs', permanent: true },
      { source: '/tule-springs-new-homes.html', destination: '/tule-springs-new-homes', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/css/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
