import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AjakanSection } from "@/components/sections/AjakanSection";
import { Check } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  isPro?: boolean;
}

interface FeatureBlock {
  id: string;
  badge: string;
  title: string;
  bg: string;
  image: string;
  items: FeatureItem[];
}

const FEATURE_BLOCKS: FeatureBlock[] = [
  {
    id: "kasir-pembayaran",
    badge: "01 · KASIR & PEMBAYARAN",
    title: "Dari pilih menu sampai struk, dalam beberapa ketukan.",
    bg: "bg-white",
    image: "/mockups/fitur/fitur-kasir.png",
    items: [
      {
        title: "Transaksi cepat",
        description: "Cari menu, pilih kategori, atau scan barcode.",
      },
      {
        title: "Item cepat",
        description: "Jual barang yang belum ada di daftar menu.",
      },
      {
        title: "Semua metode bayar",
        description: "Tunai dengan kembalian, QRIS, kartu, transfer.",
      },
      {
        title: "Struk cetak & WhatsApp",
        description: "Printer thermal Bluetooth atau kirim ke pelanggan.",
      },
      {
        title: "Diskon, refund & void",
        description: "Setiap perubahan tercatat dengan alasannya.",
        isPro: true,
      },
      {
        title: "Bayar sebagian & kasbon",
        description: "Sisa tagihan tercatat, ada pengingat jatuh tempo.",
        isPro: true,
      },
      {
        title: "Mode offline",
        description: "Transaksi tetap jalan, sinkron otomatis nanti.",
      },
      {
        title: "Pajak & biaya layanan",
        description: "PB1, PPN, dan service charge dihitung otomatis.",
      },
    ],
  },
  {
    id: "meja-dapur",
    badge: "02 · MEJA & DAPUR",
    title: "Pesanan dari meja langsung sampai ke dapur.",
    bg: "bg-[#f3f6f5]",
    image: "/mockups/fitur/fitur-meja.png",
    items: [
      {
        title: "Denah meja",
        description: "Lihat meja kosong, terisi, dan menunggu bayar.",
        isPro: true,
      },
      {
        title: "QR order",
        description: "Pelanggan pesan sendiri dari QR di meja.",
        isPro: true,
      },
      {
        title: "Layar dapur",
        description: "Pesanan per item lengkap dengan tambahan.",
        isPro: true,
      },
      {
        title: "Pesanan berjalan",
        description: "Ubah, pisah, atau tandai siap diantar.",
        isPro: true,
      },
    ],
  },
  {
    id: "shift-kas",
    badge: "03 · SHIFT & KAS",
    title: "Uang di laci selalu cocok dengan catatan.",
    bg: "bg-white",
    image: "/mockups/fitur/fitur-shift.png",
    items: [
      {
        title: "Buka & tutup kasir",
        description: "Modal awal dan hitungan akhir per shift.",
      },
      {
        title: "Kas masuk & keluar",
        description: "Catat uang belanja atau setoran di tengah shift.",
      },
      {
        title: "Laporan tutup kasir",
        description: "Selisih kas langsung terlihat dan bisa dikirim.",
      },
      {
        title: "Kunci kasir & PIN",
        description: "Kasir masuk dengan PIN masing-masing.",
      },
    ],
  },
  {
    id: "tim-karyawan",
    badge: "04 · TIM & KARYAWAN",
    title: "Absen, jadwal, dan gaji tanpa buku terpisah.",
    bg: "bg-[#f3f6f5]",
    image: "/mockups/fitur/fitur-tim.png",
    items: [
      {
        title: "Hak akses",
        description: "Atur siapa yang boleh diskon, refund, atau melihat laporan.",
      },
      {
        title: "Kehadiran",
        description: "Absen dengan PIN atau verifikasi wajah.",
        isPro: true,
      },
      {
        title: "Jadwal shift",
        description: "Atur jadwal kerja per karyawan.",
        isPro: true,
      },
      {
        title: "Gaji & slip gaji",
        description: "Hitung gaji harian, mingguan, atau bulanan.",
        isPro: true,
      },
    ],
  },
  {
    id: "produk-stok",
    badge: "05 · PRODUK & STOK",
    title: "Menu, varian, dan stok di satu tempat.",
    bg: "bg-white",
    image: "/mockups/fitur/fitur-produk.png",
    items: [
      {
        title: "Produk & varian",
        description: "Ukuran, rasa, dan tambahan dengan harga masing-masing.",
      },
      {
        title: "Harga modal & online",
        description: "Simpan HPP dan harga khusus GoFood atau GrabFood.",
      },
      {
        title: "Stok menipis",
        description: "Peringatan sebelum barang habis.",
      },
      {
        title: "Barang titipan",
        description: "Setoran penitip dan bagi hasil otomatis.",
        isPro: true,
      },
    ],
  },
  {
    id: "laporan-riwayat",
    badge: "06 · LAPORAN & RIWAYAT",
    title: "Tahu apa yang terjadi di toko, dari mana saja.",
    bg: "bg-[#f3f6f5]",
    image: "/mockups/fitur/fitur-laporan.png",
    items: [
      {
        title: "Riwayat penjualan",
        description: "Cari transaksi, cetak ulang struk.",
      },
      {
        title: "Belum lunas",
        description: "Daftar kasbon yang belum dibayar.",
        isPro: true,
      },
      {
        title: "Jam ramai",
        description: "Penjualan per jam setiap hari.",
        isPro: true,
      },
      {
        title: "Produk terlaris",
        description: "Menu yang paling banyak terjual.",
        isPro: true,
      },
    ],
  },
  {
    id: "servis",
    badge: "07 · SERVIS UNTUK USAHA JASA",
    title: "Order masuk antrean sampai siap diambil.",
    bg: "bg-[#f3f6f5]",
    image: "/mockups/fitur/fitur-servis.png",
    items: [
      {
        title: "Antrean servis",
        description: "Status antre, dikerjakan, dan siap diambil.",
        isPro: true,
      },
      {
        title: "Data unit pelanggan",
        description: "Plat nomor, tipe HP, atau berat kiloan.",
        isPro: true,
      },
      {
        title: "Teknisi & komisi",
        description: "Order dibagi ke teknisi, komisi dihitung otomatis.",
        isPro: true,
      },
      {
        title: "Kabari lewat WhatsApp",
        description: "Pesan \"sudah selesai\" dalam satu ketukan.",
        isPro: true,
      },
    ],
  },
  {
    id: "jadwal-sesi",
    badge: "08 · JADWAL & SESI UNTUK PENYEWAAN",
    title: "Booking per jam dan sesi yang dihitung per menit.",
    bg: "bg-white",
    image: "/mockups/fitur/fitur-jadwal.png",
    items: [
      {
        title: "Jadwal per lapangan",
        description: "Jam terisi tidak bisa dipesan dua kali.",
        isPro: true,
      },
      {
        title: "Tarif jam ramai",
        description: "Harga berbeda otomatis di jam sibuk.",
        isPro: true,
      },
      {
        title: "DP & pelunasan",
        description: "Uang muka dan sisa bayar per booking.",
        isPro: true,
      },
      {
        title: "Sesi berjalan",
        description: "Timer per meja biliar atau unit PS.",
        isPro: true,
      },
    ],
  },
];

