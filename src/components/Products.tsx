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

    // Checkout URLs
    const macroCheckoutUrl = "https://whop.com/checkout/plan_xDHdyMOUkLRfQ";
    const alertCheckoutUrl = "https://whop.com/checkout/plan_AXx5BHmEbdLCr";

    // TradingView URLs
    const macroTradingViewUrl = "https://jp.tradingview.com/script/mYzp5lsq/";
    const alertTradingViewUrl = "https://jp.tradingview.com/script/sKSBwH3S/";
    const all3of3TradingViewUrl = "https://jp.tradingview.com/script/FyU5ZrKb/";

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

                {/* Macro Pulse 30 - FLAGSHIP AT TOP */}
                <div className="card-premium p-8 md:p-12 mb-16 relative overflow-hidden">
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
                                <div className="flex flex-wrap items-center gap-4">
                                    <a
                                        href={macroCheckoutUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-premium group"
                                    >
                                        <span className="btn-text">{t.common.getAccess}</span>
                                        <span className="btn-arrow">→</span>
                                    </a>
                                    <a
                                        href={macroTradingViewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--gold-400)] transition-colors group/link"
                                    >
                                        <span>{t.products.viewOnTradingView}</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Tools Section */}
                <div className="mb-12">
                    <div className="text-center mb-12">
                        <h3 className={`text-2xl md:text-3xl text-gold-gradient mb-3 ${serifClass}`}>
                            {t.products.additionalTools}
                        </h3>
                        <p className="text-sm text-[var(--foreground-muted)]">
                            {t.products.additionalToolsSubtitle}
                        </p>
                        <div className="divider max-w-xs mx-auto mt-4">
                            <span className="ornament-star">✦</span>
                        </div>
                    </div>

                    {/* Indicator Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* 3of3 Alert Card */}
                        <div className="card-premium p-6 md:p-8 relative overflow-hidden group hover:border-[var(--gold-500)]/50 transition-all duration-300">
                            <div className="shimmer-overlay opacity-50" />
                            <div className="corner-ornament corner-tl" />
                            <div className="corner-ornament corner-br" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="badge-flagship text-xs">
                                        {t.products.indicator1.type}
                                    </span>
                                    <span className="px-2 py-0.5 text-xs rounded-full bg-[var(--gold-600)]/20 text-[var(--gold-400)] border border-[var(--gold-600)]/30">
                                        {t.products.indicator1.access}
                                    </span>
                                </div>

                                <h4 className={`text-xl md:text-2xl mb-3 ${serifClass}`}>
                                    {t.products.indicator1.name}
                                </h4>

                                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-6">
                                    {t.products.indicator1.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {[
                                        t.products.indicator1.feature1,
                                        t.products.indicator1.feature2,
                                        t.products.indicator1.feature3,
                                        t.products.indicator1.feature4
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="text-[var(--gold-400)] text-[10px] mt-1">✦</span>
                                            <span className="text-xs text-[var(--foreground-muted)]">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Links - Payment + TradingView */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 border-t border-[var(--border)]">
                                    <a
                                        href={alertCheckoutUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[var(--gold-600)]/20 text-[var(--gold-400)] border border-[var(--gold-600)]/40 rounded hover:bg-[var(--gold-600)]/30 transition-colors group/link"
                                    >
                                        <span>{t.common.getAccess}</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                    <a
                                        href={alertTradingViewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-[var(--foreground-muted)] hover:text-[var(--gold-400)] transition-colors group/link"
                                    >
                                        <span>TradingView</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* All-3of3 Card - FREE */}
                        <div className="card-premium p-6 md:p-8 relative overflow-hidden group hover:border-[var(--gold-500)]/50 transition-all duration-300">
                            <div className="shimmer-overlay opacity-50" />
                            <div className="corner-ornament corner-tl" />
                            <div className="corner-ornament corner-br" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="badge-flagship text-xs">
                                        {t.products.indicator2.type}
                                    </span>
                                    <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                        {t.products.indicator2.access}
                                    </span>
                                </div>

                                <h4 className={`text-xl md:text-2xl mb-3 ${serifClass}`}>
                                    {t.products.indicator2.name}
                                </h4>

                                <p className="text-sm text-[var(--foreground-muted)] leading-relaxed mb-6">
                                    {t.products.indicator2.description}
                                </p>

                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {[
                                        t.products.indicator2.feature1,
                                        t.products.indicator2.feature2,
                                        t.products.indicator2.feature3,
                                        t.products.indicator2.feature4
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <span className="text-[var(--gold-400)] text-[10px] mt-1">✦</span>
                                            <span className="text-xs text-[var(--foreground-muted)]">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Link - TradingView only (FREE) */}
                                <div className="flex items-center gap-4 pt-4 border-t border-[var(--border)]">
                                    <a
                                        href={all3of3TradingViewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded hover:bg-emerald-500/30 transition-colors group/link"
                                    >
                                        <span>TradingView</span>
                                        <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                    </a>
                                </div>
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
