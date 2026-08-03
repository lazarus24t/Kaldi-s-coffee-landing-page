import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type Variant = 'gold' | 'outline' | 'glass' | 'dark';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  gold: 'bg-gradient-to-br from-gold-400 via-gold-500 to-gold-700 text-espresso-950 font-semibold shadow-gold hover:shadow-[0_18px_60px_-12px_rgba(201,162,39,0.7)] hover:brightness-110',
  outline:
    'border border-white/30 text-white hover:bg-white/10 hover:border-white/60 backdrop-blur-sm',
  glass: 'bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20',
  dark: 'bg-espresso-900 text-cream hover:bg-espresso-800 shadow-soft',
};

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm sm:text-base',
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

/** Pill button — renders a router <Link>, an <a>, or a <button>. */
export function Button({
  children,
  variant = 'gold',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  className,
  disabled,
}: ButtonProps) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2 rounded-full font-accent tracking-wide transition-all duration-300 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
