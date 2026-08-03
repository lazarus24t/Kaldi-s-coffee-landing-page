import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';

export default function BlogPostPage() {
  const { t } = useLang();
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold text-espresso-900">
          {t(L('ጽሑፉ አልተገኘም', 'Article not found'))}
        </h1>
        <Button to="/blog">{t(L('ወደ ጆርናል ይመለሱ', 'Back to the Journal'))}</Button>
      </section>
    );
  }

  return (
    <>
      <Seo
        title={`${t(post.title)} — ${t(L('የካልዲስ ኮፊ ጆርናል', "Kaldi's Coffee Journal"))}`}
        description={t(post.excerpt)}
        path={`/blog/${post.slug}`}
        type="article"
        image={post.image}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title.en,
          datePublished: post.date,
          image: post.image,
          author: { '@type': 'Organization', name: 'Kaldi\'s Coffee' },
        }}
      />

      {/* Hero */}
      <header className="relative overflow-hidden bg-espresso-950 pb-24 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-gold-300"
          >
            <ArrowLeft className="h-4 w-4" /> {t(L('ወደ ጆርናል ይመለሱ', 'Back to the Journal'))}
          </Link>
          <p className="mt-8 inline-block rounded-full bg-gold-500/15 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-gold-300">
            {t(post.category)}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {t(post.title)}
          </h1>
          <p className="mt-6 flex items-center gap-6 text-sm text-white/60">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {t(post.readTime)}
            </span>
          </p>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
        <Reveal>
          <SmartImage
            src={post.image}
            alt={t(post.title)}
            className="aspect-[16/9] w-full rounded-[2rem] object-cover shadow-lift"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-2xl space-y-7">
            <p className="font-display text-2xl italic leading-relaxed text-espresso-800">
              {t(post.excerpt)}
            </p>
            {post.body.map((paragraph, i) => (
              <p key={i} className="leading-[1.9] text-espresso-700/90">
                {t(paragraph)}
              </p>
            ))}
            <div className="rounded-3xl bg-sand p-8 text-center">
              <p className="font-ethiopic text-sm text-espresso-600">በርታ! ወደ ቡና</p>
              <p className="mt-2 font-display text-2xl text-espresso-900">
                {t(L('ከዚያ ታሪክ በኋላ ቡና ፈለጉ?', 'Craving a cup after that story?'))}
              </p>
              <div className="mt-5">
                <Button to="/menu" variant="dark">
                  {t(L('አሁን ያዙዙ', 'Order Now'))}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </article>

      {/* Related */}
      <section className="bg-sand py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="font-display text-3xl font-semibold text-espresso-900">
            {t(L('ማንበብዎን ይቀጥሉ', 'Keep reading'))}
          </h2>
          <div className="mt-8 grid gap-7 md:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group flex items-center gap-5 rounded-3xl bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift"
              >
                <SmartImage src={p.image} alt={t(p.title)} className="h-24 w-24 shrink-0 rounded-2xl" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gold-600">
                    {t(p.category)}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-espresso-900">
                    {t(p.title)}
                  </h3>
                  <p className="mt-1 text-xs text-espresso-500">{t(p.readTime)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
