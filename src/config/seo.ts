import { SITE_CONFIG } from '@/config/site';

export const SEO_CONFIG = {
  siteUrl: `https://${SITE_CONFIG.domain}`,
  siteName: SITE_CONFIG.name,
  defaultTitle: `${SITE_CONFIG.name} — Frontend Talent Network`,
  defaultDescription: SITE_CONFIG.positioning,
  tagline: SITE_CONFIG.tagline,
  locale: 'en_IN',
  themeColor: '#0a0a0b',
  twitterHandle: '@fronthyre',
  email: SITE_CONFIG.email,
  /** Primary share image (Open Graph / Twitter) */
  ogImagePath: '/assets/brand/Fronthyre_LOGO_FINAL_-_NEW_-_TRANSPARENT_BG.png',
  logoPath: '/favicon.png',
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.siteUrl}${normalized}`;
}

export function absoluteAsset(path: string): string {
  return absoluteUrl(path.startsWith('/') ? path : `/${path}`);
}

/** Public indexable routes for sitemap generation reference */
export const PUBLIC_ROUTES = [
  { path: '/', changefreq: 'weekly' as const, priority: 1.0 },
  { path: '/buildathon', changefreq: 'weekly' as const, priority: 0.95 },
  { path: '/fronthyre', changefreq: 'weekly' as const, priority: 0.9 },
  { path: '/early-access', changefreq: 'weekly' as const, priority: 0.85 },
  { path: '/about', changefreq: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changefreq: 'monthly' as const, priority: 0.65 },
  { path: '/privacy', changefreq: 'monthly' as const, priority: 0.4 },
  { path: '/terms', changefreq: 'monthly' as const, priority: 0.4 },
  { path: '/cookie-policy', changefreq: 'monthly' as const, priority: 0.35 },
  { path: '/privacy-requests', changefreq: 'monthly' as const, priority: 0.35 },
] as const;
