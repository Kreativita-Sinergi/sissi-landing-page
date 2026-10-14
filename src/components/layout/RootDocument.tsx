import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { htmlLang, type Locale } from "@/content/locales";
import "@/app/globals.css";

// Plus Jakarta Sans: huruf rancangan studio Jakarta (Tokotype).
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

/** Kerangka <html> bersama untuk root layout tiap bahasa. */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={htmlLang[locale]} data-scroll-behavior="smooth" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="overflow-x-clip font-sans antialiased">{children}</body>
    </html>
  );
}
