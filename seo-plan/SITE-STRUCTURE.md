# Site Structure — freellm.site

## Current architecture (118 URLs)
```
/                          Home — pillar page, provider directory (2,389w, WebSite+FAQPage schema)
├── /models/               Models directory
├── /providers/[slug]/     × 105 provider pages  ← 89% of site, thin, NO schema
├── /blog/                 Blog index
│   └── /blog/[slug]/       × 10 posts (BlogPosting schema)
├── /about/  /contact/
└── /privacy/ /terms/ /cookies/ /404
```

## Target architecture (add, don't restructure)
```
/                          Pillar — link prominently to top providers + top guides
├── /models/
├── /providers/[slug]/     + BreadcrumbList + SoftwareApplication/Offer schema
│                          + related-providers block + related-guides block
│                          + >60% unique content per page
├── /compare/[a]-vs-[b]/   NEW (Phase 3) — comparison pages, quality-gated
├── /blog/[slug]/          + expanded cluster (see CONTENT-CALENDAR.md)
│                          + author bylines w/ Person schema (Phase 4)
└── /reports/              NEW (Phase 4) — quarterly "State of Free LLM APIs" (link magnet)
```

## Internal linking model (hub-and-spoke)
```
        Homepage (pillar)
        │   ▲        │   ▲
        ▼   │        ▼   │
  Blog spokes ◄──► Provider pages ◄──► /compare pages
        │                │
        └──── all link up to pillar + laterally to relevant nodes ────┘
```
Rules:
- Homepage links to top ~15 providers + all pillar guides (currently under-linked → audit #3).
- Each provider page: 3–5 links (related providers, relevant guides, comparisons).
- Each blog post: link to pillar + 2–3 provider pages named in the text.
- Breadcrumbs on every provider/blog page (Home › Section › Page).

## Schema-per-page-type plan
| Page type | Schema |
|-----------|--------|
| Homepage | WebSite, Organization+sameAs, (FAQPage — keep, low value post-2026) |
| Provider page | BreadcrumbList, SoftwareApplication or Offer, WebPage |
| Blog post | BlogPosting, Person (author), Organization, BreadcrumbList |
| Compare page | BreadcrumbList, WebPage (+ ItemList of the two providers) |
| Models | CollectionPage, ItemList |
| Report | Article / Dataset (if first-party data) |

## URL rules
- Enforce trailing-slash canonical with a 301 (audit #5).
- Keep flat `/providers/[slug]/` — good as-is; do not nest by category (dilutes the flat authority).
- `<lastmod>` in sitemap driven by provider data-refresh date + blog `lastUpdated` (audit #8).
