import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS, type CategoryId } from '@/data/menu';
import { IMG } from '@/data/images';
import { useLang, L } from '@/lib/i18n';
import { MenuItemCard } from '@/components/MenuItemCard';
import { RevealStagger } from '@/components/ui/Reveal';
import { Seo, menuSchema } from '@/lib/seo';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const { t } = useLang();
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = category === 'all' || item.category === category;
      const q = query.trim().toLowerCase();
      const name = t(item.name).toLowerCase();
      const description = t(item.description).toLowerCase();
      const matchesQuery = !q || name.includes(q) || description.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [category, query, t]);

  const activeCategory = CATEGORIES.find((c) => c.id === category);

  return (
    <>
      <Seo
        title={L('ሜኑ — ካልዲስ ኮፊ | ቡና፣ ምግብ እና ሱቅ', 'Menu — Kaldi\'s Coffee | Coffee, Food & Retail')}
        description={L(
          'የካልዲስ ኮፊ ሜኑን ይመልከቱ — ተወዳጅ ማኪያቶ፣ ባህላዊ የኢትዮጵያ ቡና፣ ይርጋቸፌ ቡና፣ ኬኮች፣ በርገር እና ሳንድዊቾች። ካልዲስ ኦፊሴላዊ የመስመር ላይ ሜኑ አያትም፤ የሚታዩት እቃዎች በደንበኛ ግምገማዎች የተረጋገጡ ናቸው።',
          "Explore the Kaldi's Coffee menu — customer-favorite macchiato, traditional Ethiopian buna, Yirgacheffe coffee, cakes, burgers and sandwiches. Kaldi's does not publish an official online menu; items shown are confirmed by customer reviews.",
        )}
        path="/menu"
        jsonLd={menuSchema(MENU_ITEMS.map(({ name, description, category }) => ({ name: name.en, description: description.en, category })))}
      />

      {/* Page header */}
      <header className="relative overflow-hidden bg-espresso-950 pb-24 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <img src={IMG.steamCup} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('ምናሌ', 'The Menu · ምናሌ'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
            {t(L('የኢትዮጵያ ቡና፣', 'Ethiopian coffee,'))}{' '}
            <span className="italic text-gold-300">{t(L('ከፍሬ እስከ ጽዋ', 'from bean to cup'))}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {t(
              L(
                'ካልዲስ ኦፊሴላዊ የመስመር ላይ ሜኑ አያትም — ከታች ያሉት ደንበኞቻችን እያጠቀሱት የነበሩ ተወዳጆች ናቸው። ለዛሬው ሙሉ ምርጫ እና ዋጋ በሱቅ ውስጥ ይጠይቁ።',
                  "Kaldi's does not publish an official online menu — the items below are the favorites our customers keep mentioning. Ask in store for today's full selection and prices.",
              ),
            )}
          </p>
        </div>
      </header>

      {/* Sticky filter bar */}
      <div className="sticky top-[76px] z-30 border-b border-espresso-900/10 bg-cream/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category pills */}
            <div className="scrollbar-none -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {CATEGORIES.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={cn(
                    'shrink-0 rounded-full px-4 py-2.5 font-accent text-xs font-semibold uppercase tracking-wide transition-all duration-300',
                    category === c.id
                      ? 'bg-espresso-900 text-gold-300 shadow-soft'
                      : 'bg-white text-espresso-700/70 hover:bg-sand',
                  )}
                >
                  {t(c.label)}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t(L('ሜኑውን ይፈልጉ…', 'Search the menu…'))}
                className="w-full rounded-full border border-espresso-900/10 bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-espresso-500 focus:border-gold-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8">
        <p className="mb-8 text-sm text-espresso-700/60">
          {activeCategory && (
            <>
              <span className="font-semibold text-espresso-900">{t(activeCategory.label)}</span>
              {' — '}
              {t(activeCategory.blurb)}
            </>
          )}{' '}
          · {filtered.length} {filtered.length === 1 ? t(L('እቃ', 'item')) : t(L('እቃዎች', 'items'))}
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-espresso-900/20 bg-white/60 py-24 text-center">
            <p className="font-display text-2xl text-espresso-800">
              {t(L('ማጣሪያውን የሚያሟላ ነገር የለም', 'Nothing matches that filter'))}
            </p>
            <p className="mt-2 text-sm text-espresso-600">
              {t(L('ፍለጋዎን ያጽዱ ወይም ሌላ ምድብ ይምረጡ።', 'Try clearing your search or picking another category.'))}
            </p>
          </div>
        ) : (
          <RevealStagger
            key={category}
            className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </RevealStagger>
        )}

        <div className="mt-16 rounded-3xl bg-sand p-8 text-center">
          <p className="font-display text-2xl text-espresso-900">
            {t(L('ሙሉውን ሜኑ ይፈልጋሉ?', 'Hungry for the full menu?'))}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-espresso-700/80">
            {t(
              L(
                'ሙሉ የመስመር ላይ ሜኑ አናትምም — ማንኛውንም ቅርንጫፍ ይጎብኙ ወይም በሳርቤት ዋና ቅርንጫፋችን በ',
                "We don't publish a complete online menu — visit any branch or call our flagship at Sarbet on ",
              ),
            )}
            <a href="tel:+251113714258" className="font-semibold text-gold-700 hover:underline">
              +251 11 371 4258
            </a>{' '}
            {t(L('ለዛሬው ምርጫ እና ዋጋ።', "for today's selection and prices."))}
          </p>
        </div>
      </section>
    </>
  );
}
