// Build-time Markdown for blog posts (data/blog*.json `content`). Ships zero JS.
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import { DEFAULT_LOCALE, type Locale } from '../i18n/config';
import { postHref } from '../i18n/posts';

const processor = await createMarkdownProcessor({
  gfm: true,
  shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
});

export async function renderPost(markdown: string, locale: Locale) {
  const { code, metadata } = await processor.render(markdown);
  const html = code
    // Only external links leave the site in a new tab.
    .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener"')
    // Posts are written with English paths; keep translated readers in their language.
    .replace(/<a href="\/blog\/([^/"]+)\/"/g, (_m, slug) => `<a href="${postHref(locale, slug)}"`)
    .replace(/<a href="\/(providers|compare|models)\//g, (_m, seg) =>
      `<a href="${locale === DEFAULT_LOCALE ? '' : `/${locale}`}/${seg}/`);
  return { html, headings: metadata.headings.filter(h => h.depth === 2) };
}
