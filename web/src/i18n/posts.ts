import { DEFAULT_LOCALE, type Locale } from './config';
import { TRANSLATED_LOCALES } from './ui';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  author?: string;
  tags: string[];
  content: string;
  image?: string;
  noindex?: boolean;
  faq?: { q: string; a: string }[];
}

// Single source of truth shared with the sitemap filter (English post's flag, all locales).
export { isPostIndexable } from '../lib/seo.mjs';

// One file per post: data/blog/<locale>/<slug>.json. English is the source; a translation
// uses the same slug. Vite resolves this glob at build time; a locale with no folder simply
// has no posts, and none get routed for it.
const files = import.meta.glob<{ default: Post }>('../../../data/blog/*/*.json', { eager: true });

const byLocale: Partial<Record<Locale, Post[]>> = {};
for (const [path, mod] of Object.entries(files)) {
  const code = path.match(/blog\/([a-z]{2})\/[^/]+\.json$/)?.[1] as Locale | undefined;
  if (code) (byLocale[code] ??= []).push(mod.default);
}
// Newest first; slug breaks ties so the order never depends on the filesystem.
for (const list of Object.values(byLocale)) {
  list!.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
}

/** Posts available in a locale. Empty when nothing is translated yet. */
export function postsFor(locale: Locale): Post[] {
  return byLocale[locale] ?? [];
}

export function postIn(locale: Locale, slug: string): Post | undefined {
  return postsFor(locale).find(p => p.slug === slug);
}

/** Locales with at least one post — an empty blog index is a thin page, so skip it. */
export const blogIndexPaths = () =>
  TRANSLATED_LOCALES.filter(l => postsFor(l).length > 0).map(locale => ({
    params: { lang: locale === DEFAULT_LOCALE ? undefined : locale },
    props: { blogLocales: TRANSLATED_LOCALES.filter(l => postsFor(l).length > 0) },
  }));

/**
 * Href for a post in a locale, falling back to English PER POST.
 * A locale-level fallback ("this language has some posts, so link everything under /xx/")
 * breaks the moment a language is partially translated: it links to slugs that were
 * never built. Resolve each slug on its own.
 */
export function postHref(locale: Locale, slug: string): string {
  const lang = postIn(locale, slug) ? locale : DEFAULT_LOCALE;
  return lang === DEFAULT_LOCALE ? `/blog/${slug}/` : `/${lang}/blog/${slug}/`;
}

/** Locales a given post is translated into — drives that page's hreflang set. */
export function localesForPost(slug: string): Locale[] {
  return TRANSLATED_LOCALES.filter(l => postIn(l, slug));
}

/** getStaticPaths for /blog/[slug]/: only (locale, slug) pairs that actually exist. */
export const postPaths = () =>
  TRANSLATED_LOCALES.flatMap(locale =>
    postsFor(locale).map(post => ({
      params: { lang: locale === DEFAULT_LOCALE ? undefined : locale, slug: post.slug },
      props: { post, locale },
    }))
  );
