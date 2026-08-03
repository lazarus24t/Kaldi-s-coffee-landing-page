import { ArrowRight, Heart, Phone } from 'lucide-react';
import { CAREER_FACTS, PERKS } from '@/data/jobs';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Reveal, RevealStagger, itemVariants } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function CareersPage() {
  const { t } = useLang();

  return (
    <>
      <Seo
        title={L('ሥራ — ካልዲስ ኮፊ | ቡድኑን ይቀላቀሉ', 'Careers — Kaldi\'s Coffee | Join the Herd')}
        description={L(
          'በኢትዮጵያ የቡና ቤት ሰንሰለት ሥራ ይገንቡ። እያንዳንዱ ሠራተኛ በካልዲስ የሥልጠና ማዕከል ይሰለጥናል፣ አብዛኞቹ ሥራ አስኪያጆች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል።',
          "Build a career at Ethiopia's coffee house chain. Every employee trains at the Kaldi's training center, and most managers started as waiters and cashiers.",
        )}
        path="/careers"
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-espresso-950 pb-24 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('ሥራ', 'Careers · ሥራ'))}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {t(L('ከኢትዮጵያ', "Grow with Ethiopia's"))}{' '}
            <span className="italic text-gold-300">{t(L('የቡና ቤት ሰንሰለት ጋር ያድጉ', 'homegrown coffee chain'))}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {t(
              L(
                'በ2016 ከ30 ካፌዎች እና 1,800 ሠራተኞች ጀምሮ ዛሬ ከ33 በላይ ቅርንጫፎች ድረስ — እያንዳንዱ የካልዲስ ቡድን አባል በኩባንያው የሥልጠና ማዕከል ይሰለጥናል፣ አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች ከመሬት ጀምረዋል።',
                'From 30 cafés and 1,800 employees in 2016 to 33+ locations today — every Kaldi\'s team member trains at the company training center, and most managers and supervisors started on the floor.',
              ),
            )}
          </p>
        </div>
      </header>

      {/* Culture image strip */}
      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <SmartImage
                src={CAREER_FACTS[0].image}
                alt={t(L('በካልዲስ ካፌ ውስጥ', "Inside a Kaldi's café"))}
                className="aspect-[16/10] w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex h-full flex-col justify-center">
              <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-600">
                {t(L('ለምን ካልዲስ', "Why Kaldi's"))}
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso-900">
                {t(L('ሰዎችን የምናሳድገው', 'We grow people the way'))}{' '}
                <span className="italic text-gold-600">{t(L('ቡናን በምናሳድገው', 'we grow coffee'))}</span>{' '}
                {t(L('መንገድ — በትዕግስት እና በኩራት', '— with patience and pride'))}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-espresso-700/85">
                {t(
                  L(
                    'እያንዳንዱ ሠራተኛ ወደ ቅርንጫፍ ከመቀላቀል በፊት የካልዲስ የሥልጠና ማዕከልን ያልፋል። አብዛኞቹ ሥራ አስኪያጆች እና ተቆጣጣሪዎች በአገልጋይነት እና በገንዘብ ጠባቂነት ጀምረዋል — ጠንክሮ ለሚሰራ ሁሉ ከመሬት ወደ አመራር መንገዱ ክፍት ነው።',
                    "Every employee goes through the Kaldi's training center before joining a branch. Most of our managers and supervisors started as waiters and cashiers — the path from the floor to leadership is open to everyone who puts in the work.",
                  ),
                )}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Career facts */}
        <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CAREER_FACTS.map((fact) => (
              <motion.div
                key={fact.title.en}
                variants={itemVariants}
                className="group overflow-hidden rounded-3xl border border-espresso-900/8 bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative h-36 overflow-hidden">
                  <SmartImage
                    src={fact.image}
                    alt={t(fact.title)}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">
                    {t(fact.title)}
                  </h3>
                </div>
                <p className="p-5 text-sm leading-relaxed text-espresso-700/80">{t(fact.text)}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Perks */}
        <div className="mx-auto mt-16 max-w-7xl px-5 sm:px-8">
          <RevealStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk) => (
              <motion.div
                key={perk.title.en}
                variants={itemVariants}
                className="rounded-3xl border border-espresso-900/8 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-prussian text-gold-400">
                  <Heart className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-espresso-900">
                  {t(perk.title)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-700/80">{t(perk.text)}</p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* How to apply */}
      <section className="bg-sand py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t(L('ክፍት የሥራ ቦታዎች', 'Open Positions'))}
            title={t(L('ሁልጊዜ', "We're always"))}
            accent={t(L('ጥሩ ሰዎችን እንቀጥራለን', 'hiring good people'))}
            description={t(
              L(
                'ካልዲስ መደበኛ የሥራ መድረክ አያትም። በቀጥታ ወደ ዋና ቅርንጫፋችን ይገናኙ — ስለራስዎ ይንገሩን እኛ እንቀጥላለን።',
                "Kaldi's doesn't publish a formal job board. Reach out directly to our flagship branch — tell us about yourself and we'll take it from there.",
              ),
            )}
          />

          <Reveal delay={0.2} className="mt-14 text-center">
            <div className="flex flex-col items-center gap-4">
              <p className="text-espresso-700/75">
                {t(L('የእርስዎን ሥራ አላዩም?', "Don't see your role?"))}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+251113714258"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 px-8 py-4 font-accent text-sm font-bold uppercase tracking-widest text-espresso-950 shadow-gold transition-all duration-300 hover:brightness-110 active:scale-95"
                >
                  <Phone className="h-4 w-4" /> {t(L('ዋና ቅርንጫፉን ይደውሉ', 'Call the Flagship'))}
                </a>
                <Button to="/contact" variant="dark" size="lg">
                  {t(L('በአግኙን ገጽ ይገናኙ', 'Reach Out Via the Contact Page'))}{' '}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
