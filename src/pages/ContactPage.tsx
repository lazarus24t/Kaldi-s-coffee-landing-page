import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, ChevronDown, Clock, MapPin, Phone } from 'lucide-react';
import { FAQS } from '@/data/content';
import { useLang, L } from '@/lib/i18n';
import { Seo } from '@/lib/seo';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const INFO: {
  icon: typeof MapPin;
  title: ReturnType<typeof L>;
  lines: (string | ReturnType<typeof L>)[];
  href?: string;
}[] = [
  {
    icon: MapPin,
    title: L('ዋና መሥሪያ ቤት', 'Head Office'),
    lines: ['Sarbet Adams Pavillion Building', 'Roosevelt St, Addis Ababa, Ethiopia'],
  },
  {
    icon: Phone,
    title: L('ስልክ', 'Phone'),
    lines: ['+251 11 371 4258'],
    href: 'tel:+251113714258',
  },
  {
    icon: Clock,
    title: L('ሰዓታት', 'Hours'),
    lines: [L('ሰኞ – እሁድ · ከጠዋት 8:00 እስከ ምሽት 9:00', 'Mon – Sun · 8:00 AM – 9:00 PM')],
  },
];

export default function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const schema = z.object({
    name: z.string().min(2, t(L('እባክዎ ስምዎን ያስገቡ', 'Please enter your name'))),
    email: z.string().email(t(L('ትክክለኛ ኢሜይል ያስገቡ', 'Enter a valid email'))),
    subject: z.string().min(3, t(L('አጭር ርዕስ ያክሉ', 'Add a short subject'))),
    message: z.string().min(10, t(L('ትንሽ ተጨማሪ ይንገሩን (ቢያንስ 10 ፊደላት)', 'Tell us a little more (min 10 characters)'))),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <Seo
        title={L('አግኙን — ካልዲስ ኮፊ | ከእርስዎ መስማት እንወዳለን', 'Contact — Kaldi\'s Coffee | We\'d Love to Hear From You')}
        description={L(
          'ከካልዲስ ኮፊ ጋር ይገናኙ — በአዲስ አበባ ዋና መሥሪያ ቤት፣ የደንበኛ እንክብካቤ፣ የጅምላ ጥያቄዎች እና የተለመዱ ጥያቄዎች መልስ።',
          'Get in touch with Kaldi\'s Coffee — head office in Addis Ababa, customer care, wholesale inquiries, and answers to common questions.',
        )}
        path="/contact"
      />

      {/* Header */}
      <header className="relative overflow-hidden bg-espresso-950 pb-20 pt-36 grain">
        <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-70" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
            {t(L('አግኙን', 'Contact · አግኙን'))}
          </p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-white sm:text-6xl">
            {t(L('ቡና እንጠጣ', "Let's share a"))}{' '}
            <span className="italic text-gold-300">{t(L('በጋራ', 'cup together'))}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {t(
              L(
                'ጥያቄዎች፣ የማህበረሰብ ዜና ወይም የቡና ውይይት — እያንዳንዱን መልእክት እናነባለን። ለአስቸኳይ ጉዳይ በሳርቤት ዋና ቅርንጫፋችን ይደውሉ።',
                'Questions, community news or just coffee talk — we read every message. For anything urgent, call our flagship at Sarbet.',
              ),
            )}
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        {/* Info cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {INFO.map((info, i) => (
            <Reveal key={info.title.en} delay={i * 0.08}>
              <div className="group h-full rounded-3xl border border-espresso-900/8 bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-prussian text-gold-400 transition-transform duration-500 group-hover:scale-110">
                  <info.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-4 font-display text-xl font-semibold text-espresso-900">
                  {t(info.title)}
                </h2>
                {info.lines.map((line, li) =>
                  info.href ? (
                    <a
                      key={li}
                      href={info.href}
                      className="mt-1.5 block text-sm text-espresso-700/80 transition-colors hover:text-gold-600"
                    >
                      {t(line)}
                    </a>
                  ) : (
                    <p key={li} className="mt-1.5 text-sm text-espresso-700/80">
                      {t(line)}
                    </p>
                  ),
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-[2rem] border border-espresso-900/8 bg-white p-8 shadow-soft sm:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center py-10 text-center"
                >
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-semibold text-espresso-900">
                    {t(L('መልእክት ደርሷል!', 'Message received!'))}
                  </h2>
                  <p className="mt-3 max-w-sm text-espresso-700/80">
                    {t(
                      L(
                        'አመሰግናለሁ! በአንድ የሥራ ቀን ውስጥ እንመልሳለን። እስከዚያው ድረስ ጅብናው ሞቃት ነው።',
                        "We'll get back to you within one business day. Until then, the jebena is always warm.",
                      ),
                    )}
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      reset();
                    }}
                    className="mt-8 rounded-full border border-espresso-900/15 px-6 py-3 font-accent text-sm font-semibold text-espresso-800 transition hover:bg-sand"
                  >
                    {t(L('ሌላ መልእክት ይላኩ', 'Send another message'))}
                  </button>
                </motion.div>
              ) : (
                <>
                  <h2 className="font-display text-3xl font-semibold text-espresso-900">
                    {t(L('መልእክት ይላኩልን', 'Send us a message'))}
                  </h2>
                  <form
                    onSubmit={handleSubmit(() => setSent(true))}
                    className="mt-7 grid gap-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-espresso-700">
                          {t(L('ስም', 'Name'))}
                        </span>
                        <input {...register('name')} placeholder={t(L('ስምዎ', 'Your name'))} className={inputCls(!!errors.name)} />
                        {errors.name && <ErrorMsg msg={errors.name.message} />}
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-espresso-700">
                          {t(L('ኢሜይል', 'Email'))}
                        </span>
                        <input {...register('email')} type="email" placeholder="you@email.com" className={inputCls(!!errors.email)} />
                        {errors.email && <ErrorMsg msg={errors.email.message} />}
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-espresso-700">
                        {t(L('ርዕስ', 'Subject'))}
                      </span>
                      <input {...register('subject')} placeholder={t(L('ስለ ምን ነው?', "What's this about?"))} className={inputCls(!!errors.subject)} />
                      {errors.subject && <ErrorMsg msg={errors.subject.message} />}
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-espresso-700">
                        {t(L('መልእክት', 'Message'))}
                      </span>
                      <textarea
                        {...register('message')}
                        rows={5}
                        placeholder={t(L('ሁሉንም ይንገሩን…', 'Tell us everything…'))}
                        className={inputCls(!!errors.message)}
                      />
                      {errors.message && <ErrorMsg msg={errors.message.message} />}
                    </label>
                    <button
                      type="submit"
                      className="mt-2 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 py-4 font-accent text-sm font-bold uppercase tracking-widest text-espresso-950 shadow-gold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                    >
                      {t(L('መልእክት ይላኩ', 'Send Message'))}
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* FAQ */}
          <Reveal delay={0.12}>
            <div>
              <h2 className="font-display text-3xl font-semibold text-espresso-900">
                {t(L('ተደጋጋሚ ጥያቄዎች', 'Frequently asked'))}
              </h2>
              <div className="mt-7 space-y-3">
                {FAQS.map((faq, i) => {
                  const open = openFaq === i;
                  return (
                    <div
                      key={faq.q.en}
                      className={cn(
                        'overflow-hidden rounded-2xl border transition-colors',
                        open ? 'border-gold-500/40 bg-white shadow-soft' : 'border-espresso-900/8 bg-white',
                      )}
                    >
                      <button
                        onClick={() => setOpenFaq(open ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                        aria-expanded={open}
                      >
                        <span className="font-medium text-espresso-900">{t(faq.q)}</span>
                        <ChevronDown
                          className={cn(
                            'h-5 w-5 shrink-0 text-gold-600 transition-transform duration-300',
                            open && 'rotate-180',
                          )}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <p className="px-6 pb-5 text-sm leading-relaxed text-espresso-700/80">
                              {t(faq.a)}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ErrorMsg({ msg }: { msg?: string }) {
  return <span className="mt-1 block text-xs text-red-500">{msg}</span>;
}

function inputCls(hasError: boolean) {
  return `w-full rounded-2xl border bg-cream/60 px-4 py-3 text-sm placeholder:text-espresso-400 focus:outline-none focus:ring-2 transition ${
    hasError
      ? 'border-red-400 focus:ring-red-300'
      : 'border-espresso-900/10 focus:border-gold-500 focus:ring-gold-500/30'
  }`;
}
