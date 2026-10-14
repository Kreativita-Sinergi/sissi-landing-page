import { about } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function About() {
  return (
    <section id="tentang" className="bg-sand py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
            {about.facts.map((f) => (
              <div key={f.label} className="bg-paper p-4">
                <dt className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">{f.label}</dt>
                <dd className="mt-1.5 text-sm leading-snug font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="space-y-0 self-end">
          {about.principles.map((p) => (
            <li key={p.title} className="border-t border-line-strong py-7 last:border-b">
              <h3 className="text-xl font-bold tracking-[-0.015em]">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
