import React from "react";
import { Tablet, Smartphone, Printer } from "lucide-react";
import { SectionWrapper } from "@/components/shared/SectionWrapper";
import { SectionHeader } from "@/components/shared/SectionHeader";

const DEVICES = [
  {
    name: "Tablet Android",
    description: "Layar kasir utama. Paling nyaman untuk kafe dan resto.",
    icon: Tablet,
  },
  {
    name: "HP Android",
    description: "Untuk warung, gerobak, atau pemilik yang memantau dari luar.",
    icon: Smartphone,
  },
  {
    name: "Printer thermal Bluetooth",
    description: "Kertas 58 mm atau 80 mm. Struk dengan logo tokomu.",
    icon: Printer,
  },
];

export function PerangkatSection() {
  return (
    <SectionWrapper id="perangkat" bg="white">
      <SectionHeader
        tag="PERANGKAT"
        title="Pakai perangkat yang sudah kamu punya."
        subtitle="Tidak perlu beli mesin kasir khusus. Pasang aplikasinya, masuk, lalu sambungkan printer."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6">
        {DEVICES.map((device) => {
          const Icon = device.icon;
          return (
            <div
              key={device.name}
              className="flex flex-col justify-between p-8 rounded-[16px] border border-[#e4e9e7] bg-white h-auto sm:min-h-[240px] hover:border-[#b0b8b5] transition-colors shadow-2xs"
            >
              <div className="text-[#f1702c] mb-6">
                <Icon size={40} className="stroke-[1.75]" />
              </div>
              <div>
                <h3 className="text-[20px] font-semibold text-[#292e31]">
                  {device.name}
                </h3>
                <p className="mt-2 text-[15px] font-normal text-[#525866] leading-relaxed">
                  {device.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
