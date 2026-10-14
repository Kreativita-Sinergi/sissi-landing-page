# Catatan pekerjaan — sissi-landing-page

> **Dokumen hidup.** Agent/kontributor WAJIB membacanya di awal sesi dan memperbaruinya di akhir sesi.
> Hanya lokal di repo ini.

Terakhir diperbarui: **2026-10-14** · oleh: Claude Opus 5.5 (kartu menu rapi, label Sissi, judul umum)

## Menunggu reviu sebelum merge

| Cabang | Ringkasan | Cara verifikasi | Risiko / catatan | Dibuat |
|---|---|---|---|---|
| _(kosong)_ | | | | |

## Sedang dikerjakan

_(kosong)_

## Berikutnya (urut prioritas)

1. **P1 · Rilis** — buat repo GitHub (nama `sissi-landing-page`; nama ini sebelumnya redirect ke
   `sissi-pos-landing-page`, pemilik sudah setuju redirect itu hilang), hubungkan ke Vercel, arahkan domain
   `sissi.id` (DNS di DomaiNesia). Isi `NEXT_PUBLIC_SITE_URL` bila domain berbeda.
2. **P2 · Tinjau isi oleh pemilik** — terutama: FAQ (kepemilikan kode/data, perawatan), rentang anggaran di
   formulir, klaim "melayani klien di luar Pekanbaru", dan teks Tentang kami.

## Backlog (belum dikerjakan)

- [ ] **P1 · Lisensi foto hero** — `public/hero/orang-buku.webp` dari file yang diberikan pemilik; nama filenya mirip
  foto stok Freepik. Pastikan lisensinya (Freepik gratis mewajibkan atribusi; premium tidak). Bila perlu atribusi,
  tambahkan di footer.
- [ ] **P3 · Foto hero asli** — idealnya foto anggota tim sungguhan.
  Ganti dengan foto anggota tim asli bila ada: latar polos, setengah badan; potong dengan Vision macOS seperti catatan
  2026-10-14, simpan WebP transparan ±800 px lebar.
- [ ] **P2 · Tangkapan layar aplikasi Loka Accounting** — produk Loka kini memakai panel tipografi (belum ada
  tangkapan layar aplikasi di Dev/Sissi). Ganti dengan layar asli bila tersedia (`src/constants/content.ts` →
  `products.items[loka].visual`).
- [ ] **P3 · Tangkapan layar portofolio diperbarui** — `public/products/site-*.jpg` diambil 2026-10-14 dari situs
  langsung (Chrome headless 1440×900). Ambil ulang bila situsnya berubah besar.
- [ ] **P3 · Nama PT** — situs memakai "PT. Sissi Kreatif Teknologi" atas permintaan pemilik walau akta belum
  terbit (2026-10-14). Bila nama/badan hukum berubah, cukup ubah `site.company`.
- [ ] **P3 · Analitik** — belum ada (CSP saat ini hanya `'self'`; tambahkan domain analitik ke CSP bila dipasang).

## Keputusan terbuka (butuh pemilik)

_(kosong)_

## Selesai (terbaru di atas)

- **2026-10-14 · Rapikan hero (XS; Claude Opus 5.5; masukan pemilik)** — kartu menu dipotong tanpa tepi/sudut
  bawaan aplikasi (sebelumnya garis dobel); file diganti nama `menu-*.webp` agar cache gambar tidak memakai versi
  lama. Label "Sissi Kasir" → "Sissi · Software, aplikasi & IoT". Judul → "Kami membuat software untuk usahamu."
  (tanpa "Indonesia", karena target pasar meluas).
- **2026-10-14 · Hero kolase (M; Claude Opus 5.5; masukan pemilik)** — foto dari pemilik
  (`../assets/education-students-happy-asian-woman-…jpg`) dihapus latarnya tanpa halo: masker Vision
  (`scripts/hapus-latar-masker.swift`) + matting dua warna (`scripts/hapus-latar-matting.py`: alpha = proyeksi
  (C−B) ke (H−B), warna tepi = warna subjek terdekat). Diperiksa di latar gelap/putih/oranye. Komposisi meniru contoh
  pemilik: panel abu (sweter oranye bentrok dengan panel oranye), potongan UI asli Kasir — grafik & panel pesanan di
  belakang orang, 3 kartu menu di depan — dan label "Sissi Kasir". Pelajaran: server `next dev` lama sempat tertinggal
  di port 3100 dan menyajikan CSS lama; selalu hentikan server dev setelah dipakai (`lsof -iTCP:3100`).
- **2026-10-14 · Potret hero baru, potongan lebih rapi (S; Claude Opus 5.5; masukan pemilik)** — foto yang diminta
  pemilik (0buCbtPbP14) ternyata Unsplash+ berbayar → dipakai foto gratis yang mirip (perempuan berkerudung, latar
  polos). Potongan sebelumnya tidak rapi (tepi dikikis → lingkaran gelap, sisa warna latar). Cara baru
  (`scratchpad`, belum masuk repo): masker Vision resolusi penuh sebagai wilayah kasar + keyer warna terhadap latar
  lokal untuk tepi tajam + dekontaminasi warna `F = (C − (1−a)·B) / a`. Tablet di foto berwarna mirip latar → foto
  dipotong setinggi dada. File: `public/hero/potret.webp` (nama baru agar cache gambar Next tidak memakai foto lama).
