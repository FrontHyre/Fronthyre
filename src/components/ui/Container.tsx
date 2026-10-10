import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article' | 'nav' | 'footer' | 'header';
  id?: string;
}

export default function Container({ children, className = '', as: Tag = 'div', id }: ContainerProps) {
  return (
    <Tag id={id} className={`w-full max-w-[1200px] mx-auto px-6 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
