import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Reveal, RevealStagger, itemVariants } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { motion } from 'framer-motion';

export default function BlogPage() {
  const { t } = useLang();
  const featured = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <Seo
        title={L('ጆርናል — ካልዲስ ኮፊ | የቡና ባህል፣ ዜና እና ዝግጅቶች', 'Journal — Kaldi\'s Coffee | Coffee Culture, News & Events')}
        description={L(
          'ከቡና መወለድ ምድር የተውጣጡ ታሪኮች — የካልዲ አፈ-ታሪክ፣ መስራቾቻችን፣ የአፈላላቂ መመሪያዎች እና የኩባንያ ዜና።',
          'Stories from the birthplace of coffee — the legend of Kaldi, our founders, brewing guides and company news.',
        )}
        path="/blog"
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-espresso-950 pb-20 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('ጆርናል', 'The Journal · ጆርናል'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
            {t(L('ከቡና', 'Stories from the'))}{' '}
            <span className="italic text-gold-300">{t(L('መወለድ ምድር', 'birthplace of coffee'))}</span>
          </h1>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Featured */}
        <Reveal>
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-500 hover:shadow-lift lg:grid-cols-2"
          >
            <div className="relative h-72 overflow-hidden lg:h-auto">
              <SmartImage
                src={featured.image}
                alt={t(featured.title)}
                className="h-full w-full transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-gold-500 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-espresso-950">
                {t(featured.category)}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="flex items-center gap-4 text-xs text-espresso-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="h-3.5 w-3.5" /> {featured.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {t(featured.readTime)}
                </span>
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-espresso-900 sm:text-4xl">
                {t(featured.title)}
              </h2>
              <p className="mt-4 leading-relaxed text-espresso-700/80">{t(featured.excerpt)}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-accent text-xs font-bold uppercase tracking-widest2 text-gold-600 transition-colors group-hover:text-gold-700">
                {t(L('ታሪኩን ያንብቡ', 'Read the story'))}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Grid */}
        <RevealStagger className="mt-10 grid gap-7 md:grid-cols-3">
          {rest.map((post) => (
            <motion.article key={post.slug} variants={itemVariants} className="group">
              <Link
                to={`/blog/${post.slug}`}
                className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift"
              >
                <div className="relative h-52 overflow-hidden">
                  <SmartImage
                    src={post.image}
                    alt={t(post.title)}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-espresso-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold-300 backdrop-blur-md">
                    {t(post.category)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="flex items-center gap-4 text-xs text-espresso-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {t(post.readTime)}
                    </span>
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-espresso-900">
                    {t(post.title)}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-espresso-700/80">
                    {t(post.excerpt)}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-accent text-xs font-bold uppercase tracking-widest text-gold-600">
                    {t(L('ተጨማሪ ያንብቡ', 'Read more'))}{' '}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
