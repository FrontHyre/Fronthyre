import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
  icon?: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-fr-card text-fr-secondary border border-fr-border',
  accent: 'bg-cyan-500/10 text-fr-accent border border-cyan-500/20',
  success: 'bg-emerald-500/10 text-fr-success border border-emerald-500/20',
  warning: 'bg-amber-500/10 text-fr-warning border border-amber-500/20',
  outline: 'bg-transparent text-fr-text border border-fr-border',
};

export default function Badge({ children, variant = 'default', className = '', icon }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
