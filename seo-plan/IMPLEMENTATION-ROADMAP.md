# Implementation Roadmap — freellm.site

Tasks are ordered by dependency and ROI. Each maps back to an audit finding (🔴/🟠/🟡).

## Phase 1 — Foundation (weeks 1–4)
_Goal: fix what's cheap and high-leverage. All are single-template or config edits._

| # | Task | Audit ref | Effort | Owner |
|---|------|-----------|--------|-------|
| 1 | Add static 1200×630 `/og-default.png` fallback in `Base.astro` (replace favicon.svg og:image) | 🔴 #1 | 30 min | dev |
| 2 | Add `BreadcrumbList` + `SoftwareApplication`/`Offer` JSON-LD to `providers/[slug].astro` | 🟠 #2 | 2 h | dev |
| 3 | Add `Organization` + `sameAs` (GitHub) schema to homepage | 🟢 | 30 min | dev |
| 4 | Vercel trailing-slash 301 (non-slash → slash) | 🟡 #5 | 30 min | dev |
| 5 | Add `<lastmod>` to sitemap (use existing `blog.json` lastUpdated + provider data date) | 🟡 #8 | 1 h | dev |
| 6 | Verify GSC + analytics; submit sitemap; set up Ahrefs/GSC rank baseline | — | 1 h | seo |
| 7 | Add `max-image-preview:large` robots meta sitewide | 🟢 | 15 min | dev |

**Exit check:** Rich Results Test passes on a `/providers/*` URL; LinkedIn Post Inspector renders an OG card.

## Phase 2 — Expansion (weeks 5–12)
_Goal: kill thin content + launch the content cluster._

| # | Task | Audit ref | Effort |
|---|------|-----------|--------|
| 8 | Upgrade provider template: per-provider prose (setup, quirks, code snippet, when-to-use, last-verified date) → >60% unique across 105 pages | 🟠 #4 | ongoing, batch of ~15/wk |
| 9 | Add "related providers" + "related guides" internal-link blocks to provider template | 🟠 #3 | 3 h |
| 10 | Link blog posts + top providers from homepage (surface money pages) | 🟠 #3 | 2 h |
| 11 | Expand top 3 blog posts to 1,200–1,800w with 2026 comparison tables | 🟡 #7 | 2 days |
| 12 | Publish 8 new spoke articles (see CONTENT-CALENDAR.md) | Pillar 2 | 2/wk |
| 13 | Begin link acquisition: submit to awesome-lists, dev.to cross-posts, HN/Reddit launch | Pillar 3 | ongoing |

**Exit check:** provider-page uniqueness >60%; first 20 referring domains; "crawled – not indexed" count in GSC shrinking.

## Phase 3 — Scale (weeks 13–24)
| # | Task | Effort |
|---|------|--------|
| 14 | Provider deep-dive articles for top-10 highest-search providers (Groq, Gemini, Mistral…) | 1/wk |
| 15 | Programmatic comparison pages: `/compare/[a]-vs-[b]` for top provider pairs (quality-gated, real data) | dev + content |
| 16 | GEO pass: quotable stats, data tables, update-date stamps on all guides | ongoing |
| 17 | Sustained outreach: guest posts, "cited source" link building, newsletter | ongoing |
| 18 | CWV field-data check (CrUX/GSC); fix any regressions from ad slots | 1 day |

**Exit check:** top-10 for 3+ head terms; DR 10+; AI-citation tracking live.

## Phase 4 — Authority (months 7–12)
| # | Task |
|---|------|
| 19 | Original research: quarterly "State of Free LLM APIs" report (link magnet, first-party data) |
| 20 | Author entities: Person schema + bios for blog authors (E-E-A-T) |
| 21 | Automate rate-limit freshness (data pipeline → auto-update provider pages + lastmod) |
| 22 | Digital PR around the quarterly report; pursue tier-1 tech-media mentions |
| 23 | Continuous optimization: prune/merge underperformers, refresh decayed rankings |

**Exit check:** DR 20+; recurring Discover/AI-Overview citations; category-authority positioning.

## Risks & mitigation
- **Thin-content demotion** (105 templated pages) → Phase 2 task #8 is non-negotiable; don't scale programmatic pages (#15) until uniqueness is fixed.
- **DR stays flat** → if referring domains lag at month 3, escalate link acquisition (original research earlier).
- **AI Overviews eat clicks** → track AI citations as a first-class KPI, not just clicks; the directory's freshness is a citation advantage.
