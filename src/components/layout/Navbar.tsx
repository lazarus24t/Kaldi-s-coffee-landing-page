import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLang, L, type Lang } from '@/lib/i18n';
import { Button } from '@/components/ui/Button';

const LINKS: { to: string; label: ReturnType<typeof L> }[] = [
  { to: '/', label: L('መነሻ', 'Home') },
  { to: '/menu', label: L('ሜኑ', 'Menu') },
  { to: '/locations', label: L('ቅርንጫፎች', 'Locations') },
  { to: '/about', label: L('ስለ እኛ', 'About') },
  { to: '/shop', label: L('ሱቅ', 'Shop') },
  { to: '/contact', label: L('ያግኙን', 'Contact') },
];

/** Compact አማ / EN pill toggle. */
function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  const langs: { id: Lang; label: string }[] = [
    { id: 'am', label: 'አማ' },
    { id: 'en', label: 'EN' },
  ];
  return (
    <div
      className={cn(
        'flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md',
        compact && 'self-start',
      )}
      role="group"
      aria-label="Language / ቋንቋ"
    >
      {langs.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          aria-pressed={lang === l.id}
          className={cn(
            'rounded-full px-3 py-1.5 font-accent text-xs font-semibold transition-all duration-300',
            lang === l.id
              ? 'bg-gold-500 text-espresso-950 shadow-gold'
              : 'text-white/70 hover:text-white',
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled || open
            ? 'bg-espresso-950/90 shadow-lift backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3" aria-label={t(L('ካልዲስ ኮፊ መነሻ', "Kaldi's Coffee home"))}>
            <img
              src="/images/logo.png"
              alt={t(L('የካልዲስ ኮፊ አርማ', "Kaldi's Coffee logo"))}
              className="h-12 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <span className="leading-none">
              <span className="block font-display text-xl font-semibold tracking-[0.18em] text-white">
                KALDI'S
              </span>
              <span className="mt-1 block font-accent text-[10px] font-semibold uppercase tracking-widest2 text-gold-400">
                Coffee · ካልዲስ ኮፊ
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => cn('nav-link', isActive && 'active')}
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button to="/menu" size="sm" className="px-5">
                {t(L('ሜኑውን ይመልከቱ', 'Explore the Menu'))}
              </Button>
            </div>

            <div className="hidden md:block">
              <LangToggle />
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition hover:bg-white/15 lg:hidden"
              aria-label={open ? t(L('ሜኑ መዝጊያ', 'Close menu')) : t(L('ሜኑ መክፈቻ', 'Open menu'))}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-espresso-950/97 pt-24 backdrop-blur-2xl lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col gap-2 px-8 pt-6">
              <LangToggle compact />
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.08 }}
                >
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        'block border-b border-white/10 py-4 font-display text-3xl transition-colors',
                        isActive ? 'text-gold-400' : 'text-white/85 hover:text-white',
                      )
                    }
                  >
                    {t(link.label)}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <Button to="/menu" size="lg" className="w-full">
                  {t(L('አሁን ይዘዙ', 'Order Now'))}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
