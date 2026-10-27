import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';
import { FRONTHYRE_PARTNER_LOCKUP_HEIGHT_CLASS } from '@/components/brand/partnerLockup';

export const FRONTHYRE_LOGO_SRC =
  '/assets/brand/Fronthyre_LOGO_FINAL_-_NEW_-_TRANSPARENT_BG.png';

export const FRONTHYRE_ICON_SRC = '/assets/brand/fronthyre_logo_icon.png';
export const FRONTHYRE_NAME_SRC = '/assets/brand/fronthyre_name.png';
export const FRONTHYRE_TAGLINE_IMG_SRC = '/assets/brand/fronthyre_tagline.png';

/** @deprecated Use split icon + name assets */
export const FRONTHYRE_WORDMARK_SRC = '/assets/brand/Fronthyre_NAME_WITH_LOGO.png';

export type LogoSize = 'default' | 'compact' | 'badge';

interface LogoProps {
  to?: string;
  showStatus?: boolean;
  showTagline?: boolean;
  size?: LogoSize;
  /** Maps to size when `size` is omitted */
  variant?: 'header' | 'footer';
  className?: string;
}

function resolveSize(size: LogoSize | undefined, variant: LogoProps['variant']): LogoSize {
  if (size) return size;
  return variant === 'header' ? 'compact' : 'default';
}

export default function Logo({
  to = '/',
  showStatus = true,
  showTagline = true,
  size,
  variant = 'header',
  className = '',
}: LogoProps) {
  const resolved = resolveSize(size, variant);
  const isCompact = resolved === 'compact';
  const isBadge = resolved === 'badge';

  const iconClass = isBadge
    ? FRONTHYRE_PARTNER_LOCKUP_HEIGHT_CLASS
    : isCompact
      ? 'h-[38px]'
      : 'h-11 md:h-14';

  const textColWidth = isBadge || isCompact ? 'w-[120px]' : 'w-[140px] md:w-[180px]';
  const rowGap = isBadge ? 'gap-1.5' : isCompact ? 'gap-2.5' : 'gap-3';
  const nameOnlyHeight = isBadge ? FRONTHYRE_PARTNER_LOCKUP_HEIGHT_CLASS : isCompact ? 'h-[38px]' : 'h-11 md:h-14';

  return (
    <Link
      to={to}
      className={`group inline-flex max-w-full shrink-0 items-center ${rowGap} transition-opacity hover:opacity-90 ${className}`}
      aria-label={`${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`}
    >
      <img
        src={FRONTHYRE_ICON_SRC}
        alt=""
        width={56}
        height={56}
        decoding="async"
        className={`${iconClass} w-auto shrink-0 object-contain transition-opacity group-hover:opacity-80`}
        aria-hidden
      />
      {showTagline ? (
        <span className={`flex shrink-0 flex-col items-start gap-[5px] ${textColWidth}`}>
          <img
            src={FRONTHYRE_NAME_SRC}
            alt=""
            width={180}
            height={40}
            decoding="async"
            className="block h-auto w-full object-contain transition-opacity group-hover:opacity-80"
            aria-hidden
          />
          <img
            src={FRONTHYRE_TAGLINE_IMG_SRC}
            alt=""
            width={180}
            height={20}
            decoding="async"
            className="block h-auto w-full object-contain transition-opacity group-hover:opacity-80"
            aria-hidden
          />
        </span>
      ) : (
        <img
          src={FRONTHYRE_NAME_SRC}
          alt=""
          width={180}
          height={40}
          decoding="async"
          className={`${nameOnlyHeight} w-auto shrink-0 object-contain transition-opacity group-hover:opacity-80`}
          aria-hidden
        />
      )}
      {showStatus && (
        <span className="ml-1 hidden shrink-0 rounded border border-fr-border px-1 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-widest text-fr-muted sm:inline-block">
          {SITE_CONFIG.status}
        </span>
      )}
    </Link>
  );
}
