import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  sm: 'p-5',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({ children, className = '', hover = true, padding = 'md' }: CardProps) {
  return (
    <div className={`card-fr ${hover ? 'hover:translate-y-[-2px]' : ''} ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
}
