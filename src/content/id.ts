// Kamus Bahasa Indonesia (bahasa bawaan, di "/"). Bentuknya menjadi acuan bahasa lain.
// Jangan menulis harga jasa: pemilik memutuskan "gratis konsultasi, harga sesuai kebutuhan".
import { site } from "./site";
import type { Product, WorkTone } from "./types";

export const id = {
  meta: {
    title: "Sissi — Software, aplikasi & IoT untuk usaha | PT. Sissi Kreatif Teknologi",
    description:
      "PT. Sissi Kreatif Teknologi dari Pekanbaru membuat Sissi Kasir, Sissi Booth, dan Sissi Accounting, serta menerima pembuatan website, aplikasi, sistem custom, dan IoT. Konsultasi gratis.",
    keywords: [
      "jasa pembuatan website",
      "jasa pembuatan aplikasi",
      "software house Pekanbaru",
      "jasa IoT",
      "aplikasi kasir",
      "Sissi Kasir",
      "Sissi Booth",
      "Sissi Accounting",
    ],
    ogAlt: "PT. Sissi Kreatif Teknologi: software, aplikasi, dan IoT untuk usaha",
  },

  nav: {
    links: [
      { label: "Layanan", href: "#layanan" },
      { label: "Produk", href: "#produk" },
      { label: "Portofolio", href: "#portofolio" },
      { label: "Tentang", href: "#tentang" },
      { label: "FAQ", href: "#faq" },
    ],
    cta: { label: "Konsultasi gratis", href: "#kontak" },
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    language: "Bahasa",
  },

  hero: {
    eyebrow: `${site.company} · ${site.city}`,
    title: "Kami membuat software untuk usahamu.",
    lead: "Produk kami dipakai usaha setiap hari, dan kami bisa membuatkan punyamu: website, aplikasi, sistem, sampai IoT.",
    primary: { label: "Konsultasi gratis", href: "#kontak" },
    secondary: { label: "Lihat layanan", href: "#layanan" },
    note: "Konsultasi gratis · Harga sesuai kebutuhan",
    person: {
      src: "/hero/orang-buku.webp",
      // Foto dari pemilik (assets/), latar dihapus dengan scripts/hapus-latar-*. Ganti dengan foto tim asli bila ada.
      alt: "Perempuan bersweter oranye tersenyum sambil memegang buku catatan",
      width: 1000,
      height: 1339,
    },
    // Potongan UI asli Sissi Kasir untuk komposisi hero.
    ui: {
      chart: { src: "/hero/ui-grafik.webp", alt: "Grafik transaksi per jam di Sissi Kasir", width: 678, height: 268 },
      order: { src: "/hero/ui-pesanan.webp", alt: "Panel pesanan baru di Sissi Kasir", width: 378, height: 450 },
      menu: [
        { src: "/hero/menu-am.webp", alt: "Menu Americano", width: 171, height: 175 },
        { src: "/hero/menu-cl.webp", alt: "Menu Caffe Latte", width: 171, height: 175 },
        { src: "/hero/menu-ek.webp", alt: "Menu Es Kopi Susu Gula Aren", width: 171, height: 175 },
      ],
    },
    badge: { name: "Sissi", line: "Software, aplikasi & IoT" },
    worksLabel: "Yang sudah kami buat",
    works: [
      {
        name: "Sissi Kasir",
        kind: "Produk kami",
        client: false,
        line: "Kasir Android yang tetap jalan saat internet mati",
        href: "#produk-kasir",
        image: "/products/kasir-tablet.webp",
        width: 1280,
        height: 800,
        tone: "sand" as WorkTone,
      },
      {
        name: "Sissi Booth",
        kind: "Produk kami",
        client: false,
        line: "Aplikasi photobox dengan QRIS otomatis",
        href: "#produk-booth",
        image: "/products/booth-hias.png",
        width: 1440,
        height: 900,
        tone: "yellow" as WorkTone,
      },
      {
        name: "Sissi Accounting",
        kind: "Produk kami",
        client: false,
        line: "Akuntansi online untuk bisnis",
        href: "#produk-accounting",
        image: "/products/accounting-ringkasan.jpg",
        width: 1586,
        height: 1058,
        tone: "sand" as WorkTone,
      },
      {
        name: "pilihfotomu",
        kind: "Proyek klien",
        client: true,
        line: "Booking dan pilih foto online untuk fotografer",
        href: "#portofolio",
        image: "/products/site-pilihfotomu.jpg",
        width: 1440,
        height: 900,
        tone: "dark" as WorkTone,
      },
    ],
  },

  services: {
    eyebrow: "Layanan",
    title: "Ceritakan masalahnya. Kami yang memikirkan sistemnya.",
    body: "Tim yang membuat Sissi Kasir, Sissi Booth, dan Sissi Accounting juga menerima proyek. Kamu bicara langsung dengan orang yang menulis kodenya.",
    problemLabel: "Masalahnya",
    solutionLabel: "Yang kami buat",
    exampleLabel: "Contoh",
    items: [
      {
        name: "Website",
        problem: "Usahamu tidak muncul saat dicari di Google, atau situsnya lambat dan susah diubah.",
        solution: "Situs yang cepat dibuka, rapi di HP, dan isinya bisa kamu perbarui sendiri.",
        example: { label: "kasir.sissi.id dan booth.sissi.id", href: "https://booth.sissi.id/" } as { label: string; href: string } | null,
      },
      {
        name: "Aplikasi mobile & web",
        problem: "Pesanan, stok, atau jadwal masih dicatat di kertas dan grup WhatsApp.",
        solution: "Aplikasi Android, iOS, atau web yang mengikuti alur kerjamu, dan tetap jalan saat sinyal hilang.",
        example: { label: "Sissi Kasir, kasir offline untuk HP dan tablet", href: "https://kasir.sissi.id/" },
      },
      {
        name: "Sistem & integrasi",
        problem: "Kasir, pembayaran, dan pembukuan berjalan sendiri-sendiri, datanya disalin manual.",
        solution: "Satu sistem yang menyambungkan QRIS, payment gateway, notifikasi WhatsApp, printer, dan pembukuan.",
        example: { label: "Sissi Booth, pembayaran QRIS yang terdeteksi lunas sendiri", href: "https://booth.sissi.id/" },
      },
      {
        name: "IoT & perangkat",
        problem: "Mesin, ruangan, atau alat masih harus dicek orang secara langsung.",
        solution: "Sensor, kendali perangkat, dan dashboard yang memberi tahu saat ada yang tidak beres. Dari prototipe sampai terpasang.",
        example: { label: "Sissi Booth, aplikasi yang mengendalikan kamera dan printer foto", href: "https://booth.sissi.id/" },
      },
      {
        name: "Desain UI/UX",
        problem: "Sudah punya developer, tapi aplikasinya membingungkan pengguna.",
        solution: "Riset singkat, alur, dan desain antarmuka yang siap dikembangkan timmu.",
        example: null,
      },
      {
        name: "Perawatan & hosting",
        problem: "Situs atau aplikasi sudah jadi, tapi tidak ada yang mengurus setelahnya.",
        solution: "Server, domain, backup, pembaruan keamanan, dan perbaikan, seperti server produk kami sendiri.",
        example: null,
      },
    ],
    bundle: {
      text: "Usaha kecil dan ingin mulai dari yang sudah jadi? Gabungkan Sissi Kasir, Sissi Booth, atau Sissi Accounting dengan website usahamu.",
      cta: "Tanya paket digitalisasi UMKM",
    },
  },

  products: {
    eyebrow: "Produk",
    title: "Produk yang kami bangun dan rawat sendiri.",
    body: "Setiap produk lahir dari masalah nyata di usaha sekitar kami. Kami memakainya, memperbaikinya, dan terus menambah fitur dari masukan pengguna.",
    // Catatan untuk versi bahasa lain (aplikasi berbahasa Indonesia). Kosong di bahasa Indonesia.
    languageNote: "",
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
        id: "accounting",
        name: "Sissi Accounting",
        domain: "accounting.sissi.id",
        href: "https://accounting.sissi.id/",
        tagline: "Pembukuan rapi. Usaha lebih terarah.",
        body: "Software akuntansi online untuk bisnis Indonesia. Dari transaksi pertama sampai tutup buku: kas, stok, dan laporan keuangan dalam satu alur yang jelas.",
        points: [
          "Penjualan dan pembelian terhubung",
          "Kas & bank dengan rekonsiliasi",
          "Persediaan multi-gudang dan aset tetap",
          "Laba rugi, neraca, dan arus kas",
        ],
        audience: "Bisnis Indonesia · Tim keuangan · Bisa terhubung dengan Sissi Kasir",
        badge: "Uji coba gratis 30 hari",
        cta: "Kunjungi Sissi Accounting",
        visual: {
          kind: "screen",
          src: "/products/accounting-ringkasan.jpg",
          alt: "Dashboard pemilik Sissi Accounting: ringkasan pendapatan, laba bersih, aset, dan kewajiban",
          width: 1586,
          height: 1058,
          tone: "light",
        },
      },
    ] satisfies Product[] as Product[],
  },

  workflow: {
    eyebrow: "Cara kerja",
    title: "Jelas dari awal, tidak ada kejutan di akhir.",
    steps: [
      { title: "Konsultasi", body: "Gratis. Kami dengarkan masalahnya dulu, bukan langsung menawarkan fitur." },
      { title: "Rancang", body: "Ruang lingkup, desain awal, jadwal, dan penawaran harga tertulis." },
      { title: "Bangun", body: "Progres rutin yang bisa kamu coba sendiri sejak tahap awal." },
      { title: "Rilis", body: "Uji bersama, pemasangan, dan pelatihan untuk timmu." },
      { title: "Rawat", body: "Perbaikan, pembaruan, dan pengembangan lanjutan bila dibutuhkan." },
    ],
  },

  portfolio: {
    eyebrow: "Portofolio",
    title: "Hasil kerja yang bisa kamu coba sendiri.",
    body: "Semua yang di bawah ini sudah online. Buka, klik, dan nilai sendiri.",
    items: [
      {
        name: "pilihfotomu",
        domain: "pilihfotomu.id",
        href: "https://pilihfotomu.id/",
        kind: "Proyek klien",
        client: true,
        summary:
          "Platform untuk fotografer: halaman booking, pencatatan jadwal dan pembayaran, klien memilih foto online, dan editor foto di browser.",
        image: "/products/site-pilihfotomu.jpg",
        featured: true,
      },
      {
        name: "Made Art",
        domain: "madeart.id",
        href: "https://madeart.id/",
        kind: "Proyek klien",
        client: true,
        summary:
          "Situs rumah produksi video dan foto di Pekanbaru dan Jakarta: showreel, portofolio acara, layanan, dan alur kerja, dengan isi yang dikelola lewat CMS.",
        image: "/products/site-madeart.jpg",
        featured: false,
      },
      {
        name: "Sissi Kasir",
        domain: "kasir.sissi.id",
        href: "https://kasir.sissi.id/",
        kind: "Produk Sissi",
        client: false,
        summary:
          "Situs produk, panduan bergambar, dashboard web pemilik, dan pesan mandiri lewat QR meja. Aplikasinya sendiri berjalan offline di Android.",
        image: "/products/site-kasir.jpg",
        featured: false,
      },
      {
        name: "Sissi Booth",
        domain: "booth.sissi.id",
        href: "https://booth.sissi.id/",
        kind: "Produk Sissi",
        client: false,
        summary: "Situs produk, galeri foto tamu lewat QR, dan dashboard pemilik booth.",
        image: "/products/site-booth.jpg",
        featured: false,
      },
    ],
    visit: "Kunjungi",
    imageAlt: "Tampilan situs",
  },

  about: {
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
      { label: "Produk aktif", value: "Sissi Kasir, Sissi Booth, Sissi Accounting" },
      { label: "Konsultasi", value: "Tatap muka atau online" },
    ],
  },

  faq: {
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
  },

  contact: {
    eyebrow: "Mulai proyek",
    title: "Ceritakan kebutuhanmu.",
    body: "Isi singkat saja. Pesanmu terbuka di WhatsApp atau email, tinggal kirim. Kami balas secepatnya di jam kerja.",
    labels: { whatsapp: "WhatsApp", email: "Email", location: "Lokasi" },
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
        placeholder:
          "Contoh: Kami punya 3 cabang laundry dan ingin aplikasi untuk mencatat cucian dan mengirim notifikasi WhatsApp ke pelanggan.",
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
  },

  footer: {
    tagline: "Software, aplikasi, dan IoT untuk usaha.",
    columns: [
      {
        title: "Produk",
        links: [
          { label: "Sissi Kasir", href: "https://kasir.sissi.id/" },
          { label: "Sissi Booth", href: "https://booth.sissi.id/" },
          { label: "Sissi Accounting", href: "https://accounting.sissi.id/" },
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
  },
};
