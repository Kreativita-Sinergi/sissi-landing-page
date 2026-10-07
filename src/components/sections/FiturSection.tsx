"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FEATURE_TABS } from "@/constants/features";

export function FiturSection() {
  const [activeTabId, setActiveTabId] = useState(FEATURE_TABS[0].id);

  const activeTab =
    FEATURE_TABS.find((tab) => tab.id === activeTabId) || FEATURE_TABS[0];

  return (
    <SectionWrapper id="fitur" bg="white">
      <SectionHeader
        tag="FITUR"
        title="Dibuat untuk toko yang sibuk, bukan untuk demo."
        subtitle="Dirancang intuitif agar kasir bisa langsung lancar bertransaksi dalam 5 menit tanpa pelatihan rumit."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Daftar Tab - Matching Figma exactly */}
        <div className="lg:col-span-4 flex flex-col gap-1 w-full max-w-[340px]">
          {FEATURE_TABS.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`text-left transition-all duration-150 rounded-[10px] cursor-pointer ${
                  isActive
                    ? "bg-[#e8f4f0] p-5 shadow-xs"
                    : "bg-transparent px-5 py-4 hover:bg-[#f3f6f5]/80"
                }`}
              >
                <h3
                  className={`text-[17px] ${
                    isActive
                      ? "font-semibold text-[#292e31]"
                      : "font-medium text-[#7d8986]"
                  }`}
                >
                  {tab.name}
                </h3>
                {isActive && (
                  <p className="mt-2 text-[15px] font-normal text-[#525866] leading-relaxed">
                    {tab.summary}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side: Pratinjau (812px x 560px, rounded-20, bg #f3f6f5) */}
        <div className="lg:col-span-8 w-full rounded-[20px] bg-[#f3f6f5] p-6 sm:p-10 flex items-center justify-center min-h-[420px] lg:min-h-[560px]">
          <div className="relative aspect-[16/10] w-full max-w-[760px] rounded-[14px] overflow-hidden shadow-lg border border-[#e4e9e7] bg-white">
            <Image
              src={activeTab.imageSrc}
              alt={activeTab.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 812px"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
