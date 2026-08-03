import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Coffee, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { useLang, L } from '@/lib/i18n';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Testimonials() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const current = TESTIMONIALS[index];

  return (
    <section className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32 grain">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <SectionHeading
          dark
          eyebrow={t(L('ከደንበኛ ግምገማዎች', 'From Customer Reviews'))}
          title={t(L('እንግዶቻችን', 'What our guests'))}
          accent={t(L('የሚሉት', 'keep saying'))}
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto h-12 w-12 text-gold-500/30" aria-hidden />

          <div className="relative mt-6 min-h-[230px] sm:min-h-[190px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <blockquote className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-cream/95 sm:text-3xl">
                  “{t(current.quote)}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-gold-500/15 text-gold-300 ring-2 ring-gold-500/40">
                    <Coffee className="h-6 w-6" />
                  </span>
                  <span className="text-left">
                    <span className="block font-accent text-sm font-semibold tracking-wide text-white">
                      {t(current.name)}
                    </span>
                    <span className="block text-xs text-white/50">{t(current.role)}</span>
                  </span>
                  <span className="ml-2 flex gap-0.5" aria-label={`${current.rating} ${t(L('ኮከብ ደረጃ', 'star rating'))}`}>
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                    ))}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label={t(L('ቀዳሚ ግምገማ', 'Previous testimonial'))}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`${t(L('ወደ ግምገማ', 'Go to testimonial'))} ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === index ? 'w-8 bg-gold-400' : 'w-2 bg-white/25 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label={t(L('ቀጣይ ግምገማ', 'Next testimonial'))}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-gold-400 hover:text-gold-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
