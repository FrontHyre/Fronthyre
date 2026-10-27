import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';
import FronthyreBrandLockup from '@/components/brand/FronthyreBrandLockup';

/** Full lockup — SEO / Open Graph */
export const FRONTHYRE_LOGO_SRC =
  '/assets/brand/Fronthyre_LOGO_FINAL_-_NEW_-_TRANSPARENT_BG.png';

/** Icon + text PNG lockup — legacy combined asset */
export const FRONTHYRE_WORDMARK_SRC = '/assets/brand/Fronthyre_NAME_WITH_LOGO.png';

interface LogoProps {
  to?: string;
  showStatus?: boolean;
  showTagline?: boolean;
  className?: string;
  variant?: 'header' | 'footer';
}

const taglineClass: Record<NonNullable<LogoProps['variant']>, string> = {
  header: 'text-[10px] sm:text-[11px] md:text-xs leading-snug text-fr-secondary',
  footer: 'text-xs sm:text-sm leading-snug text-fr-secondary',
};

export default function Logo({
  to = '/',
  showStatus = true,
  showTagline = true,
  className = '',
  variant = 'header',
}: LogoProps) {
  return (
    <Link
      to={to}
      className={`group inline-flex max-w-full shrink-0 flex-col items-start gap-1.5 transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`}
    >
      <span className="flex shrink-0 items-center gap-2">
        <FronthyreBrandLockup size={variant} />
        {showStatus && (
          <span className="hidden shrink-0 lg:inline-block rounded border border-fr-border px-1.5 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest text-fr-muted">
            {SITE_CONFIG.status}
          </span>
        )}
      </span>

      {showTagline && (
        <span className={`max-w-xs ${taglineClass[variant]}`}>{SITE_CONFIG.tagline}</span>
      )}
    </Link>
  );
}
