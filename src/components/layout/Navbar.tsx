import { useState, useEffect } from 'react';
import { Menu, X, Code2, Home, User, Zap, Briefcase, Palette, Mail, GraduationCap } from 'lucide-react';
import { LanguageDropdown } from '@/components/ui/LanguageDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

const navIcons: Record<string, React.ReactNode> = {
    navHome: <Home size={15} />,
    navAbout: <User size={15} />,
    navSkills: <Zap size={15} />,
    navServices: <Briefcase size={15} />,
    navPortfolio: <Palette size={15} />,
    navCertificates: <GraduationCap size={15} />,
    navContact: <Mail size={15} />,
};

const navKeys = [
    { key: 'nav.home', href: '#hero', iconKey: 'navHome', id: 'hero' },
    { key: 'nav.about', href: '#about', iconKey: 'navAbout', id: 'about' },
    { key: 'nav.skills', href: '#skills', iconKey: 'navSkills', id: 'skills' },
    { key: 'nav.services', href: '#services', iconKey: 'navServices', id: 'services' },
    { key: 'nav.portfolio', href: '#portfolio', iconKey: 'navPortfolio', id: 'portfolio' },
    { key: 'nav.certificates', href: '#certificates', iconKey: 'navCertificates', id: 'certificates' },
    { key: 'nav.contact', href: '#contact', iconKey: 'navContact', id: 'contact' },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const { language, t, setLanguage } = useLanguage();

    const navLinks = navKeys.map(nk => ({
        name: t(nk.key),
        icon: navIcons[nk.iconKey],
        href: nk.href,
        id: nk.id,
    }));

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = navKeys.map(nk => nk.id);
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 100) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-surface-950/80 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'}`} aria-label="Main navigation">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <a href="#hero" className="flex items-center gap-2">
                        <Code2 size={18} className="text-primary-400" />
                        <span className="font-bold text-sm text-white/90">
                            evgen<span className="text-slate-500">.dev</span>
                        </span>
                    </a>

                    <div className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={link.href}
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300
                                    ${activeSection === link.id
                                        ? 'text-white bg-white/[0.08]'
                                        : 'text-slate-500 hover:text-white'
                                    }`}>
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden lg:block">
                            <LanguageDropdown />
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-white/60 hover:text-white p-2"
                            aria-label={isOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isOpen}>
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden mt-4 p-3 rounded-2xl bg-surface-950/95 backdrop-blur-xl border border-white/[0.06] animate-fadeIn">
                        {navLinks.map(link => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 py-3 px-4 rounded-xl text-sm transition-all duration-300
                                    ${activeSection === link.id
                                        ? 'text-white bg-white/[0.06]'
                                        : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                                    }`}>
                                {link.icon}
                                {link.name}
                            </a>
                        ))}

                        <div className="mt-3 pt-3 border-t border-white/[0.06]">
                            <p className="px-4 pb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                                {t('nav.language')}
                            </p>
                            <div className="flex items-center gap-2 px-2">
                                {(['en', 'uk'] as const).map(code => (
                                    <button
                                        key={code}
                                        type="button"
                                        onClick={() => setLanguage(code)}
                                        aria-pressed={language === code}
                                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                                            language === code
                                                ? 'text-white bg-white/[0.1]'
                                                : 'text-slate-500 hover:text-white hover:bg-white/[0.03]'
                                        }`}>
                                        {code === 'en' ? 'English' : 'Українська'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
