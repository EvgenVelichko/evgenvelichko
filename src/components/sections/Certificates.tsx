/** @format */

import { useState } from 'react';
import { Lightbox } from '@/components/ui/Lightbox';
import { certificates } from '@/data/certificates';
import { useLanguage } from '@/contexts/LanguageContext';
import { CertificateCard } from './CertificateCard';

export const Certificates = () => {
    const { t } = useLanguage();
    const [lightbox, setLightbox] = useState<{
        image: string;
        title: string;
    } | null>(null);

    return (
        <section
            id="certificates"
            className="py-28 relative overflow-hidden section-base section-fade-top section-fade-bottom">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px] animate-float-slower"
                    style={{ background: 'rgba(99,102,241,0.05)' }}></div>
                <div
                    className="absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full blur-[130px] animate-float-slow"
                    style={{ background: 'rgba(168,85,247,0.04)' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="reveal text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('certificates.title')}
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {certificates.map((cert, index) => (
                        <div key={index} className={`reveal reveal-delay-${index % 2}`}>
                            <CertificateCard
                                {...cert}
                                onOpen={(image, title) => setLightbox({ image, title })}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {lightbox && (
                <Lightbox
                    src={lightbox.image}
                    alt={lightbox.title}
                    onClose={() => setLightbox(null)}
                />
            )}
        </section>
    );
};
