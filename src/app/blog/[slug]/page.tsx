import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Lightbulb, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blog";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (other articles)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isLight={true} />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        {/* Article Header & Content */}
        <article className="max-w-[760px] mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[#7d8986] hover:text-[#292e31] mb-8 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Kembali ke semua artikel</span>
          </Link>

          {/* Metadata Tag */}
          <div className="text-[12px] font-mono font-medium text-[#7d8986] tracking-wider uppercase mb-4">
            BLOG / {post.category} · {post.date.toUpperCase()} · {post.readTime.toUpperCase()}
          </div>

          {/* Title */}
          <h1 className="text-[34px] sm:text-[46px] lg:text-[52px] font-semibold text-[#292e31] leading-[1.12] tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Subtitle / Lead */}
          <p className="text-[19px] sm:text-[20px] text-[#525866] leading-relaxed mb-6 font-normal">
            Dari biji kopi sampai sedotan, kita hitung satu per satu.
          </p>

          <p className="text-[17px] sm:text-[18px] text-[#292e31] leading-relaxed mb-12">
            Banyak kedai menentukan harga dengan melihat kedai sebelah. Masalahnya,
            bahan baku, ukuran cup, dan resep tiap kedai berbeda. Cara paling aman
            adalah menghitung HPP (harga pokok penjualan) per gelas.
          </p>

          {/* Section 1 */}
          <h2 className="text-[26px] sm:text-[28px] font-semibold text-[#292e31] mb-4">
            Hitung bahan per gelas
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525866] leading-relaxed mb-6">
            Contoh di bawah memakai es kopi susu gula aren ukuran 16 oz. Ganti
            angkanya dengan harga belanja tokomu.
          </p>

          {/* Table of ingredients */}
          <div className="border border-[#e4e9e7] rounded-[16px] overflow-hidden mb-12 bg-white shadow-sm">
            <div className="divide-y divide-[#e4e9e7]">
              <div className="flex items-center justify-between p-4 sm:px-6 text-[15px]">
                <span className="text-[#292e31]">Espresso 18 g</span>
                <span className="font-mono text-[12px] text-[#7d8986]">Rp250/g</span>
                <span className="font-mono font-medium text-[#292e31]">Rp4.500</span>
              </div>
              <div className="flex items-center justify-between p-4 sm:px-6 text-[15px]">
                <span className="text-[#292e31]">Susu segar 150 ml</span>
                <span className="font-mono text-[12px] text-[#7d8986]">Rp20/ml</span>
                <span className="font-mono font-medium text-[#292e31]">Rp3.000</span>
              </div>
              <div className="flex items-center justify-between p-4 sm:px-6 text-[15px]">
                <span className="text-[#292e31]">Gula aren 20 ml</span>
                <span className="font-mono text-[12px] text-[#7d8986]">Rp40/ml</span>
                <span className="font-mono font-medium text-[#292e31]">Rp800</span>
              </div>
              <div className="flex items-center justify-between p-4 sm:px-6 text-[15px]">
                <span className="text-[#292e31]">Es batu</span>
                <span className="font-mono text-[12px] text-[#7d8986]">—</span>
                <span className="font-mono font-medium text-[#292e31]">Rp300</span>
              </div>
              <div className="flex items-center justify-between p-4 sm:px-6 text-[15px]">
                <span className="text-[#292e31]">Cup, tutup, sedotan</span>
                <span className="font-mono text-[12px] text-[#7d8986]">—</span>
                <span className="font-mono font-medium text-[#292e31]">Rp1.500</span>
              </div>
            </div>
            {/* Table Footer */}
            <div className="bg-[#f3f6f5] flex items-center justify-between p-4 sm:px-6 border-t border-[#e4e9e7]">
              <span className="font-semibold text-[15px] text-[#292e31]">
                HPP per gelas
              </span>
              <span className="font-mono font-bold text-[16px] text-[#292e31]">
                Rp10.100
              </span>
            </div>
          </div>

          {/* Section 2 */}
          <h2 className="text-[26px] sm:text-[28px] font-semibold text-[#292e31] mb-4">
            Lalu harga jualnya berapa?
          </h2>
          <p className="text-[16px] sm:text-[18px] text-[#525866] leading-relaxed mb-6">
            Kalau dijual Rp18.000, sisa Rp7.900 per gelas. Kelihatannya untung, tapi
            biaya bahan memakan 56% dari harga jual. Sisanya masih harus menutup
            sewa, gaji, listrik, dan bahan yang terbuang.
          </p>

          {/* Kotak Rumus */}
          <div className="bg-[#f3f6f5] border border-[#e4e9e7] rounded-[16px] p-6 mb-6">
            <span className="inline-block text-[11px] font-mono font-medium text-[#196b52] tracking-wider uppercase mb-2">
              RUMUS
            </span>
            <p className="font-mono text-[16px] font-medium text-[#292e31] mb-1">
              Harga jual = HPP ÷ target food cost
            </p>
            <p className="font-mono text-[15px] text-[#525866]">
              Rp10.100 ÷ 40% = Rp25.250, dibulatkan Rp25.000
            </p>
          </div>

          <p className="text-[16px] sm:text-[18px] text-[#525866] leading-relaxed mb-8">
            Target 30–40% food cost umum dipakai di kedai kopi. Kalau harga
            Rp25.000 terasa terlalu mahal untuk pelangganmu, kurangi biaya bahan
            dulu: ukuran cup, takaran susu, atau pemasok gula aren.
          </p>

          {/* Tips Callout */}
          <div className="bg-[#e8f4f0] border border-[#d2ebe3] rounded-[14px] p-5 flex items-start gap-4 mb-12">
            <Lightbulb className="w-5 h-5 text-[#196b52] shrink-0 mt-0.5" />
            <p className="text-[15px] text-[#196b52] leading-relaxed">
              Di Sissi, simpan HPP di kolom Harga Modal setiap produk. Laporan
              akan menunjukkan margin per menu tanpa hitung ulang.
            </p>
          </div>

          {/* Author Badge */}
          <div className="border-t border-b border-[#e4e9e7] py-6 flex items-center gap-4 mb-20">
            <div className="w-12 h-12 rounded-full bg-[#f1702c] text-white flex items-center justify-center font-bold text-lg font-mono">
              S
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[#292e31]">
                Tim Sissi
              </div>
              <div className="text-[14px] text-[#7d8986]">
                Ditulis untuk pemilik usaha kecil
              </div>
            </div>
          </div>
        </article>

        {/* Baca Juga Section */}
        <section className="max-w-[1200px] mx-auto px-6 pt-8 border-t border-[#e4e9e7]">
          <h2 className="text-[32px] sm:text-[42px] font-semibold text-[#292e31] mb-8">
            Baca juga
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex flex-col p-6 rounded-[16px] border border-[#e4e9e7] hover:border-[#b0b8b5] hover:shadow-md transition-all cursor-pointer"
              >
                <span className="text-[11px] font-mono font-medium text-[#7d8986] tracking-wider uppercase mb-3">
                  {rel.category}
                </span>
                <h3 className="text-[17px] font-semibold text-[#292e31] group-hover:text-[#f1702c] transition-colors leading-snug line-clamp-2">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
