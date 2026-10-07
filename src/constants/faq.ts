export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Jenis usaha apa saja yang bisa memakai Sissi?",
    answer:
      "Empat kategori: kuliner (restoran, kafe, katering), ritel (minimarket, fashion, apotek, konter pulsa), jasa (bengkel, servis HP, laundry, salon, percetakan), dan penyewaan (lapangan padel, futsal, badminton, biliar, rental PS).",
  },
  {
    question: "Bisa dipakai tanpa internet?",
    answer:
      "Bisa. Transaksi, struk, dan laporan tetap jalan saat offline. Data dikirim otomatis begitu internet kembali terhubung.",
  },
  {
    question: "Perangkat apa yang didukung?",
    answer:
      "Tablet dan HP Android versi 8.0 ke atas. Tidak perlu membeli perangkat keras atau mesin kasir khusus.",
  },
  {
    question: "Printer apa yang bisa dipakai?",
    answer:
      "Printer thermal Bluetooth dengan ukuran kertas 58 mm atau 80 mm. Struk dapat dicetak dengan logo toko Anda.",
  },
  {
    question: "Kalau tablet hilang, datanya?",
    answer:
      "Data Anda tersimpan aman di cloud server dan bisa langsung diakses kembali saat Anda masuk menggunakan perangkat baru.",
  },
  {
    question: "Bisa ganti paket di tengah jalan?",
    answer:
      "Bisa kapan saja. Anda bisa mulai dengan paket Gratis, mencoba Pro gratis 30 hari, dan berpindah paket sesuai pertumbuhan usaha.",
  },
  {
    question: "Pindah dari aplikasi kasir lain?",
    answer:
      "Tim kami siap membantu proses migrasi data menu, stok barang, dan kontak pelanggan tanpa biaya tambahan.",
  },
];
