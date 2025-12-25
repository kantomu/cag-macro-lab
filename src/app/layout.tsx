import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

// Japanese serif font for elegance
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CAG Macro Lab | Quantitative Precision",
  description: "Professional quant instruments for discerning traders. Track 30 market pulses in real-time with institutional-grade precision.",
  keywords: ["TradingView", "Quant", "Macro Analysis", "CAG Macro Lab", "Trading Indicators"],
  authors: [{ name: "CAG Macro Lab" }],
  openGraph: {
    title: "CAG Macro Lab | Quantitative Precision",
    description: "Professional quant instruments for discerning traders.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ja_JP", "es_ES"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} ${notoSerifJP.variable} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
