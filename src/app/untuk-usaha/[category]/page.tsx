import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { USAHA_SUBPAGES } from "@/constants/usahaSubpages";
import { CheckCircle2, Tablet, Smartphone, Printer } from "lucide-react";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(USAHA_SUBPAGES).map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { category } = await params;
  const data = USAHA_SUBPAGES[category];
  if (!data) return { title: "Untuk Usaha · Sissi" };

  return {
    title: `${data.title} · Sissi`,
    description: data.subtitle,
  };
}

export default async function UsahaCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const data = USAHA_SUBPAGES[category];

  if (!data) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col w-full bg-white">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28">
        {/* 1. Header Section */}
        <section className="py-12 sm:py-16 border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-4xl">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-3 block">
                {data.categoryTag}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-semibold text-[#292e31] tracking-tight leading-[1.12]">
                {data.title}
              </h1>
              <p className="mt-5 text-base sm:text-[19px] text-[#525866] leading-relaxed max-w-2xl font-normal">
                {data.subtitle}
              </p>

              {/* COCOK UNTUK Pills */}
              <div className="mt-8 pt-6 border-t border-[#e4e9e7]">
                <span className="block text-[11px] font-medium font-mono tracking-wider uppercase text-[#7d8986] mb-3">
                  COCOK UNTUK
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {data.suitablePills.map((pill) => (
                    <span
                      key={pill}
                      className="px-3.5 py-1.5 rounded-[8px] bg-[#f3f6f5] border border-[#e4e9e7] text-[13px] font-medium text-[#292e31]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/#coba"
                  className="h-[48px] px-6 bg-[#f1702c] hover:bg-[#ff7a45] text-white text-[15px] font-medium rounded-[8px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                >
                  Coba gratis 30 hari
                </Link>
                <Link
                  href="/#harga"
                  className="h-[48px] px-6 bg-white hover:bg-[#f3f6f5] border border-[#e4e9e7] text-[#292e31] text-[15px] font-medium rounded-[8px] flex items-center justify-center transition-colors cursor-pointer"
                >
                  Lihat harga
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* 2. Masalah Section */}
        <section className="py-16 sm:py-24 bg-[#f3f6f5] border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-2xl mb-12">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                YANG SERING TERJADI
              </span>
              <h2 className="text-3xl sm:text-[42px] font-semibold text-[#292e31] tracking-tight leading-tight">
                Masalah yang diselesaikan Sissi
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.problems.map((prob) => (
                <div
                  key={prob.number}
                  className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[13px] font-bold font-mono text-[#f1702c] block mb-3">
                      {prob.number}
                    </span>
                    <h3 className="text-[19px] font-semibold text-[#292e31]">
                      {prob.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] text-[#525866] leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Fitur Dipakai Section */}
        <section className="py-16 sm:py-24 border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-2xl mb-12">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                LAYAR YANG DIPAKAI
              </span>
              <h2 className="text-3xl sm:text-[42px] font-semibold text-[#292e31] tracking-tight leading-tight">
                Yang paling sering dibuka setiap hari
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.screens.map((screen) => (
                <div
                  key={screen.title}
                  className="p-7 rounded-[16px] border border-[#e4e9e7] bg-white hover:border-[#b0b8b5] transition-colors shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-[10px] bg-[#e8f4f0] text-[#f1702c] flex items-center justify-center mb-5">
                      <CheckCircle2 size={22} className="stroke-[2]" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-[#292e31]">
                      {screen.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-[15px] text-[#525866] leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 4. Perangkat Section */}
        <section className="py-16 sm:py-24 bg-[#f3f6f5] border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-2xl mb-12">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                PERANGKAT
              </span>
              <h2 className="text-3xl sm:text-[42px] font-semibold text-[#292e31] tracking-tight leading-tight">
                Yang disarankan untuk usaha {category}
              </h2>
              <p className="mt-3 text-[16px] text-[#525866]">
                Tidak perlu beli semuanya di awal. Mulai dengan perangkat yang sudah ada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.devices.map((dev, idx) => (
                <div
                  key={dev.title}
                  className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs flex flex-col justify-between"
                >
                  <div className="text-[#f1702c] mb-5">
                    {idx === 0 ? (
                      <Tablet size={36} className="stroke-[1.75]" />
                    ) : idx === 1 ? (
                      <Smartphone size={36} className="stroke-[1.75]" />
                    ) : (
                      <Printer size={36} className="stroke-[1.75]" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-[#292e31]">
                      {dev.title}
                    </h3>
                    <p className="mt-2 text-[14px] text-[#525866] leading-relaxed">
                      {dev.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Ajakan Banner */}
        <section className="py-16 sm:py-24">
          <Container>
            <div className="bg-[#f1702c] text-white rounded-[24px] p-8 sm:p-12 lg:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl">
              <div className="max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
                  Coba Sissi di tokomu minggu ini.
                </h3>
                <p className="mt-3 text-white/90 text-[16px] leading-relaxed">
                  Semua fitur Pro gratis 30 hari. Setelah itu pilih tetap Gratis atau lanjut Pro.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Link
                  href="/#coba"
                  className="h-[48px] px-6 bg-white hover:bg-[#fef1eb] text-[#292e31] font-semibold text-[15px] rounded-[8px] flex items-center justify-center transition-colors shadow-sm cursor-pointer w-full sm:w-auto"
                >
                  Coba gratis 30 hari
                </Link>
                <Link
                  href="https://wa.me/6281234567890"
                  className="h-[48px] px-6 bg-transparent hover:bg-white/10 text-white font-semibold text-[15px] rounded-[8px] flex items-center justify-center transition-colors border border-white/60 cursor-pointer w-full sm:w-auto"
                >
                  Chat WhatsApp
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
