import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { KeteranganSection } from "@/components/sections/KeteranganSection";
import { CaraKerjaSection } from "@/components/sections/CaraKerjaSection";
import { FiturSection } from "@/components/sections/FiturSection";
import { SebelumSesudahSection } from "@/components/sections/SebelumSesudahSection";
import { PerangkatSection } from "@/components/sections/PerangkatSection";
import { UntukUsahaSection } from "@/components/sections/UntukUsahaSection";
import { HargaSection } from "@/components/sections/HargaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { AjakanSection } from "@/components/sections/AjakanSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-white relative">
      {/* Fixed Sticky Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col w-full">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Keterangan Callout List */}
        <KeteranganSection />

        {/* 3. Cara Kerja (Workflow & Layar) */}
        <CaraKerjaSection />

        {/* 4. Fitur (Tabbed interactive) */}
        <FiturSection />

        {/* 5. Sebelum dan Sesudah (Comparison Matrix) */}
        <SebelumSesudahSection />

        {/* 6. Perangkat (Tablet, HP, Thermal Printer) */}
        <PerangkatSection />

        {/* 7. Untuk Usaha (Kuliner, Ritel, Jasa, Penyewaan) */}
        <UntukUsahaSection />

        {/* 8. Harga (Bulanan / Tahunan + Full Matrix) */}
        <HargaSection />

        {/* 9. FAQ (Interactive Accordion) */}
        <FaqSection />

        {/* 10. Ajakan / Final CTA */}
        <AjakanSection />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
