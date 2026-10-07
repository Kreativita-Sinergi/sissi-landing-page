import React from "react";
import Image from "next/image";
import {
  ClipboardList,
  ChefHat,
  QrCode,
  Wallet,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";

const WORKFLOW_STEPS = [
  {
    name: "Pesanan",
    badge: "#A-0128 · Meja 7",
    icon: ClipboardList,
  },
  {
    name: "Dapur",
    badge: "3 item · 8 menit",
    icon: ChefHat,
  },
  {
    name: "Pembayaran",
    badge: "Rp89.100 · QRIS",
    icon: QrCode,
  },
  {
    name: "Tutup kasir",
    badge: "Selisih Rp0",
    icon: Wallet,
  },
  {
    name: "Laporan",
    badge: "Masuk ke laporan harian",
    icon: BarChart3,
  },
];

const SCREEN_CARDS = [
  {
    title: "Layar dapur",
    description: "Pesanan masuk berurutan. Koki menandai item yang sudah jadi.",
    image: "/images/cara-kerja-dapur.png",
  },
  {
    title: "Layar pembayaran",
    description: "Nominal cepat, kembalian otomatis, struk langsung tercetak.",
    image: "/images/cara-kerja-bayar.png",
  },
  {
    title: "Laporan tutup kasir",
    description:
      "Uang di laci dibandingkan dengan catatan. Selisih langsung terlihat.",
    image: "/images/cara-kerja-laporan.png",
  },
];

export function CaraKerjaSection() {
  return (
    <SectionWrapper id="cara-kerja" bg="muted">
      <SectionHeader
        tag="CARA KERJA"
        title="Ikuti satu pesanan, dari meja sampai laporan."
        subtitle="Begini perjalanan pesanan #A-0128 di Kopi Senja. Setiap langkah tercatat otomatis, tanpa ditulis ulang."
      />

      {/* 5-Step Progress Flow - Exactly matching Figma Alur */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 mb-14 lg:mb-16 overflow-x-auto pb-4 md:pb-0">
        {WORKFLOW_STEPS.map((step, idx) => {
          const Icon = step.icon;
          return (
            <React.Fragment key={step.name}>
              <div className="flex flex-col items-center text-center w-full md:w-[196px] shrink-0">
                {/* 72x72 rounded-20 box */}
                <div className="w-[72px] h-[72px] rounded-[20px] bg-white border border-[#e4e9e7] shadow-sm flex items-center justify-center text-[#292e31] mb-3">
                  <Icon size={30} className="stroke-[1.75]" />
                </div>
                <h4 className="text-[18px] font-semibold text-[#292e31]">
                  {step.name}
                </h4>
                <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-[6px] bg-white border border-[#e4e9e7] text-[12px] font-medium font-mono text-[#525866]">
                  {step.badge}
                </div>
              </div>

              {idx < WORKFLOW_STEPS.length - 1 && (
                <div className="hidden md:flex text-[#b0b8b5] shrink-0">
                  <ChevronRight size={24} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* 3 Screen Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
        {SCREEN_CARDS.map((card) => (
          <div
            key={card.title}
            className="p-5 rounded-[16px] bg-white border border-[#e4e9e7] shadow-sm flex flex-col group hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/10] w-full rounded-[10px] overflow-hidden bg-[#f3f6f5] mb-5 border border-[#e4e9e7]/60">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <h3 className="text-[17px] font-semibold text-[#292e31]">
              {card.title}
            </h3>
            <p className="mt-2 text-[15px] font-normal text-[#525866] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
