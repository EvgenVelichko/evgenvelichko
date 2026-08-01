/** @format */

import { memo, useMemo } from 'react';
import { useGitHubRepos, isExcluded } from '@/hooks/useGitHub';
import type { GitHubRepo } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';

interface SkillData {
    name: string;
    percentage: number;
}

const SkillItem = memo(({ name, percentage, index }: {
    name: string;
    percentage: number;
    index: number;
}) => {
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - (percentage / 100) * circumference;
    const gradientId = `skillGrad-${index}`;

    return (
        <div
            className="group flex flex-col items-center p-5 rounded-2xl transition-all duration-500 hover:-translate-y-1 cursor-default"
            style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                e.currentTarget.style.background = 'rgba(99,102,241,0.05)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
            }}>
            <div className="relative w-24 h-24 mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="rgba(255,255,255,0.04)"
                        strokeWidth="5"
                    />
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke={`url(#${gradientId})`}
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="transition-all duration-1000"
                    />
                    <defs>
                        <linearGradient
                            id={gradientId}
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="0%">
                            <stop offset="0%" stopColor="#6366f1" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-white/90">
                        {percentage}%
                    </span>
                </div>
            </div>
            <span
                className="text-xs font-medium uppercase tracking-wider transition-colors duration-300"
                style={{ color: '#64748b' }}>
                {name}
            </span>
        </div>
    );
});

const defaultSkills: SkillData[] = [
    { name: 'HTML5', percentage: 95 },
    { name: 'Git', percentage: 95 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'SCSS', percentage: 80 },
    { name: 'Python', percentage: 75 },
    { name: 'React', percentage: 25 },
];

const SKILL_LANGUAGE_MAP: Record<string, string[]> = {
    'HTML5': ['HTML', 'CSS'],
    'JavaScript': ['JavaScript'],
    'TypeScript': ['TypeScript'],
    'Python': ['Python'],
};

const computeSkills = (repos: GitHubRepo[]): SkillData[] => {
    const withLang = repos.filter(r => !r.fork && !isExcluded(r) && r.language);
    if (withLang.length === 0) return defaultSkills;

    const counts: Record<string, number> = {};
    withLang.forEach(repo => {
        Object.entries(SKILL_LANGUAGE_MAP).forEach(([skill, langs]) => {
            if (langs.includes(repo.language as string)) {
                counts[skill] = (counts[skill] || 0) + 1;
            }
        });
    });

    const entries = Object.entries(counts);
    if (entries.length === 0) return defaultSkills;

    const total = withLang.length;
    const maxShare = Math.max(...entries.map(([, count]) => count / total));
    const scale = 90 / maxShare;

    const computed: SkillData[] = entries.map(([name, count]) => ({
        name,
        percentage: Math.max(Math.round((count / total) * scale), 10),
    }));
    computed.sort((a, b) => b.percentage - a.percentage);

    return [...computed, { name: 'Git', percentage: 90 }];
};

export const Skills = () => {
    const { repos, loaded } = useGitHubRepos();
    const { t } = useLanguage();
    const skills = useMemo(
        () => (loaded ? computeSkills(repos) : defaultSkills),
        [repos, loaded],
    );

    return (
        <section
            id="skills"
            className="py-28 relative overflow-hidden section-base section-fade-top section-fade-bottom">
            {/* Decorative background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[160px] animate-float-slow"
                    style={{ background: 'rgba(99,102,241,0.06)' }}></div>
                <div
                    className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px] animate-float-slower"
                    style={{ background: 'rgba(168,85,247,0.05)' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="reveal text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('skills.title')}
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background:
                                'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className={`reveal reveal-delay-${index % 4} w-[120px]`}>
                            <SkillItem
                                index={index}
                                name={skill.name}
                                percentage={skill.percentage}
                            />
                        </div>
                    ))}
                </div>

                <div className="reveal reveal-delay-2 text-center mt-16">
                    <a
                        href="#portfolio"
                        className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white text-gray-950 font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10 text-sm">
                        {t('skills.seeWork')}
                    </a>
                </div>
            </div>
        </section>
    );
};
