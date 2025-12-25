"use client";

import Link from "next/link";
import { useI18n, interpolate } from "@/i18n";

export default function Footer() {
    const { t } = useI18n();
    const currentYear = new Date().getFullYear();

    // Direct URLs
    const tradingViewUrl = "https://jp.tradingview.com/script/mYzp5lsq/";

    return (
        <footer className="py-16 relative">
            {/* Top line */}
            <div className="line-horizontal mb-16" />

            <div className="max-w-4xl mx-auto px-6">
                {/* Logo */}
                <div className="text-center mb-12">
                    <Link href="/" className="text-gold-gradient text-2xl tracking-[0.2em] text-serif inline-block hover:tracking-[0.25em] transition-all duration-500">
                        CAG Macro Lab
                    </Link>
                    <div className="divider max-w-xs mx-auto mt-6">
                        <span className="ornament-star animate-pulse-slow">✦</span>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a
                        href={tradingViewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link text-xs uppercase tracking-[0.15em] text-[var(--foreground-muted)]"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.5 3H15v2h3.17l-5.59 5.59L10 8.59 2.86 15.73 4.27 17.14l6.14-6.14 2.59 2 6.59-6.59V9.5h2V3h-.09z" />
                        </svg>
                        TradingView
                    </a>
                </div>

                {/* Copyright & Disclaimer */}
                <div className="text-center space-y-4">
                    <p className="text-xs text-[var(--foreground-muted)]">
                        {interpolate(t.footer.copyright, { year: currentYear })}
                    </p>
                    <p className="text-xs text-[var(--foreground-muted)] max-w-lg mx-auto leading-relaxed opacity-60">
                        {t.footer.disclaimer}
                    </p>
                </div>
            </div>
        </footer>
    );
}
