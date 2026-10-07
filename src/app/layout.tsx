import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sissi.id"
  ),
  title: "Sissi · Kasir Pintar untuk Usaha yang Tumbuh",
  description:
    "Satu layar untuk semua yang terjadi di kasir. Untuk kuliner, toko, jasa, dan penyewaan. Pesanan, pembayaran, sampai tutup kasir tercatat di tablet dan HP Android, juga saat internet putus.",
  keywords: [
    "Aplikasi Kasir",
    "POS",
    "Point of Sale",
    "Sissi Kasir",
    "Kasir Pintar",
    "Aplikasi POS Android",
    "Software Kasir",
    "Kasir UMKM",
    "Aplikasi Kasir Gratis",
  ],
  authors: [{ name: "Sissi" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Sissi · Kasir Pintar untuk Usaha yang Tumbuh",
    description:
      "Satu layar untuk semua yang terjadi di kasir. Untuk kuliner, toko, jasa, dan penyewaan. Pesanan, pembayaran, sampai tutup kasir tercatat di tablet dan HP Android.",
    siteName: "Sissi POS",
    images: [
      {
        url: "/images/hero-screen.png",
        width: 1200,
        height: 630,
        alt: "Sissi - Kasir Pintar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sissi · Kasir Pintar untuk Usaha yang Tumbuh",
    description:
      "Satu layar untuk semua yang terjadi di kasir. Untuk kuliner, toko, jasa, dan penyewaan.",
    images: ["/images/hero-screen.png"],
  },
  icons: {
    icon: "/logos/sissi-icon.svg",
    apple: "/logos/sissi-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
