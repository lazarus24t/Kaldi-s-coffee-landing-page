import { motion } from 'framer-motion';
import { Award, Coffee, HandHeart, Landmark, Recycle, Users } from 'lucide-react';
import { MILESTONES, BRAND_STORY, FOUNDERS, TIMELINE, VALUES, KEY_PEOPLE } from '@/data/content';
import { IMG } from '@/data/images';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Reveal, RevealStagger, itemVariants } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SmartImage } from '@/components/ui/SmartImage';
import { Button } from '@/components/ui/Button';

const VALUE_ICONS: Record<string, typeof Landmark> = {
  heritage: Landmark,
  quality: Coffee,
  community: Users,
  sustainability: Recycle,
  hospitality: HandHeart,
};

export default function AboutPage() {
  const { t } = useLang();

  return (
    <>
      <Seo
        title={L('ታሪካችን — ካልዲስ ኮፊ | ከ2005 ጀምሮ', 'Our Story — Kaldi\'s Coffee | Since 2005')}
        description={L(
          'በአፈ-ታሪክ እረኛው ካልዲ ስም የተሰየመው ካልዲስ ኮፊ ከ2005 ጀምሮ የኢትዮጵያ የቡና ቤት ሰንሰለት ነው። መስራቾቻችንን፣ የጊዜ መስመራችንን እና እሴቶቻችንን ይወቁ።',
          "Named after the legendary goatherd Kaldi, Kaldi's Coffee has been Ethiopia's premier coffee house chain since 2005. Meet our founders, our timeline and our values.",
        )}
        path="/about"
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-espresso-950 pb-24 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <img
          src={IMG.highlands}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('ታሪካችን', 'Our Story · ታሪካችን'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-white sm:text-6xl">
            {t(L('ከአንድ ካፌ ወደ', 'From a single café to the'))}{' '}
            <span className="italic text-gold-300">{t(L('የኢትዮጵያ ልብ ምት', 'heartbeat of Ethiopia'))}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            {t(BRAND_STORY.intro)}
          </p>
        </div>
      </header>

      {/* Sourcing */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <img
              src={IMG.valley}
              alt={t(L('የኢትዮጵያ ሸለቆ መልክዓ ምድር', 'Ethiopian valley landscape'))}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-600">
              {t(L('ከእርሻ እስከ ጽዋ', 'Farm to Cup'))}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-espresso-900">
              {t(L('ቡናን አናስመጣም።', "We don't import coffee."))}{' '}
              <span className="italic text-gold-600">{t(L('እናከብረዋለን።', 'We honor it.'))}</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-espresso-700/85">{t(BRAND_STORY.sourcing)}</p>
            <p className="mt-4 leading-relaxed text-espresso-700/85">{t(BRAND_STORY.sustainability)}</p>
            <div className="mt-8">
              <Button to="/shop" variant="dark" size="lg">
                {t(L('ራስዎ ይቅመሱ', 'Taste It Yourself'))}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-sand py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t(L('ጉዞው', 'The Journey'))}
            title={t(L('ሁለት አስርት ዓመታት', 'Two decades of'))}
            accent={t(L('ጥሩ ቡና', 'the good stuff'))}
          />
          <div className="relative mt-16">
            <div className="absolute bottom-0 left-[13px] top-0 w-px bg-gradient-to-b from-gold-500/0 via-gold-500/60 to-gold-500/0" />
            <ol className="space-y-12">
              {TIMELINE.map((event, i) => (
                <motion.li
                  key={event.year}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-60px' }}
                  className="relative pl-12"
                >
                  <span className="absolute left-0 top-1 grid h-7 w-7 place-items-center rounded-full border-2 border-gold-500 bg-cream text-[10px] font-bold text-gold-700">
                    {i + 1}
                  </span>
                  <p className="font-accent text-xs font-bold uppercase tracking-widest2 text-gold-600">
                    {event.year}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-semibold text-espresso-900">
                    {t(event.title)}
                  </h3>
                  <p className="mt-2 leading-relaxed text-espresso-700/80">{t(event.text)}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t(L('መስራቾቹ', 'The Founders'))}
            title={t(L('ፀደይ እና ኤልያስ —', 'Tsedey & Elias —'))}
            accent={t(L('ሁለት ጽዋ፣ አንድ ህልም', 'two cups, one dream'))}
          />
          <RevealStagger className="mt-14 grid gap-8 md:grid-cols-2">
            {FOUNDERS.map((founder) => (
              <motion.article
                key={founder.name}
                variants={itemVariants}
                className="group flex flex-col items-center gap-7 rounded-[2rem] bg-white p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift sm:flex-row sm:text-left"
              >
                <div className="relative shrink-0">
                  <SmartImage
                    src={founder.image}
                    alt={t(L(`የ${founder.name} ምስል`, `Portrait of ${founder.name}`))}
                    className="h-36 w-36 rounded-3xl object-cover ring-4 ring-gold-500/20"
                  />
                  <span className="absolute -bottom-2 -right-2 grid h-10 w-10 place-items-center rounded-full bg-gold-500 text-espresso-950">
                    <Coffee className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-espresso-900">
                    {founder.name}
                  </h3>
                  <p className="mt-1 font-accent text-xs font-semibold uppercase tracking-widest text-gold-600">
                    {t(founder.role)}
                  </p>
                  <p className="mt-3 leading-relaxed text-espresso-700/80">{t(founder.bio)}</p>
                </div>
              </motion.article>
            ))}
          </RevealStagger>

          {/* Key people */}
          <Reveal delay={0.15} className="mt-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-600">
                {t(L('ቁልፍ ሰዎች', 'Key People'))}
              </span>
              {KEY_PEOPLE.map((person) => (
                <span
                  key={person.name}
                  className="rounded-full border border-espresso-900/10 bg-white px-4 py-2 text-sm text-espresso-800 shadow-soft"
                >
                  <span className="font-semibold">{person.name}</span>
                  <span className="text-espresso-600"> — {t(person.role)}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-espresso-950 py-24 sm:py-32 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            dark
            eyebrow={t(L('የምንቆምበት', 'What We Stand For'))}
            title={t(L('በዓላማ', 'Brewed with'))}
            accent={t(L('የተበሰለ', 'purpose'))}
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((value) => {
              const Icon = VALUE_ICONS[value.icon];
              return (
                <motion.div
                  key={value.title.en}
                  variants={itemVariants}
                  className="glass rounded-3xl p-7 text-center transition-transform duration-500 hover:-translate-y-2"
                >
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl text-cream">{t(value.title)}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/60">{t(value.text)}</p>
                </motion.div>
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-cream py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow={t(L('ታሪካዊ ደረጃዎች', 'Milestones'))}
            title={t(L('ሁለት አስርት ዓመታት፣', 'Two decades,'))}
            accent={t(L('አንድ ታሪክ', 'one story'))}
          />
          <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((milestone) => (
              <motion.div
                key={milestone.title.en}
                variants={itemVariants}
                className="group rounded-3xl border border-espresso-900/8 bg-white p-8 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-gold-300 to-gold-600 text-espresso-950 shadow-gold transition-transform duration-500 group-hover:scale-110">
                  <Award className="h-7 w-7" />
                </span>
                <p className="mt-5 font-display text-4xl font-semibold text-prussian">{milestone.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-espresso-900">
                  {t(milestone.title)}
                </h3>
                <p className="mt-1.5 text-sm text-espresso-600">{t(milestone.org)}</p>
              </motion.div>
            ))}
          </RevealStagger>

          <Reveal delay={0.2} className="mt-16 text-center">
            <p className="mx-auto max-w-2xl font-display text-2xl italic text-espresso-700">
              “{t(L('እያንዳንዱ ጽዋ ቡና የተወለደበትን ምድር ያከብራል — ከካልዲ አፈ-ታሪክ እስከ በካፌዎቻችን ውስጥ የሚደረገው የጅብና ሥነ ሥርዓት።', 'Every cup honors the land where coffee was born — from the legend of Kaldi to the jebena ceremonies in our cafés.'))}”
            </p>
            <p className="mt-3 font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-600">
              — {t(L('የካልዲስ ታሪክ', "The Kaldi's Story"))}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
