import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin } from 'lucide-react';
import { BRANCHES, CITY_LABELS } from '@/data/locations';
import { useLang, L } from '@/lib/i18n';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealStagger, itemVariants } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { motion } from 'framer-motion';

export function LocationsPreview() {
  const { t } = useLang();
  const featured = BRANCHES.filter((b) => ['sarbet', 'bole-airport', 'bahirdar'].includes(b.id));

  return (
    <section className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(L('ያግኙን', 'Find Us'))}
          title={t(L('ከሳርቤት እስከ', 'From Sarbet to'))}
          accent={t(L('ጣና ሐይቅ', 'Lake Tana'))}
          description={t(
            L(
              'በአዲስ አበባ፣ ደብረ ዘይት፣ አዳማ እና ባሕር ዳር ከ33 በላይ ካፌዎች — እያንዳንዱም በሚያገለግለው ሰፈር ውስጥ ሞቅ ያለ ቦታ ነው።',
              '33+ cafés across Addis Ababa, Debre Zeyit, Adama and Bahir Dar — each one a warm space in the neighborhood it serves.',
            ),
          )}
        />

        <RevealStagger className="mt-14 grid gap-7 md:grid-cols-3">
          {featured.map((branch) => (
            <motion.article
              key={branch.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
            >
              <div className="relative h-56 overflow-hidden">
                <SmartImage
                  src={branch.image}
                  alt={`${t(branch.name)} ${t(L('ካፌ ውስጥ', 'café interior'))}`}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 to-transparent" />
                {branch.flagship && (
                  <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-espresso-950">
                    {t(L('ዋና ቅርንጫፍ', 'Flagship'))}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-2xl font-semibold text-white">{t(branch.area)}</h3>
                  <p className="text-sm text-white/70">{t(CITY_LABELS[branch.city])}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="flex items-start gap-2 text-sm text-espresso-700/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  {t(branch.address)}
                </p>
                <p className="mt-3 flex items-center gap-2 text-sm text-espresso-700/80">
                  <Clock className="h-4 w-4 shrink-0 text-gold-600" />
                  {branch.hours ? t(branch.hours) : t(L('ሰዓቶችን በቅርንጫፎች ገጽ ይመልከቱ', 'See hours on the Locations page'))}
                </p>
              </div>
            </motion.article>
          ))}
        </RevealStagger>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/locations"
            className="group inline-flex items-center gap-2 font-accent text-sm font-semibold uppercase tracking-widest2 text-espresso-800 transition-colors hover:text-gold-600"
          >
            {t(L('ሁሉንም ቅርንጫፎች ይመልከቱ', 'View all locations'))}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
