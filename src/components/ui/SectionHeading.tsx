import { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`${align === 'center' ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-3 ${align === 'center' ? 'flex justify-center' : ''}`}>
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-fr-accent">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-fr-text tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-fr-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
