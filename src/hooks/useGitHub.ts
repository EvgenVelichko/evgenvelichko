/** @format */

import { useEffect, useState } from 'react';
import type { GitHubRepo } from '@/types';

export const GITHUB_USER = 'EvgenVelichko';

export const EXCLUDED_REPOS = ['naturalbeauty', 'crypto-bank'];

export type { GitHubRepo };

let cache: GitHubRepo[] | null = null;
let inflight: Promise<GitHubRepo[]> | null = null;

const fetchRepos = async (): Promise<GitHubRepo[]> => {
    if (cache) return cache;
    if (inflight) return inflight;

    inflight = fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
        { headers: { Accept: 'application/vnd.github+json' } },
    )
        .then(res => (res.ok ? res.json() : []))
        .catch(() => [])
        .then(repos => {
            cache = repos;
            return repos;
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
