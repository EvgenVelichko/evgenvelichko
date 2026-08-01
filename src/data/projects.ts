import type { Project } from '@/types';
import project1 from '@/assets/project/project1.webp';
import schoolhub from '@/assets/project/schoolhub.webp';
import sonora from '@/assets/project/sonora.webp';
import wisecurrency from '@/assets/project/wisecurrency.webp';
import project3 from '@/assets/project/project3.webp';
import gallery from '@/assets/project/gallery.png';
import project5 from '@/assets/project/project5.webp';
import project6 from '@/assets/project/project6.webp';
import ticTacToe from '@/assets/project/tic-tac-toe.png';

export const staticProjects: Project[] = [
    {
        title: 'Money-Finance',
        description:
            'Interactive dashboard for financial data visualization and analytics.',
        image: project1,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/The-Money/',
        githubLink: 'https://github.com/EvgenVelichko/The-Money',
    },
    {
        title: 'SchoolHub',
        description:
            'Educational platform for school management and learning. Built with modern TypeScript stack.',
        image: schoolhub,
        tags: ['TypeScript', 'React', 'Vercel'],
        liveLink: 'https://schoolhub-kappa.vercel.app',
        githubLink: 'https://github.com/EvgenVelichko/schoolhub',
    },
    {
        title: 'Sonora',
        description:
            'Modern web application with clean design and responsive layout.',
        image: sonora,
        tags: ['TypeScript', 'React', 'SCSS'],
        liveLink: 'https://evgenvelichko.github.io/sonora/',
        githubLink: 'https://github.com/EvgenVelichko/sonora',
    },
    {
        title: 'Converter',
        description: 'Universal converter tool for various unit conversions.',
        image: wisecurrency,
        tags: ['TypeScript', 'React', 'Vite'],
        liveLink: 'https://evgenvelichko.github.io/converter/',
        githubLink: 'https://github.com/EvgenVelichko/converter',
    },
    {
        title: 'Minimal-Agency',
        description:
            'Full-service digital creative agency. Diploma work with elegant design.',
        image: project3,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Minimal-Agency/',
        githubLink: 'https://github.com/EvgenVelichko/Minimal-Agency',
    },
    {
        title: 'Gallery',
        description: 'Elegant image gallery with smooth animations.',
        image: gallery,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Gallery/',
        githubLink: 'https://github.com/EvgenVelichko/Gallery',
    },
    {
        title: 'CoWork',
        description: 'Coworking space designed for innovation and collaboration.',
        image: project5,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Cowork/',
        githubLink: 'https://github.com/EvgenVelichko/Cowork',
    },
    {
        title: 'PasswordGenerator',
        description:
            'Secure password generator with customizable options.',
        image: project6,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/PasswordGenerator/',
        githubLink: 'https://github.com/EvgenVelichko/PasswordGenerator',
    },
    {
        title: 'Tic-Tac-Toe',
        description:
            'Classic Tic-Tac-Toe with clean logic and interactive gameplay.',
        image: ticTacToe,
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveLink: 'https://evgenvelichko.github.io/Tic-Tac-Toe/',
        githubLink: 'https://github.com/EvgenVelichko/Tic-Tac-Toe',
    },
];
