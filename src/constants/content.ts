// Sumber tunggal semua teks & data situs sissi.id. Komponen tidak berisi copy.
// Jangan menulis harga jasa: pemilik memutuskan "gratis konsultasi, harga sesuai kebutuhan".

const phoneDisplay = "+62 851-6146-2806";
const phoneE164 = "6285161462806";
const email = "sissikreatifteknologi@gmail.com";

export const site = {
  company: "PT. Sissi Kreatif Teknologi",
  brand: "Sissi",
  domain: "sissi.id",
  title: "Sissi — Software, aplikasi & IoT untuk usaha | PT. Sissi Kreatif Teknologi",
  description:
    "PT. Sissi Kreatif Teknologi dari Pekanbaru membuat Sissi Kasir, Sissi Booth, dan Loka Accounting, serta menerima pembuatan website, aplikasi, sistem custom, dan IoT. Konsultasi gratis.",
  city: "Pekanbaru",
  region: "Riau",
  country: "Indonesia",
  email,
  phoneDisplay,
  phoneE164,
  whatsappUrl: `https://wa.me/${phoneE164}`,
  mailUrl: `mailto:${email}`,
  year: 2026,
} as const;

export const nav = {
  links: [
    { label: "Produk", href: "#produk" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Tentang", href: "#tentang" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Konsultasi gratis", href: "#kontak" },
  menuOpen: "Buka menu",
  menuClose: "Tutup menu",
} as const;

export const hero = {
  eyebrow: `${site.company} · ${site.city}`,
  titleLead: "Kami membangun software",
  titleAccent: "yang dipakai usaha",
  titleTail: "setiap hari.",
  body: "Kasir yang tetap jalan saat internet mati. Photobox yang menerima QRIS sendiri. Pembukuan yang rapi tanpa buku tulis. Semua itu produk kami sendiri, dan pengalaman yang sama kami pakai untuk membangun website, aplikasi, dan perangkat IoT untuk usahamu.",
  primary: { label: "Konsultasi gratis", href: "#kontak" },
  secondary: { label: "Lihat produk kami", href: "#produk" },
  note: "Konsultasi gratis · Harga sesuai kebutuhan",
  shotTablet: { src: "/products/kasir-tablet.webp", alt: "Layar kasir Sissi Kasir di tablet: daftar menu dan pesanan" },
  shotPhone: { src: "/products/kasir-hp.webp", alt: "Layar kasir Sissi Kasir di HP" },
  shotCaption: "Sissi Kasir, layar asli aplikasi",
} as const;

export const trust = {
  label: "Sedang berjalan",
  items: [
    { name: "Sissi Kasir", href: "https://kasir.sissi.id/", domain: "kasir.sissi.id" },
    { name: "Sissi Booth", href: "https://booth.sissi.id/", domain: "booth.sissi.id" },
    { name: "Loka Accounting", href: "https://lokatech.id/", domain: "lokatech.id" },
  ],
} as const;

export type Product = {
  id: string;
  name: string;
  domain: string;
  href: string;
  tagline: string;
  body: string;
  points: readonly string[];
  audience: string;
  badge: string;
  cta: string;
  visual:
    | { kind: "screen"; src: string; alt: string; width: number; height: number; tone: "light" | "yellow" }
    | { kind: "panel"; title: string; modules: readonly string[] };
};

export const products = {
  eyebrow: "Produk",
  title: "Tiga produk yang kami bangun dan rawat sendiri.",
  body: "Setiap produk lahir dari masalah nyata di usaha sekitar kami. Kami memakainya, memperbaikinya, dan terus menambah fitur dari masukan pengguna.",
  items: [
    {
      id: "kasir",
      name: "Sissi Kasir",
      domain: "kasir.sissi.id",
      href: "https://kasir.sissi.id/",
      tagline: "Internet mati, kasir tetap jalan.",
      body: "Aplikasi kasir untuk HP dan tablet Android. Transaksi tersimpan di perangkat dan tersinkron sendiri begitu sinyal kembali.",
      points: [
        "Tunai, QRIS, kartu, transfer, dan kasbon",
        "Pesanan per meja dan layar dapur",
        "Stok, HPP per varian, dan laporan penjualan",
        "Tutup kasir, shift, dan absensi karyawan",
      ],
      audience: "Kuliner · Ritel · Jasa · Penyewaan",
      badge: "Paket gratis tersedia",
      cta: "Kunjungi Sissi Kasir",
      visual: {
        kind: "screen",
        src: "/products/laporan-tablet.webp",
        alt: "Layar laporan jam ramai Sissi Kasir di tablet",
        width: 1280,
        height: 800,
        tone: "light",
      },
    },
    {
      id: "booth",
      name: "Sissi Booth",
      domain: "booth.sissi.id",
      href: "https://booth.sissi.id/",
      tagline: "Photobox-mu, makin cuan.",
      body: "Aplikasi photobox yang menerima pembayaran QRIS otomatis dan tetap jalan tanpa internet. Tamu tinggal pindai QR untuk mengunduh foto.",
      points: [
        "QRIS otomatis, lunas terdeteksi sendiri",
        "Softcopy dan GIF boomerang lewat QR",
        "4 layout, 9 filter, dan stiker",
        "Mode Kiosk dan Event, bingkai per klien",
      ],
      audience: "Usaha photobox · Wedding & event · Kafe & mal",
      badge: "Paket harian, bulanan, tahunan",
      cta: "Kunjungi Sissi Booth",
      visual: {
        kind: "screen",
        src: "/products/booth-hias.png",
        alt: "Layar hias foto Sissi Booth: pilihan filter dan strip foto",
        width: 1440,
        height: 900,
        tone: "yellow",
      },
    },
    {
      id: "loka",
      name: "Loka Accounting",
      domain: "lokatech.id",
      href: "https://lokatech.id/",
      tagline: "Angka lebih jelas. Bisnis melaju pasti.",
      body: "Software akuntansi online untuk bisnis Indonesia. Transaksi, kas, stok, dan laporan terhubung dalam satu ruang kerja keuangan.",
      points: [
        "Penjualan dan pembelian",
        "Kas dan bank",
        "Persediaan dan aset tetap",
        "Laporan keuangan siap dibaca",
      ],
      audience: "UMKM · Bisnis yang sedang bertumbuh",
      badge: "Uji coba gratis 30 hari",
      cta: "Kunjungi Loka Accounting",
      visual: {
        kind: "panel",
        title: "Satu ruang kerja untuk operasional dan keuangan",
        modules: ["Penjualan", "Pembelian", "Kas & Bank", "Persediaan", "Aset Tetap", "Laporan"],
      },
    },
  ] satisfies Product[],
} as const;

export const services = {
  eyebrow: "Layanan",
  title: "Butuh sistem sendiri? Kami bangun dari nol.",
  body: "Tim yang membuat produk di atas juga menerima proyek. Kamu bicara langsung dengan orang yang menulis kodenya.",
  items: [
    {
      title: "Website",
      body: "Profil perusahaan, landing page, katalog, sampai toko online. Cepat dibuka, mudah ditemukan di Google, dan mudah diperbarui.",
      tags: ["Company profile", "Landing page", "Toko online"],
    },
    {
      title: "Aplikasi mobile & web",
      body: "Aplikasi Android, iOS, dan dashboard web. Bisa dibuat tetap berfungsi saat offline, seperti Sissi Kasir.",
      tags: ["Android", "iOS", "Dashboard"],
    },
    {
      title: "Sistem custom & integrasi",
      body: "Kasir, inventori, booking, atau sistem internal sesuai alur kerjamu. Terhubung ke QRIS, payment gateway, WhatsApp, dan printer.",
      tags: ["QRIS", "WhatsApp", "Printer thermal"],
    },
    {
      title: "IoT & perangkat",
      body: "Sensor, kendali perangkat, mesin kiosk, dan pemantauan jarak jauh. Dari prototipe sampai terpasang di lokasi.",
      tags: ["Sensor", "Kiosk", "Monitoring"],
    },
    {
      title: "Desain UI/UX",
      body: "Riset singkat, alur, dan desain antarmuka yang siap dikembangkan. Cocok untuk tim yang sudah punya developer.",
      tags: ["Riset", "Wireframe", "Desain antarmuka"],
    },
    {
      title: "Perawatan & hosting",
      body: "Server, domain, backup, pembaruan keamanan, dan perbaikan setelah rilis. Sistemmu tetap sehat setelah serah terima.",
      tags: ["Server", "Backup", "Pembaruan"],
    },
  ],
  bundle: {
    label: "Paket digitalisasi UMKM",
    title: "Kasir, photobox, pembukuan, dan website dari satu tim.",
    body: "Gabungkan Sissi Kasir, Sissi Booth, atau Loka Accounting dengan website usahamu. Satu kontak untuk pemasangan, pelatihan, dan bantuan sesudahnya.",
    cta: "Tanya paketnya",
  },
} as const;

export const workflow = {
  eyebrow: "Cara kerja",
  title: "Jelas dari awal, tidak ada kejutan di akhir.",
  steps: [
    { title: "Konsultasi", body: "Gratis. Kami dengarkan masalahnya dulu, bukan langsung menawarkan fitur." },
    { title: "Rancang", body: "Ruang lingkup, desain awal, jadwal, dan penawaran harga tertulis." },
    { title: "Bangun", body: "Progres rutin yang bisa kamu coba sendiri sejak tahap awal." },
    { title: "Rilis", body: "Uji bersama, pemasangan, dan pelatihan untuk timmu." },
    { title: "Rawat", body: "Perbaikan, pembaruan, dan pengembangan lanjutan bila dibutuhkan." },
  ],
} as const;

export const portfolio = {
  eyebrow: "Portofolio",
  title: "Hasil kerja yang bisa kamu coba sendiri.",
  body: "Semua yang di bawah ini sudah online. Buka, klik, dan nilai sendiri.",
  items: [
    {
      name: "pilihfotomu",
      domain: "pilihfotomu.id",
      href: "https://pilihfotomu.id/",
      kind: "Proyek klien",
      summary: "Platform untuk fotografer: halaman booking, pencatatan jadwal dan pembayaran, klien memilih foto online, dan editor foto di browser.",
      image: "/products/site-pilihfotomu.jpg",
      featured: true,
    },
    {
      name: "Sissi Kasir",
      domain: "kasir.sissi.id",
      href: "https://kasir.sissi.id/",
      kind: "Produk Sissi",
      summary: "Aplikasi kasir Android offline-first, server sinkronisasi, dashboard web pemilik, dan pesan mandiri lewat QR meja.",
      image: "/products/site-kasir.jpg",
      featured: false,
    },
    {
      name: "Sissi Booth",
      domain: "booth.sissi.id",
      href: "https://booth.sissi.id/",
      kind: "Produk Sissi",
      summary: "Aplikasi photobox dengan QRIS otomatis, galeri foto lewat QR, dan dashboard pemilik booth.",
      image: "/products/site-booth.jpg",
      featured: false,
    },
    {
      name: "Loka Accounting",
      domain: "lokatech.id",
      href: "https://lokatech.id/",
      kind: "Produk Sissi",
      summary: "Software akuntansi online: penjualan, pembelian, kas, persediaan, aset, dan laporan keuangan.",
      image: "/products/site-lokatech.jpg",
      featured: false,
    },
  ],
  visit: "Kunjungi",
} as const;

export const about = {
  eyebrow: "Tentang kami",
  title: "Perusahaan teknologi dari Pekanbaru.",
  paragraphs: [
    `${site.company} berawal dari hal yang sering kami lihat di usaha sekitar: kasir yang macet saat sinyal hilang, photobox yang masih dibayar manual, dan pembukuan yang tercecer di buku tulis.`,
    "Kami memilih menyelesaikannya dengan membuat produk sendiri. Dari situ kami belajar apa yang benar-benar dibutuhkan pemilik usaha, dan pelajaran itu yang kami bawa ke setiap proyek klien.",
  ],
  principles: [
    { title: "Dipakai dulu, baru dijual", body: "Produk kami diuji di usaha sungguhan sebelum ditawarkan ke orang lain." },
    { title: "Tetap jalan saat sinyal jelek", body: "Kami merancang sistem yang tidak berhenti hanya karena internet putus." },
    { title: "Bahasa yang dimengerti", body: "Penawaran, laporan progres, dan panduan ditulis tanpa istilah yang membingungkan." },
  ],
  facts: [
    { label: "Lokasi", value: `${site.city}, ${site.region}` },
    { label: "Produk aktif", value: "Sissi Kasir, Sissi Booth, Loka Accounting" },
    { label: "Konsultasi", value: "Tatap muka atau online" },
  ],
} as const;

export const faq = {
  eyebrow: "FAQ",
  title: "Pertanyaan yang sering masuk.",
  items: [
    {
      q: "Berapa biaya membuat website atau aplikasi?",
      a: "Sesuai kebutuhan. Setelah konsultasi gratis, kami kirim penawaran tertulis berisi ruang lingkup, jadwal, dan harga. Kamu memutuskan setelah semuanya jelas.",
    },
    {
      q: "Apakah konsultasinya benar-benar gratis?",
      a: "Ya. Ceritakan kebutuhanmu lewat WhatsApp, email, atau formulir di halaman ini. Tidak ada kewajiban untuk melanjutkan.",
    },
    {
      q: "Berapa lama pengerjaannya?",
      a: "Tergantung ruang lingkup. Perkiraan waktunya kami tulis di penawaran, lengkap dengan tahapan dan kapan kamu bisa mulai mencoba hasilnya.",
    },
    {
      q: "Apakah ada perawatan setelah rilis?",
      a: "Ada. Kami bisa mengurus server, domain, backup, pembaruan keamanan, dan perbaikan setelah sistem berjalan. Bentuk dan biayanya dibahas di penawaran.",
    },
    {
      q: "Bagaimana dengan kepemilikan kode dan data?",
      a: "Hak atas kode, akses server, dan data dibahas di awal lalu ditulis jelas di penawaran, supaya tidak ada salah paham di kemudian hari.",
    },
    {
      q: "Apakah menerima proyek IoT?",
      a: "Ya. Misalnya sensor dan pemantauan jarak jauh, kendali perangkat, atau mesin kiosk. Kami bisa mulai dari prototipe sebelum dipasang di lokasi.",
    },
    {
      q: "Apakah produk Sissi bisa disesuaikan untuk usahaku?",
      a: "Bisa dibicarakan, misalnya integrasi dengan sistem yang sudah kamu pakai atau fitur khusus. Hubungi kami dan ceritakan kebutuhannya.",
    },
    {
      q: "Apakah melayani klien di luar Pekanbaru?",
      a: "Ya. Konsultasi, laporan progres, dan serah terima bisa dilakukan online.",
    },
  ],
} as const;

export const contact = {
  eyebrow: "Mulai proyek",
  title: "Ceritakan kebutuhanmu.",
  body: "Isi singkat saja. Pesanmu terbuka di WhatsApp atau email, tinggal kirim. Kami balas secepatnya di jam kerja.",
  direct: [
    { label: "WhatsApp", value: site.phoneDisplay, href: site.whatsappUrl },
    { label: "Email", value: site.email, href: site.mailUrl },
    { label: "Lokasi", value: `${site.city}, ${site.region}`, href: null },
  ],
  note: "Konsultasi gratis. Harga sesuai kebutuhan, ditulis di penawaran.",
  form: {
    name: { label: "Nama", placeholder: "Nama kamu" },
    business: { label: "Nama usaha", optional: "opsional", placeholder: "Contoh: Kopi Senja" },
    services: {
      label: "Yang dibutuhkan",
      hint: "Boleh pilih lebih dari satu",
      options: [
        "Website",
        "Aplikasi mobile/web",
        "Sistem custom",
        "IoT & perangkat",
        "Desain UI/UX",
        "Perawatan & hosting",
        "Produk Sissi",
        "Lainnya",
      ],
    },
    budget: {
      label: "Perkiraan anggaran",
      optional: "opsional",
      options: ["Di bawah Rp10 jt", "Rp10–30 jt", "Rp30–100 jt", "Di atas Rp100 jt", "Belum tahu"],
    },
    message: {
      label: "Ceritakan kebutuhannya",
      placeholder: "Contoh: Kami punya 3 cabang laundry dan ingin aplikasi untuk mencatat cucian dan mengirim notifikasi WhatsApp ke pelanggan.",
    },
    errors: {
      name: "Isi nama dulu.",
      services: "Pilih minimal satu kebutuhan.",
      message: "Ceritakan kebutuhannya, minimal satu kalimat.",
    },
    sendWhatsapp: "Kirim lewat WhatsApp",
    sendEmail: "Kirim lewat email",
    sentNote: "Pesan sudah disiapkan di aplikasi yang terbuka. Tinggal tekan kirim.",
    emailSubject: "Permintaan proyek dari sissi.id",
    template: {
      greeting: "Halo Sissi, saya ingin konsultasi proyek.",
      name: "Nama",
      business: "Usaha",
      services: "Kebutuhan",
      budget: "Anggaran",
      message: "Cerita",
    },
  },
} as const;

export const footer = {
  tagline: "Software, aplikasi, dan IoT untuk usaha Indonesia.",
  columns: [
    {
      title: "Produk",
      links: [
        { label: "Sissi Kasir", href: "https://kasir.sissi.id/" },
        { label: "Sissi Booth", href: "https://booth.sissi.id/" },
        { label: "Loka Accounting", href: "https://lokatech.id/" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { label: "Layanan", href: "#layanan" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "Tentang", href: "#tentang" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
  contactTitle: "Kontak",
  rights: "Hak cipta dilindungi.",
  backToTop: "Kembali ke atas",
} as const;

export const notFound = {
  title: "Halaman tidak ditemukan",
  body: "Alamat yang kamu buka tidak ada atau sudah dipindahkan.",
  cta: "Kembali ke beranda",
} as const;
