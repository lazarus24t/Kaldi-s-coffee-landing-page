import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const FALLBACK = '/images/placeholder.svg';

/**
 * <img> that swaps to a branded SVG placeholder if the remote
 * photograph fails to load (offline, dead link, etc.).
 */
export function SmartImage({ src, alt, className, loading = 'lazy', ...rest }: SmartImageProps) {
  const [current, setCurrent] = useState(src);
  const [failed, setFailed] = useState(false);

  return (
    <img
      src={failed ? FALLBACK : current}
      alt={alt}
      loading={loading}
      onError={() => {
        if (!failed) {
          setFailed(true);
          setCurrent(FALLBACK);
        }
      }}
      className={cn('object-cover', className)}
      {...rest}
    />
  );
}
