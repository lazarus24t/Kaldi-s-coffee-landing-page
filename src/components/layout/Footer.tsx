import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLang, L } from '@/lib/i18n';

const EXPLORE: { to: string; label: ReturnType<typeof L> }[] = [
  { to: '/menu', label: L('ሜኑ', 'Menu') },
  { to: '/locations', label: L('ቅርንጫፎች', 'Locations') },
  { to: '/about', label: L('ታሪካችን', 'Our Story') },
  { to: '/shop', label: L('ቡና ፍሬ ይግዙ', 'Shop Beans') },
  { to: '/blog', label: L('ጆርናል', 'Journal') },
  { to: '/careers', label: L('ሥራ', 'Careers') },
];

export function Footer() {
  const { t } = useLang();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-espresso-950 text-white grain">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt={t(L('የካልዲስ ኮፊ አርማ', "Kaldi's Coffee logo"))}
                className="h-14 w-auto drop-shadow-lg"
              />
              <span>
                <span className="block font-display text-xl font-semibold tracking-[0.18em]">
                  KALDI'S
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest2 text-gold-400">
                  Coffee · ካልዲስ ኮፊ
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t(
                L(
                  'ቡና የተወለደበት ቦታ። እ.ኤ.አ. ከ2005 ጀምሮ የኢትዮጵያ የቡና ቤት ሰንሰለት — ቡናን በአፈ-ታሪክ ያገኘው እረኛ ካልዲ በስሙ የተሰየመ።',
                  "Where Coffee Was Born. Ethiopia's homegrown coffee house chain since 2005 — named after the goatherd Kaldi, who legend says discovered coffee.",
                ),
              )}
            </p>
          </div>

          {/* Explore */}
          <nav aria-label={t(L('ፉተር ዳሰሳ', 'Footer'))}>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              {t(L('ዳስሱ', 'Explore'))}
            </h3>
            <ul className="mt-5 space-y-3">
              {EXPLORE.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/60 transition-colors hover:text-gold-300"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              {t(L('ይጎብኙን', 'Visit Us'))}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {t(
                    L(
                      'ሳርቤት አዳምስ ፓቪሊዮን ህንፃ፣ ሩዝቬልት ስትሪት፣ አዲስ አበባ፣ ኢትዮጵያ',
                      'Sarbet Adams Pavillion Building, Roosevelt St, Addis Ababa, Ethiopia',
                    ),
                  )}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <a href="tel:+251113714258" className="transition-colors hover:text-gold-300">
                  +251 11 371 4258
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/40">
              {t(L('ባንዲራ ቅርንጫፍ በየቀኑ ክፍት · ከጠዋት 8:00 እስከ ምሽት 9:00', 'Flagship open daily · 8:00 AM – 9:00 PM'))}
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-accent text-xs font-semibold uppercase tracking-widest2 text-gold-400">
              {t(L('ከቡና መቆያ ቤት ትኩስ ዜና', 'Fresh from the Roastery'))}
            </h3>
            <p className="mt-5 text-sm text-white/60">
              {t(
                L(
                  'ወቅታዊ ሜኑዎች፣ አዳዲስ ቅርንጫፎች እና ከኢትዮጵያ የቡና ታሪኮች። ስፓም የለም፣ ጥሩ ቡና ብቻ።',
                  'Seasonal menus, new branches and coffee stories from Ethiopia. No spam, only good coffee.',
                ),
              )}
            </p>
            {subscribed ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-4 text-sm text-gold-300"
              >
                {t(L('☕ እንኳን ደህና መጡ! በዝርዝሩ ላይ ነዎት።', "☕ Welcome to the herd! You're on the list."))}
              </motion.p>
            ) : (
              <form
                className="mt-5 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email.trim()) setSubscribed(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t(L('ኢሜይልዎ', 'Your email'))}
                  className="w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 px-5 py-3 font-accent text-sm font-semibold text-espresso-950 transition hover:brightness-110 active:scale-95"
                >
                  {t(L('ይቀላቀሉ', 'Join'))}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Kaldi's Coffee P.L.C. All rights reserved. ካልዲስ ኮፊ</p>
          <p className="flex items-center gap-1.5">
            {t(L('በአዲስ አበባ ተበስሎ ☕', 'Brewed with ☕ in Addis Ababa'))}
          </p>
        </div>
      </div>
    </footer>
  );
}
