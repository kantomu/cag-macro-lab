"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Import translations
import en from "./locales/en.json";
import ja from "./locales/ja.json";
import es from "./locales/es.json";

export type Locale = "en" | "ja" | "es";

export const locales: Locale[] = ["en", "ja", "es"];

export const localeNames: Record<Locale, string> = {
    en: "EN",
    ja: "JP",
    es: "ES",
};

// Type for translations
type TranslationData = typeof en;

const translations: Record<Locale, TranslationData> = {
    en,
    ja,
    es,
};

interface I18nContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: TranslationData;
    isJapanese: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const LOCALE_STORAGE_KEY = "cag-macro-lab-locale";

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
        if (savedLocale && locales.includes(savedLocale)) {
            setLocaleState(savedLocale);
        } else {
            const browserLang = navigator.language.split("-")[0];
            if (browserLang === "ja") {
                setLocaleState("ja");
            } else if (browserLang === "es") {
                setLocaleState("es");
            }
        }
        setIsHydrated(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
        document.documentElement.lang = newLocale;
    };

    const t = translations[locale];
    const isJapanese = locale === "ja";

    if (!isHydrated) {
        return (
            <I18nContext.Provider value={{ locale: "en", setLocale, t: translations.en, isJapanese: false }}>
                {children}
            </I18nContext.Provider>
        );
    }

    return (
        <I18nContext.Provider value={{ locale, setLocale, t, isJapanese }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (context === undefined) {
        throw new Error("useI18n must be used within an I18nProvider");
    }
    return context;
}

export function interpolate(text: string, values: Record<string, string | number>): string {
    return text.replace(/{(\w+)}/g, (_, key) => String(values[key] ?? `{${key}}`));
}
