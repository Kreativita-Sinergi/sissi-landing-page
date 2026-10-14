import { cn } from "./cn";

type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  className?: string;
};

/** Judul section: label kecil bergaris, judul besar, paragraf pendek opsional. */
export function SectionHeader({ eyebrow, title, body, dark = false, className }: Props) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p
        className={cn(
          "flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] uppercase",
          dark ? "text-brand" : "text-brand-deep",
        )}
      >
        <span aria-hidden className="h-px w-6 bg-current" />
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-3xl leading-[1.12] font-bold tracking-[-0.025em] text-balance sm:text-4xl",
          dark ? "text-on-dark" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p className={cn("mt-4 text-base leading-relaxed text-pretty sm:text-lg", dark ? "text-on-dark-muted" : "text-muted")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
