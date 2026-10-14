import { en } from "./en";
import { id } from "./id";
import type { Locale } from "./locales";

export { site } from "./site";
export * from "./locales";
export type { Dictionary, Product } from "./types";

const dictionaries = { id, en };

export const getDictionary = (locale: Locale) => dictionaries[locale];
