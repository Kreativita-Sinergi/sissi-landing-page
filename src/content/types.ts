import type { id } from "./id";

export type Product = {
  id: string;
  name: string;
  domain: string;
  href: string;
  /** Slogan asli produk: tidak diterjemahkan. */
  tagline: string;
  body: string;
  points: string[];
  audience: string;
  badge: string;
  cta: string;
  visual: { kind: "screen"; src: string; alt: string; width: number; height: number; tone: "light" | "yellow" };
};

/** Satu bagian halaman legal; `note` = kalimat dengan satu tautan di tengahnya. */
export type LegalSection = {
  title: string;
  body: string[];
  note?: { before: string; label: string; href: string; after: string };
};

export type WorkTone = "sand" | "yellow" | "dark";

/** Bentuk kamus mengikuti bahasa bawaan (id); bahasa lain wajib berbentuk sama. */
export type Dictionary = typeof id;
