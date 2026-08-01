/** @format */

import { ChevronDown, Github, Linkedin, ArrowRight } from 'lucide-react';
import { TypeWriter } from './TypeWriter';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/translations';
import photo from '@/assets/photo.webp';

export const Hero = () => {
    const { t, language } = useLanguage();
    const words = translations[language].hero.roles;

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-16 relative overflow-hidden section-base section-fade-bottom"
            style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.08) 0%, #020617 60%)' }}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] animate-float-slow" style={{ background: 'rgba(99,102,241,0.07)' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px] animate-float-slower" style={{ background: 'rgba(168,85,247,0.05)' }}></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}></div>
            </div>

            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Text */}
                    <div className="lg:w-3/5 order-2 lg:order-1">
                        <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
                            <h1 className="reveal text-4xl sm:text-5xl lg:text-7xl font-bold mb-2 leading-[1.1] tracking-tight">
                                <span className="text-white">{t('hero.greeting')}</span>
                            </h1>
                            <h2 className="reveal reveal-delay-1 text-2xl sm:text-3xl lg:text-5xl font-bold mb-8 leading-tight min-h-[1.3em]">
                                <TypeWriter words={words} />
                            </h2>

                            <p className="reveal reveal-delay-2 text-slate-400 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                                {t('hero.description')}
                            </p>

                            <div className="reveal reveal-delay-3 flex flex-wrap gap-3 sm:gap-4 mb-10 justify-center lg:justify-start">
                                <a
                                    href="#portfolio"
                                    className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-gray-950 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 text-sm sm:text-base">
                                    {t('hero.viewProjects')}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-white border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-300 text-sm sm:text-base">
                                    {t('hero.getInTouch')}
                                </a>
                            </div>

                            <div className="reveal reveal-delay-4 flex items-center gap-4 justify-center lg:justify-start">
                                <span className="text-xs text-slate-600 uppercase tracking-widest">{t('hero.findMe')}</span>
                                <div className="h-px w-8 bg-slate-700"></div>
                                <a href="https://github.com/EvgenVelichko" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/evgen-velichko-755527338/" target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300">
                                    <Linkedin size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="reveal reveal-delay-2 lg:w-2/5 order-1 lg:order-2 flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-700" style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}></div>
                            <div
                                className="relative w-72 sm:w-80 lg:w-[22rem] rounded-3xl overflow-hidden"
                                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                            >
                                <img src={photo} alt="Evgen Velychko" loading="lazy" className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(2,6,23,0.85) 100%)' }}></div>
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <p className="text-white font-semibold text-lg mb-1">{t('hero.name')}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm" style={{ color: '#818cf8' }}>{t('hero.role')}</span>
                                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold" style={{ background: 'rgba(99,102,241,0.85)', color: '#fff' }}>{t('hero.years')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-white transition-colors duration-300 animate-bounce">
                <ChevronDown size={24} />
            </a>
        </section>
    );
};
