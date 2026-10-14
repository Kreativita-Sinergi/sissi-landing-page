"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import type { Dictionary } from "@/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/components/shared/cn";

export function Faq({ t }: { t: Dictionary["faq"] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeader eyebrow={t.eyebrow} title={t.title} className="lg:sticky lg:top-28 lg:self-start" />
        <ul className="border-t border-line">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${base}-p${i}`;
            return (
              <li key={item.q} className="border-b border-line">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left text-[17px] font-semibold tracking-[-0.01em]"
                  >
                    {item.q}
                    <Plus
                      aria-hidden
                      className={cn("mt-0.5 size-5 shrink-0 text-brand-deep transition-transform duration-200", isOpen && "rotate-45")}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <p className="overflow-hidden pr-10 leading-relaxed text-muted" inert={!isOpen}>
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
