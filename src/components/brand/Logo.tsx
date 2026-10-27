import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';

export const FRONTHYRE_LOGO_SRC =
  '/assets/brand/Fronthyre_LOGO_FINAL_-_NEW_-_TRANSPARENT_BG.png';

/** Wordmark + icon without tagline — compact lockups (e.g. Buildathon partner bar) */
export const FRONTHYRE_WORDMARK_SRC = '/assets/brand/Fronthyre_NAME_WITH_LOGO.png';

interface LogoProps {
  to?: string;
  showStatus?: boolean;
  className?: string;
  variant?: 'header' | 'footer';
}

const imageVariantClasses: Record<NonNullable<LogoProps['variant']>, string> = {
  header:
    'h-8 w-auto max-w-[min(46vw,168px)] sm:max-w-[200px] sm:h-9 md:max-w-[260px] md:h-10',
  footer:
    'h-10 w-auto max-w-[min(72vw,220px)] sm:h-12 sm:max-w-[280px] md:max-w-[340px]',
};

export default function Logo({
  to = '/',
  showStatus = true,
  className = '',
  variant = 'header',
}: LogoProps) {
  const imageClass = imageVariantClasses[variant];

  return (
    <Link
      to={to}
      className={`inline-flex min-w-0 max-w-full items-center gap-2 group ${className}`}
      aria-label="Fronthyre home"
    >
      <img
        src={FRONTHYRE_LOGO_SRC}
        alt="Fronthyre — Frontend talent. Better opportunities."
        width={340}
        height={80}
        decoding="async"
        className={`shrink object-contain object-left transition-opacity group-hover:opacity-80 ${imageClass}`}
      />
      {showStatus && (
        <span className="hidden shrink-0 sm:inline-block text-[10px] font-mono font-semibold uppercase tracking-widest text-fr-muted px-1.5 py-0.5 rounded border border-fr-border">
          {SITE_CONFIG.status}
        </span>
      )}
    </Link>
  );
}
