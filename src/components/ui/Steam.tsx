import { useMemo } from 'react';
import { cn } from '@/lib/utils';

interface SteamProps {
  count?: number;
  className?: string;
  /** Tailwind size, e.g. 'w-40' — width of the steam column */
  widthClass?: string;
}

/** Decorative rising steam rendered as animated gradient wisps. */
export function Steam({ count = 3, className, widthClass = 'w-36' }: SteamProps) {
  const wisps = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${8 + i * 30}%`,
        delay: `${i * 1.6}s`,
        duration: `${4.5 + (i % 3)}s`,
      })),
    [count],
  );

  return (
    <div aria-hidden className={cn('relative h-24 overflow-visible', widthClass, className)}>
      {wisps.map((wisp) => (
        <span
          key={wisp.id}
          className="absolute bottom-0 h-16 w-4 rounded-full bg-gradient-to-t from-gold-500/0 via-gold-300/50 to-gold-500/0 blur-[6px]"
          style={{
            left: wisp.left,
            animation: `steam ${wisp.duration} ease-out infinite`,
            animationDelay: wisp.delay,
          }}
        />
      ))}
    </div>
  );
}
