"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
    const { t } = useI18n();

    // Direct URL
    const checkoutUrl = "https://whop.com/cag-macro-lab/macro-pulse-30-ultimate/";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-md">
            <nav className="max-w-6xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <span className="text-gold-gradient text-xl tracking-[0.1em] text-serif transition-all group-hover:tracking-[0.15em]">
                            CAG
                        </span>
                    </Link>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <a
                            href="#products"
                            className="nav-link text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] hover:text-[var(--gold-400)] transition-all duration-300"
                        >
                            {t.nav.instruments}
                        </a>
                        <a
                            href="#philosophy"
                            className="nav-link text-xs uppercase tracking-[0.2em] text-[var(--foreground-muted)] hover:text-[var(--gold-400)] transition-all duration-300"
                        >
                            {t.nav.philosophy}
                        </a>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-6">
                        <LanguageToggle />
                        <a
                            href={checkoutUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:inline-flex btn-premium text-[10px] py-2 px-4"
                        >
                            <span className="btn-text">{t.common.getAccess}</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Bottom line */}
            <div className="line-horizontal" />
        </header>
    );
}
