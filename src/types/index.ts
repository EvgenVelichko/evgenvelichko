import type { ComponentType } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface GitHubRepo {
    name: string;
    description: string | null;
    language: string | null;
    html_url: string;
    homepage: string | null;
    has_pages: boolean;
    fork: boolean;
}

export interface Project {
    title: string;
    description: string;
    image?: string;
    artwork?: ComponentType;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
}

export interface ServiceData {
    titleKey: string;
    descKey: string;
    icon: LucideIcon;
    gradient: string;
    accentColor: string;
    tags: string[];
}

export interface CertificateData {
    title: string;
    issuer: string;
    date: string;
    image: string;
}

export interface ContactInfoItem {
    icon: LucideIcon;
    titleKey: string;
    content: string;
    link: string;
    isLocation?: boolean;
}
