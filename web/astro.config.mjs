import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { lastmodFor, shouldBeInSitemap } from './src/lib/seo.mjs';

// ponytail: GitHub Pages has no server redirects, so Astro emits meta-refresh pages instead of 301s.
const LANGS = ['es', 'de', 'fr', 'pt', 'hi', 'ru', 'ja', 'ko', 'zh', 'ar'];
const REMOVED_PROVIDERS = ['github_models', 'lambda_ai', 'hyperbolic', 'chutes_ai', 'modal', 'together_ai', 'perplexity', 'deepinfra', 'anthropic', 'lepton_ai', 'hanooman', '01_ai', 'moonshot_kimi', 'friendli_ai', 'infermatic_ai', 'parasail', 'ai71', 'aleph_alpha', 'core42', 'poly_ai', 'silo_ai', 'sb_intuitions'];
const REMOVED_COMPARES = ['github_models-vs-groq', 'together_ai-vs-groq'];
const redirects = {};
for (const pre of ['', ...LANGS.map((l) => `/${l}`)]) {
  for (const p of REMOVED_PROVIDERS) redirects[`${pre}/providers/${p}`] = `${pre}/`;
  for (const c of REMOVED_COMPARES) redirects[`${pre}/compare/${c}`] = `${pre}/providers/groq/`;
}

export default defineConfig({
  redirects,
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
