import type { Viewport } from "next";
import { RootDocument } from "@/components/layout/RootDocument";

// Root layout Bahasa Indonesia ("/"). Tiap bahasa punya root layout sendiri agar <html lang> benar dan halaman tetap statis.
export const viewport: Viewport = { themeColor: "#fbfaf8" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="id">{children}</RootDocument>;
}
