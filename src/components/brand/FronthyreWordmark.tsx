export const FRONTHYRE_WORDMARK_TEXT_SRC = '/assets/brand/fronthyre-wordmark.png';

interface FronthyreWordmarkProps {
  className?: string;
}

/** "Fronthyre" text only (no icon). */
export default function FronthyreWordmark({ className = '' }: FronthyreWordmarkProps) {
  return (
    <img
      src={FRONTHYRE_WORDMARK_TEXT_SRC}
      alt=""
      width={320}
      height={52}
      decoding="async"
      className={`block shrink-0 object-contain object-[left_center] ${className}`}
      aria-hidden
    />
  );
}
