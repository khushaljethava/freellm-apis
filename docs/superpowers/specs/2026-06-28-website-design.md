# freellm-apis Website Design Spec

**Date:** 2026-06-28
**Location:** `web/` folder in `freellm-apis` repo
**Hosted at:** freellm.site via Vercel

---

## Goal

A fast, mobile-friendly, AdSense-ready static website that presents the freellm-apis data (providers + models) with individual provider pages for SEO ad inventory. Clean/minimal style, client-side filtering, no backend.

---

## Tech Stack

- **Framework:** Astro (static output, `output: "static"`)
- **Styling:** Plain CSS (`global.css`) — no CSS framework
- **JS:** Vanilla JS only, for client-side filter/search
- **Fonts:** System font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- **Integrations:** `@astrojs/sitemap`
- **Data:** Read from `../data/providers.json` and `../data/models.json` at build time

---

## Pages

### `/` — Homepage
- Hero: site name, tagline, provider/model count (from data)
- Filter bar: buttons for "All", "Permanent Free", "Free Credits" + "No Card Only" toggle
- Permanent Free Tiers table
- Free Credits table
- AdSense slot: below hero, above tables
- Link to `/models/`

### `/providers/[slug]` — Provider Detail
- Slug = provider `id` from providers.json (e.g. `groq`, `together_ai`)
- Provider name, base URL (copyable), signup link
- Rate limits + credit amount if applicable
- Models table for that provider (model_id, context, modalities, rpm/rpd)
- Copy-paste code snippets (Python + curl)
- AdSense slot: below provider info, above models table
- Title: `{name} Free LLM API — Rate Limits, Models & Setup | freellm.site`
- Meta description: `{notes}. Base URL: {base_url}. {model_count} free models.`

### `/models/` — Model Browser
- Full model list across all providers
- Filter bar: filter by provider, modality
- Table: model_id, provider, context window, modalities, rpm, rpd
- AdSense slot: above table
- Title: `Free LLM Models — Browse {count} Models from {provider_count} Providers | freellm.site`

---

## Layout

### Header (sticky)
- Left: "freellm.site" wordmark (links to `/`)
- Right: "GitHub" link → repo

### Footer
- "Data updated regularly · Contribute on GitHub"
- Copyright

### Responsive
- Mobile: single column, tables scroll horizontally
- Desktop: max-width 1100px centered content

---

## Filter Bar (Client-side JS)

On homepage and `/models/`:
- Filter buttons toggle a `data-filter` attribute on `<tbody>` rows
- Filtered-out rows get `display: none` via CSS class `.hidden`
- No page reload, no framework
- Filters: free_type (`permanent` / `credits`), credit_card_required (`no` only)
- Filters are additive (AND logic)

---

## AdSense

- Script loaded once in `Base.astro` `<head>`
- Two ad slots per page max:
  - Slot 1: below hero / page header
  - Slot 2: below main content block
- AdSense publisher ID stored as Astro env var `PUBLIC_ADSENSE_ID`
- Slots render as standard responsive display ads

---

## SEO

- `@astrojs/sitemap` generates `/sitemap-index.xml`
- Each page has unique `<title>` and `<meta name="description">`
- Canonical URLs set via Astro built-in `site` config
- All content server-rendered at build time — no JS required for crawlers
- `robots.txt` allows all crawlers, points to sitemap

---

## File Structure

```
web/
  astro.config.mjs
  package.json
  src/
    layouts/
      Base.astro
    pages/
      index.astro
      models/
        index.astro
      providers/
        [slug].astro
    components/
      ProviderTable.astro
      FilterBar.astro
    styles/
      global.css
  public/
    robots.txt
    favicon.svg
```

---

## Build & Deploy

- `cd web && npm run build` outputs to `web/dist/`
- Vercel root directory: `web/`
- Build command: `npm run build`
- Output dir: `dist`
- Environment variable: `PUBLIC_ADSENSE_ID` (set in Vercel dashboard)
- Domain: freellm.site → Vercel project
