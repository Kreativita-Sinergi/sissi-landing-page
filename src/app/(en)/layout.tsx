import type { Metadata, Viewport } from "next";
import { RootDocument } from "@/components/layout/RootDocument";
import { siteUrl } from "@/lib/seo";

// Root layout English ("/en"). Tiap bahasa punya root layout sendiri agar <html lang> benar dan halaman tetap statis.
// metadataBase di layout: gambar OG yang diwarisi halaman anak (mis. /privacy) ikut memakai alamat situs.
export const metadata: Metadata = { metadataBase: new URL(siteUrl) };

export const viewport: Viewport = { themeColor: "#fbfaf8" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
