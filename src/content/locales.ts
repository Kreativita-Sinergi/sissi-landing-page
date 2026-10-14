// Daftar bahasa & alamat (tanpa kamus, aman diimpor komponen client).
export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

/** Alamat beranda per bahasa: bahasa bawaan tanpa awalan. */
export const homePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

export const localeLabel: Record<Locale, string> = { id: "ID", en: "EN" };
export const localeName: Record<Locale, string> = { id: "Bahasa Indonesia", en: "English" };
export const htmlLang: Record<Locale, string> = { id: "id", en: "en" };
export const ogLocale: Record<Locale, string> = { id: "id_ID", en: "en_US" };
