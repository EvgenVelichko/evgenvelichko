import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'uk';
type TranslationKey = string;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('evgen-language') as Language | null;
    if (saved === 'en' || saved === 'uk') return saved;
    const browserLang = navigator.language.toLowerCase().split('-')[0];
    return browserLang === 'uk' ? 'uk' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('evgen-language', language);
  }, [language]);

  const t = (key: TranslationKey): string => {
    const translationSet = translations[language] || translations.en;
    return key.split('.').reduce((obj, k) => obj?.[k], translationSet) as string || key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};