import { useEffect } from 'react';

let observer: IntersectionObserver | null = null;

const scan = () => {
  if (typeof window === 'undefined') return;
  if (!observer) {
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10px 0px' },
    );
  }
  document
    .querySelectorAll('.reveal:not(.reveal-visible)')
    .forEach(el => observer?.observe(el));
};

export const useReveal = () => {
  useEffect(() => {
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => mo.disconnect();
  }, []);
};
