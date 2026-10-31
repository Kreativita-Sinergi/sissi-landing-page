import { ArrowLeft } from "lucide-react";
import { getDictionary, homePath, privacyPath, type Locale } from "@/content";
import { Footer } from "@/components/layout/Footer";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

/** Halaman kebijakan privasi satu bahasa: kepala sederhana, teks legal, footer. */
export function PrivacyPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const p = t.privacy;
  const home = homePath(locale);
  return (
    <>
      <header className="border-b border-line bg-paper">
        <Container className="flex h-16 items-center justify-between gap-6">
          <a href={home} className="shrink-0">
            <Logo className="h-7 w-auto" />
          </a>
          <LanguageSwitch current={locale} label={t.nav.language} pathFor={privacyPath} />
        </Container>
      </header>

      <main className="bg-paper py-16 sm:py-24">
        <Container>
          <article className="max-w-prose">
            <a
              href={home}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              {p.back}
            </a>
            <p className="mt-10 text-sm font-semibold text-brand-deep">{p.eyebrow}</p>
            <h1 className="mt-3 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.6rem]">
              {p.title}
            </h1>
            <p className="mt-4 font-mono text-xs text-faint">{p.updated}</p>
            <p className="mt-8 text-lg leading-relaxed text-pretty text-muted">{p.intro}</p>

            {p.sections.map((s) => (
              <section key={s.title} className="mt-12 border-t border-line pt-8">
                <h2 className="text-xl font-bold tracking-[-0.015em]">{s.title}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-pretty text-muted">
                  {s.body.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                  {s.note ? (
                    <p className="text-ink">
                      {s.note.before}
                      <a
                        href={s.note.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-brand-deep underline underline-offset-2 hover:text-ink"
                      >
                        {s.note.label}
                      </a>
                      {s.note.after}
                    </p>
                  ) : null}
                </div>
              </section>
            ))}
          </article>
        </Container>
      </main>

      <Footer t={t.footer} home={home} />
    </>
  );
}
