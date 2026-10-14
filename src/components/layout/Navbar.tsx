"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/constants/content";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/components/shared/cn";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={nav.cta.href} className="min-h-10 px-5 text-sm max-sm:hidden">
            {nav.cta.label}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-ink hover:bg-sand md:hidden"
            aria-expanded={open}
            aria-controls="menu-seluler"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      <div id="menu-seluler" hidden={!open} className="border-t border-line bg-paper md:hidden">
        <Container className="flex flex-col py-3">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-3.5 text-base font-medium text-ink last:border-b-0"
            >
              {l.label}
            </a>
          ))}
          <ButtonLink href={nav.cta.href} onClick={() => setOpen(false)} className="mt-3 mb-2 w-full">
            {nav.cta.label}
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
