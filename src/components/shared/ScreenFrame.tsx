import Image from "next/image";
import { cn } from "./cn";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** "tablet" = bingkai tebal gelap; "phone" = bingkai HP; "browser" = bilah alamat tipis. */
  kind?: "tablet" | "phone" | "browser";
  url?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/** Membingkai tangkapan layar asli. Bingkai sengaja polos: yang dipamerkan isinya. */
export function ScreenFrame({ src, alt, width, height, kind = "tablet", url, priority, sizes, className }: Props) {
  if (kind === "browser") {
    return (
      <figure className={cn("overflow-hidden rounded-xl border border-line bg-surface shadow-[0_1px_0_rgba(0,0,0,0.04)]", className)}>
        <div className="flex h-9 items-center gap-3 border-b border-line bg-sand px-3.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
            <span className="size-2.5 rounded-full bg-line-strong" />
          </span>
          {url ? <span className="truncate font-mono text-[11px] text-faint">{url}</span> : null}
        </div>
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} priority={priority} className="block h-auto w-full" />
      </figure>
    );
  }
  return (
    <figure
      className={cn(
        "bg-charcoal shadow-[0_30px_60px_-30px_rgba(31,35,38,0.45)]",
        kind === "phone" ? "rounded-[26px] p-[7px]" : "rounded-[22px] p-[9px]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        className={cn("block h-auto w-full", kind === "phone" ? "rounded-[20px]" : "rounded-[14px]")}
      />
    </figure>
  );
}
