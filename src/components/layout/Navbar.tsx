"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import type { Dictionary } from "@/content";
import type { Locale } from "@/content/locales";
import { LanguageSwitch } from "./LanguageSwitch";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/components/shared/cn";

export function Navbar({ t, locale }: { t: Dictionary["nav"]; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tandai tautan section yang sedang terlihat (pita tipis di sepertiga atas layar).
  useEffect(() => {
    const sections = t.links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [t.links]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-200",
        scrolled || open ? "border-line bg-paper/92 backdrop-blur-md" : "border-transparent bg-paper",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Utama">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "location" : undefined}
              className={cn(
                "text-[15px] font-medium transition-colors hover:text-ink",
                active === l.href ? "text-ink" : "text-muted",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitch current={locale} label={t.language} />
          <ButtonLink href={t.cta.href} className="min-h-10 px-5 text-sm max-sm:hidden">
            {t.cta.label}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-sand md:hidden"
            aria-expanded={open}
            aria-controls="menu-seluler"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div
        id="menu-seluler"
        hidden={!open}
        className="absolute inset-x-0 top-full border-y border-line bg-paper shadow-lg md:hidden"
      >
        <Container className="flex flex-col py-3">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={active === l.href ? "location" : undefined}
              className={cn(
                "border-b border-line py-3.5 text-base font-medium last:border-b-0",
                active === l.href ? "text-brand-deep" : "text-ink",
              )}
            >
              {l.label}
            </a>
          ))}
          <ButtonLink href={t.cta.href} onClick={() => setOpen(false)} className="mt-3 mb-2 w-full">
            {t.cta.label}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
