// The locales Rosey builds translated copies of the site for. Adding one here also needs
// `--locales` in .cloudcannon/postbuild, a `data_config.locales_<code>` entry and a
// `blog_<code>` collection in cloudcannon.config.yml, and a src/content/blog_<code>/ dir.
export const defaultLocale = "en";

// blogCollection: whole articles are per-locale content files, not Rosey keys.
export const locales = {
  fr: { label: "FR", blogCollection: "blog_fr", dateLocale: "fr-FR" },
  de: { label: "DE", blogCollection: "blog_de", dateLocale: "de-DE" },
} as const;

export type Locale = keyof typeof locales;

export const localeCodes = Object.keys(locales) as Locale[];

// English is served at the site root, not /en/ — `rosey build` runs with
// --default-language-at-root. The locale picker depends on this.
export const defaultLanguageAtRoot = true;

export const defaultBlogCollection = "blog";
export const defaultDateLocale = "en-US";

export type BlogCollection =
  | typeof defaultBlogCollection
  | (typeof locales)[Locale]["blogCollection"];

export function blogCollectionFor(locale?: string): BlogCollection {
  if (!locale || !(locale in locales)) return defaultBlogCollection;
  return locales[locale as Locale].blogCollection;
}

export function dateLocaleFor(locale?: string): string {
  if (!locale || !(locale in locales)) return defaultDateLocale;
  return locales[locale as Locale].dateLocale;
}
