import Logo from '@/components/brand/Logo';

interface FronthyreBrandLockupProps {
  className?: string;
}

/** Buildathon partner pill — icon + wordmark only (no tagline), badge size */
export default function FronthyreBrandLockup({ className = '' }: FronthyreBrandLockupProps) {
  return (
    <Logo
      to="/"
      size="badge"
      showTagline={false}
      showStatus={false}
      className={className}
    />
  );
}
