import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Products } from "@/components/sections/Products";
import { Services } from "@/components/sections/Services";
import { Workflow } from "@/components/sections/Workflow";
import { homeJsonLd } from "@/lib/seo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Data statis milik sendiri; "<" di-escape agar tidak bisa menutup tag script.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Products />
        <Workflow />
        <Portfolio />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
