export const LOCALES = ["en", "fr"] as const;
export type Locale = typeof LOCALES[number];
export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(v: string | undefined): v is Locale {
  return !!v && LOCALES.includes(v as Locale);
}
