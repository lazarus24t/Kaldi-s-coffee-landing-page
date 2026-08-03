import type { MenuItem } from '@/data/menu';
import { CATEGORIES } from '@/data/menu';
import { useLang, L } from '@/lib/i18n';
import { SmartImage } from '@/components/ui/SmartImage';
import { TiltCard } from '@/components/ui/TiltCard';
import { motion } from 'framer-motion';
import { itemVariants } from '@/components/ui/Reveal';

interface MenuItemCardProps {
  item: MenuItem;
}

export function MenuItemCard({ item }: MenuItemCardProps) {
  const { t } = useLang();
  const category = CATEGORIES.find((c) => c.id === item.category);

  return (
    <motion.article variants={itemVariants} className="h-full">
      <TiltCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-espresso-900/8 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift">
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <SmartImage
            src={item.image}
            alt={t(item.name)}
            className="h-full w-full transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/50 via-transparent to-transparent" />
          {category && (
            <span className="absolute left-4 top-4 rounded-full bg-espresso-950/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold-300 backdrop-blur-md">
              {t(category.label)}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-5">
          <h3 className="font-display text-xl font-semibold text-espresso-900">{t(item.name)}</h3>
          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-espresso-700/80">
            {t(item.description)}
          </p>

          {/* Notes */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {item.notes.map((note) => (
              <span
                key={note.en}
                className="rounded-full bg-sand px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-espresso-600"
              >
                {t(note)}
              </span>
            ))}
          </div>

          <p className="mt-5 border-t border-espresso-900/5 pt-4 text-center text-[11px] uppercase tracking-widest text-espresso-500">
            {t(L('ዋጋዎች በሱቅ ይገኛሉ', 'Prices available in store'))}
          </p>
        </div>
      </TiltCard>
    </motion.article>
  );
}
