import { ArrowRight } from "lucide-react";
import { services } from "@/constants/content";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Services() {
  return (
    <section id="layanan" className="bg-ink py-20 text-on-dark sm:py-28">
      <Container>
        <SectionHeader dark eyebrow={services.eyebrow} title={services.title} body={services.body} />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s, i) => (
            <li key={s.title} className="bg-ink p-7">
              <p className="font-mono text-xs text-brand">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-bold tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-on-dark-muted">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-on-dark-muted">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 rounded-2xl bg-brand p-7 text-ink sm:p-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium tracking-[0.14em] uppercase">{services.bundle.label}</p>
            <h3 className="mt-3 text-2xl leading-tight font-bold tracking-[-0.02em] text-balance sm:text-3xl">
              {services.bundle.title}
            </h3>
            <p className="mt-3 leading-relaxed text-ink/80">{services.bundle.body}</p>
          </div>
          <ButtonLink href="#kontak" variant="dark" className="self-start lg:self-end">
            {services.bundle.cta}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
