import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/config/site';

interface LogoProps {
  to?: string;
  showStatus?: boolean;
  className?: string;
}

export default function Logo({ to = '/', showStatus = true, className = '' }: LogoProps) {
  return (
    <Link to={to} className={`flex items-center gap-2 group ${className}`} aria-label="Fronthyre home">
      <img
        src="/assets/brand/Fronthyre_LOGO_FINAL_-_TRANSPARENT_BG.png"
        alt="Fronthyre"
        className="h-8 w-auto max-w-[150px] object-contain transition-opacity group-hover:opacity-80"
      />
      {showStatus && (
        <span className="hidden sm:inline-block text-[10px] font-mono font-semibold uppercase tracking-widest text-fr-muted px-1.5 py-0.5 rounded border border-fr-border">
          {SITE_CONFIG.status}
        </span>
      )}
    </Link>
  );
}
