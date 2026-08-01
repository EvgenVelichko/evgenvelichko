/** @format */

import { useState, useEffect, useCallback, useMemo } from 'react';
import type { ComponentProps } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from '@/components/ui/Lightbox';
import {
    GITHUB_USER,
    isSiteRepo,
    isExcluded,
    useGitHubRepos,
} from '@/hooks/useGitHub';
import { staticProjects } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProjectCard } from './ProjectCard';
import { RepoArtwork } from './ProjectArtwork';

type ProjectItem = Omit<ComponentProps<typeof ProjectCard>, 'onOpen'>;

const repoName = (url: string | undefined) => (url ? url.split('/').pop() : undefined);

export const Portfolio = () => {
    const { t } = useLanguage();
    const { repos, loaded } = useGitHubRepos();
    const [perPage, setPerPage] = useState(3);
    const [page, setPage] = useState(0);
    const [lightbox, setLightbox] = useState<{ image: string; title: string } | null>(null);

    const projects: ProjectItem[] = useMemo(() => {
        if (!loaded) return staticProjects;

        const matchedNames = new Set(
            staticProjects
                .map(p => repoName(p.githubLink))
                .filter((n): n is string => Boolean(n)),
        );

        const added = repos
            .filter(r => !r.fork && !isSiteRepo(r) && !isExcluded(r) && !matchedNames.has(r.name))
            .map(repo => {
                const ghPages = repo.has_pages
                    ? `https://${GITHUB_USER}.github.io/${repo.name}/`
                    : undefined;
                return {
                    title: repo.name,
                    description:
                        repo.description || 'New project from GitHub',
                    artwork: () => <RepoArtwork name={repo.name} />,
                    tags: repo.language ? [repo.language] : ['GitHub'],
                    liveLink: repo.homepage || ghPages || undefined,
                    githubLink: repo.html_url,
                };
            });

        return [...staticProjects, ...added];
    }, [repos, loaded]);

    // Responsive: 1 on mobile, 2 on tablet, 3 on desktop
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w >= 1024) setPerPage(3);
            else if (w >= 640) setPerPage(2);
            else setPerPage(1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    const totalPages = Math.ceil(projects.length / perPage);
    const safeePage = Math.min(page, totalPages - 1);

    const [fading, setFading] = useState(false);

    const changePage = useCallback((newPage: number) => {
        setFading(true);
        setTimeout(() => {
            setPage(newPage);
            setFading(false);
        }, 250);
    }, []);

    const nextPage = useCallback(() => {
        if (safeePage < totalPages - 1) changePage(safeePage + 1);
    }, [safeePage, totalPages, changePage]);

    const prevPage = useCallback(() => {
        if (safeePage > 0) changePage(safeePage - 1);
    }, [safeePage, changePage]);

    // Get current page projects
    const startIdx = safeePage * perPage;
    const currentProjects = projects.slice(startIdx, startIdx + perPage);

    // Touch/swipe support
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextPage();
            else prevPage();
        }
        setTouchStart(null);
    };

    return (
        <section
            id="portfolio"
            className="py-28 relative section-base section-fade-top section-fade-bottom"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[160px] animate-float-slow"
                    style={{ background: 'rgba(99,102,241,0.05)' }}></div>
                <div
                    className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px] animate-float-slower"
                    style={{ background: 'rgba(168,85,247,0.04)' }}></div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="reveal text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">{t('portfolio.title')}</h2>
                    <div className="mt-4 mx-auto w-12 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #a855f7)' }}></div>
                    <p className="mt-6 max-w-lg mx-auto" style={{ color: '#94a3b8' }}>
                        {t('portfolio.subtitle')}
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Projects grid — swipeable on mobile */}
                    <div
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div
                            className={`grid gap-5 ${
                                perPage === 3 ? 'grid-cols-3' :
                                perPage === 2 ? 'grid-cols-2' :
                                'grid-cols-1'
                            }`}
                            style={{
                                opacity: fading ? 0 : 1,
                                transform: fading ? 'translateY(12px)' : 'translateY(0)',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                            }}
                        >
                            {currentProjects.map((project, i) => (
                                <ProjectCard
                                    key={`${safeePage}-${i}`}
                                    {...project}
                                    onOpen={(image, title) => setLightbox({ image, title })}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <button
                            onClick={prevPage}
                            disabled={safeePage === 0}
                            aria-label={t('portfolio.previous')}
                            className="p-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                border: safeePage === 0 ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.12)',
                                color: safeePage === 0 ? '#334155' : '#fff',
                                cursor: safeePage === 0 ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <div className="flex gap-2" role="navigation" aria-label={t('portfolio.title')}>
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => changePage(i)}
                                    aria-label={`${t('portfolio.goToPage')} ${i + 1}`}
                                    aria-current={i === safeePage ? 'page' : undefined}
                                    className="rounded-full transition-all duration-300"
                                    style={{
                                        width: i === safeePage ? '24px' : '8px',
                                        height: '8px',
                                        background: i === safeePage ? '#6366f1' : 'rgba(255,255,255,0.1)',
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextPage}
                            disabled={safeePage >= totalPages - 1}
                            aria-label={t('portfolio.next')}
                            className="p-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                            style={{
                                border: safeePage >= totalPages - 1 ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(255,255,255,0.12)',
                                color: safeePage >= totalPages - 1 ? '#334155' : '#fff',
                                cursor: safeePage >= totalPages - 1 ? 'not-allowed' : 'pointer',
                            }}
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

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
