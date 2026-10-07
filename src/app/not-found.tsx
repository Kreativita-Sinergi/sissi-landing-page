import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-white">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 flex flex-col justify-center items-center py-28 sm:py-36 px-6 text-center">
        <Container>
          <div className="max-w-xl mx-auto flex flex-col items-center">
            {/* 404 Number in Geist Mono */}
            <span className="text-[96px] sm:text-[120px] font-bold font-mono text-[#f1702c] leading-none mb-4 select-none">
              404
            </span>

            {/* Headline */}
            <h1 className="text-3xl sm:text-[40px] font-semibold text-[#292e31] tracking-tight leading-tight mb-3">
              Halaman ini tidak ditemukan
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-[18px] text-[#525866] max-w-md leading-relaxed mb-8">
              Mungkin alamatnya salah ketik, atau halamannya sudah dipindah.
            </p>

            {/* Buttons matching Figma */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href="/"
                className="h-[51px] px-6 bg-[#292e31] hover:bg-[#3d4347] text-white text-[15px] font-medium rounded-[8px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
              >
                Kembali ke beranda
              </Link>
              <Link
                href="/panduan"
                className="h-[51px] px-6 bg-white hover:bg-[#f3f6f5] border border-[#e4e9e7] hover:border-[#b0b8b5] text-[#292e31] text-[15px] font-medium rounded-[8px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer w-full sm:w-auto"
              >
                Buka panduan
              </Link>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
