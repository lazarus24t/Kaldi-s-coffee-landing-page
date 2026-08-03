import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown, MapPin } from 'lucide-react';
import { IMG } from '@/data/images';
import { STATS } from '@/data/content';
import { useLang, L } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';

const EASE = [0.22, 1, 0.36, 1] as const;

/** Splits "Where Coffee Was Born" into per-letter reveals (English only —
    Amharic words render whole with a soft fade so the script stays legible). */
function SplitHeadline() {
  const { lang } = useLang();
  const isAm = lang === 'am';
  const headline = isAm ? 'ቡና የተወለደበት ቦታ' : 'Where Coffee Was Born';
  const words = headline.split(' ');

  return (
    <h1
      className={`font-display font-semibold leading-[0.95] tracking-tight text-white ${
        isAm ? 'text-[9vw] sm:text-6xl lg:text-7xl' : 'text-[13vw] sm:text-7xl lg:text-8xl'
      }`}
    >
      {words.map((word, wi) =>
        isAm ? (
          <motion.span
            key={word}
            className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 + wi * 0.16, ease: EASE }}
          >
            {word}
          </motion.span>
        ) : (
          <span key={word} className="mr-[0.28em] inline-block whitespace-nowrap last:mr-0">
            {word.split('').map((char, ci) => (
              <motion.span
                key={`${word}-${ci}`}
                className="inline-block"
                initial={{ opacity: 0, y: 48, rotate: 6 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.85, delay: 0.35 + (wi * 0.16 + ci * 0.045), ease: EASE }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ),
      )}
      <motion.span
        className="mt-2 block text-[0.34em] font-medium italic text-gold-300"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
      >
        {isAm ? '— Where Coffee Was Born' : '— ቡና የተወለደበት ቦታ'}
      </motion.span>
    </h1>
  );
}

export function Hero() {
  const { t } = useLang();
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(-600);
  const my = useMotionValue(-600);
  const sx = useSpring(mx, { stiffness: 60, damping: 25 });
  const sy = useSpring(my, { stiffness: 60, damping: 25 });
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${sx}px ${sy}px, rgba(201,162,39,0.10), transparent 65%)`;

  function onMove(e: React.MouseEvent) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso-950"
    >
      {/* Ken Burns backdrop */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={IMG.heroCafe}
          alt={t(L('የካልዲስ ቡና ካፌ ውስጥ — ሞቃት እና እንግዳ ተቀባይ', 'Inside a Kaldi’s Coffee café — warm and inviting'))}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.18 }}
          transition={{ duration: 26, ease: 'easeOut' }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden />
      <div className="absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />

      {/* Mouse spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 sm:px-8 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
          </span>
          <span className="font-accent text-[11px] font-semibold uppercase tracking-widest2 text-white/90">
            {t(L('የኢትዮጵያ የቡና ቤት ሰንሰለት · ከ2005 ጀምሮ', "Ethiopia's Coffee House Chain · Since 2005"))}
          </span>
        </motion.div>

        <SplitHeadline />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.0, ease: EASE }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
        >
          {t(
            L(
              'በዘላቂነት የሚገኝ። በባለሙያነት የሚጠበስ። በፍጹምነት የሚዘጋጅ።',
              'Sustainably sourced. Expertly roasted. Perfectly brewed.',
            ),
          )}
          <span className="mt-2 block text-base text-white/60">
            {t(
              L(
                'ከይርጋቸፌ ደጋማ ቦታዎች እስከ ጽዋዎ — በመላ ኢትዮጵያ ከ33 በላይ ካፌዎች።',
                'From the highlands of Yirgacheffe to your cup — 33+ cafés across Ethiopia.',
              ),
            )}
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button to="/menu" size="lg">
            {t(L('አሁን ያዙዙ', 'Order Now'))}
          </Button>
          <Button to="/locations" variant="outline" size="lg">
            <MapPin className="h-4 w-4" /> {t(L('ቅርንጫፍ ያግኙ', 'Find a Location'))}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.4, ease: EASE }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label.en} className="flex flex-col">
              <dt className="order-2 mt-1 text-xs uppercase tracking-wide text-white/50">
                {t(stat.label)}
              </dt>
              <dd className="order-1 font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#story"
        aria-label={t(L('ወደ ታሪካችን ይሸብልሉ', 'Scroll to our story'))}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 right-6 z-10 hidden flex-col items-center gap-2 text-white/50 transition hover:text-white/90 md:flex"
      >
        <span className="font-accent text-[10px] uppercase tracking-widest2 [writing-mode:vertical-rl]">
          {t(L('ያሽከርክሩ', 'Scroll'))}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
