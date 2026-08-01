import type { CertificateData } from '@/types';
import certWebsites from '@/assets/certificates/Certificates.webp';
import certWebDev from '@/assets/certificates/Certificates2.png';

export const certificates: CertificateData[] = [
    {
        title: 'Websites for schoolchildren',
        issuer: 'Ithillel',
        date: '16.01.2025',
        image: certWebsites,
    },
    {
        title: 'Web-development for schoolchildren',
        issuer: 'Ithillel',
        date: '26.06.2025',
        image: certWebDev,
    },
];
