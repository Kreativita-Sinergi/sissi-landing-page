import type { Metadata } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Logo } from "@/components/shared/Logo";
import { siteUrl } from "@/lib/seo";

// 404 untuk semua alamat (situs punya dua root layout per bahasa). Teks dwibahasa.
export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: "404 · Sissi", robots: { index: false } };

export default function GlobalNotFound() {
  return (
    <RootDocument locale="id">
      <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center">
        <Logo className="h-8 w-auto" />
        <div>
          <h1 className="text-3xl font-bold tracking-[-0.02em]">Halaman tidak ditemukan</h1>
          <p className="mt-1 text-muted" lang="en">
            Page not found
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">Kembali ke beranda</ButtonLink>
          <ButtonLink href="/en" variant="outline" lang="en">
            Back to home
          </ButtonLink>
        </div>
      </main>
    </RootDocument>
  );
}
