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
  title: "Sissi · Kasir Pintar untuk Usaha yang Tumbuh",
  description:
    "Satu layar untuk semua yang terjadi di kasir. Untuk kuliner, toko, jasa, dan penyewaan. Pesanan, pembayaran, sampai tutup kasir tercatat di tablet dan HP Android, juga saat internet putus.",
  icons: {
    icon: "/logos/sissi-icon.svg",
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
