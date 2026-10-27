import { useState, useEffect } from 'react';
import { Cookie, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('fr_cookie_banner_dismissed');
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('fr_cookie_banner_dismissed', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <div className="rounded-2xl border border-fr-border bg-fr-bg/95 backdrop-blur-xl shadow-2xl p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie size={22} className="text-fr-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-fr-text">Cookie preferences</p>
                <p className="mt-1 text-xs text-fr-secondary leading-relaxed">
                  This website currently uses only strictly necessary cookies and local storage needed to operate the site and keep it secure. No analytics, advertising or tracking cookies are used. See our{' '}
                  <Link to="/cookie-policy" className="text-fr-accent hover:underline" onClick={dismiss}>Cookie Policy</Link>.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={dismiss}
                className="inline-flex items-center gap-2 rounded-xl bg-fr-accent px-5 py-2.5 text-sm font-semibold text-fr-bg hover:bg-cyan-300 transition-colors"
              >
                <Check size={16} /> OK
              </button>
              <button
                onClick={dismiss}
                className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-fr-border text-fr-secondary hover:text-fr-text hover:border-fr-border-hover transition-colors"
                aria-label="Dismiss cookie banner"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
