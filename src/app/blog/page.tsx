"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AjakanSection } from "@/components/sections/AjakanSection";
import {
  ArrowRight,
  Coffee,
  Wallet,
  QrCode,
  Croissant,
  ChartColumn,
  ClipboardCheck,
  NotebookPen,
} from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/constants/blog";

const ICON_MAP: Record<string, React.ReactNode> = {
  coffee: <Coffee className="w-16 h-16 text-white stroke-[1.5]" />,
  wallet: <Wallet className="w-9 h-9 text-white stroke-[1.5]" />,
  "qr-code": <QrCode className="w-9 h-9 text-white stroke-[1.5]" />,
  croissant: <Croissant className="w-9 h-9 text-[#196b52] stroke-[1.5]" />,
  "chart-column": <ChartColumn className="w-9 h-9 text-[#f1702c] stroke-[1.5]" />,
  "clipboard-check": <ClipboardCheck className="w-9 h-9 text-[#292e31] stroke-[1.5]" />,
  "notebook-pen": <NotebookPen className="w-9 h-9 text-white stroke-[1.5]" />,
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const featuredPost = BLOG_POSTS[0];
  const gridPosts = BLOG_POSTS.slice(1);

  const filteredPosts =
    activeCategory === "Semua"
      ? gridPosts
      : gridPosts.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Header Banner - Orange background */}
      <section className="bg-[#f1702c] pt-[110px] pb-20 sm:pb-24 text-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-[13px] font-mono font-medium text-[#fef1eb] tracking-wider uppercase mb-5">
            BERANDA / BLOG
          </p>
          <h1 className="text-[40px] sm:text-[56px] lg:text-[64px] font-semibold leading-[1.08] tracking-tight mb-5">
            Catatan untuk pemilik usaha
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[#fef1eb] leading-relaxed max-w-[640px]">
            Hitungan, kebiasaan, dan cara kerja yang membantu toko berjalan lebih rapi.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 py-16 sm:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Featured Article Card */}
          <div className="mb-20">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block bg-white rounded-[20px] border border-[#e4e9e7] overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                {/* Visual Banner */}
                <div className="lg:col-span-6 h-[260px] sm:h-[340px] bg-[#f1702c] rounded-[14px] flex items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform">
                  <div className="w-28 h-28 rounded-full bg-white/10 flex items-center justify-center">
                    {ICON_MAP[featuredPost.iconName]}
                  </div>
                </div>

                {/* Article Info */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <span className="text-[12px] font-mono font-medium text-[#7d8986] tracking-wider uppercase mb-3">
                    {featuredPost.category} · {featuredPost.readTime.toUpperCase()}
                  </span>
                  <h2 className="text-[28px] sm:text-[36px] lg:text-[40px] font-semibold text-[#292e31] leading-tight group-hover:text-[#f1702c] transition-colors mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[16px] sm:text-[17px] text-[#525866] leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#f1702c] group-hover:gap-3 transition-all">
                    <span>Baca artikel</span>
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap mb-12">
            {BLOG_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "bg-[#292e31] text-white"
                      : "border border-[#e4e9e7] text-[#525866] hover:bg-[#f3f6f5] hover:text-[#292e31]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-[16px] border border-[#e4e9e7] p-4 sm:p-5 hover:border-[#b0b8b5] hover:shadow-md transition-all cursor-pointer"
              >
                {/* Visual Header Box */}
                <div
                  className="h-[180px] rounded-[12px] flex items-center justify-center mb-4 transition-transform group-hover:scale-[1.02]"
                  style={{ backgroundColor: post.bgColor }}
                >
                  {ICON_MAP[post.iconName]}
                </div>

                {/* Metadata */}
                <div className="flex flex-col flex-1">
                  <span className="text-[11px] font-mono font-medium text-[#7d8986] tracking-wider uppercase mb-2">
                    {post.category} · {post.date}
                  </span>
                  <h3 className="text-[18px] sm:text-[19px] font-semibold text-[#292e31] group-hover:text-[#f1702c] transition-colors leading-snug line-clamp-2 mb-3">
                    {post.title}
                  </h3>
                  <span className="text-[13px] text-[#7d8986] mt-auto">
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Ajakan Banner */}
      <AjakanSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
