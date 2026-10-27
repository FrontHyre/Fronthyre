import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to top (or hash target) on client-side navigation so footer/header links
 * land at the start of each page instead of preserving prior scroll position.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
}
