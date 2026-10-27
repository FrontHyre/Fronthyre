interface SkillBadgeProps {
  label: string;
  className?: string;
}

export default function SkillBadge({ label, className = '' }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 text-sm font-medium rounded-lg bg-fr-card border border-fr-border text-fr-secondary hover:border-fr-accent hover:text-fr-accent transition-colors duration-200 ${className}`}
    >
      {label}
    </span>
  );
}
