import { useEffect } from 'react';
import { absoluteAsset, absoluteUrl, SEO_CONFIG } from '@/config/seo';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'article';
  /** Override default OG/Twitter image URL path (site-relative or absolute) */
  imagePath?: string;
  noindex?: boolean;
}

const JSON_LD_ID = 'fronthyre-json-ld';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string, extra?: Record<string, string>) {
  const selector = extra?.sizes
    ? `link[rel="${rel}"][sizes="${extra.sizes}"]`
    : `link[rel="${rel}"]`;
  let el = document.querySelector(selector) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    if (extra?.sizes) el.sizes = extra.sizes;
    if (extra?.type) el.type = extra.type;
    document.head.appendChild(el);
  }
  el.href = href;
}

function buildJsonLd(title: string, description: string, url: string) {
  const orgId = `${SEO_CONFIG.siteUrl}/#organization`;
  const websiteId = `${SEO_CONFIG.siteUrl}/#website`;
  const pageId = `${url}#webpage`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SEO_CONFIG.siteName,
        url: SEO_CONFIG.siteUrl,
        logo: absoluteAsset(SEO_CONFIG.logoPath),
        email: SEO_CONFIG.email,
        description: SEO_CONFIG.defaultDescription,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SEO_CONFIG.siteUrl,
        name: SEO_CONFIG.siteName,
        description: SEO_CONFIG.defaultDescription,
        inLanguage: 'en-IN',
        publisher: { '@id': orgId },
      },
      {
        '@type': 'WebPage',
        '@id': pageId,
        url,
        name: title,
        description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        inLanguage: 'en-IN',
      },
    ],
  };
}

export default function SEO({
  title,
  description,
  path,
  ogType = 'website',
  imagePath,
  noindex = false,
}: SEOProps) {
  useEffect(() => {
    const canonicalPath = path.startsWith('/') ? path : `/${path}`;
    const pageUrl = absoluteUrl(canonicalPath);
    const image = imagePath
      ? imagePath.startsWith('http')
        ? imagePath
        : absoluteAsset(imagePath)
      : absoluteAsset(SEO_CONFIG.ogImagePath);

    document.title = title;

    setMeta('description', description);
    setMeta('author', SEO_CONFIG.siteName);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    setMeta('googlebot', noindex ? 'noindex, nofollow' : 'index, follow');
    setMeta('theme-color', SEO_CONFIG.themeColor);

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:type', ogType, 'property');
    setMeta('og:url', pageUrl, 'property');
    setMeta('og:site_name', SEO_CONFIG.siteName, 'property');
    setMeta('og:locale', SEO_CONFIG.locale.replace('-', '_'), 'property');
    setMeta('og:image', image, 'property');
    setMeta('og:image:alt', `${SEO_CONFIG.siteName} — ${SEO_CONFIG.tagline}`, 'property');

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:site', SEO_CONFIG.twitterHandle);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
    setMeta('twitter:image:alt', `${SEO_CONFIG.siteName} — ${SEO_CONFIG.tagline}`);

    setLink('canonical', pageUrl);

    let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = JSON_LD_ID;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(buildJsonLd(title, description, pageUrl));
  }, [title, description, path, ogType, imagePath, noindex]);

  return null;
}
