import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://www.homesintulesprings.com';

const routes = [
  '',
  '/buyers',
  '/sellers',
  '/listings',
  '/about',
  '/contact',
  '/tule-springs',
  '/tule-springs-homes-for-sale',
  '/tule-springs-villages',
  '/tule-springs-schools',
  '/tule-springs-amenities',
  '/why-tule-springs',
  '/tule-springs-real-estate',
  '/tule-springs-neighborhoods',
  '/north-las-vegas-tule-springs',
  '/tule-springs-new-homes',
];

type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

function getChangeFrequency(path: string): ChangeFreq {
  if (path === '' || path === '/about' || path === '/contact') return 'weekly';
  if (path === '/listings' || path === '/buyers') return 'daily';
  return 'weekly';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((path) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified: now,
    changeFrequency: getChangeFrequency(path),
    priority: path === '' ? 1 : (path === '/listings' || path === '/buyers' || path === '/sellers' ? 0.9 : 0.8),
  }));
}
