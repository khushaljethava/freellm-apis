import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { lastmodFor, shouldBeInSitemap } from './src/lib/seo.mjs';

export default defineConfig({
  site: 'https://www.freellm.site',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
  integrations: [
    sitemap({
      // Never list a URL we ask robots not to index.
      filter: shouldBeInSitemap,
      // lastmod comes from the data that renders each page (provider verification date,
      // post update date), not from build time — a rebuild alone is not a content change.
      serialize: (item) => ({ ...item, lastmod: lastmodFor(new URL(item.url).pathname) }),
    }),
  ],
});
