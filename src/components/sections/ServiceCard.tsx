/** @format */

import { memo } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    number: string;
    gradient: string;
    accentColor: string;
    tags: string[];
}

export const ServiceCard = memo(({
    title,
    description,
    icon: Icon,
    number,
    accentColor,
    tags,
}: ServiceCardProps) => {
    const { t } = useLanguage();
    const resolveTag = (tag: string) => (tag.startsWith('services.') ? t(tag) : tag);

    return (
        <div
            className="group relative h-full rounded-2xl transition-all duration-300 hover:-translate-y-1 cursor-default"
            style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
            }}>
            
            <div className="p-6">
                {/* Icon + Number */}
                <div className="flex items-center justify-between mb-5">
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                            background: 'rgba(99,102,241,0.12)',
                            color: '#818cf8',
                        }}>
                        <Icon size={20} />
                    </div>
                    <span
                        className="text-xs font-mono font-medium"
                        style={{ color: '#475569' }}>
                        {number}
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    {title}
                </h3>

                {/* Description */}
                <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: '#64748b' }}>
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full"
                            style={{
                                color: 'rgba(129,140,248,0.8)',
                                background: 'rgba(99,102,241,0.08)',
                            }}>
                            {resolveTag(tag)}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
});
