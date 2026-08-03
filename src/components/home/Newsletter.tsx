import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, PartyPopper } from 'lucide-react';
import { useLang, L } from '@/lib/i18n';
import { Reveal } from '@/components/ui/Reveal';
import { Steam } from '@/components/ui/Steam';

export function Newsletter() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-prussian via-astronaut to-prussian py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-80" aria-hidden />
      {/* Decorative steam */}
      <Steam className="absolute left-[12%] top-10 hidden lg:block" />
      <Steam className="absolute right-[14%] top-6 hidden lg:block" widthClass="w-24" count={2} />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-gold-300 backdrop-blur-md">
            <Mail className="h-8 w-8" />
          </span>
          <h2 className="mt-7 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {t(L('ከቡድኑ ጋር', 'Join the'))} <span className="italic text-gold-300">{t(L('ይቀላቀሉ', 'herd'))}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            {t(
              L(
                'ወቅታዊ ሜኑዎች፣ አዳዲስ ቅርንጫፎች እና ከኢትዮጵያ የቡና ታሪኮች። ጥሩ ቡና ብቻ — ስፓም የለም።',
                'Seasonal menus, new branches and coffee stories from Ethiopia. Only good coffee — no spam.',
              ),
            )}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          {done ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full border border-gold-400/40 bg-white/10 px-6 py-4 backdrop-blur-md"
            >
              <PartyPopper className="h-5 w-5 text-gold-300" />
              <p className="text-white">{t(L('እንኳን ደህና መጡ! በዝርዝሩ ላይ ነዎት።', "Welcome aboard! You're on the list."))}</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
              className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(L('የእርስዎ ኢሜይል', 'your@email.com'))}
                className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/40 backdrop-blur-md focus:border-gold-400 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-gradient-to-br from-gold-300 to-gold-600 px-8 py-4 font-accent text-sm font-bold uppercase tracking-widest text-espresso-950 shadow-gold transition-all duration-300 hover:brightness-110 active:scale-95"
              >
                {t(L('ይመዝገቡ', 'Subscribe'))}
              </button>
            </form>
          )}
        </Reveal>

        <p className="mt-6 font-ethiopic text-sm text-white/40">
          የቡና ባህል ከእኛ ጋር ይካፈሉ
        </p>
      </div>
    </section>
  );
}
