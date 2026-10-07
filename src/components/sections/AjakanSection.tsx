import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";

export function AjakanSection() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <Container>
        {/* Card: 1200x420, rounded-24, bg #f1702c, overflow-hidden */}
        <div className="w-full bg-[#f1702c] text-white rounded-[24px] relative overflow-hidden shadow-xl lg:h-[420px] flex flex-col justify-between">
          {/* Left Text Block: x:64, y:72, w:560 in Figma */}
          <div className="p-8 sm:p-12 lg:p-0 lg:absolute lg:left-[64px] lg:top-[72px] lg:w-[560px] z-10 flex flex-col items-start">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-white leading-[1.14]">
              Coba Sissi di tokomu minggu ini.
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-[500px] font-normal">
              Daftar, masukkan menu, sambungkan printer. Kalau ada yang bingung,
              tim kami bantu lewat WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href="#daftar"
                className="h-[51px] px-6 bg-white hover:bg-[#fef1eb] text-[#292e31] font-semibold text-[15px] rounded-[8px] flex items-center justify-center transition-colors shadow-sm cursor-pointer shrink-0"
              >
                Daftar sekarang
              </Link>
              <Link
                href="https://wa.me/6281234567890"
                className="h-[51px] px-6 bg-transparent hover:bg-white/10 text-white font-semibold text-[15px] rounded-[8px] flex items-center justify-center gap-2 transition-colors border border-white/60 cursor-pointer shrink-0"
              >
                <div className="relative w-4 h-4">
                  <Image
                    src="/logos/whatsapp.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span>Chat WhatsApp</span>
              </Link>
            </div>
          </div>

          {/* Desktop Phone Mockups (x:760 top:60 and x:960 top:110, clipped at bottom by card overflow-hidden) */}
          <div className="hidden lg:block">
            {/* Phone 1: x: 760, y: 60 */}
            <div className="absolute left-[760px] top-[60px] w-[246px] h-[514px] rounded-[33px] bg-[#0a1412] p-2 shadow-[0_30px_60px_rgba(0,0,0,0.25)] z-0">
              <div className="relative w-[230px] h-[498px] rounded-[26px] overflow-hidden bg-black">
                <Image
                  src="/images/hp-screen-1.png"
                  alt="Sissi Kasir Mobile"
                  fill
                  className="object-cover"
                  sizes="230px"
                />
              </div>
            </div>

            {/* Phone 2: x: 960, y: 110 */}
            <div className="absolute left-[960px] top-[110px] w-[246px] h-[514px] rounded-[33px] bg-[#0a1412] p-2 shadow-[0_30px_60px_rgba(0,0,0,0.25)] z-0">
              <div className="relative w-[230px] h-[498px] rounded-[26px] overflow-hidden bg-black">
                <Image
                  src="/images/hp-screen-2.png"
                  alt="Sissi Laporan Mobile"
                  fill
                  className="object-cover"
                  sizes="230px"
                />
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Phone Mockups: Centered & clipped at card bottom */}
          <div className="lg:hidden flex items-end justify-center gap-4 px-6 pt-4 -mb-20 overflow-hidden">
            <div className="w-[170px] sm:w-[200px] h-[360px] rounded-[28px] bg-[#0a1412] p-2 shadow-2xl shrink-0">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black">
                <Image
                  src="/images/hp-screen-1.png"
                  alt="Sissi Kasir Mobile"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="w-[170px] sm:w-[200px] h-[320px] rounded-[28px] bg-[#0a1412] p-2 shadow-2xl shrink-0">
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-black">
                <Image
                  src="/images/hp-screen-2.png"
                  alt="Sissi Laporan Mobile"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
