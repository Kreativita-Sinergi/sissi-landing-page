import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Services({ t }: { t: Dictionary["services"] }) {
  return (
    <section id="layanan" className="bg-ink py-20 text-on-dark sm:py-28">
      <Container>
        <SectionHeader dark eyebrow={t.eyebrow} title={t.title} body={t.body} />

        <div className="mt-14 hidden grid-cols-[minmax(0,15rem)_1fr_1.15fr] gap-10 pb-3 text-xs font-semibold text-on-dark-muted lg:grid">
          <span />
          <span>{t.problemLabel}</span>
          <span>{t.solutionLabel}</span>
        </div>

        <ul className="mt-10 border-t border-white/15 lg:mt-0">
          {t.items.map((s) => (
            <li
              key={s.name}
              className="grid gap-3 border-b border-white/15 py-8 lg:grid-cols-[minmax(0,15rem)_1fr_1.15fr] lg:gap-10"
            >
              <h3 className="text-xl font-bold tracking-[-0.02em] sm:text-2xl">{s.name}</h3>
              <p className="text-[17px] leading-relaxed text-on-dark-muted">{s.problem}</p>
              <div>
                <p className="flex gap-2.5 text-[17px] leading-relaxed">
                  <ArrowRight aria-hidden className="mt-1.5 size-4 shrink-0 text-brand" />
                  {s.solution}
                </p>
                {s.example ? (
                  <a
                    href={s.example.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 ml-6.5 block text-sm leading-relaxed text-on-dark-muted transition-colors hover:text-brand"
                  >
                    <span className="font-semibold text-on-dark">{t.exampleLabel}:</span> {s.example.label}
                    <ArrowUpRight className="ml-1 inline size-3.5 align-[-2px]" />
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-3xl leading-relaxed text-on-dark-muted">
          {t.bundle.text}{" "}
          <a
            href="#kontak"
            className="font-semibold whitespace-nowrap text-brand underline decoration-brand/40 decoration-2 underline-offset-4 hover:decoration-brand"
          >
            {t.bundle.cta} →
          </a>
        </p>
      </Container>
    </section>
  );
}
