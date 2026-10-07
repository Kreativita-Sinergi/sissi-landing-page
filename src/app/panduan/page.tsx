import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { BookOpen, Printer, QrCode, ClipboardList, Wallet, BarChart3, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Panduan · Sissi",
  description:
    "Panduan lengkap cara pakai aplikasi kasir Sissi: registrasi, kelola menu, printer bluetooth, hingga tutup kasir.",
};

const GUIDES = [
  {
    icon: BookOpen,
    category: "MEMULAI",
    title: "Mulai dalam 5 Menit",
    description: "Panduan awal: instal aplikasi di tablet/HP Android, isi nama toko, dan tambahkan kategori menu pertamamu.",
  },
  {
    icon: ClipboardList,
    category: "TRANSAKSI",
    title: "Mencatat Pesanan & Denah Meja",
    description: "Cara mengatur nomor meja, simpan pesanan berjalan, kirim ke layar dapur, dan split bill tagihan pelanggan.",
  },
  {
    icon: Printer,
    category: "PERANGKAT",
    title: "Menyambungkan Printer Thermal Bluetooth",
    description: "Langkah memasangkan printer ukuran 58 mm atau 80 mm, uji coba cetak struk, dan upload logo tokomu.",
  },
  {
    icon: QrCode,
    category: "PEMBAYARAN",
    title: "Menerima Pembayaran QRIS & Tunai",
    description: "Cara menampilkan QRIS dinamis di layar kasir, nominal bayar cepat, dan penghitungan uang kembalian otomatis.",
  },
  {
    icon: Wallet,
    category: "KASIR",
    title: "Shift Kas & Tutup Kasir Harian",
    description: "Pencatatan modal kas awal, hitung uang fisik di laci, periksa selisih, dan cetak ringkasan tutup kasir.",
  },
  {
    icon: BarChart3,
    category: "LAPORAN",
    title: "Membaca Laporan Penjualan & Margin",
    description: "Memantau produk terlaris, jam paling ramai pengunjung, margin kotor, dan ekspor laporan ke format Excel/CSV.",
  },
];

export default function PanduanPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-[#f3f6f5]">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-3 block">
                BANTUAN / PANDUAN
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#292e31] tracking-tight leading-[1.12]">
                Panduan pemakaian Sissi
              </h1>
              <p className="mt-4 text-base sm:text-[18px] text-[#525866] leading-relaxed">
                Langkah demi langkah mulai dari daftar, masukkan menu, sambungkan printer, sampai laporan tutup kasir.
              </p>
            </div>
          </Container>
        </section>

        {/* Guides Grid */}
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDES.map((guide) => {
                const Icon = guide.icon;
                return (
                  <div
                    key={guide.title}
                    className="p-7 rounded-[16px] bg-white border border-[#e4e9e7] shadow-2xs hover:border-[#b0b8b5] transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-[12px] bg-[#e8f4f0] text-[#f1702c] flex items-center justify-center mb-5">
                        <Icon size={24} className="stroke-[1.75]" />
                      </div>
                      <span className="text-[11px] font-semibold font-mono tracking-wider uppercase text-[#7d8986] mb-1.5 block">
                        {guide.category}
                      </span>
                      <h3 className="text-[19px] font-semibold text-[#292e31] group-hover:text-[#f1702c] transition-colors leading-snug">
                        {guide.title}
                      </h3>
                      <p className="mt-3 text-[14px] text-[#525866] leading-relaxed">
                        {guide.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#e4e9e7]/60 flex items-center gap-1 text-[13px] font-semibold text-[#f1702c]">
                      <span>Baca panduan</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Bantuan Callout */}
        <section className="py-8">
          <Container>
            <div className="bg-white rounded-[20px] border border-[#e4e9e7] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xs">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#292e31]">
                  Butuh bantuan langsung dari tim kami?
                </h3>
                <p className="mt-2 text-[#525866] text-[15px]">
                  Kalau ada kendala teknis saat setup di tokomu, tim kami siap pandu via WhatsApp.
                </p>
              </div>
              <Link
                href="https://wa.me/6281234567890"
                className="h-[46px] px-6 bg-[#f1702c] hover:bg-[#ff7a45] text-white font-medium text-[14px] rounded-[8px] flex items-center justify-center transition-colors shadow-2xs cursor-pointer shrink-0"
              >
                Chat WhatsApp
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
