"use client";

import { useI18n } from "@/i18n";

export default function Products() {
    const { t, isJapanese } = useI18n();

    const serifClass = isJapanese ? "font-[var(--font-noto-serif-jp)]" : "text-serif";

    const features = [
        t.products.feature1,
        t.products.feature2,
        t.products.feature3,
        t.products.feature4,
    ];

    // Direct URL - Whop checkout
    const checkoutUrl = "https://whop.com/cag-macro-lab/macro-pulse-30-ultimate/";

    return (
        <section id="products" className="section-padding relative">
            {/* Top decorative line */}
            <div className="line-horizontal mb-16" />

            <div className="max-w-5xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-20">
                    <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold-400)] mb-4 animate-fade-in">
                        {t.products.sectionLabel}
                    </p>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl text-gold-gradient mb-6 ${serifClass}`}>
                        {t.products.sectionTitle}
                    </h2>
                    <div className="divider max-w-xs mx-auto">
                        <span className="ornament-star animate-pulse-slow">✦</span>
                    </div>
                </div>

                {/* Product Card */}
                <div className="card-premium p-8 md:p-12 mb-12 relative overflow-hidden">
                    {/* Shimmer effect */}
                    <div className="shimmer-overlay" />

                    {/* Corner ornaments with glow */}
                    <div className="corner-ornament corner-tl glow-corner" />
                    <div className="corner-ornament corner-tr glow-corner" />
                    <div className="corner-ornament corner-bl glow-corner" />
                    <div className="corner-ornament corner-br glow-corner" />

                    <div className="grid lg:grid-cols-5 gap-12 items-center relative z-10">
                        {/* Left: Visual */}
                        <div className="lg:col-span-2 flex justify-center">
                            <div className="relative compass-container">
                                {/* Outer glow ring */}
                                <div className="absolute inset-[-20px] rounded-full bg-gradient-radial from-[var(--gold-600)]/10 to-transparent" />

                                {/* Decorative rings with precision */}
                                <div className="absolute inset-0 w-64 h-64 border border-[var(--border)] rounded-full ring-outer" />
                                <div className="absolute inset-4 w-56 h-56 border border-[var(--border-strong)] rounded-full compass-subtle" />
                                <div className="absolute inset-8 w-48 h-48 border border-[var(--gold-600)] rounded-full gear-reverse opacity-60" />
                                <div className="absolute inset-12 w-40 h-40 border border-[var(--gold-500)]/30 rounded-full compass-fast" />

                                {/* Cardinal points */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] text-[var(--gold-400)] font-mono">N</div>
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[var(--gold-400)] font-mono">S</div>
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--gold-400)] font-mono">W</div>
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-[var(--gold-400)] font-mono">E</div>

                                {/* Center */}
                                <div className="relative w-64 h-64 flex items-center justify-center">
                                    <div className="text-center bg-[var(--background)]/80 rounded-full p-6 backdrop-blur-sm">
                                        <div className="text-5xl font-mono text-gold-gradient mb-2 counter-animate">30</div>
                                        <div className="text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)]">
                                            {t.products.dataSources}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:col-span-3">
                            <div className="mb-3 flex items-center gap-3">
                                <span className="badge-flagship">
                                    {t.products.flagship}
                                </span>
                                <span className="live-indicator">
                                    <span className="live-dot" />
                                    LIVE
                                </span>
                            </div>

                            <h3 className={`text-3xl md:text-4xl mb-2 ${serifClass}`}>
                                {t.common.productName}
                            </h3>

                            <p className={`text-serif-italic text-lg text-[var(--gold-400)] mb-6 ${serifClass}`}>
                                {t.products.tagline}
                            </p>

                            <p className="text-[var(--foreground-muted)] leading-relaxed mb-8">
                                {t.products.description}
                            </p>

                            {/* Features with stagger animation */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3 feature-item"
                                        style={{ animationDelay: `${idx * 0.1}s` }}
                                    >
                                        <span className="text-[var(--gold-400)] text-xs mt-1 feature-star">✦</span>
                                        <span className="text-sm text-[var(--foreground-muted)]">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Price & CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-[var(--border)]">
                                <div className="price-display">
                                    <div className="text-4xl font-mono text-gold-gradient price-glow">$47</div>
                                    <div className="text-xs text-[var(--foreground-muted)] uppercase tracking-wider">
                                        {t.common.perMonth}
                                    </div>
                                </div>
                                <a
                                    href={checkoutUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-premium group"
                                >
                                    <span className="btn-text">{t.common.getAccess}</span>
                                    <span className="btn-arrow">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coming soon hint */}
                <div className="text-center">
                    <p className={`text-sm text-[var(--foreground-muted)] text-serif-italic ${serifClass}`}>
                        {t.products.comingSoon}
                    </p>
                </div>
            </div>
        </section>
    );
}
