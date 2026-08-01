/** @format */

import { ChevronUp, Github, Linkedin, Code2, Heart, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    const navLinks = [
        { key: 'nav.home', href: '#hero' },
        { key: 'nav.about', href: '#about' },
        { key: 'nav.skills', href: '#skills' },
        { key: 'nav.services', href: '#services' },
        { key: 'nav.portfolio', href: '#portfolio' },
        { key: 'nav.contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Github size={18} />, href: 'https://github.com/EvgenVelichko', label: 'GitHub' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/evgen-velichko-755527338/', label: 'LinkedIn' },
        { icon: <Mail size={18} />, href: 'mailto:evgenvelichko4@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative pt-20 pb-8 overflow-hidden section-fade-top" style={{ background: '#020617' }}>
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(168,85,247,0.3), transparent)' }}></div>

            {/* Decorative glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.04)' }}></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(168,85,247,0.02)' }}></div>

            {/* Dot pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Scroll to top */}
                <div className="flex justify-center mb-16">
                    <a
                        href="#hero"
                        className="group relative p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                        style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
                            e.currentTarget.style.background = 'rgba(99,102,241,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                        }}
                    >
                        <ChevronUp size={20} className="transition-colors duration-300" style={{ color: '#818cf8' }} />
                    </a>
                </div>

                {/* Main footer grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand column */}
                    <div className="md:col-span-5">
                        <a href="#hero" className="flex items-center gap-2.5 mb-5 group w-fit">
                            <div className="w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}>
                                <Code2 size={16} className="text-white" />
                            </div>
                            <span className="font-bold text-xl text-white/90 group-hover:text-white transition-colors duration-300">
                                evgen<span style={{ color: '#6366f1' }}>.dev</span>
                            </span>
                        </a>
                        <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: '#64748b' }}>
                            {t('footer.description')}
                        </p>

                        {/* Location tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <MapPin size={12} style={{ color: '#818cf8' }} />
                            <span className="text-xs" style={{ color: '#64748b' }}>Vinnitsa, Ukraine</span>
                        </div>
                    </div>

                    {/* Navigation column */}
                    <div className="md:col-span-3">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: '#475569' }}>{t('footer.navigation')}</h4>
                        <nav className="flex flex-col gap-3">
                            {navLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm transition-all duration-300 w-fit"
                                    style={{ color: '#64748b' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#818cf8'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#64748b'; }}
                                >
                                    <span className="w-0 h-px transition-all duration-300 group-hover:w-3" style={{ background: '#818cf8' }}></span>
                                    {t(link.key)}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Connect column */}
                    <div className="md:col-span-4">
                        <h4 className="text-xs font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: '#475569' }}>{t('footer.connect')}</h4>

                        {/* Social links as mini cards */}
                        <div className="space-y-2.5">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                                    style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                                        e.currentTarget.style.background = 'rgba(99,102,241,0.06)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                    }}
                                >
                                    <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(99,102,241,0.1)', color: '#818cf8' }}>
                                        {social.icon}
                                    </div>
                                    <span className="text-sm font-medium flex-1" style={{ color: '#94a3b8' }}>{social.label}</span>
                                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ color: '#818cf8' }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }}></div>

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs flex items-center gap-1.5" style={{ color: '#475569' }}>
                        &copy; {new Date().getFullYear()} {t('footer.copyright')} {t('footer.builtWith')}
                        <Heart size={12} style={{ color: '#6366f1' }} fill="#6366f1" />
                    </p>
                    <p className="text-xs" style={{ color: '#334155' }}>
                        {t('footer.designed')}
                    </p>
                </div>
            </div>
        </footer>
    );
};
