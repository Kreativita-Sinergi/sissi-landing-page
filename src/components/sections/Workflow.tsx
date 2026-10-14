import { workflow } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Workflow() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={workflow.eyebrow} title={workflow.title} />
        <ol className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.steps.map((s, i) => (
            <li key={s.title} className="border-t-2 border-line-strong pt-5 first:border-brand">
              <h3 className="text-lg font-bold tracking-[-0.01em]">
                <span className="mr-2 text-brand-deep tabular-nums">{i + 1}.</span>
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
