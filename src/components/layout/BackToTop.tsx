import { useCallback, useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const SHOW_AFTER_PX = 320;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border-2 border-fr-accent bg-fr-card/95 text-fr-accent shadow-lg shadow-cyan-500/15 backdrop-blur-md transition-all duration-300 hover:bg-fr-accent hover:text-fr-bg focus:outline-none focus-visible:ring-2 focus-visible:ring-fr-accent focus-visible:ring-offset-2 focus-visible:ring-offset-fr-bg sm:bottom-8 sm:right-8 sm:h-12 sm:w-12 animate-fade-in"
    >
      <ChevronUp size={22} strokeWidth={2.25} aria-hidden />
    </button>
  );
}
