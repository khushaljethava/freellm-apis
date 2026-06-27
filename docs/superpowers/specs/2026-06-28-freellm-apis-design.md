# freellm-apis Design Spec

**Date:** 2026-06-28
**Repo name:** `freellm-apis`
**Hosted at:** freellm.site

---

## Goal

A GitHub repo that is the most complete, up-to-date, and beginner-friendly directory of every way to get free LLM API access — permanent free tiers and one-time/renewable credits. Targets both beginners (what is an API key?) and developers (give me the base URL and model ID now).

---

## What Makes This Different from the Original

1. **More providers** — covers providers the original misses (Together AI, Fireworks, Perplexity, Hyperbolic, etc.)
2. **Freshness signal** — every provider row has a `last_verified` date; README auto-generated from JSON so data updates never require hand-editing markdown
3. **Credit-amount transparency** — for credit-based providers, shows exact USD amount, expiry, and whether card is required

---

## Data Layer

### `data/providers.json`

Array of provider objects. Fields:

| Field | Type | Description |
|---|---|---|
| `id` | string | Slug, e.g. `groq` |
| `name` | string | Display name |
| `base_url` | string | OpenAI-compatible base URL |
| `signup_url` | string | Direct link to get API key |
| `credit_card_required` | string | `"no"` / `"registration"` / `"phone"` / `"yes"` |
| `free_type` | string | `"permanent"` or `"credits"` |
| `credit_amount_usd` | number or null | USD value of free credits (null if permanent) |
| `credit_expiry` | string or null | e.g. `"never"`, `"12 months"`, `"on use"` |
| `notes` | string | Any caveats |
| `last_verified` | string | ISO date, e.g. `"2026-06-28"` |

### `data/models.json`

Array of model objects. Fields:

| Field | Type | Description |
|---|---|---|
| `provider_id` | string | References `providers.json[].id` |
| `model_id` | string | Exact model string for API calls |
| `context_window` | number | Max tokens |
| `modalities` | string[] | e.g. `["text", "image", "code"]` |
| `rpm` | number or null | Requests per minute (free tier) |
| `rpd` | number or null | Requests per day (free tier) |
| `tpm` | number or null | Tokens per minute (free tier) |
| `deprecated` | boolean | Whether model is deprecated |

### `data/schema.md`

Documents every field with valid values and examples.

---

## README Structure

1. **Hero** — repo name, tagline, auto-injected stats (`X providers · Y models · last verified Z`)
2. **Why this repo** — 3 bullet points: completeness, freshness signal, beginner-friendly
3. **Quick Start (Beginners)** — what is an API key, 3 steps, Groq as default example
4. **Quick Start (Developers)** — curl + Python snippets, env var setup
5. **Permanent Free Tiers table** — columns: Provider, Models, Card?, Max Context, Modalities, Last Verified, Get Key
6. **Free Credits table** — columns: Provider, Credits (USD), Expiry, Card?, Models, Last Verified, Get Key
7. **Base URLs quick reference** — one-liner per provider
8. **Tool configs** — Claude Code, Cursor, Codex, Aider, Cline snippets
9. **Contributing** — how to add/update a provider (edit JSON, run script)

---

## Scripts

### `scripts/generate_readme.py`

- Reads `data/providers.json` + `data/models.json`
- Injects stats and tables between comment markers in `README.md`
- Markers: `<!-- BEGIN_STATS -->`, `<!-- BEGIN_PERMANENT -->`, `<!-- BEGIN_CREDITS -->`
- Run manually or via GitHub Actions on push to `data/`

---

## Repo Structure

```
freellm-apis/
  README.md
  data/
    providers.json
    models.json
    schema.md
  scripts/
    generate_readme.py
  CONTRIBUTING.md
  LICENSE
  .github/
    workflows/
      generate.yml
```

---

## SEO

- Repo name: `freellm-apis`
- GitHub description: "Free LLM APIs & AI API keys from 30+ providers. Groq, Mistral, GitHub Models, OpenRouter & more. Updated regularly."
- Topics: `free-llm-api`, `freellm`, `llm-api`, `free-ai-api`, `openai-compatible`
