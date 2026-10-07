import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/shared/Container";
import { Download, Tablet, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Unduh Aplikasi · Sissi",
  description:
    "Pasang Sissi di perangkat tablet dan HP Android tokomu. Unduh resmi di Google Play Store.",
};

export default function DownloadPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-[#f3f6f5]">
      {/* Subpage White Navbar */}
      <Navbar isLight />

      <main className="flex-1 pt-28 pb-20">
        {/* Header */}
        <section className="py-12 sm:py-16">
          <Container>
            <div className="max-w-3xl">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-3 block">
                UNDUH APLIKASI
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-[#292e31] tracking-tight leading-[1.12]">
                Pasang Sissi di perangkat tokomu
              </h1>
              <p className="mt-4 text-base sm:text-[18px] text-[#525866] leading-relaxed">
                Tersedia resmi di Google Play Store untuk tablet dan HP Android. Unduh gratis dan mulai transaksi dalam hitungan menit.
              </p>
            </div>
          </Container>
        </section>

        {/* Download Options */}
        <section className="pb-16">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {/* Card 1: Google Play Store */}
              <div className="p-8 rounded-[20px] bg-white border-2 border-[#f1702c] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#fef1eb] text-[#f1702c] text-[11px] font-mono font-bold tracking-wider uppercase mb-5">
                    DIREKOMENDASIKAN
                  </div>
                  <h3 className="text-2xl font-semibold text-[#292e31]">
                    Google Play Store
                  </h3>
                  <p className="mt-2 text-[15px] text-[#525866] leading-relaxed">
                    Pembaruan otomatis, keamanan terverifikasi Google Play Protect, dan kompatibel untuk semua tablet serta smartphone Android.
                  </p>

                  <div className="mt-6 flex flex-col gap-2.5 text-[14px] text-[#7d8986] font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#f1702c]" />
                      <span>Versi terbaru: v2.4.0 (38 MB)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#f1702c]" />
                      <span>Kebutuhan: Android 8.0 (Oreo) ke atas</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 h-[51px] px-6 rounded-[8px] bg-[#f1702c] hover:bg-[#ff7a45] text-white font-medium text-[15px] flex items-center justify-center gap-2.5 transition-colors shadow-2xs cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 15.375V2.62499C2.25 2.18249 2.505 1.79249 2.88 1.61249L10.2675 8.99999L2.88 16.3875C2.505 16.2 2.25 15.8175 2.25 15.375ZM12.6075 11.34L4.5375 16.005L10.905 9.63749L12.6075 11.34ZM15.12 8.10749C15.375 8.30999 15.5625 8.62499 15.5625 8.99999C15.5625 9.37499 15.3975 9.67499 15.135 9.88499L13.4175 10.875L11.5425 8.99999L13.4175 7.12499L15.12 8.10749ZM4.5375 1.99499L12.6075 6.65999L10.905 8.36249L4.5375 1.99499Z" fill="white"/>
                  </svg>
                  <span>Buka di Google Play</span>
                </a>
              </div>

              {/* Card 2: Unduh File APK */}
              <div className="p-8 rounded-[20px] bg-white border border-[#e4e9e7] shadow-2xs flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[6px] bg-[#f3f6f5] text-[#7d8986] text-[11px] font-mono font-bold tracking-wider uppercase mb-5">
                    INSTALASI MANUAL
                  </div>
                  <h3 className="text-2xl font-semibold text-[#292e31]">
                    Paket APK Langsung
                  </h3>
                  <p className="mt-2 text-[15px] text-[#525866] leading-relaxed">
                    Khusus perangkat mesin kasir terintegrasi (POS Machine) yang tidak memiliki akses Google Play Store resmi.
                  </p>

                  <div className="mt-6 flex flex-col gap-2.5 text-[14px] text-[#7d8986] font-mono">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-[#292e31]" />
                      <span>File SHA256 terverifikasi resmi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tablet size={16} className="text-[#292e31]" />
                      <span>Arsitektur universal (arm64/v7a)</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#unduh-apk"
                  className="mt-8 h-[51px] px-6 rounded-[8px] bg-white hover:bg-[#f3f6f5] border border-[#e4e9e7] text-[#292e31] font-medium text-[15px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download size={18} />
                  <span>Unduh APK (38 MB)</span>
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Langkah Mudah */}
        <section className="py-12 border-t border-[#e4e9e7]">
          <Container>
            <div className="max-w-3xl mb-10">
              <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 block">
                LANGKAH
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#292e31]">
                3 Langkah mulai berjualan
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
              <div className="p-6 rounded-[14px] bg-white border border-[#e4e9e7]">
                <span className="text-lg font-bold font-mono text-[#f1702c] mb-2 block">01</span>
                <h4 className="text-[17px] font-semibold text-[#292e31]">Unduh aplikasi</h4>
                <p className="mt-1.5 text-[14px] text-[#525866]">
                  Pasang dari Google Play Store pada tablet atau HP Android tokomu.
                </p>
              </div>

              <div className="p-6 rounded-[14px] bg-white border border-[#e4e9e7]">
                <span className="text-lg font-bold font-mono text-[#f1702c] mb-2 block">02</span>
                <h4 className="text-[17px] font-semibold text-[#292e31]">Daftar toko</h4>
                <p className="mt-1.5 text-[14px] text-[#525866]">
                  Masukkan nama usaha, pilih jenis usaha (Kuliner, Ritel, Jasa, Rental).
                </p>
              </div>

              <div className="p-6 rounded-[14px] bg-white border border-[#e4e9e7]">
                <span className="text-lg font-bold font-mono text-[#f1702c] mb-2 block">03</span>
                <h4 className="text-[17px] font-semibold text-[#292e31]">Langsung catat</h4>
                <p className="mt-1.5 text-[14px] text-[#525866]">
                  Tambahkan menu atau produk pertamamu dan mulai cetak struk.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
