import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import type { ContactInfoItem } from '@/types';

export const contactInfo: ContactInfoItem[] = [
    {
        icon: Mail,
        titleKey: 'contact.email',
        content: 'evgenvelichko4@gmail.com',
        link: 'mailto:evgenvelichko4@gmail.com',
    },
    {
        icon: Phone,
        titleKey: 'contact.phone',
        content: '+38 (095) 923-7139',
        link: 'tel:+380959237139',
    },
    {
        icon: MapPin,
        titleKey: 'contact.location',
        content: 'Vinnitsa, Ukraine',
        link: 'https://www.google.com/maps/place/%D0%92%D0%B8%D0%BD%D0%BD%D0%B8%D1%86%D0%B0',
        isLocation: true,
    },
];

export const socialLinks = [
    {
        icon: Github,
        label: 'GitHub',
        href: 'https://github.com/EvgenVelichko',
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/evgen-velichko-755527338/',
    },
];
