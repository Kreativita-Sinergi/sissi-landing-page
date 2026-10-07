import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Printer,
  QrCode,
  Wallet,
  BarChart3,
  Clock,
  Calendar,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Info,
  ChevronRight,
  HelpCircle,
  Sparkles,
  Layers,
} from "lucide-react";
import { GUIDES } from "@/constants/guides";

const ICON_MAP = {
  BookOpen,
  ClipboardList,
  Printer,
  QrCode,
  Wallet,
  BarChart3,
};

export function generateStaticParams() {
  return GUIDES.map((guide) => ({
    slug: guide.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Panduan Tidak Ditemukan · Sissi POS",
    };
  }

  return {
    title: `${guide.title} · Panduan Sissi POS`,
    description: guide.description,
  };
}

export default async function GuideDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  const Icon = ICON_MAP[guide.iconName] || BookOpen;

  // Related guides
  const relatedGuides = GUIDES.filter((g) => guide.relatedSlugs.includes(g.slug));

  return (
    <div className="flex min-h-screen flex-col w-full bg-[#f3f6f5]">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28 sm:pt-32 pb-24">
        {/* Breadcrumb & Navigation Bar */}
        <section className="border-b border-[#e4e9e7] bg-white/70 backdrop-blur-md sticky top-16 z-20">
          <Container>
            <div className="py-3 flex items-center justify-between text-[13px] text-[#7d8986]">
              <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                <Link
                  href="/"
                  className="hover:text-[#292e31] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Beranda
                </Link>
                <ChevronRight size={13} className="shrink-0 text-[#b0b8b5]" />
                <Link
                  href="/panduan"
                  className="hover:text-[#292e31] transition-colors whitespace-nowrap cursor-pointer"
                >
                  Panduan
                </Link>
                <ChevronRight size={13} className="shrink-0 text-[#b0b8b5]" />
                <span className="text-[#292e31] font-medium truncate max-w-[220px] sm:max-w-[400px]">
                  {guide.title}
                </span>
              </nav>

              <Link
                href="/panduan"
                className="hidden sm:inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#f1702c] hover:text-[#ff7a45] transition-colors cursor-pointer"
              >
                <ArrowLeft size={14} />
                <span>Semua Panduan</span>
              </Link>
            </div>
          </Container>
        </section>

        {/* Hero Header */}
        <section className="pt-10 pb-8 sm:pb-12 bg-white border-b border-[#e4e9e7]">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff5f0] border border-[#ffe0d3] text-[#f1702c] text-[11px] font-mono font-semibold tracking-wider uppercase">
                  <Icon size={13} />
                  <span>{guide.category}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[12px] font-mono text-[#7d8986]">
                  <Clock size={13} />
                  <span>{guide.estimatedTime}</span>
                </span>
                <span className="text-[#c6cfcd]">•</span>
                <span className="inline-flex items-center gap-1 text-[12px] font-mono text-[#7d8986]">
                  <Calendar size={13} />
                  <span>Diperbarui {guide.lastUpdated}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold text-[#292e31] tracking-tight leading-[1.14]">
                {guide.title}
              </h1>

              <p className="mt-4 text-base sm:text-[19px] text-[#525866] leading-relaxed font-normal">
                {guide.overview}
              </p>

              {/* Prerequisites Card */}
              {guide.prerequisites && guide.prerequisites.length > 0 && (
                <div className="mt-8 p-5 sm:p-6 rounded-[16px] bg-[#f8faf9] border border-[#e4e9e7]">
                  <div className="flex items-center gap-2 text-[13px] font-semibold text-[#292e31] uppercase tracking-wider font-mono mb-3">
                    <Layers size={15} className="text-[#196b52]" />
                    <span>Prasyarat Sebelum Mulai:</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {guide.prerequisites.map((prereq, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#525866]">
                        <CheckCircle2 size={16} className="text-[#196b52] shrink-0 mt-0.5" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* Content Body with Sticky Sidebar */}
        <section className="py-12">
          <Container>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Sticky Sidebar (Table of Contents) */}
              <aside className="lg:col-span-4 hidden lg:block sticky top-32 space-y-6">
                <div className="p-6 rounded-[18px] bg-white border border-[#e4e9e7] shadow-2xs">
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#7d8986] block mb-4">
                    DAFTAR LANGKAH
                  </span>
                  <nav className="space-y-1.5">
                    {guide.steps.map((step) => (
                      <a
                        key={step.id}
                        href={`#${step.id}`}
                        className="flex items-start gap-3 p-2.5 rounded-[10px] text-[13px] text-[#525866] hover:text-[#f1702c] hover:bg-[#fff7f2] transition-colors group"
                      >
                        <span className="w-5 h-5 rounded-[6px] bg-[#f3f6f5] group-hover:bg-[#f1702c] group-hover:text-white text-[#7d8986] font-mono text-[11px] font-semibold flex items-center justify-center shrink-0 transition-colors mt-0.5">
                          {step.stepNumber}
                        </span>
                        <span className="font-medium leading-snug line-clamp-2">
                          {step.title}
                        </span>
                      </a>
                    ))}
                    {guide.faqs && guide.faqs.length > 0 && (
                      <a
                        href="#pertanyaan-umum"
                        className="flex items-start gap-3 p-2.5 rounded-[10px] text-[13px] text-[#525866] hover:text-[#f1702c] hover:bg-[#fff7f2] transition-colors group"
                      >
                        <HelpCircle size={16} className="text-[#7d8986] group-hover:text-[#f1702c] shrink-0 mt-0.5" />
                        <span className="font-medium leading-snug">
                          Tanya Jawab (FAQ)
                        </span>
                      </a>
                    )}
                  </nav>
                </div>

                {/* WhatsApp Help Widget */}
                <div className="p-6 rounded-[18px] bg-white border border-[#e4e9e7] shadow-2xs">
                  <div className="w-10 h-10 rounded-[12px] bg-[#e8f4f0] text-[#196b52] flex items-center justify-center mb-4">
                    <Sparkles size={20} />
                  </div>
                  <h4 className="text-[15px] font-semibold text-[#292e31]">
                    Ada kendala di langkah ini?
                  </h4>
                  <p className="mt-1.5 text-[13px] text-[#525866] leading-relaxed">
                    Tim teknis Sissi siap mendampingi Anda via video call atau chat WhatsApp sampai berhasil.
                  </p>
                  <Link
                    href="https://wa.me/6281234567890"
                    className="mt-4 w-full h-[40px] rounded-[8px] bg-[#196b52] hover:bg-[#208466] text-white text-[13px] font-medium flex items-center justify-center transition-colors cursor-pointer"
                  >
                    Bantuan Langsung WhatsApp
                  </Link>
                </div>
              </aside>

              {/* Main Content Guide Steps */}
              <div className="lg:col-span-8 space-y-12">
                {guide.steps.map((step, stepIndex) => (
                  <article
                    key={step.id}
                    id={step.id}
                    className="p-6 sm:p-9 rounded-[22px] bg-white border border-[#e4e9e7] shadow-2xs scroll-mt-36"
                  >
                    {/* Step Number Badge & Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="h-8 px-3 rounded-full bg-[#f1702c] text-white font-mono font-bold text-[13px] flex items-center justify-center shadow-xs">
                        Langkah {step.stepNumber.toString().padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-[28px] font-semibold text-[#292e31] leading-tight">
                      {step.title}
                    </h2>

                    <p className="mt-3 text-base sm:text-[17px] text-[#525866] leading-relaxed">
                      {step.description}
                    </p>

                    {/* Screenshot UI Frame from Figma - Realistic Thin-Bezel Tablet Mockup */}
                    {step.image && (
                      <figure className="my-8">
                        {/* Tablet Chassis with Super Thin Bezel */}
                        <div className="relative p-1.5 sm:p-2 rounded-[16px] sm:rounded-[20px] bg-[#1a1e21] border border-[#2d3339] shadow-[0_20px_45px_-12px_rgba(20,28,34,0.35),0_0_0_1px_rgba(255,255,255,0.06)]">
                          {/* Front Camera Pinhole on Bezel */}
                          <div className="absolute top-[2px] sm:top-[3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0a0c0e] ring-[0.5px] ring-white/10" />

                          {/* Tablet Screen */}
                          <div className="relative w-full aspect-[1291/825] rounded-[10px] sm:rounded-[12px] overflow-hidden bg-[#0d1012] border-[0.5px] border-[#23282c]">
                            {/* Inner wrapper to crop the transparent padding from the Figma export */}
                            <div 
                              className="absolute"
                              style={{ 
                                top: '-5%', 
                                bottom: '-6.8%', 
                                left: '-4.3%', 
                                right: '-4.4%' 
                              }}
                            >
                              <Image
                                src={step.image.src}
                                alt={step.image.alt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 750px"
                                className="object-fill"
                                priority={stepIndex === 0}
                              />
                            </div>
                            {/* Subtle screen reflection */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent" />
                          </div>
                        </div>

                        {/* Caption beneath Tablet Chassis */}
                        <figcaption className="mt-3.5 flex items-start sm:items-center gap-2.5 px-1.5 text-[13px] text-[#525866]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f1702c] shrink-0 mt-1.5 sm:mt-0" />
                          <span className="font-medium text-[#292e31]">
                            {step.image.caption}
                          </span>
                        </figcaption>
                      </figure>
                    )}

                    {/* Actionable Key Points */}
                    {step.keyPoints && step.keyPoints.length > 0 && (
                      <div className="mt-6 p-5 rounded-[14px] bg-[#f8faf9] border border-[#e4e9e7]">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#7d8986] block mb-2.5">
                          POIN PENTING & CHECKLIST:
                        </span>
                        <ul className="space-y-2">
                          {step.keyPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2.5 text-[14px] text-[#292e31]">
                              <CheckCircle2 size={16} className="text-[#196b52] shrink-0 mt-0.5" />
                              <span className="leading-snug">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Callout Box */}
                    {step.callout && (
                      <div
                        className={`mt-6 p-5 rounded-[14px] flex items-start gap-3.5 ${
                          step.callout.type === "tip"
                            ? "bg-[#e8f4f0] border border-[#d2ebe3] text-[#196b52]"
                            : step.callout.type === "warning"
                            ? "bg-[#fff8ea] border border-[#ffe8b3] text-[#9c6500]"
                            : "bg-[#f0f4ff] border border-[#d9e4ff] text-[#2c5282]"
                        }`}
                      >
                        {step.callout.type === "tip" && (
                          <Lightbulb className="w-5 h-5 shrink-0 mt-0.5" />
                        )}
                        {step.callout.type === "warning" && (
                          <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                        )}
                        {step.callout.type === "info" && (
                          <Info className="w-5 h-5 shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h4 className="text-[14px] font-semibold mb-1">
                            {step.callout.title}
                          </h4>
                          <p className="text-[13px] leading-relaxed opacity-95">
                            {step.callout.text}
                          </p>
                        </div>
                      </div>
                    )}
                  </article>
                ))}

                {/* FAQ Section for this Guide */}
                {guide.faqs && guide.faqs.length > 0 && (
                  <section
                    id="pertanyaan-umum"
                    className="p-6 sm:p-9 rounded-[22px] bg-white border border-[#e4e9e7] shadow-2xs scroll-mt-36"
                  >
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="w-9 h-9 rounded-[10px] bg-[#fff5f0] text-[#f1702c] flex items-center justify-center">
                        <HelpCircle size={18} />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-[#292e31]">
                        Pertanyaan yang Sering Diajukan
                      </h2>
                    </div>

                    <div className="space-y-4">
                      {guide.faqs.map((faq, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-5 rounded-[14px] bg-[#f8faf9] border border-[#e4e9e7]"
                        >
                          <h3 className="text-[15px] font-semibold text-[#292e31] mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-[14px] text-[#525866] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Back to Guides Navigation */}
                <div className="pt-4 flex items-center justify-between border-t border-[#e4e9e7]">
                  <Link
                    href="/panduan"
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#525866] hover:text-[#292e31] transition-colors cursor-pointer"
                  >
                    <ArrowLeft size={16} />
                    <span>Kembali ke Pusat Panduan</span>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Guides Section */}
        {relatedGuides.length > 0 && (
          <section className="py-12 bg-white border-t border-[#e4e9e7]">
            <Container>
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#f1702c] block mb-1">
                      LANJUTKAN BELAJAR
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#292e31]">
                      Panduan Terkait Lainnya
                    </h3>
                  </div>
                  <Link
                    href="/panduan"
                    className="text-[13px] font-semibold text-[#f1702c] hover:text-[#ff7a45] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Lihat Semua</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedGuides.map((rel) => {
                    const RelIcon = ICON_MAP[rel.iconName] || BookOpen;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/panduan/${rel.slug}`}
                        className="p-6 rounded-[16px] bg-[#f8faf9] border border-[#e4e9e7] hover:border-[#f1702c]/50 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-[10px] bg-white border border-[#e4e9e7] text-[#f1702c] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                            <RelIcon size={20} />
                          </div>
                          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#7d8986] block mb-1">
                            {rel.category} · {rel.estimatedTime}
                          </span>
                          <h4 className="text-[17px] font-semibold text-[#292e31] group-hover:text-[#f1702c] transition-colors leading-snug">
                            {rel.title}
                          </h4>
                          <p className="mt-2 text-[13px] text-[#525866] leading-relaxed line-clamp-2">
                            {rel.description}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-[#e4e9e7] flex items-center gap-1 text-[12px] font-semibold text-[#f1702c]">
                          <span>Pelajari langkahnya</span>
                          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
