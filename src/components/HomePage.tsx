import { getDictionary, type Locale } from "@/content";
import { homeJsonLd } from "@/lib/seo";
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

/** Beranda lengkap untuk satu bahasa. */
export function HomePage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  return (
    <>
      <script
        type="application/ld+json"
        // Data statis milik sendiri; "<" di-escape agar tidak bisa menutup tag script.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(locale)).replace(/</g, "\\u003c") }}
      />
      <Navbar t={t.nav} locale={locale} />
      <main>
        <Hero t={t.hero} />
        <Services t={t.services} />
        <Products t={t.products} />
        <Workflow t={t.workflow} />
        <Portfolio t={t.portfolio} />
        <About t={t.about} />
        <Faq t={t.faq} />
        <Contact t={t.contact} />
      </main>
      <Footer t={t.footer} />
    </>
  );
}
