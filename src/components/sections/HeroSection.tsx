import React from "react";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-[#f1702c] text-white relative overflow-hidden pt-[82px]">
      {/* Top Hero Text Section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px] pt-12 sm:pt-16 pb-10 sm:pb-14">
        {/* Main Headline - Left Aligned in Figma */}
        <div className="max-w-[1000px]">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold text-white tracking-tight leading-[1.08] text-left">
            Satu layar untuk semua yang terjadi di kasir.
          </h1>
        </div>

        {/* Row: Subtitle on Left, Buttons on Right (Desktop) */}
        <div className="mt-8 sm:mt-9 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#fef1eb] font-normal leading-relaxed max-w-[560px] text-left">
            Untuk kuliner, toko, jasa, dan penyewaan. Pesanan, pembayaran,
            sampai tutup kasir tercatat di tablet dan HP Android, juga saat
            internet putus.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <Link
              href="#daftar"
              className="h-[51px] px-[22px] bg-white hover:bg-[#fef1eb] text-[#292e31] font-medium text-[16px] rounded-[8px] flex items-center justify-center transition-all shadow-sm cursor-pointer"
            >
              Daftar sekarang
            </Link>
            <Link
              href="#unduh"
              className="h-[51px] px-[22px] bg-transparent hover:bg-white/10 text-white font-medium text-[16px] rounded-[8px] flex items-center justify-center gap-2.5 transition-colors border border-transparent cursor-pointer"
            >
              {/* Exact Google Play Vector Icon from Figma */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M2.25 15.375V2.62499C2.25 2.18249 2.505 1.79249 2.88 1.61249L10.2675 8.99999L2.88 16.3875C2.505 16.2 2.25 15.8175 2.25 15.375ZM12.6075 11.34L4.5375 16.005L10.905 9.63749L12.6075 11.34ZM15.12 8.10749C15.375 8.30999 15.5625 8.62499 15.5625 8.99999C15.5625 9.37499 15.3975 9.67499 15.135 9.88499L13.4175 10.875L11.5425 8.99999L13.4175 7.12499L15.12 8.10749ZM4.5375 1.99499L12.6075 6.65999L10.905 8.36249L4.5375 1.99499Z"
                  fill="white"
                />
              </svg>
              <span>Unduh aplikasi</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Layar - Straddling between Orange and White Backgrounds */}
      <div className="relative w-full">
        {/* Background Split: Top is Orange (330px), Bottom is White */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="h-[45%] sm:h-[48%] bg-[#f1702c]" />
          <div className="flex-1 bg-white" />
        </div>

        {/* Centered Mockup Screen (width: 1040) */}
        <div className="relative max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-0 z-10 pb-10 sm:pb-16">
          <div className="relative w-full drop-shadow-[0_20px_50px_rgba(5,40,32,0.15)]">
            <Image
              src="/images/hero-screen.png"
              alt="Aplikasi Kasir Sissi"
              width={2100}
              height={1380}
              priority
              className="w-full h-auto block"
              sizes="(max-width: 1040px) 100vw, 1040px"
            />

            {/* Figma Callout 1 (Menu per kategori) */}
            <div
              className="absolute left-[9.2%] top-[10.2%] w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-[#ff7a45] border-[3px] border-white text-white font-bold font-mono text-xs sm:text-[14px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] select-none cursor-pointer hover:scale-110 transition-transform"
              title="1. Menu per kategori"
            >
              1
            </div>

            {/* Figma Callout 2 (Cari menu atau SKU) */}
            <div
              className="absolute left-[26.4%] top-[5.4%] w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-[#ff7a45] border-[3px] border-white text-white font-bold font-mono text-xs sm:text-[14px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] select-none cursor-pointer hover:scale-110 transition-transform"
              title="2. Cari menu atau SKU"
            >
              2
            </div>

            {/* Figma Callout 3 (Pesanan per meja) */}
            <div
              className="absolute right-[6.6%] top-[17%] w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-[#ff7a45] border-[3px] border-white text-white font-bold font-mono text-xs sm:text-[14px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] select-none cursor-pointer hover:scale-110 transition-transform"
              title="3. Pesanan per meja"
            >
              3
            </div>

            {/* Figma Callout 4 (Bayar di tempat) */}
            <div
              className="absolute right-[11.2%] bottom-[14.8%] w-[28px] h-[28px] sm:w-[34px] sm:h-[34px] rounded-full bg-[#ff7a45] border-[3px] border-white text-white font-bold font-mono text-xs sm:text-[14px] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.25)] select-none cursor-pointer hover:scale-110 transition-transform"
              title="4. Bayar di tempat"
            >
              4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
