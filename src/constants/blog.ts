export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  iconName: string;
  bgColor: string;
  iconColor: string;
  isFeatured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "berapa-hpp-secangkir-es-kopi-susu",
    category: "HITUNGAN",
    date: "12 Okt 2026",
    readTime: "6 menit baca",
    title: "Berapa HPP secangkir es kopi susu?",
    excerpt:
      "Dari biji kopi sampai sedotan, kita hitung satu per satu. Hasilnya sering bikin kaget: harga jual yang terasa untung ternyata tipis.",
    iconName: "coffee",
    bgColor: "#f1702c",
    iconColor: "#ffffff",
    isFeatured: true,
  },
  {
    slug: "5-tanda-kasirmu-perlu-tutup-shift-yang-lebih-rapi",
    category: "OPERASIONAL",
    date: "5 Okt 2026",
    readTime: "4 menit baca",
    title: "5 tanda kasirmu perlu tutup shift yang lebih rapi",
    excerpt:
      "Selisih kas di akhir hari sering bukan karena kecurangan, tapi prosedur tutup kasir yang membingungkan.",
    iconName: "wallet",
    bgColor: "#ff7a45",
    iconColor: "#ffffff",
  },
  {
    slug: "qris-atau-tunai-mana-yang-lebih-murah-untuk-tokomu",
    category: "PEMBAYARAN",
    date: "28 Sep 2026",
    readTime: "5 menit baca",
    title: "QRIS atau tunai: mana yang lebih murah untuk tokomu?",
    excerpt:
      "Menghitung MDR 0.3% vs risiko selisih uang tunai dan waktu setor uang ke bank tiap minggu.",
    iconName: "qr-code",
    bgColor: "#292e31",
    iconColor: "#ffffff",
  },
  {
    slug: "cara-mengatur-barang-titipan-tanpa-ribut",
    category: "BAKERY",
    date: "21 Sep 2026",
    readTime: "4 menit baca",
    title: "Cara mengatur barang titipan tanpa ribut",
    excerpt:
      "Sistem konsinyasi kue basah atau snack sering bikin pusing saat retur. Begini pencatatan yang rapi.",
    iconName: "croissant",
    bgColor: "#e8f4f0",
    iconColor: "#196b52",
  },
  {
    slug: "membaca-grafik-jam-ramai-untuk-jadwal-karyawan",
    category: "LAPORAN",
    date: "14 Sep 2026",
    readTime: "5 menit baca",
    title: "Membaca grafik jam ramai untuk jadwal karyawan",
    excerpt:
      "Jangan pasang banyak staf di jam sepi. Manfaatkan grafik transaksi per jam untuk susun shift efisien.",
    iconName: "chart-column",
    bgColor: "#fff1ea",
    iconColor: "#f1702c",
  },
  {
    slug: "checklist-sebelum-membuka-kafe-hari-pertama",
    category: "MEMULAI",
    date: "7 Sep 2026",
    readTime: "7 menit baca",
    title: "Checklist sebelum membuka kafe hari pertama",
    excerpt:
      "Dari uji coba printer kasir, alur pesanan ke barista, sampai stok uang kembalian pecahan kecil.",
    iconName: "clipboard-check",
    bgColor: "#f3f6f5",
    iconColor: "#292e31",
  },
  {
    slug: "kasbon-pelanggan-kapan-boleh-kapan-berhenti",
    category: "KEUANGAN",
    date: "31 Agu 2026",
    readTime: "4 menit baca",
    title: "Kasbon pelanggan: kapan boleh, kapan berhenti",
    excerpt:
      "Membantu langganan tanpa mengorbankan arus kas operasional tokomu yang sedang bertumbuh.",
    iconName: "notebook-pen",
    bgColor: "#f1702c",
    iconColor: "#ffffff",
  },
];

export const BLOG_CATEGORIES = [
  "Semua",
  "Hitungan",
  "Operasional",
  "Pembayaran",
  "Laporan",
  "Keuangan",
];