- **2026-10-14 · Hero: orang tanpa latar + layar melayang (S; Claude Opus 5.5; masukan pemilik)** — pemilik ingin gaya
  seperti contoh (orang dipotong dari latar, tangkapan layar aplikasi boleh). Foto Unsplash berlatar polos dipotong
  dengan Vision macOS (`VNGenerateForegroundInstanceMaskRequest`, offline), tepi dirapikan (spill kuning), dipotong
  sampai pinggang → `public/hero/orang.webp` (transparan). Komposisi: panel oranye membulat di belakang + 3 layar asli
  melayang (laporan Kasir, Kasir HP, hias Booth). Foto lama `konsultasi.webp` dihapus.
- **2026-10-14 · Latar foto hero (XS; Claude Opus 5.5; masukan pemilik)** — simbol S yang diperbesar di belakang foto
  terlihat berantakan (tepi jiplakan bergelombang). Diganti satu lingkaran oranye polos di kanan atas foto.
- **2026-10-14 · Hero: foto + simbol S (S; Claude Opus 5.5; masukan pemilik)** — pemilik tidak mau kartu karya
  maupun tangkapan layar aplikasi di kanan hero; contoh yang disukai: gamatechno.com (foto orang + bentuk merek, tanpa
  slider). Kanan hero kini foto orang (Unsplash, gratis komersial) di atas simbol S logo yang diperbesar, plus 2 label
  (lokasi, konsultasi gratis). Deret "Yang sudah kami buat" kembali di bawah hero. Judul hero dikecilkan
  (maks 3,25rem).
- **2026-10-14 · Hero dua kolom (S; Claude Opus 5.5; masukan pemilik)** — sisi kanan judul terasa kosong. Alih-alih
  gambar dekoratif, deret "Yang sudah kami buat" (4 kartu) dipindah ke kanan judul sebagai grid 2×2; di HP tetap di
  bawah teks. Dicek 1440, 1280, dan 390 px tanpa luapan.
- **2026-10-14 · Judul hero & tombol oranye (XS; Claude Opus 5.5; diminta pemilik)** — judul "Software house dari
  Pekanbaru." → "Kami membuat software untuk usaha Indonesia." (gambar OG ikut). Teks tombol oranye → putih
  (token `on-brand`; hover/tekan ke oranye lebih gelap). Catatan: kontras putih di atas `#F1702C` = 2,96:1, di
  bawah batas WCAG AA (4,5:1) — pemilik memilih putih; alternatif bila perlu: oranye tombol `#C95215` (4,47:1).
- **2026-10-14 · Redesain hero & layanan (M; Claude Opus 5.5; pemilik memilih opsi)** — Masukan pemilik: hero
  terasa seperti situs aplikasi kasir dan bagian layanan terasa "AI slop". Hero → opsi B "pernyataan + deret karya":
  judul "Software house dari Pekanbaru." + 4 kartu sejajar (Kasir, Booth, Loka, pilihfotomu sebagai proyek klien).
  Layanan → daftar "masalahnya → yang kami buat → contoh" (tanpa grid kartu, nomor, pil, dan spanduk oranye) dan
  dipindah tepat di bawah hero. Pola template lain dikurangi: label bergaris mono di tiap section, strip "sedang
  berjalan", daftar centang di Produk, kotak bernomor di Cara kerja (kini garis waktu). Portofolio: pilihfotomu +
  situs kasir.sissi.id & booth.sissi.id (Loka tidak diulang). Gambar OG mengikuti judul baru.
- **2026-10-14 · Situs perusahaan versi pertama (L; Claude Opus 5.5; disetujui pemilik)** — Next.js 16 + Tailwind 4
  + TS, satu halaman statis: Hero (layar asli Sissi Kasir), Produk (Kasir, Booth, Loka — fakta dari situs masing-
  masing), Layanan (6 + paket digitalisasi UMKM), Cara kerja (5 langkah), Portofolio (pilihfotomu = proyek klien,
  3 produk sendiri; tangkapan layar situs asli), Tentang (Pekanbaru), FAQ (akordeon), formulir permintaan proyek
  (chip, validasi, kirim lewat WhatsApp/email), Footer. SEO: metadata, JSON-LD, sitemap, robots, gambar OG.
  Keputusan pemilik: harga "sesuai kebutuhan", gratis konsultasi, nama PT ditampilkan. Diverifikasi: lint +
  build bersih, uji Playwright (HP 390px tanpa luapan horizontal, validasi formulir, isi pesan WhatsApp, menu HP,
  FAQ).

## Cara memperbarui (ringkas)

Pindahkan yang selesai ke "Selesai" (terbaru di atas, bertanggal), tambah temuan ke Backlog saat itu juga, dan
ubah tanggal "Terakhir diperbarui" — dalam commit yang sama dengan pekerjaannya.
