/** @format */

import { useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { contactInfo, socialLinks } from '@/data/profile';
import { useLanguage } from '@/contexts/LanguageContext';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export const Contact = () => {
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<
        'idle' | 'submitting' | 'success' | 'error'
    >('idle');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const sendToTelegram = async () => {
        const text = [
            `New message from portfolio`,
            ``,
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Subject: ${formData.subject}`,
            `Message: ${formData.message}`,
            ``,
            `Time: ${new Date().toLocaleString()}`,
        ].join('\n');

        const response = await fetch(
            `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text,
                }),
            },
        );

        if (!response.ok) throw new Error('Failed to send Telegram message');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');

        let telegramOk = false;
        let firebaseOk = false;

        try {
            await sendToTelegram();
            telegramOk = true;
        } catch (err) {
            console.error('Telegram send failed:', err);
        }

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                created_at: serverTimestamp(),
            });
            firebaseOk = true;
        } catch (err) {
            console.error('Firestore save failed:', err);
        }

        if (telegramOk || firebaseOk) {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setFormStatus('success');
        } else {
            setFormStatus('error');
        }
        setTimeout(() => setFormStatus('idle'), 3000);
    };

    const inputStyle: React.CSSProperties = {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#fff',
    };

    const inputFocusStyle = {
        borderColor: 'rgba(99,102,241,0.4)',
        background: 'rgba(255,255,255,0.05)',
    };

    return (
        <section
            id="contact"
            className="py-28 relative overflow-hidden section-base section-fade-top section-fade-bottom">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[160px] animate-float-slow"
                    style={{ background: 'rgba(99,102,241,0.06)' }}></div>
                <div
                    className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[140px] animate-float-slower"
                    style={{ background: 'rgba(168,85,247,0.05)' }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="reveal text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        {t('contact.title')}
                    </h2>
                    <div
                        className="mt-4 mx-auto w-12 h-1 rounded-full"
                        style={{
                            background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                        }}></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-4">
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target={info.isLocation ? '_blank' : undefined}
                                rel={info.isLocation ? 'noopener noreferrer' : undefined}
                                className={`reveal reveal-delay-${index + 1} group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5`}
                                style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
                                    e.currentTarget.style.background = 'rgba(99,102,241,0.05)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                }}>
                                <div
                                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                                    style={{ background: 'rgba(99,102,241,0.12)', color: '#818cf8' }}>
                                    <info.icon size={18} />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-[10px] uppercase tracking-wider mb-0.5" style={{ color: '#64748b' }}>
                                        {t(info.titleKey)}
                                    </p>
                                    <p className="text-sm text-white/80 truncate">{info.content}</p>
                                </div>
                                <ArrowUpRight size={14} className="shrink-0 transition-colors duration-300" style={{ color: '#475569' }} />
                            </a>
                        ))}

                        <div className="flex gap-3 pt-4">
                            {socialLinks.map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                                    className="group p-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}>
                                    <social.icon size={18} style={{ color: '#64748b' }} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="reveal reveal-delay-2 lg:col-span-3">
                        <form onSubmit={handleSubmit} className="rounded-2xl p-8"
                            style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                                        {t('contact.name')}
                                    </label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                                        className="w-full p-4 rounded-xl text-sm transition-all duration-300 focus:outline-none placeholder-slate-600"
                                        style={inputStyle}
                                        placeholder={t('contact.namePh')}
                                        onFocus={e => { Object.assign(e.currentTarget.style, inputFocusStyle); }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                                        {t('contact.emailLabel')}
                                    </label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                        className="w-full p-4 rounded-xl text-sm transition-all duration-300 focus:outline-none placeholder-slate-600"
                                        style={inputStyle}
                                        placeholder={t('contact.emailPh')}
                                        onFocus={e => { Object.assign(e.currentTarget.style, inputFocusStyle); }}
                                        onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }} />
                                </div>
                            </div>

                            <div className="mb-5">
                                <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                                    {t('contact.subject')}
                                </label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                                    className="w-full p-4 rounded-xl text-sm transition-all duration-300 focus:outline-none placeholder-slate-600"
                                    style={inputStyle}
                                    placeholder={t('contact.subjectPh')}
                                    onFocus={e => { Object.assign(e.currentTarget.style, inputFocusStyle); }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }} />
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                                    {t('contact.message')}
                                </label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                                    className="w-full p-4 rounded-xl text-sm transition-all duration-300 focus:outline-none placeholder-slate-600 resize-none"
                                    style={inputStyle}
                                    placeholder={t('contact.messagePh')}
                                    onFocus={e => { Object.assign(e.currentTarget.style, inputFocusStyle); }}
                                    onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }} />
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === 'submitting'}
                                className="w-full py-4 bg-white text-gray-950 font-semibold rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-white/5">
                                {formStatus === 'submitting' ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {t('contact.sending')}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        <Send size={16} />
                                        {t('contact.send')}
                                    </span>
                                )}
                            </button>

                            {formStatus === 'success' && (
                                <div className="mt-4 p-4 rounded-xl text-sm"
                                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.15)', color: '#4ade80' }}>
                                    {t('contact.success')}
                                </div>
                            )}

                            {formStatus === 'error' && (
                                <div className="mt-4 p-4 rounded-xl text-sm"
                                    style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)', color: '#f87171' }}>
                                    {t('contact.error')}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
