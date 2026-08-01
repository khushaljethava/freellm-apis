import { DEFAULT_LOCALE, LOCALE_CODES, type Locale } from './config';
import en from './en';
import es from './es';
import de from './de';

// Add a locale here once its catalogue file exists. A locale absent from this map
// is never routed and never appears in hreflang — deliberate: an untranslated page
// under /xx/ is duplicate content and hurts more than it helps.
const catalogues: Partial<Record<Locale, typeof en>> = { en, es, de };

/** Locales that actually have a translation, in LOCALE_CODES order. */
export const TRANSLATED_LOCALES = LOCALE_CODES.filter(l => l in catalogues);

export function hasTranslation(locale: Locale): boolean {
  return locale in catalogues;
}

/** Strings for a locale. The fallback is a build-time safety net, not a feature. */
export function useTranslations(locale: Locale) {
  return catalogues[locale] ?? catalogues[DEFAULT_LOCALE]!;
}

/** getStaticPaths params for pages that exist in every translated locale. */
export const translatedPaths = () =>
  TRANSLATED_LOCALES.map(lang => ({
    params: { lang: lang === DEFAULT_LOCALE ? undefined : lang },
  }));
