import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { Zap, WifiOff, HeartHandshake, Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Tentang & Kontak · Sissi",
  description:
    "Kasir untuk usaha yang melayani orang setiap hari. Cerita, nilai, dan kontak resmi Sissi Kasir.",
};

export default function TentangPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-white">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28 pb-20">
        {/* 1. Header Section */}
        <section className="py-12 sm:py-16 border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-4xl">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-3 block">
                BERANDA / TENTANG KAMI
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-semibold text-[#292e31] tracking-tight leading-[1.12]">
                Kasir untuk usaha yang melayani orang setiap hari
              </h1>
              <p className="mt-5 text-base sm:text-[19px] text-[#525866] leading-relaxed max-w-2xl font-normal">
                Sissi dibuat untuk pemilik kafe, warung, toko, dan bakery yang
                ingin tokonya tertib tanpa harus jadi ahli teknologi.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. Cerita Section */}
        <section className="py-16 sm:py-24 bg-[#f3f6f5] border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-3xl mb-14">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                CERITA KAMI
              </span>
              <h2 className="text-3xl sm:text-[42px] font-semibold text-[#292e31] tracking-tight leading-tight">
                Kenapa Sissi ada
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base sm:text-[17px] text-[#525866] leading-relaxed font-normal">
                <p>
                  Banyak usaha kecil masih mencatat pesanan di kertas, menghitung kas di kalkulator, dan mengirim foto buku ke pemilik setiap malam. Bukan karena malas, tapi karena aplikasi kasir yang ada terasa rumit atau mahal.
                </p>
                <p>
                  Sissi mengikuti urutan kerja di toko sungguhan: buka kasir, terima pesanan, bayar, tutup kasir. Setiap langkah dibuat sesingkat mungkin, dan tetap jalan saat internet putus.
                </p>
              </div>
            </div>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs">
                <div className="w-10 h-10 rounded-[10px] bg-[#e8f4f0] text-[#f1702c] flex items-center justify-center mb-5">
                  <Zap size={22} className="stroke-[2]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#292e31]">
                  Cepat di jam sibuk
                </h3>
                <p className="mt-2 text-[15px] text-[#525866] leading-relaxed">
                  Setiap ketukan dihitung. Antrean tidak boleh menunggu aplikasi kasir yang lambat.
                </p>
              </div>

              <div className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs">
                <div className="w-10 h-10 rounded-[10px] bg-[#e8f4f0] text-[#f1702c] flex items-center justify-center mb-5">
                  <WifiOff size={22} className="stroke-[2]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#292e31]">
                  Tetap jalan offline
                </h3>
                <p className="mt-2 text-[15px] text-[#525866] leading-relaxed">
                  Internet putus bukan alasan berhenti berjualan. Transaksi dan struk tetap aman.
                </p>
              </div>

              <div className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs">
                <div className="w-10 h-10 rounded-[10px] bg-[#e8f4f0] text-[#f1702c] flex items-center justify-center mb-5">
                  <HeartHandshake size={22} className="stroke-[2]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#292e31]">
                  Dibantu manusia
                </h3>
                <p className="mt-2 text-[15px] text-[#525866] leading-relaxed">
                  Pertanyaan dijawab langsung oleh tim dukungan kami lewat WhatsApp, bukan bot.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. Kontak Section */}
        <section id="kontak" className="py-16 sm:py-24">
          <Container>
            <div className="mb-12">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                KONTAK
              </span>
              <h2 className="text-3xl sm:text-[42px] font-semibold text-[#292e31] tracking-tight leading-tight">
                Hubungi kami
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Direct Contact Info */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="p-6 rounded-[14px] border border-[#e4e9e7] bg-white flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#f3f6f5] flex items-center justify-center text-[#f1702c] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#292e31]">WhatsApp</h4>
                    <a
                      href="https://wa.me/6281234567890"
                      className="text-[15px] text-[#525866] hover:text-[#f1702c] transition-colors mt-0.5 block"
                    >
                      +62 812-3456-7890
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-[14px] border border-[#e4e9e7] bg-white flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#f3f6f5] flex items-center justify-center text-[#f1702c] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#292e31]">Email</h4>
                    <a
                      href="mailto:halo@sissikasir.com"
                      className="text-[15px] text-[#525866] hover:text-[#f1702c] transition-colors mt-0.5 block"
                    >
                      halo@sissikasir.com
                    </a>
                  </div>
                </div>

                <div className="p-6 rounded-[14px] border border-[#e4e9e7] bg-white flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#f3f6f5] flex items-center justify-center text-[#f1702c] shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#292e31]">Jam layanan</h4>
                    <p className="text-[15px] text-[#525866] mt-0.5">
                      Senin - Minggu, 08.00 - 21.00 WIB
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-[14px] border border-[#e4e9e7] bg-white flex items-start gap-4">
                  <div className="w-9 h-9 rounded-[8px] bg-[#f3f6f5] flex items-center justify-center text-[#f1702c] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#292e31]">Alamat kantor</h4>
                    <p className="text-[15px] text-[#525866] mt-0.5">
                      Jakarta Selatan, DKI Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Message Form */}
              <div className="lg:col-span-7 bg-[#f3f6f5] p-8 sm:p-10 rounded-[18px] border border-[#e4e9e7]">
                <h3 className="text-[20px] font-semibold text-[#292e31] mb-6">
                  Kirim pesan
                </h3>
                <form className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[14px] font-medium text-[#292e31] mb-2">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="Nama kamu"
                        className="w-full h-[46px] px-4 rounded-[8px] bg-white border border-[#e4e9e7] focus:border-[#f1702c] focus:outline-none text-[15px] text-[#292e31]"
                      />
                    </div>
                    <div>
                      <label className="block text-[14px] font-medium text-[#292e31] mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="08xx xxxx xxxx"
                        className="w-full h-[46px] px-4 rounded-[8px] bg-white border border-[#e4e9e7] focus:border-[#f1702c] focus:outline-none text-[15px] text-[#292e31]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#292e31] mb-2">
                      Nama usaha
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Kopi Senja"
                      className="w-full h-[46px] px-4 rounded-[8px] bg-white border border-[#e4e9e7] focus:border-[#f1702c] focus:outline-none text-[15px] text-[#292e31]"
                    />
                  </div>

                  <div>
                    <label className="block text-[14px] font-medium text-[#292e31] mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Ceritakan kebutuhan tokomu"
                      className="w-full p-4 rounded-[8px] bg-white border border-[#e4e9e7] focus:border-[#f1702c] focus:outline-none text-[15px] text-[#292e31] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 h-[48px] px-8 rounded-[8px] bg-[#f1702c] hover:bg-[#ff7a45] text-white font-medium text-[15px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer self-start"
                  >
                    Kirim pesan
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
