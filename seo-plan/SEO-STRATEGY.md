# SEO Strategy — freellm.site

_Derived from the 2026-07-21 site audit. Health score 76/100._

## Situation (baseline)

| Signal | Value | Meaning |
|--------|-------|---------|
| Domain Rating (Ahrefs) | **0** | Brand-new domain, ~no backlinks. Rankings are link-gated. |
| Indexed URLs | 118 | 105 provider pages, 10 blog posts, homepage, /models, 6 core/legal |
| Technical foundation | Strong | HTTPS, HSTS, brotli, sitemap, canonicals, clean robots — **not the bottleneck** |
| Content depth | Mixed | Homepage 2,389w (strong); provider pages ~449w (thin at scale) |
| Schema coverage | Partial | Homepage + blog good; **105 provider pages = 0 schema** |

**Core diagnosis:** The build quality is already good. Two things gate growth — (1) **zero domain authority** (no links), and (2) **thin, unschema'd provider pages** that make up 89% of the site. The strategy is therefore *earn links + deepen the provider layer*, not *fix the plumbing*.

## Positioning

**Entity:** "The free LLM API directory." Own the head term cluster `free llm api` / `free llm api key` / `[provider] free tier` and the long tail of 105 provider names × intent modifiers (rate limits, no credit card, openai-compatible, pricing).

**Moat:** The data is open-source and community-maintained (GitHub repo). Lean into *freshness* (rate limits change monthly) and *completeness* (105 providers vs competitors' 20–30) — both are things AI answer engines and humans reward and competitors can't easily copy.

## Three strategic pillars

### Pillar 1 — Deepen the provider layer (product pages)
The 105 provider pages are the ranking surface for the highest-intent queries. Today they're templated stubs. Make each a genuinely useful reference: live rate limits, a copy-paste code snippet, base URL, model list, "when to use / avoid," and last-verified date. Add `BreadcrumbList` + `SoftwareApplication`/`Offer` schema via one template edit.

### Pillar 2 — Content hub for the head terms (blog)
Expand from 10 posts to a hub-and-spoke topic cluster around "free LLM APIs." Pillar page (homepage/`/models`) links to spokes (comparisons, use-case guides, provider deep-dives); spokes link back and to relevant provider pages. Targets featured snippets + AI Overview citations.

### Pillar 3 — Link acquisition (the DR-0 fix)
Nothing ranks on a DR-0 domain without links. This is the highest-leverage external work: GitHub repo → site funnel, dev-community distribution (Reddit r/LocalLLaMA, Hacker News, dev.to), "awesome-list" inclusions, and being the citable source other blogs link when they mention a provider's free tier.

## Success criteria per phase
- **Phase 1 (wk 1–4):** schema + OG image live; GSC/analytics clean; provider template upgraded.
- **Phase 2 (wk 5–12):** 105 provider pages > 60% unique content; 8 new spoke articles; first 20 referring domains.
- **Phase 3 (wk 13–24):** ranking top-10 for 3+ head terms; DR 10+; AI-citation appearances tracked.
- **Phase 4 (mo 7–12):** category authority — DR 20+, recurring Discover/AI-Overview citations, provider pages ranking for own-brand + modifier queries.

See `IMPLEMENTATION-ROADMAP.md` for tasks, `CONTENT-CALENDAR.md` for topics, `COMPETITOR-ANALYSIS.md` for the gap map, `SITE-STRUCTURE.md` for architecture.

## KPI targets

| Metric | Baseline (Jul 2026) | 3 Month | 6 Month | 12 Month |
|--------|--------------------|---------|---------|----------|
| Organic clicks / mo (GSC) | ~0 (new) | 500 | 3,000 | 15,000 |
| Ranking keywords (top 20) | <10 | 150 | 600 | 2,000 |
| Domain Rating | 0 | 8 | 15 | 25 |
| Referring domains | ~1 | 20 | 60 | 150 |
| Indexed pages | 118 | 130 | 160 | 200 |
| Provider pages > 60% unique | 0% | 100% | 100% | 100% |
| Core Web Vitals (field) | untracked | all "Good" | all "Good" | all "Good" |
| AI-citation appearances | untracked | baseline set | +growing | tracked KPI |

_Targets assume consistent execution; a DR-0 domain realistically sees meaningful organic traffic at months 4–6 as links compound._
