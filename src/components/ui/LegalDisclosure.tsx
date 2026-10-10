import { ReactNode } from 'react';
import { Info, ExternalLink, ShieldCheck, AlertTriangle } from 'lucide-react';

type Variant = 'info' | 'external' | 'privacy' | 'warning';

interface LegalDisclosureProps {
  variant?: Variant;
  title: string;
  children: ReactNode;
  className?: string;
}

const variantConfig: Record<Variant, { icon: typeof Info; iconClass: string; cardClass: string }> = {
  info: {
    icon: Info,
    iconClass: 'text-fr-accent',
    cardClass: 'bg-cyan-500/5 border-cyan-500/15',
  },
  external: {
    icon: ExternalLink,
    iconClass: 'text-fr-accent',
    cardClass: 'bg-blue-500/5 border-blue-500/15',
  },
  privacy: {
    icon: ShieldCheck,
    iconClass: 'text-fr-success',
    cardClass: 'bg-emerald-500/5 border-emerald-500/15',
  },
  warning: {
    icon: AlertTriangle,
    iconClass: 'text-fr-warning',
    cardClass: 'bg-amber-500/5 border-amber-500/20',
  },
};

export default function LegalDisclosure({
  variant = 'info',
  title,
  children,
  className = '',
}: LegalDisclosureProps) {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <div className={`flex items-start gap-3 p-4 sm:p-5 rounded-xl border ${config.cardClass} ${className}`}>
      <Icon size={18} className={`${config.iconClass} flex-shrink-0 mt-0.5`} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-fr-text">{title}</p>
        <div className="mt-1.5 text-sm text-fr-secondary leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
