# Catatan pekerjaan — sissi-landing-page

> **Dokumen hidup.** Agent/kontributor WAJIB membacanya di awal sesi dan memperbaruinya di akhir sesi.
> Hanya lokal di repo ini.

Terakhir diperbarui: **2026-10-14** · oleh: Claude Opus 5.5 (situs perusahaan versi pertama)

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
