import { workflow } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Workflow() {
  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={workflow.eyebrow} title={workflow.title} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {workflow.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4 bg-surface p-5 sm:block sm:p-6 lg:min-h-56">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-xs text-on-dark">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-[-0.01em] sm:mt-6">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
