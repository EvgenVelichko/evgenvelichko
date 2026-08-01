/** @format */

import { Layers } from 'lucide-react';
import { services } from '@/data/services';
import { useLanguage } from '@/contexts/LanguageContext';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
    const { t } = useLanguage();

    return (
        <section
            id="services"
            className="py-28 relative overflow-hidden select-none section-base section-fade-top section-fade-bottom"
            onContextMenu={e => e.preventDefault()}>
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[160px] -translate-y-1/2 animate-float-slow"
                    style={{ background: 'rgba(99,102,241,0.06)' }}></div>
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px] animate-float-slower"
                    style={{ background: 'rgba(168,85,247,0.05)' }}></div>
                <div
                    className="absolute bottom-0 left-1/3 w-[350px] h-[350px] rounded-full blur-[130px] animate-glow"
                    style={{ background: 'rgba(124,58,237,0.04)' }}></div>
                {/* Subtle dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="reveal text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('services.title')}
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                    <p
                        className="mt-6 max-w-lg mx-auto text-[15px]"
                        style={{ color: '#94a3b8' }}>
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Grid — equal 2x3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className={`reveal reveal-delay-${index % 3}`}>
                            <ServiceCard
                                number={String(index + 1).padStart(2, '0')}
                                title={t(service.titleKey)}
                                description={t(service.descKey)}
                                icon={service.icon}
                                gradient={service.gradient}
                                accentColor={service.accentColor}
                                tags={service.tags}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="reveal reveal-delay-2 text-center mt-16">
                    <div
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
                        style={{
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                        <Layers size={16} style={{ color: '#818cf8' }} />
                        <p className="text-sm" style={{ color: '#94a3b8' }}>
                            {t('services.haveProject')}{' '}
                            <a
                                href="#contact"
                                className="font-semibold transition-colors duration-300 hover:text-white"
                                style={{ color: '#818cf8' }}>
                                {t('services.collaborate')}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
