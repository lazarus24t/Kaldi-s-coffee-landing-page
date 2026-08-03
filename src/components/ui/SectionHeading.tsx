import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  accent?: string; // gold/italic portion appended to the title
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

/** Standard section header used across every page. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = 'center',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      <p
        className={cn(
          'font-accent text-xs font-semibold uppercase tracking-widest2',
          dark ? 'text-gold-400' : 'text-gold-600',
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          'mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl',
          dark ? 'text-cream' : 'text-espresso-900',
        )}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className={cn('italic', dark ? 'text-gold-300' : 'text-gold-600')}>{accent}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-lg',
            dark ? 'text-white/70' : 'text-espresso-700/80',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
