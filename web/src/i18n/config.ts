export const DEFAULT_LOCALE = 'en';

// name = endonym (shown in the switcher), dir drives the <html dir> attribute
export const LOCALES = {
  en: { name: 'English', dir: 'ltr' },
  es: { name: 'Español', dir: 'ltr' },
  de: { name: 'Deutsch', dir: 'ltr' },
  fr: { name: 'Français', dir: 'ltr' },
  pt: { name: 'Português', dir: 'ltr' },
  hi: { name: 'हिन्दी', dir: 'ltr' },
  ru: { name: 'Русский', dir: 'ltr' },
  ja: { name: '日本語', dir: 'ltr' },
  ko: { name: '한국어', dir: 'ltr' },
  zh: { name: '中文', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' },
} as const;

export type Locale = keyof typeof LOCALES;
export const LOCALE_CODES = Object.keys(LOCALES) as Locale[];
export const NON_DEFAULT_LOCALES = LOCALE_CODES.filter(l => l !== DEFAULT_LOCALE);

/** Params for getStaticPaths: the default locale lives at the root (no prefix). */
export const localePaths = () => [
  { params: { lang: undefined } },
  ...NON_DEFAULT_LOCALES.map(lang => ({ params: { lang } })),
];

/** Reads the locale out of the [...lang] rest param. */
export function localeOf(lang?: string): Locale {
  return (lang && (LOCALE_CODES as string[]).includes(lang) ? lang : DEFAULT_LOCALE) as Locale;
}

/** Prefixes a site-root path with the locale. `/blog/` + es -> `/es/blog/` */
export function localePath(path: string, locale: Locale): string {
  const p = path.startsWith('/') ? path : `/${path}`;
  return locale === DEFAULT_LOCALE ? p : `/${locale}${p}`;
}

/** Strips the locale prefix off a pathname. `/es/blog/` -> `/blog/` */
export function stripLocale(pathname: string): string {
  const m = pathname.match(/^\/([a-z]{2})(\/|$)/);
  return m && (LOCALE_CODES as string[]).includes(m[1] as Locale) && m[1] !== DEFAULT_LOCALE
    ? pathname.slice(3) || '/'
    : pathname;
}
