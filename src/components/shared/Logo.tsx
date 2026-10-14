import Image from "next/image";
import { site } from "@/content";

/** Logo horizontal Sissi (ikon + "sissi"). `light` untuk latar gelap. */
export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Image
      src={light ? "/brand/sissi-logo-light.svg" : "/brand/sissi-logo.svg"}
      alt={site.brand}
      width={99}
      height={32}
      priority={!light}
      className={className}
    />
  );
}
