import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/constants/content";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

// Plus Jakarta Sans: huruf rancangan studio Jakarta (Tokotype), cocok untuk perusahaan Indonesia.
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: site.brand,
  keywords: [
    "jasa pembuatan website Pekanbaru",
    "jasa pembuatan aplikasi",
    "software house Pekanbaru",
    "IoT",
    "Sissi Kasir",
    "Sissi Booth",
    "Loka Accounting",
    site.company,
  ],
  authors: [{ name: site.company }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: site.brand,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
};

export const viewport: Viewport = { themeColor: "#fbfaf8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" data-scroll-behavior="smooth" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body className="overflow-x-clip font-sans antialiased">{children}</body>
    </html>
  );
}
