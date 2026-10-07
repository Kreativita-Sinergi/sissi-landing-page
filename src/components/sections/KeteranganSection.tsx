import React from "react";

const CALLOUT_ITEMS = [
  {
    number: "1",
    title: "Menu per kategori",
    description:
      "Foto, harga, dan stok terlihat. Ketuk sekali untuk menambah ke pesanan.",
  },
  {
    number: "2",
    title: "Cari menu atau SKU",
    description:
      "Ketik nama atau scan barcode. Hasilnya muncul saat kamu mengetik.",
  },
  {
    number: "3",
    title: "Pesanan per meja",
    description:
      "Setiap pesanan punya nomor dan meja. Bisa disimpan dulu, dibayar nanti.",
  },
  {
    number: "4",
    title: "Bayar di tempat",
    description:
      "Tunai dengan kembalian, QRIS, kartu, atau dibagi beberapa cara.",
  },
];

export function KeteranganSection() {
  return (
    <section className="bg-white pt-4 sm:pt-8 pb-20 sm:pb-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[120px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {CALLOUT_ITEMS.map((item) => (
            <div key={item.number} className="flex flex-col items-start pt-5">
              {/* Circular Badge 28x28 */}
              <div className="w-[28px] h-[28px] rounded-full bg-[#ff7a45] text-white flex items-center justify-center font-bold font-mono text-[13px] mb-3 select-none">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold text-[#292e31] leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-[15px] font-normal text-[#525866] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
