import { Globe, Code, Server, Database, Palette, Smartphone } from 'lucide-react';
import type { ServiceData } from '@/types';

export const services: ServiceData[] = [
    {
        titleKey: 'services.webDev',
        descKey: 'services.webDevDesc',
        icon: Globe,
        gradient: 'linear-gradient(135deg, #6366f1, #818cf8)',
        accentColor: '#6366f1',
        tags: ['services.tagCustomSites', 'SPAs', 'PWAs'],
    },
    {
        titleKey: 'services.frontendDev',
        descKey: 'services.frontendDevDesc',
        icon: Code,
        gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
        accentColor: '#a855f7',
        tags: ['React', 'Vue', 'TypeScript'],
    },
    {
        titleKey: 'services.uiux',
        descKey: 'services.uiuxDesc',
        icon: Palette,
        gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
        accentColor: '#ec4899',
        tags: ['Figma', 'services.tagPrototyping', 'services.tagDesignSystems'],
    },
    {
        titleKey: 'services.backendDev',
        descKey: 'services.backendDevDesc',
        icon: Server,
        gradient: 'linear-gradient(135deg, #6366f1, #7c3aed)',
        accentColor: '#7c3aed',
        tags: ['Node.js', 'Python', 'REST API'],
    },
    {
        titleKey: 'services.dbDesign',
        descKey: 'services.dbDesignDesc',
        icon: Database,
        gradient: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
        accentColor: '#0ea5e9',
        tags: ['SQL', 'NoSQL', 'ORM'],
    },
    {
        titleKey: 'services.mobileFirst',
        descKey: 'services.mobileFirstDesc',
        icon: Smartphone,
        gradient: 'linear-gradient(135deg, #10b981, #34d399)',
        accentColor: '#10b981',
        tags: [
            'services.tagResponsive',
            'services.tagPwa',
            'services.tagCrossPlatform',
        ],
    },
];
