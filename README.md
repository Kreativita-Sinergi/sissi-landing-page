# sissi-landing-page

Situs perusahaan **PT. Sissi Kreatif Teknologi** untuk **sissi.id**. Next.js 16, Tailwind CSS 4, TypeScript.
Halaman statis satu halaman: produk, layanan, cara kerja, portofolio, tentang, FAQ, dan formulir permintaan
proyek (terkirim lewat WhatsApp atau email, tanpa server).

```bash
npm install
npm run dev     # http://localhost:3100
npm run build
```

- Teks & kontak: `src/constants/content.ts`
- Warna & fon: `src/app/globals.css`
- Alamat situs untuk SEO: env `NEXT_PUBLIC_SITE_URL` (bawaan `https://sissi.id`)

Aturan kerja untuk agent: `AGENTS.md`. Catatan pekerjaan: `docs/PEKERJAAN.md`.
