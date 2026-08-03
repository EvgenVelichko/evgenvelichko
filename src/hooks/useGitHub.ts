/** @format */

import { useEffect, useState } from 'react';
import type { GitHubRepo } from '@/types';

export const GITHUB_USER = 'EvgenVelichko';

export const EXCLUDED_REPOS = ['naturalbeauty', 'crypto-bank', 'evgenvelychko'];

export type { GitHubRepo };

let cache: GitHubRepo[] | null = null;
let inflight: Promise<GitHubRepo[]> | null = null;

const normalizeRepo = (repo: any): GitHubRepo => ({
    name: repo.name,
    description: repo.description,
    language: repo.language,
    html_url: repo.html_url,
    homepage: repo.homepage,
    has_pages: repo.has_pages,
    fork: repo.fork,
    topics: Array.isArray(repo.topics) ? repo.topics : [],
});

const fetchRepos = async (): Promise<GitHubRepo[]> => {
    if (cache) return cache;
    if (inflight) return inflight;

    inflight = fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
        { headers: { Accept: 'application/vnd.github+json' } },
    )
        .then(res => (res.ok ? res.json() : []))
        .catch(() => [])
        .then((repos: any[]) => {
            const normalized = Array.isArray(repos) ? repos.map(normalizeRepo) : [];
            cache = normalized;
            return normalized;
        })
        .finally(() => {
            inflight = null;
        });

    return inflight;
};

export const useGitHubRepos = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>(() => cache ?? []);
    const [loaded, setLoaded] = useState(Boolean(cache));

    useEffect(() => {
        let cancelled = false;
        fetchRepos().then(list => {
            if (!cancelled) {
                setRepos(list);
                setLoaded(true);
            }
        });
        return () => {
            cancelled = true;
        };
    }, []);

    return { repos, loaded };
};

export const isSiteRepo = (repo: GitHubRepo) =>
    repo.name.toLowerCase() === GITHUB_USER.toLowerCase();

export const isExcluded = (repo: GitHubRepo) =>
    EXCLUDED_REPOS.includes(repo.name.toLowerCase());
