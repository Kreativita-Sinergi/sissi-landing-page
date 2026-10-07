import React from "react";
import Link from "next/link";
import {
  Utensils,
  ShoppingBasket,
  Wrench,
  CalendarClock,
  ArrowRight,
} from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BUSINESS_TYPES } from "@/constants/businessTypes";

const ICONS_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  kuliner: Utensils,
  ritel: ShoppingBasket,
  jasa: Wrench,
  penyewaan: CalendarClock,
};

export function UntukUsahaSection() {
  return (
    <SectionWrapper id="untuk-usaha" bg="muted">
      <SectionHeader
        tag="UNTUK USAHA"
        title="Satu aplikasi, empat cara berjualan"
        subtitle="Pilih kategorinya saat daftar. Istilah dan fitur di aplikasi menyesuaikan dengan cara kerja usahamu."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
        {BUSINESS_TYPES.map((biz) => {
          const Icon = ICONS_MAP[biz.id] || Utensils;
          return (
            <div
              key={biz.id}
              className="flex flex-col justify-between p-[26px] rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs hover:border-[#f1702c] transition-all min-h-[327px] group"
            >
              <div>
                {/* 44x44 rounded-12 Mint Container (#e8f4f0) with Orange Icon (#f1702c) */}
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#e8f4f0] flex items-center justify-center text-[#f1702c] mb-3.5">
                  <Icon size={22} className="stroke-[1.75]" />
                </div>

                <h3 className="text-[20px] font-semibold text-[#292e31]">
                  {biz.name}
                </h3>
                <p className="mt-1.5 text-[14px] font-normal text-[#525866] leading-relaxed">
                  {biz.description}
                </p>

                {/* Divider placed directly above COCOK UNTUK */}
                <div className="my-4 h-px w-full bg-[#e4e9e7]" />

                <div>
                  <span className="block text-[11px] font-medium font-mono tracking-wider uppercase text-[#7d8986] mb-1.5">
                    {biz.suitableForLabel}
                  </span>
                  <p className="text-[14px] font-normal text-[#292e31] leading-relaxed">
                    {biz.suitableFor}
                  </p>
                </div>
              </div>

              <Link
                href={`#${biz.id}`}
                className="mt-6 flex items-center justify-between text-[14px] font-semibold text-[#f1702c] group-hover:translate-x-0.5 transition-transform cursor-pointer"
              >
                <span>Selengkapnya</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
