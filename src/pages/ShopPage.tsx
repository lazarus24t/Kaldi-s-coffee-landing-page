import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { SHOP_PRODUCTS } from '@/data/shop';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { SmartImage } from '@/components/ui/SmartImage';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, RevealStagger, itemVariants } from '@/components/ui/Reveal';
import { TiltCard } from '@/components/ui/TiltCard';

export default function ShopPage() {
  const { t } = useLang();

  return (
    <>
      <Seo
        title={L('ሱቅ — ካልዲስ ኮፊ | የተጠበሰ ቡና ፍሬ በሱቅ', 'Shop — Kaldi\'s Coffee | Roasted Coffee Beans at Retail')}
        description={L(
          'የኢትዮጵያን ጣዕም ወደ ቤት ይውሰዱ። ካልዲስ የተጠበሰ ቡና ፍሬን በሁሉም ቅርንጫፎች በሱቅ ይሸጣል። ዋጋዎች በሱቅ ወይም በስልክ ይገኛሉ።',
          "Take the taste of Ethiopia home. Kaldi's sells roasted coffee beans at retail in every branch. Prices available in store or by phone.",
        )}
        path="/shop"
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-espresso-950 pb-20 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('ሱቅ', 'The Shop · ሱቅ'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
            {t(L('ደጋማ ቦታውን', 'Take the highlands'))}{' '}
            <span className="italic text-gold-300">{t(L('ወደ ቤት ይውሰዱ', 'home with you'))}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {t(
              L(
                'ካልዲስ የተጠበሰ ቡና ፍሬን በሁሉም ቅርንጫፎች በሱቅ ይሸጣል — በካፌዎቻችን ውስጥ ከሚቀርበው ተመሳሳይ ጥብስ።',
                "Kaldi's sells roasted coffee beans at retail in every branch — from the same roasts served across our cafés.",
              ),
            )}
          </p>
        </div>
      </header>

      {/* Product */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <RevealStagger className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SHOP_PRODUCTS.map((product) => (
            <motion.article key={product.id} variants={itemVariants} className="sm:col-span-2 lg:col-span-1">
              <TiltCard className="group flex h-full flex-col overflow-hidden rounded-3xl border border-espresso-900/8 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift">
                <div className="relative h-64 overflow-hidden">
                  <SmartImage
                    src={product.image}
                    alt={t(product.name)}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-espresso-950">
                    {t(L('ሱቅ', 'Retail'))}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-espresso-900">
                    {t(product.name)}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-espresso-700/80">
                    {t(product.description)}
                  </p>
                  <p className="mt-5 border-t border-espresso-900/5 pt-4 text-center text-[11px] uppercase tracking-widest text-espresso-500">
                    {t(L('ዋጋዎች በሱቅ ይገኛሉ', 'Prices available in store'))}
                  </p>
                </div>
              </TiltCard>
            </motion.article>
          ))}

          {/* How to order */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-prussian p-8 text-cream shadow-soft">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold-500/15 text-gold-400">
                <ShoppingBag className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold">
                {t(L('እንዴት ይገዛሉ', 'How to buy'))}
              </h3>
              <p className="mt-3 leading-relaxed text-white/70">
                {t(
                  L(
                    'የተጠበሰ ቡና ፍሬ በሁሉም ቅርንጫፎች በሱቅ ይገኛል። ለትልቅ ትዕዛዝ ወይም የዚህን ሳምንት ትኩስ ምርት ለማወቅ በሳርቤት ዋና ቅርንጫፋችን ይደውሉ።',
                    "Roasted beans are available at retail in every branch. For a larger order or to check what's fresh this week, call our flagship at Sarbet.",
                  ),
                )}
              </p>
              <a
                href="tel:+251113714258"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 px-6 py-3 font-accent text-sm font-bold uppercase tracking-wide text-espresso-950 shadow-gold transition hover:brightness-110"
              >
                +251 11 371 4258
              </a>
            </div>
          </motion.div>
        </RevealStagger>

        <Reveal delay={0.2} className="mt-16">
          <div className="rounded-3xl bg-sand p-8 text-center">
            <SectionHeading
              eyebrow={t(L('ማወቅ ጠቃሚ', 'Good to know'))}
              title={t(L('ስለ', 'A note on'))}
              accent={t(L('ሱቃችን', 'our shop'))}
            />
            <p className="mx-auto mt-3 max-w-2xl text-sm text-espresso-700/80">
              {t(
                L(
                  'ካልዲስ ቡና ፍሬን በመስመር ላይ አይሸጥም። ሁሉም ነገር በቅርንጫፍ በሱቅ ይገኛል — ለካፌዎቻችን የምንጠብሰው ተመሳሳይ ፍሬ፣ በቤት ለመፍላት ዝግጁ።',
                  "Kaldi's doesn't sell beans online. Everything is available at retail in branch — the same beans we roast for our cafés, ready to brew at home.",
                ),
              )}
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
