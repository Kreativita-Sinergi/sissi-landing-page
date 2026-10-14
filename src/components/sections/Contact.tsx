"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contact, site } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/components/shared/cn";

const f = contact.form;
type Errors = Partial<Record<"name" | "services" | "message", string>>;

function Chip({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
        selected ? "border-ink bg-ink text-on-dark" : "border-line-strong bg-surface text-ink hover:border-ink",
      )}
    >
      {children}
    </button>
  );
}

function Label({ htmlFor, children, extra }: { htmlFor?: string; children: React.ReactNode; extra?: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 flex items-baseline gap-2 text-sm font-semibold">
      {children}
      {extra ? <span className="text-xs font-normal text-faint">{extra}</span> : null}
    </label>
  );
}

const fieldClass =
  "w-full rounded-xl border border-line-strong bg-surface px-4 py-3 text-base text-ink placeholder:text-faint transition-colors focus:border-ink focus:outline-none aria-invalid:border-brand-deep";

/** Formulir tanpa server: menyusun pesan lalu membuka WhatsApp atau aplikasi email. */
export function Contact() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const toggle = (s: string) => setPicked((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const validate = (): boolean => {
    const next: Errors = {};
    if (!name.trim()) next.name = f.errors.name;
    if (picked.length === 0) next.services = f.errors.services;
    if (message.trim().length < 10) next.message = f.errors.message;
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) document.getElementById(`kontak-${first}`)?.focus();
    return !first;
  };

  const compose = () => {
    const t = f.template;
    const lines = [
      t.greeting,
      "",
      `${t.name}: ${name.trim()}`,
      business.trim() ? `${t.business}: ${business.trim()}` : null,
      `${t.services}: ${picked.join(", ")}`,
      budget ? `${t.budget}: ${budget}` : null,
      "",
      `${t.message}:`,
      message.trim(),
    ];
    return lines.filter((l) => l !== null).join("\n");
  };

  const send = (via: "wa" | "mail") => {
    if (!validate()) return;
    const text = compose();
    if (via === "wa") {
      window.open(`${site.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    } else {
      window.open(`${site.mailUrl}?subject=${encodeURIComponent(f.emailSubject)}&body=${encodeURIComponent(text)}`, "_self");
    }
    setSent(true);
  };

  return (
    <section id="kontak" className="border-t border-line bg-surface py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
        <div>
          <SectionHeader eyebrow={contact.eyebrow} title={contact.title} body={contact.body} />
          <ul className="mt-10 border-t border-line">
            {contact.direct.map((d) => (
              <li key={d.label} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
                <span className="font-mono text-[11px] tracking-[0.12em] text-faint uppercase">{d.label}</span>
                {d.href ? (
                  <a
                    href={d.href}
                    {...(d.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex items-center gap-1 text-right font-semibold break-all hover:text-brand-deep"
                  >
                    {d.value}
                    <ArrowUpRight className="size-3.5 shrink-0" />
                  </a>
                ) : (
                  <span className="text-right font-semibold">{d.value}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{contact.note}</p>
        </div>

        <form
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            send("wa");
          }}
          className="space-y-7 rounded-2xl border border-line bg-paper p-5 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="kontak-name">{f.name.label}</Label>
              <input
                id="kontak-name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={f.name.placeholder}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "kontak-name-err" : undefined}
                className={fieldClass}
              />
              {errors.name ? (
                <p id="kontak-name-err" className="mt-1.5 text-sm text-brand-deep">
                  {errors.name}
                </p>
              ) : null}
            </div>
            <div>
              <Label htmlFor="kontak-business" extra={f.business.optional}>
                {f.business.label}
              </Label>
              <input
                id="kontak-business"
                autoComplete="organization"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder={f.business.placeholder}
                className={fieldClass}
              />
            </div>
          </div>

          <fieldset>
            <legend className="mb-2 flex items-baseline gap-2 text-sm font-semibold">
              {f.services.label}
              <span className="text-xs font-normal text-faint">{f.services.hint}</span>
            </legend>
            <div
              id="kontak-services"
              tabIndex={-1}
              className="flex flex-wrap gap-2 focus:outline-none"
              aria-describedby={errors.services ? "kontak-services-err" : undefined}
            >
              {f.services.options.map((o) => (
                <Chip key={o} selected={picked.includes(o)} onClick={() => toggle(o)}>
                  {o}
                </Chip>
              ))}
            </div>
            {errors.services ? (
              <p id="kontak-services-err" className="mt-1.5 text-sm text-brand-deep">
                {errors.services}
              </p>
            ) : null}
          </fieldset>

          <fieldset>
            <legend className="mb-2 flex items-baseline gap-2 text-sm font-semibold">
              {f.budget.label}
              <span className="text-xs font-normal text-faint">{f.budget.optional}</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {f.budget.options.map((o) => (
                <Chip key={o} selected={budget === o} onClick={() => setBudget(budget === o ? null : o)}>
                  {o}
                </Chip>
              ))}
            </div>
          </fieldset>

          <div>
            <Label htmlFor="kontak-message">{f.message.label}</Label>
            <textarea
              id="kontak-message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={f.message.placeholder}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "kontak-message-err" : undefined}
              className={cn(fieldClass, "resize-y leading-relaxed")}
            />
            {errors.message ? (
              <p id="kontak-message-err" className="mt-1.5 text-sm text-brand-deep">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-6 font-semibold text-on-brand transition-colors hover:bg-brand-press active:bg-brand-deep"
            >
              <MessageCircle className="size-4" />
              {f.sendWhatsapp}
            </button>
            <button
              type="button"
              onClick={() => send("mail")}
              className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 font-semibold text-ink transition-colors hover:border-ink"
            >
              <Mail className="size-4" />
              {f.sendEmail}
            </button>
          </div>
          <p aria-live="polite" className="text-sm text-muted empty:hidden">
            {sent ? f.sentNote : ""}
          </p>
        </form>
      </Container>
    </section>
  );
}
