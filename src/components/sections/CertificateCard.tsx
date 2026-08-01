/** @format */

import { memo } from 'react';
import { Award } from 'lucide-react';
import { LightboxTriggerIcon } from '@/components/ui/Lightbox';
import { useLanguage } from '@/contexts/LanguageContext';

interface CertificateCardProps {
    title: string;
    issuer: string;
    date: string;
    image: string;
    onOpen: (image: string, title: string) => void;
}

export const CertificateCard = memo(({
    title,
    issuer,
    date,
    image,
    onOpen,
}: CertificateCardProps) => {
    const { t } = useLanguage();
    return (
        <div className="group">
            <div
                className="rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor =
                        'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background =
                        'rgba(255,255,255,0.015)';
                }}>
                <div className="relative">
                    {image ? (
                        <button
                            type="button"
                            onClick={() => onOpen(image, title)}
                            className="relative block w-full cursor-zoom-in"
                            aria-label={`${t('certificates.enlarge')}: ${title}`}
                            title={t('certificates.enlarge')}>
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <LightboxTriggerIcon />
                            </div>
                        </button>
                    ) : (
                        <div
                            className="w-full h-48 flex items-center justify-center"
                            style={{ background: '#0a0f1f' }}>
                            <Award size={48} style={{ color: '#334155' }} />
                        </div>
                    )}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                'linear-gradient(180deg, transparent 50%, rgba(2,6,23,0.6) 100%)',
                        }}></div>
                    <div
                        className="absolute top-3 right-3 p-2 rounded-full pointer-events-none"
                        style={{
                            background:
                                'linear-gradient(135deg, #6366f1, #a855f7)',
                        }}>
                        <Award size={12} className="text-white" />
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mb-1" style={{ color: '#64748b' }}>
                        {t('certificates.issuedBy')} {issuer}
                    </p>
                    <p className="text-xs" style={{ color: '#475569' }}>
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
});
