import { useEffect, useState, useCallback } from 'react';

export const TypeWriter = ({ words }: { words: string[] }) => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'pause' | 'deleting'>('typing');

    const tick = useCallback(() => {
        const currentWord = words[wordIndex];

        if (phase === 'typing') {
            if (displayText.length < currentWord.length) {
                setDisplayText(currentWord.slice(0, displayText.length + 1));
            } else {
                setPhase('pause');
            }
        } else if (phase === 'pause') {
            // handled by separate timeout
        } else if (phase === 'deleting') {
            if (displayText.length > 0) {
                setDisplayText(currentWord.slice(0, displayText.length - 1));
            } else {
                setWordIndex(i => (i + 1) % words.length);
                setPhase('typing');
            }
        }
    }, [displayText, phase, wordIndex, words]);

    useEffect(() => {
        if (phase === 'pause') {
            const t = setTimeout(() => setPhase('deleting'), 2000);
            return () => clearTimeout(t);
        }
        const speed = phase === 'deleting' ? 35 : 70;
        const t = setTimeout(tick, speed);
        return () => clearTimeout(t);
    }, [tick, phase]);

    return (
        <span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                {displayText}
            </span>
            <span className="text-indigo-400 animate-pulse ml-0.5">|</span>
        </span>
    );
};
