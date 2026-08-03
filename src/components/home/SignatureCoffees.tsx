import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FEATURED_ITEMS } from '@/data/menu';
import { useLang, L } from '@/lib/i18n';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MenuItemCard } from '@/components/MenuItemCard';
import { RevealStagger } from '@/components/ui/Reveal';

export function SignatureCoffees() {
  const { t } = useLang();

  return (
    <section className="relative bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t(L('የደንበኞች ተወዳጆች', 'Customer Favorites'))}
          title={t(L('እንግዶቻችን', 'Loved by our'))}
          accent={t(L('የሚወዷቸው', 'guests'))}
          description={t(
            L(
              'ደንበኞቻችን እየተመለሱ የሚፈልጓቸው ምርቶች — እያንዳንዱም ቡና ለተወለደበት ደጋማ አካባቢ የፍቅር ደብዳቤ ነው።',
              'The items our customers keep coming back for — each one a love letter to the highlands where coffee was born.',
            ),
          )}
        />

        <RevealStagger className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_ITEMS.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </RevealStagger>

        <div className="mt-14 text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-2 font-accent text-sm font-semibold uppercase tracking-widest2 text-espresso-800 transition-colors hover:text-gold-600"
          >
            {t(L('ሙሉውን ሜኑ ይመልከቱ', 'Explore the full menu'))}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
