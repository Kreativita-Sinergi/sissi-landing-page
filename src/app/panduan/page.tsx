import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import {
  BookOpen,
  Printer,
  QrCode,
  ClipboardList,
  Wallet,
  BarChart3,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";
import { GUIDES } from "@/constants/guides";

export const metadata = {
  title: "Panduan Pemakaian · Sissi POS",
  description:
    "Panduan lengkap cara pakai aplikasi kasir Sissi: registrasi, kelola menu, printer bluetooth, hingga tutup kasir harian.",
};

const ICON_MAP = {
  BookOpen,
  ClipboardList,
  Printer,
  QrCode,
  Wallet,
  BarChart3,
};

export default function PanduanPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-[#f3f6f5]">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7a45]/10 text-[#f1702c] text-[12px] font-mono font-medium uppercase tracking-wider mb-4">
                <Sparkles size={13} />
                <span>Pusat Bantuan & Panduan</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#292e31] tracking-tight leading-[1.12]">
                Panduan pemakaian Sissi
              </h1>
              <p className="mt-4 text-base sm:text-[18px] text-[#525866] leading-relaxed">
                Langkah demi langkah mulai dari setup awal outlet, kelola menu, sambungkan printer bluetooth, hingga rekap tutup kasir harian.
              </p>
            </div>
          </Container>
        </section>

        {/* Guides Grid */}
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((guide) => {
                const Icon = ICON_MAP[guide.iconName] || BookOpen;
                return (
                  <Link
                    key={guide.slug}
                    href={`/panduan/${guide.slug}`}
                    className="p-7 rounded-[18px] bg-white border border-[#e4e9e7] shadow-2xs hover:border-[#f1702c]/50 hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-[14px] bg-[#fff5f0] text-[#f1702c] border border-[#ffe0d3] flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon size={24} className="stroke-[1.75]" />
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#7d8986]">
                          <Clock size={12} />
                          <span>{guide.estimatedTime}</span>
                        </div>
                      </div>

                      <span className="text-[11px] font-semibold font-mono tracking-wider uppercase text-[#7d8986] mb-2 block">
                        {guide.category}
                      </span>
                      <h2 className="text-[19px] font-semibold text-[#292e31] group-hover:text-[#f1702c] transition-colors leading-snug">
                        {guide.title}
                      </h2>
                      <p className="mt-3 text-[14px] text-[#525866] leading-relaxed line-clamp-3">
                        {guide.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#e4e9e7]/60 flex items-center justify-between text-[13px] font-semibold text-[#f1702c]">
                      <span>Baca panduan lengkap</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Bantuan Callout */}
        <section className="py-8">
          <Container>
            <div className="bg-white rounded-[20px] border border-[#e4e9e7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#292e31]">
                  Butuh bantuan langsung dari tim kami?
                </h3>
                <p className="mt-2 text-[#525866] text-[15px]">
                  Kalau ada kendala teknis saat setup di tokomu, tim spesialis kami siap pandu via WhatsApp sampai kasirmu berjalan lancar.
                </p>
              </div>
              <Link
                href="https://wa.me/6281234567890"
                className="h-[46px] px-6 bg-[#f1702c] hover:bg-[#ff7a45] text-white font-medium text-[14px] rounded-[10px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer shrink-0"
              >
                Chat WhatsApp
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
