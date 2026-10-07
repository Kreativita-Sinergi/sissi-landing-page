export interface UsahaSubpageData {
  slug: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  suitablePills: string[];
  problems: {
    number: string;
    title: string;
    description: string;
  }[];
  screens: {
    title: string;
    description: string;
  }[];
  devices: {
    title: string;
    description: string;
  }[];
}

export const USAHA_SUBPAGES: Record<string, UsahaSubpageData> = {
  kuliner: {
    slug: "kuliner",
    categoryTag: "UNTUK USAHA / KULINER",
    title: "Sissi untuk usaha kuliner",
    subtitle:
      "Pesanan per meja, langsung ke dapur. Varian dan tambahan menu tercatat tanpa ditulis ulang.",
    suitablePills: [
      "Restoran / Rumah Makan",
      "Kafe / Kedai Kopi",
      "Katering / Pesanan Besar",
      "Kuliner lainnya",
    ],
    problems: [
      {
        number: "01",
        title: "Pesanan bertumpuk di jam makan",
        description:
          "Pesanan per meja tersimpan, dapur melihat urutannya di layar.",
      },
      {
        number: "02",
        title: "Varian dan tambahan",
        description:
          "Ukuran, level pedas, extra shot. Harga tambahan dihitung otomatis.",
      },
      {
        number: "03",
        title: "Tagihan meja dipisah",
        description:
          "Satu meja bisa bayar per orang, sisanya tetap tercatat.",
      },
    ],
    screens: [
      {
        title: "Transaksi cepat",
        description: "Pilih menu dan meja dalam 2 ketukan saat antrean ramai.",
      },
      {
        title: "Denah meja",
        description: "Lihat meja mana yang terisi, kosong, atau siap bayar.",
      },
      {
        title: "Layar dapur",
        description: "Pesanan masuk berurutan ke koki tanpa kertas terbang.",
      },
    ],
    devices: [
      {
        title: "Tablet di meja kasir",
        description: "Layar utama kasir paling nyaman untuk memilih menu.",
      },
      {
        title: "HP Android untuk pelayan",
        description: "Pelayan mencatat pesanan langsung di sisi meja pelanggan.",
      },
      {
        title: "Printer thermal 58 mm atau 80 mm",
        description: "Cetak struk pelanggan dan orderan dapur secara terpisah.",
      },
    ],
  },
  ritel: {
    slug: "ritel",
    categoryTag: "UNTUK USAHA / RITEL",
    title: "Sissi untuk usaha ritel",
    subtitle:
      "Langsung bayar tanpa meja dan dapur. Barcode, harga modal, dan stok yang selalu terpantau.",
    suitablePills: [
      "Minimarket / Toko Kelontong",
      "Fashion / Pakaian",
      "Apotek / Toko Obat",
      "Konter Pulsa & Kuota",
      "Ritel lainnya",
    ],
    problems: [
      {
        number: "01",
        title: "Ratusan barang",
        description:
          "Cari dengan nama atau scan barcode, tidak perlu hafal harga.",
      },
      {
        number: "02",
        title: "Harga modal berubah",
        description:
          "HPP tersimpan per produk, margin terlihat di laporan.",
      },
      {
        number: "03",
        title: "Stok tiba-tiba habis",
        description:
          "Peringatan stok menipis sebelum barang kosong di rak.",
      },
    ],
    screens: [
      {
        title: "Kasir dengan scan barcode",
        description: "Arahkan scanner atau kamera, barang langsung masuk keranjang.",
      },
      {
        title: "Stok & harga modal",
        description: "Lacak jumlah barang dan margin keuntungan per kategori produk.",
      },
      {
        title: "Jam ramai",
        description: "Analisis jam sibuk tokomu untuk jadwal staf yang efisien.",
      },
    ],
    devices: [
      {
        title: "Tablet atau HP Android",
        description: "Fleksibel dipakai di kasir meja atau toko berukuran kecil.",
      },
      {
        title: "Scanner barcode Bluetooth",
        description: "Pemindaian super cepat untuk kasir ritel bervolume tinggi.",
      },
      {
        title: "Printer thermal 58 mm",
        description: "Struk belanja rapi dengan rincian item dan footer toko.",
      },
    ],
  },
  jasa: {
    slug: "jasa",
    categoryTag: "UNTUK USAHA / JASA",
    title: "Sissi untuk usaha jasa",
    subtitle:
      "Order masuk antrean, dikerjakan, lalu siap diambil. Pelanggan dikabari lewat WhatsApp saat selesai.",
    suitablePills: [
      "Bengkel Kendaraan",
      "Konter & Servis HP",
      "Laundry",
      "Salon & Barbershop",
      "Percetakan & Fotokopi",
      "Jasa lainnya",
    ],
    problems: [
      {
        number: "01",
        title: "Order menumpuk di meja depan",
        description:
          "Setiap order punya nomor, status, dan teknisi. Tidak ada lagi kertas yang hilang.",
      },
      {
        number: "02",
        title: "Data unit pelanggan",
        description:
          "Plat nomor, tipe HP, atau berat kiloan tercatat bersama ordernya.",
      },
      {
        number: "03",
        title: "Pelanggan bolak-balik bertanya",
        description:
          "Kirim kabar \"sudah selesai\" lewat WhatsApp dalam satu ketukan.",
      },
    ],
    screens: [
      {
        title: "Antrean servis",
        description: "Lacak status pengerjaan: Antre, Dikerjakan, dan Siap Ambil.",
      },
      {
        title: "Order servis baru",
        description: "Catat keluhan kerusakan, estimasi biaya, dan tanda terima unit.",
      },
      {
        title: "Detail & kabari pelanggan",
        description: "Kirim update WhatsApp otomatis saat pengerjaan beres.",
      },
    ],
    devices: [
      {
        title: "Tablet di meja depan",
        description: "Pusat penerimaan pesanan dan administrasi pengambilan.",
      },
      {
        title: "HP untuk teknisi (opsional)",
        description: "Teknisi memperbarui progres pengerjaan langsung dari workstation.",
      },
      {
        title: "Printer 58 mm untuk tanda terima",
        description: "Cetak nota bukti tanda terima servis untuk pelanggan.",
      },
    ],
  },
  penyewaan: {
    slug: "penyewaan",
    categoryTag: "UNTUK USAHA / PENYEWAAN",
    title: "Sissi untuk usaha penyewaan",
    subtitle:
      "Booking per jam dengan harga jam ramai, DP tercatat, dan sesi berjalan yang dihitung per menit.",
    suitablePills: [
      "Lapangan Padel",
      "Mini Soccer / Futsal",
      "Lapangan Badminton",
      "Biliar",
      "Rental PlayStation",
      "Penyewaan lainnya",
    ],
    problems: [
      {
        number: "01",
        title: "Jadwal bentrok",
        description:
          "Jadwal per lapangan terlihat dalam satu layar. Jam yang terisi tidak bisa dipesan dua kali.",
      },
      {
        number: "02",
        title: "DP dan pelunasan",
        description:
          "Uang muka dan sisa bayar tercatat per booking.",
      },
      {
        number: "03",
        title: "Hitung waktu main manual",
        description:
          "Timer per meja atau unit, tarif dihitung per menit, pesanan minuman masuk tagihan yang sama.",
      },
    ],
    screens: [
      {
        title: "Jadwal lapangan",
        description: "Kalender visual per jam untuk slot booking dan lapangan.",
      },
      {
        title: "Booking baru",
        description: "Input nama penyewa, durasi sewa, dan nominal uang muka (DP).",
      },
      {
        title: "Sesi berjalan",
        description: "Timer otomatis yang menghitung overtime sewa per menit.",
      },
    ],
    devices: [
      {
        title: "Tablet di meja kasir",
        description: "Pantau seluruh status booking lapangan dan rental dalam satu layar.",
      },
      {
        title: "HP untuk penjaga lapangan (opsional)",
        description: "Penjaga mengecek jadwal kedatangan pemain di lapangan.",
      },
      {
        title: "Printer 58 mm",
        description: "Cetak tanda bukti sewa dan rincian durasi waktu bermain.",
      },
    ],
  },
};
