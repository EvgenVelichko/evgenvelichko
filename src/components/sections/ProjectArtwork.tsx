/** @format */

export const TicTacToeArtwork = () => (
    <div
        className="w-full h-full flex items-center justify-center"
        style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.15) 0%, rgba(2,6,23,0.9) 70%)',
        }}>
        <svg viewBox="0 0 180 180" className="w-40 h-40" fill="none">
            <defs>
                <linearGradient id="tttX" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="tttO" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
            <rect
                x="30" y="30" width="120" height="120" rx="14"
                stroke="rgba(255,255,255,0.12)" strokeWidth="2"
            />
            <line x1="70" y1="30" x2="70" y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <line x1="110" y1="30" x2="110" y2="150" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <line x1="30" y1="70" x2="150" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <line x1="30" y1="110" x2="150" y2="110" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
            <line x1="45" y1="45" x2="65" y2="65" stroke="url(#tttX)" strokeWidth="6" strokeLinecap="round" />
            <line x1="65" y1="45" x2="45" y2="65" stroke="url(#tttX)" strokeWidth="6" strokeLinecap="round" />
            <circle cx="90" cy="90" r="11" stroke="url(#tttO)" strokeWidth="6" />
            <line x1="125" y1="125" x2="145" y2="145" stroke="url(#tttX)" strokeWidth="6" strokeLinecap="round" />
            <line x1="145" y1="125" x2="125" y2="145" stroke="url(#tttX)" strokeWidth="6" strokeLinecap="round" />
        </svg>
    </div>
);

export const RpgArtwork = () => (
    <div
        className="w-full h-full flex items-center justify-center"
        style={{
            background: 'radial-gradient(circle at 50% 40%, rgba(124,58,237,0.15) 0%, rgba(2,6,23,0.9) 70%)',
        }}>
        <svg viewBox="0 0 180 180" className="w-40 h-40" fill="none">
            <defs>
                <linearGradient id="rpgBlade" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
                <linearGradient id="rpgGold" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#fbbf24" />
                    <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
            </defs>
            <path
                d="M90 20 L98 82 L132 70 L110 100 L126 138 L90 118 L54 138 L70 100 L48 70 L82 82 Z"
                stroke="url(#rpgBlade)" strokeWidth="5" strokeLinejoin="round"
            />
            <circle cx="90" cy="100" r="6" fill="url(#rpgGold)" />
            <path
                d="M90 118 v36"
                stroke="url(#rpgGold)" strokeWidth="7" strokeLinecap="round"
            />
            <path
                d="M70 150 h40"
                stroke="url(#rpgGold)" strokeWidth="7" strokeLinecap="round"
            />
        </svg>
    </div>
);

export const RepoArtwork = ({ name }: { name: string }) => (
    <div
        className="w-full h-full flex flex-col items-center justify-center gap-2 p-4"
        style={{
            background:
                'radial-gradient(circle at 50% 40%, rgba(99,102,241,0.14) 0%, rgba(2,6,23,0.9) 70%)',
        }}>
        <svg viewBox="0 0 180 180" className="w-24 h-24" fill="none">
            <defs>
                <linearGradient id="repoTop" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
            <path
                d="M40 55 H75 L85 70 H140 V115 H40 Z"
                fill="rgba(99,102,241,0.12)"
                stroke="rgba(129,140,248,0.55)"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <path
                d="M40 85 H140 V130 A8 8 0 0 1 132 138 H48 A8 8 0 0 1 40 130 Z"
                fill="rgba(99,102,241,0.08)"
                stroke="rgba(129,140,248,0.55)"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            <line
                x1="58"
                y1="112"
                x2="122"
                y2="112"
                stroke="url(#repoTop)"
                strokeWidth="4"
                strokeLinecap="round"
            />
        </svg>
        <span
            className="text-xs font-semibold tracking-wide text-center max-w-[90%] truncate"
            style={{ color: 'rgba(255,255,255,0.75)' }}>
            {name}
        </span>
    </div>
);
