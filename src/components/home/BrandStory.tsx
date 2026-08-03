import { motion } from 'framer-motion';
import { ArrowRight, Sprout } from 'lucide-react';
import { IMG } from '@/data/images';
import { BRAND_STORY } from '@/data/content';
import { useLang, L } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

export function BrandStory() {
  const { t } = useLang();

  const POINTS = [
    L(
      'ቡናን በ850 ዓ.ም. አካባቢ ባገኘው እረኛ ካልዲ ስም የተሰየመ',
      'Named after Kaldi — the goatherd who discovered coffee c. 850 CE',
    ),
    L(
      'በ2005 በፀደይ አስራት እና በኤልያስ ከተማ የተመሰረተ',
      'Founded in 2005 by Tsedey Asrat & Elias Ketema',
    ),
    L('በመላ ኢትዮጵያ ከ33 በላይ ካፌዎች', '33+ cafés across Ethiopia'),
    L(
      'ሁሉም ሠራተኛ በካልዲስ የሥልጠና ማዕከል የሰለጠነ',
      "Every employee trained at the Kaldi's training center",
    ),
  ];

  return (
    <section id="story" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-light" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Imagery collage */}
        <Reveal className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <SmartImage
                src={IMG.brandStory}
                alt={t(L('የካልዲስ ታሪክ ምስል', "Inside Kaldi's — where our story began"))}
                className="aspect-[4/5] w-full sm:aspect-[5/6]"
              />
            </div>
            {/* Overlapping secondary image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-10 -right-4 w-2/5 overflow-hidden rounded-3xl border-4 border-cream shadow-lift sm:-right-8"
            >
              <SmartImage src={IMG.ceremony} alt={t(L('የኢትዮጵያ የጅብና ቡና ሥነ ሥርዓት', 'Ethiopian jebena coffee ceremony'))} className="aspect-square w-full" />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -top-6 left-6 flex items-center gap-3 rounded-2xl bg-prussian px-5 py-4 text-cream shadow-lift"
            >
              <Sprout className="h-8 w-8 text-gold-400" />
              <div>
                <p className="font-display text-2xl font-semibold leading-none">2005</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-white/60">
                  {t(L('ከመጀመሪያ ቀን ጀምሮ እያገለገልን', 'Serving since day one'))}
                </p>
              </div>
            </motion.div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-600">
              {t(L('ታሪካችን', 'Our Story'))}
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-espresso-900 sm:text-5xl">
              {t(L('አፈ-ታሪኩ', 'The legend who gave'))}{' '}
              <span className="italic text-gold-600">{t(L('ቡና ስሙን ያገኘበት', 'coffee its name'))}</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-espresso-700/85">{t(BRAND_STORY.intro)}</p>
            <p className="mt-4 leading-relaxed text-espresso-700/85">{t(BRAND_STORY.sourcing)}</p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 space-y-4">
              {POINTS.map((point) => (
                <li key={point.en} className="flex items-center gap-3 text-espresso-800">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-gold-600">
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6.5 4.5 9 10 3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[15px]">{t(point)}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Button to="/about" variant="dark" size="lg">
                {t(L('ሙሉ ታሪካችንን ያንብቡ', 'Read Our Full Story'))}{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <span className="font-ethiopic text-sm text-espresso-500">
                ቡና የተወለደበት ቦታ
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
