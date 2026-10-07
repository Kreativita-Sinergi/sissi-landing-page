export interface FeatureTab {
  id: string;
  name: string;
  summary: string;
  bullets: string[];
  imageSrc: string;
}

export const FEATURE_TABS: FeatureTab[] = [
  {
    id: "kasir",
    name: "Kasir & pembayaran",
    summary:
      "Bayar sebagian, kasbon dengan pengingat, diskon, pajak, dan catatan per pesanan.",
    bullets: [
      "Mendukung pembayaran tunai, QRIS otomatis, kartu debit/kredit, transfer bank",
      "Pencatatan kasbon pelanggan lengkap dengan nomor kontak & batas waktu",
      "Split bill berdasarkan item atau nominal pesanan",
      "Perhitungan diskon promo, pajak PPN, dan biaya layanan instan",
    ],
    imageSrc: "/images/fitur-preview-kasbon.png",
  },
  {
    id: "meja",
    name: "Meja & QR",
    summary:
      "Kelola denah meja dan biarkan pelanggan memesan langsung dari meja lewat scan QR.",
    bullets: [
      "Visualisasi status meja (kosong, terisi, menunggu tagihan)",
      "QR Code unik untuk setiap meja tanpa perlu aplikasi tambahan oleh tamu",
      "Pesanan dari meja otomatis diteruskan ke kasir dan layar dapur",
      "Pindahkan pesanan atau gabung meja dalam satu ketukan",
    ],
    imageSrc: "/images/hero-screen.png",
  },
  {
    id: "tim",
    name: "Tim & kehadiran",
    summary:
      "Atur hak akses staf, pantau shift kasir, dan catat absensi langsung di tablet kasir.",
    bullets: [
      "Hak akses bertingkat: Kasir, Supervisor, Manajer, Pemilik",
      "Absensi kehadiran menggunakan PIN atau verifikasi foto wajah",
      "Laporan buka kasir dan serah terima shift antar staf",
      "Perhitungan komisi dan performa penjualan per karyawan",
    ],
    imageSrc: "/images/cara-kerja-laporan.png",
  },
  {
    id: "produk",
    name: "Produk & stok",
    summary:
      "Katalog produk dengan variasi harga, resep bahan baku, dan pengingat stok menipis.",
    bullets: [
      "Dukungan varian ukuran, rasa, topping, atau atribut kustom",
      "Manajemen bahan baku otomatis terpotong saat menu terjual",
      "Pemberitahuan real-time ketika stok mencapai batas minimum",
      "Impor & ekspor katalog via Excel / CSV sekali klik",
    ],
    imageSrc: "/images/cara-kerja-bayar.png",
  },
  {
    id: "titipan",
    name: "Barang titipan",
    summary:
      "Kelola titipan barang konsinyasi mitra dengan laporan bagi hasil transparan.",
    bullets: [
      "Pencatatan vendor konsinyasi beserta kontak & perjanjian bagi hasil",
      "Stok titipan terpisah rapi dari stok modal sendiri",
      "Laporan penjualan konsinyasi yang siap dibagikan ke penitip barang",
      "Proses retur sisa barang titipan yang mudah dan tercatat",
    ],
    imageSrc: "/images/fitur-preview-kasbon.png",
  },
  {
    id: "laporan",
    name: "Laporan",
    summary:
      "Analisis omzet, produk terlaris, jam paling ramai, dan ekspor data akuntansi.",
    bullets: [
      "Grafik penjualan real-time yang bisa dipantau langsung dari HP",
      "Identifikasi jam sibuk (peak hours) untuk optimasi jumlah staf",
      "Laporan laba rugi kotor berdasarkan HPP (Harga Pokok Penjualan)",
      "Ekspor laporan penjualan harian & bulanan ke format Excel atau PDF",
    ],
    imageSrc: "/images/cara-kerja-laporan.png",
  },
];
