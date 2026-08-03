import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Coffee, Leaf } from 'lucide-react';
import { IMG } from '@/data/images';
import { useLang, L } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const STEPS: { icon: typeof Flame; title: ReturnType<typeof L>; text: ReturnType<typeof L> }[] = [
  {
    icon: Flame,
    title: L('መጥበስ', 'Roast'),
    text: L('አረንጓዴ ፍሬ በፍም ላይ ይጠበሳል፣ መዓዛው ክፍሉን ሲሞላ።', 'Green beans roasted over coals while the aroma fills the room.'),
  },
  {
    icon: Coffee,
    title: L('ማፍላት', 'Brew'),
    text: L('በእጅ የተፈጨ ቡና በሸክላ ጅብና ውስጥ ቀስ ብሎ ይፈላል።', 'Hand-ground coffee brewed slowly in a clay jebena.'),
  },
  {
    icon: Leaf,
    title: L('ማቅረብ', 'Serve'),
    text: L('ከፍ ካለ ቦታ ወደ ትንንሽ ሲኒ ጽዋዎች ይፈስሳል፣ ለመካፈል ፎሽ ጋር።', 'Poured from a height into small sini cups, with popcorn to share.'),
  },
];

export function Ceremony() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso-950 py-28 sm:py-36 grain">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        <img
          src={IMG.ceremony}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950 via-espresso-950/40 to-espresso-950" />
      </motion.div>

      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('የጅብና ቡና ሥነ ሥርዓት', 'The Jebena Buna Ceremony'))}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-cream sm:text-6xl">
            {t(L('በምድር ላይ ካሉት', 'A ritual older than'))}{' '}
            <span className="italic text-gold-300">{t(L('ሁሉም ካፌዎች የቆየ', 'every café on earth'))}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            {t(
              L(
                'በኢትዮጵያ ቡና መጠጥ ብቻ አይደለም — ግብዣ ነው። ሥነ ሥርዓታችን የባህሉን ሦስት ዙሮች ያከብራል፡ ',
                'In Ethiopia, coffee is never just a drink — it is an invitation. Our ceremonies honor the three rounds of tradition: ',
              ),
            )}
            <em className="text-gold-300">abol</em>, <em className="text-gold-300">tona</em>{' '}
            {t(L('እና', 'and'))} <em className="text-gold-300">baraka</em>.
            {t(
              L(' ለመጀመሪያው ጽዋ ይምጡ፣ ለበረከቱ ይቆዩ።', ' Come for the first cup, stay for the blessing.'),
            )}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.title.en} delay={i * 0.12}>
              <div className="glass flex h-full flex-col items-center rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-2">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                  <step.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-cream">{t(step.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{t(step.text)}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-12">
            <Button to="/locations" size="lg" variant="gold">
              {t(L('ቅርብ ያለ ቅርንጫፍ ያግኙ', 'Find a Branch Near You'))}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
