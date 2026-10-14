import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();

/** Warna untuk ImageResponse; harus sama dengan @theme di globals.css. */
export const brand = {
  orange: "#f1702c",
  ink: "#1f2326",
  paper: "#fbfaf8",
  muted: "#5b6064",
  line: "#e6e2dc",
} as const;

/** Font OFL (Plus Jakarta Sans) di src/assets/fonts. */
export async function ogFonts() {
  const [regular, bold] = await Promise.all([
    readFile(join(root, "src/assets/fonts/PlusJakartaSans-500.woff")),
    readFile(join(root, "src/assets/fonts/PlusJakartaSans-800.woff")),
  ]);
  return [
    { name: "Jakarta", data: regular, weight: 500 as const, style: "normal" as const },
    { name: "Jakarta", data: bold, weight: 800 as const, style: "normal" as const },
  ];
}

/** Berkas di /public sebagai data URL (untuk <img> di ImageResponse). */
export async function publicImage(path: string, mime: string) {
  const data = await readFile(join(root, "public", path));
  return `data:${mime};base64,${data.toString("base64")}`;
}
