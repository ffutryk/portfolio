import { ui, defaultLang, type UIContent } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t<K extends keyof UIContent>(key: K): UIContent[K] {
    return (ui[lang][key] ?? ui[defaultLang][key]) as UIContent[K];
  };
}
