/** @format */

import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const options = [
    { code: 'en', label: 'EN', full: 'English' },
    { code: 'uk', label: 'UK', full: 'Українська' },
] as const;

type LangCode = (typeof options)[number]['code'];

export const LanguageDropdown = () => {
    const { language, setLanguage, t } = useLanguage();
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onMouseDown = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', onMouseDown);
        return () => document.removeEventListener('mousedown', onMouseDown);
    }, []);

    const current =
        options.find(o => o.code === language) ??
        (options[0] as { code: LangCode; label: string; full: string });

    return (
        <div className="relative" ref={ref}>
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                aria-label={t('nav.language')}
                aria-haspopup="menu"
                aria-expanded={open}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 border border-white/[0.08] text-slate-400 hover:text-white hover:bg-white/[0.06] hover:border-white/[0.15]">
                <Globe size={15} style={{ color: '#818cf8' }} />
                <span>{current.label}</span>
                <ChevronDown
                    size={12}
                    className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {open && (
                <div
                    role="menu"
                    aria-label={t('nav.language')}
                    className="absolute right-0 mt-2 w-44 rounded-xl overflow-hidden border border-white/[0.08] bg-[#0a0f1f]/95 backdrop-blur-xl shadow-2xl"
                    style={{ animation: 'lightbox-fade 0.25s ease-out both' }}>
                    {options.map(option => (
                        <button
                            key={option.code}
                            type="button"
                            role="menuitemradio"
                            aria-checked={language === option.code}
                            onClick={() => {
                                setLanguage(option.code);
                                setOpen(false);
                            }}
                            className={`flex w-full items-center justify-between gap-2 px-4 py-3 text-sm transition-all duration-300 ${
                                language === option.code
                                    ? 'text-white bg-white/[0.06]'
                                    : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                            }`}>
                            <span className="flex items-center gap-2.5">
                                <span className="font-semibold">{option.label}</span>
                                <span className="text-xs text-slate-600">
                                    {option.full}
                                </span>
                            </span>
                            {language === option.code && (
                                <Check size={14} style={{ color: '#818cf8' }} />
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
