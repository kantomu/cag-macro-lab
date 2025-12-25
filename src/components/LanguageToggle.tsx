"use client";

import { useI18n, locales, localeNames, Locale } from "@/i18n";

export default function LanguageToggle() {
    const { locale, setLocale } = useI18n();

    return (
        <div className="flex items-center gap-3">
            {locales.map((loc, idx) => (
                <span key={loc} className="flex items-center gap-3">
                    <button
                        onClick={() => setLocale(loc as Locale)}
                        className={`text-xs tracking-[0.1em] transition-colors ${locale === loc
                                ? "text-[var(--gold-400)]"
                                : "text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
                            }`}
                        aria-label={`Switch to ${loc}`}
                    >
                        {localeNames[loc as Locale]}
                    </button>
                    {idx < locales.length - 1 && (
                        <span className="text-[var(--border-strong)]">·</span>
                    )}
                </span>
            ))}
        </div>
    );
}
