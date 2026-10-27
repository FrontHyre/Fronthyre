export const FRONTHYRE_ICON_SRC = '/assets/brand/fronthyre-icon.png';

interface FronthyreIconProps {
  className?: string;
}

/** Brand icon only (separate from wordmark). */
export default function FronthyreIcon({ className = '' }: FronthyreIconProps) {
  return (
    <img
      src={FRONTHYRE_ICON_SRC}
      alt=""
      width={56}
      height={48}
      decoding="async"
      className={`block shrink-0 object-contain object-center ${className}`}
      aria-hidden
    />
  );
}
