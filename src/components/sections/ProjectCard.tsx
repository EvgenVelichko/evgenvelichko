/** @format */

import { memo } from 'react';
import type { ComponentType } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { LightboxTriggerIcon } from '@/components/ui/Lightbox';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    artwork?: ComponentType;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
    onOpen: (image: string, title: string) => void;
}

export const ProjectCard = memo(({
    title,
    description,
    image,
    artwork: Artwork,
    tags,
    liveLink,
    githubLink,
    onOpen,
}: ProjectCardProps) => {
    const { t } = useLanguage();
    return (
        <div className="group relative h-full">
            <div
                className="h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
                style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                    e.currentTarget.style.background = 'rgba(99,102,241,0.03)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.015)';
                }}
            >
                <div className="relative h-48 overflow-hidden">
                    {Artwork ? (
                        <div className="w-full h-full">
                            <Artwork />
                        </div>
                    ) : (
                        <button
                            type="button"
                            onClick={() => image && onOpen(image, title)}
                            className="relative block w-full h-full cursor-zoom-in"
                            aria-label={`${t('portfolio.enlarge')}: ${title}`}
                            title={t('portfolio.enlarge')}>
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <LightboxTriggerIcon />
                            </div>
                        </button>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                        <div className="p-4 w-full flex gap-3 pointer-events-auto">
                            {liveLink && (
                                <a href={liveLink} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white text-gray-950 p-2.5 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105">
                                    <ExternalLink size={14} />
                                </a>
                            )}
                            {githubLink && (
                                <a href={githubLink} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-white/10 backdrop-blur-sm text-white p-2.5 rounded-full hover:bg-white/20 transition-all duration-300">
                                    <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="text-base font-semibold mb-2 text-white/90 group-hover:text-white transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: '#64748b' }}>
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                        {tags.map((tag, idx) => (
                            <span key={idx} className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full"
                                style={{ color: 'rgba(129,140,248,0.8)', background: 'rgba(99,102,241,0.08)' }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});
