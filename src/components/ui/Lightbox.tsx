/** @format */

import { useEffect, useCallback } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
}

export const Lightbox = ({ src, alt, onClose }: LightboxProps) => {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        },
        [onClose],
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={onClose}
            style={{ animation: 'lightbox-fade 0.5s ease-out both' }}>
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md"></div>

            <figure
                className="relative max-w-[95vw] max-h-[92vh]"
                onClick={e => e.stopPropagation()}>
                <img
                    src={src}
                    alt={alt}
                    className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10"
                    style={{
                        animation:
                            'lightbox-zoom 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
                    }}
                />
                <figcaption
                    className="text-center text-sm mt-3 text-white/70"
                    style={{ animation: 'lightbox-fade 0.5s ease-out both' }}>
                    {alt}
                </figcaption>
            </figure>

            <button
                type="button"
                onClick={onClose}
                aria-label="Close image"
                className="absolute top-5 right-5 p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110">
                <X size={24} />
            </button>
        </div>
    );
};

export const LightboxTriggerIcon = ({ className = '' }: { className?: string }) => (
    <span
        className={`inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm transition-opacity duration-300 ${className}`}
        style={{
            background: 'rgba(2,6,23,0.55)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.85)',
        }}>
        <ZoomIn size={12} />
        View
    </span>
);
