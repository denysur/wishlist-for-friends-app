import { Locale } from "@/types";

export const fallbackLng = "ua";
export const languages: Locale[] = [fallbackLng, "en", "ru"];
export const defaultNS = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
