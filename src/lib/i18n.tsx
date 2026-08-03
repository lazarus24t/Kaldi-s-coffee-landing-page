import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'am' | 'en';

/** A value that exists in both languages: `{ am, en }`. */
export interface Localized {
  am: string;
  en: string;
}

/**
 * Build a bilingual value. Order is (Amharic, English):
 * `L('አማርኛ', 'English')`.
 */
export const L = (am: string, en: string): Localized => ({ am, en });

interface LanguageContextValue {
  /** Active language — defaults to Amharic (`'am'`). */
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Resolve a Localized value (or a plain string) for the active language. */
  t: (value: Localized | string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'kaldis-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'am';
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      // Amharic is the default — only an explicit 'en' choice switches.
      return saved === 'en' ? 'en' : 'am';
    } catch {
      return 'am';
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* private mode etc. — ignore */
    }
  }, [lang]);

  const t = useCallback(
    (value: Localized | string) => (typeof value === 'string' ? value : value[lang]),
    [lang],
  );

  const toggle = useCallback(() => setLang((l) => (l === 'am' ? 'en' : 'am')), []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}