const QUICK_LINKS = [
  { label: "Kasir & pembayaran", href: "#kasir-pembayaran" },
  { label: "Meja & dapur", href: "#meja-dapur" },
  { label: "Shift & kas", href: "#shift-kas" },
  { label: "Tim & karyawan", href: "#tim-karyawan" },
  { label: "Produk & stok", href: "#produk-stok" },
  { label: "Laporan & riwayat", href: "#laporan-riwayat" },
  { label: "Servis", href: "#servis" },
  { label: "Jadwal & sesi", href: "#jadwal-sesi" },
];

export default function FiturPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#f1702c] pt-[110px] pb-16 sm:pb-20 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[13px] font-mono font-medium text-[#fef1eb] tracking-wider uppercase mb-5">
            BERANDA / FITUR
          </p>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-semibold leading-[1.08] tracking-tight mb-5">
            Semua fitur Sissi
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#fef1eb] leading-relaxed max-w-[680px] mb-10">
            Dari meja kasir sampai laporan pemilik. Fitur bertanda Pro tersedia di
            paket Pro dan bisa dicoba gratis 30 hari.
          </p>

          {/* Quick Anchor Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full text-[14px] font-medium bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <main className="flex-1">
        {FEATURE_BLOCKS.map((block) => (
          <section
            key={block.id}
            id={block.id}
            className={`py-20 sm:py-28 ${block.bg} scroll-mt-20 border-b border-[#e4e9e7]/60`}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Side: Info & Features List */}
                <div className="lg:col-span-6 flex flex-col">
                  {/* Badge & Title */}
                  <div className="mb-8">
                    <span className="inline-block text-[13px] font-mono font-medium text-[#f1702c] tracking-wider uppercase mb-3">
                      {block.badge}
                    </span>
                    <h2 className="text-[32px] sm:text-[40px] font-semibold text-[#292e31] leading-[1.18] tracking-tight">
                      {block.title}
                    </h2>
                  </div>

                  {/* Feature items */}
                  <div className="flex flex-col divide-y divide-[#e4e9e7]/70">
                    {block.items.map((item) => (
                      <div
                        key={item.title}
                        className="py-4.5 flex items-start gap-3.5"
                      >
                        <div className="mt-1 w-5 h-5 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-[#f1702c] stroke-[2.5]" />
                        </div>
                        <div className="flex flex-col flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[16px] font-semibold text-[#292e31]">
                              {item.title}
                            </span>
                            {item.isPro && (
                              <span className="px-2 py-0.5 rounded-[4px] bg-[#e8f4f0] text-[10px] font-mono font-medium text-[#196b52] tracking-wider">
                                PRO
                              </span>
                            )}
                          </div>
                          <p className="text-[15px] text-[#525866] mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side: Visual Mockup */}
                <div className="lg:col-span-6 sticky top-28">
                  <div className="relative w-full aspect-[620/460] rounded-[20px] overflow-hidden bg-[#f3f6f5] border border-[#dde4e1] shadow-lg">
                    <Image
                      src={block.image}
                      alt={block.title}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 1024px) 100vw, 620px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      {/* Ajakan Banner */}
      <AjakanSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
