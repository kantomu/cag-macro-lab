"use client";

import { useI18n } from "@/i18n";

export default function Philosophy() {
    const { t, isJapanese } = useI18n();

    const serifClass = isJapanese ? "font-[var(--font-noto-serif-jp)]" : "text-serif";

    const principles = [
        { num: "I", title: t.philosophy.principle1Title, desc: t.philosophy.principle1Desc },
        { num: "II", title: t.philosophy.principle2Title, desc: t.philosophy.principle2Desc },
        { num: "III", title: t.philosophy.principle3Title, desc: t.philosophy.principle3Desc },
    ];

    return (
        <section id="philosophy" className="section-padding relative bg-[var(--background-secondary)] overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="text-center mb-16">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-4">
                        {t.philosophy.sectionLabel}
                    </p>
                    <h2 className={`text-4xl md:text-5xl text-gold-gradient mb-6 ${serifClass}`}>
                        {t.philosophy.sectionTitle}
                    </h2>
                    <div className="divider max-w-xs mx-auto">
                        <span className="ornament-star animate-pulse-slow">✦</span>
                    </div>
                </div>

                {/* Principles grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-4">
                    {principles.map((principle, idx) => (
                        <div
                            key={idx}
                            className="principle-card-focus group p-6 md:p-8 text-center cursor-default"
                            style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                            {/* Orbiting icon container */}
                            <div className="relative w-24 h-24 mx-auto mb-6">
                                {/* Orbit path */}
                                <div className="absolute inset-0 border border-[var(--gold-600)]/30 rounded-full group-hover:border-[var(--gold-500)]/50 transition-all duration-500" />

                                {/* Orbiting star 1 */}
                                <div className="absolute inset-0 orbit-slow">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[var(--gold-400)] rounded-full shadow-[0_0_8px_rgba(201,162,39,0.6)] group-hover:scale-125 transition-transform" />
                                </div>

                                {/* Orbiting star 2 (opposite direction) */}
                                <div className="absolute inset-0 orbit-reverse">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[var(--gold-300)] rounded-full shadow-[0_0_6px_rgba(201,162,39,0.4)]" />
                                </div>

                                {/* Center number */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className={`text-4xl text-gold-gradient ${serifClass} group-hover:scale-110 transition-transform duration-500`}>
                                        {principle.num}
                                    </span>
                                </div>
                            </div>

                            <h4 className="text-sm uppercase tracking-[0.15em] mb-4 text-[var(--gold-400)] group-hover:text-[var(--gold-300)] transition-colors duration-300">
                                {principle.title}
                            </h4>
                            <p className="text-sm text-[var(--foreground-muted)] leading-relaxed group-hover:text-[var(--foreground)] transition-colors duration-300">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Quote with decorative elements */}
                <div className="mt-20 text-center relative">
                    {/* Quote marks */}
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-4xl text-[var(--gold-600)] opacity-30">&ldquo;</span>

                    <blockquote className={`text-xl md:text-2xl lg:text-3xl text-serif-italic text-[var(--foreground-muted)] leading-relaxed px-8 ${serifClass}`}>
                        {t.philosophy.quote}
                    </blockquote>

                    {/* Bottom ornament */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--gold-600)]" />
                        <span className="text-[var(--gold-400)] text-xs animate-pulse-slow">✦</span>
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--gold-600)]" />
                    </div>
                </div>
            </div>
        </section>
    );
}
