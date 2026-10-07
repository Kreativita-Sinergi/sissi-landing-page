export interface BusinessType {
  id: string;
  name: string;
  description: string;
  suitableForLabel: string;
  suitableFor: string;
  badgeColor?: string;
  features: string[];
}

export const BUSINESS_TYPES: BusinessType[] = [
  {
    id: "kuliner",
    name: "Kuliner",
    description: "Pesanan per meja, langsung ke dapur.",
    suitableForLabel: "COCOK UNTUK",
    suitableFor: "Restoran, rumah makan, kafe, kedai kopi, katering",
    features: [
      "Manajemen denah & nomor meja",
      "Pemesanan mandiri via QR Code",
      "Tampilan layar pesanan dapur (KDS)",
      "Split bill & cetak pesanan dapur otomatis",
    ],
  },
  {
    id: "ritel",
    name: "Ritel",
    description: "Langsung bayar, stok dan barcode terpantau.",
    suitableForLabel: "COCOK UNTUK",
    suitableFor: "Minimarket, toko kelontong, fashion, apotek, konter pulsa",
    features: [
      "Pemindai barcode kamera & scanner bluetooth",
      "Notifikasi pengingat stok menipis",
      "Variasi ukuran & warna produk",
      "Penerimaan barang & stok opname cepat",
    ],
  },
  {
    id: "jasa",
    name: "Jasa",
    description: "Order masuk antrean sampai siap diambil.",
    suitableForLabel: "COCOK UNTUK",
    suitableFor: "Bengkel, servis HP, laundry, salon, barbershop, percetakan",
    features: [
      "Pelacakan status pengerjaan (Antre / Dikerjakan / Selesai)",
      "Pencatatan teknisi & komisi kerja",
      "Notifikasi WhatsApp saat barang selesai",
      "Pencatatan uang muka (DP) & pelunasan",
    ],
  },
  {
    id: "penyewaan",
    name: "Penyewaan",
    description: "Booking per jam dan sesi yang dihitung per menit.",
    suitableForLabel: "COCOK UNTUK",
    suitableFor: "Lapangan padel, futsal, badminton, biliar, rental PlayStation",
    features: [
      "Jadwal slot booking kalender interaktif",
      "Penghitung waktu sesi otomatis (timer)",
      "Tagihan overtime per menit/jam",
      "Gabung rental dengan pembelian F&B",
    ],
  },
];
