import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Button } from '@/components/ui/Button';
import { Steam } from '@/components/ui/Steam';

export default function NotFoundPage() {
  const { t } = useLang();

  return (
    <>
      <Seo
        title={L('ገጹ አልተገኘም — ካልዲስ ኮፊ', 'Page Not Found — Kaldi\'s Coffee')}
        description={L(
          'ይህ ጽዋ ባዶ ነው — የሚፈልጉት ገጽ የለም።',
          "This cup is empty — the page you're looking for doesn't exist.",
        )}
        path="/404"
      />
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-espresso-950 px-5 py-32 text-center grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" aria-hidden />

        {/* Cup art */}
        <div className="relative">
          <Steam className="absolute -top-10 left-1/2 -translate-x-1/2" />
          <svg viewBox="0 0 64 64" className="mx-auto h-36 w-36 drop-shadow-2xl" aria-hidden>
            <path d="M12 22h40v13a14.5 14.5 0 0 1-14.5 14.5h-11A14.5 14.5 0 0 1 12 35V22z" fill="#C9A227" />
            <path d="M52 26h4.5a8 8 0 0 1 0 16H52" stroke="#C9A227" strokeWidth="4" fill="none" strokeLinecap="round" />
            <rect x="16" y="55" width="32" height="3.5" rx="1.75" fill="#E6CD77" opacity="0.85" />
          </svg>
        </div>

        <p className="relative mt-10 font-display text-8xl font-semibold text-white sm:text-9xl">
          4<span className="text-gold-400">0</span>4
        </p>
        <h1 className="relative mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
          {t(L('ይህ ጽዋ', 'This cup is'))} <span className="italic text-gold-300">{t(L('ባዶ ነው', 'empty'))}</span>
        </h1>
        <p className="relative mt-4 max-w-md text-white/60">
          {t(
            L(
              'የሚፈልጉት ገጽ ተፈስሶ ጠፍቷል። ወደ ትኩስ የተዘጋጀ ነገር እንመልስዎ።',
              "The page you're looking for was poured down the drain. Let's get you back to something freshly brewed.",
            ),
          )}
        </p>
        <div className="relative mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button to="/" size="lg">
            {t(L('ወደ መነሻ ይመለሱ', 'Back Home'))}
          </Button>
          <Button to="/menu" variant="glass" size="lg">
            {t(L('ቡና ያዙዙ', 'Order Coffee'))}
          </Button>
        </div>
      </section>
    </>
  );
}
