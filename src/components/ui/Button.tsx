import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

interface ButtonAsButton extends BaseProps {
  to?: undefined;
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

interface ButtonAsLink extends BaseProps {
  to: string;
  href?: undefined;
}

interface ButtonAsAnchor extends BaseProps {
  href: string;
  to?: undefined;
}

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-fr-accent text-fr-bg font-semibold hover:bg-cyan-300 active:bg-cyan-400 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40',
  secondary:
    'bg-fr-card text-fr-text font-semibold border border-fr-border hover:border-fr-border-hover hover:bg-fr-elevated',
  ghost:
    'text-fr-secondary hover:text-fr-text font-medium',
  outline:
    'bg-transparent text-fr-text font-semibold border border-fr-border hover:border-fr-accent hover:text-fr-accent',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-7 py-3.5 text-base rounded-xl',
};

export default function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    leftIcon,
    rightIcon,
    fullWidth = false,
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 select-none whitespace-nowrap ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {content}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  const btnProps = props as ButtonAsButton;
  return (
    <button
      type={btnProps.type ?? 'button'}
      onClick={btnProps.onClick}
      disabled={btnProps.disabled}
      className={`${classes} disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {content}
    </button>
  );
}
