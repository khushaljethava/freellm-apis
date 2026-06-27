# freellm-apis Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a structured, machine-readable GitHub repo of every free LLM API — permanent tiers and credit-based — with auto-generated README tables and a freshness signal.

**Architecture:** JSON data files (`providers.json`, `models.json`) are the source of truth. A Python script reads them and injects tables into a README template using HTML comment markers. The README is committed alongside the data.

**Tech Stack:** Python 3.10+, stdlib only (`json`, `datetime`, `pathlib`). No third-party dependencies.

## Global Constraints

- Python stdlib only — no pip installs
- All dates in ISO format: `YYYY-MM-DD`
- `provider_id` in `models.json` must match `id` in `providers.json`
- README comment markers must not be modified by hand — script owns those sections
- Repo name: `freellm-apis`

---

### Task 1: Repo scaffold + providers data

**Files:**
- Create: `data/providers.json`
- Create: `data/schema.md`
- Create: `README.md` (template with markers, no tables yet)
- Create: `CONTRIBUTING.md`
- Create: `LICENSE` (MIT)

**Interfaces:**
- Produces: `data/providers.json` — array of provider objects consumed by Task 3

- [ ] **Step 1: Create `data/providers.json`**

```json
[
  {
    "id": "groq",
    "name": "Groq",
    "base_url": "https://api.groq.com/openai/v1",
    "signup_url": "https://console.groq.com/keys",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "30 RPM free tier",
    "last_verified": "2026-06-28"
  },
  {
    "id": "mistral",
    "name": "Mistral AI",
    "base_url": "https://api.mistral.ai/v1",
    "signup_url": "https://console.mistral.ai/api-keys",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Free tier with rate limits",
    "last_verified": "2026-06-28"
  },
  {
    "id": "github_models",
    "name": "GitHub Models",
    "base_url": "https://models.github.ai/inference",
    "signup_url": "https://github.com/marketplace/models",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Requires GitHub account",
    "last_verified": "2026-06-28"
  },
  {
    "id": "google_gemini",
    "name": "Google Gemini",
    "base_url": "https://generativelanguage.googleapis.com/v1beta",
    "signup_url": "https://aistudio.google.com/app/apikey",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "2M context on Gemini 1.5 Flash",
    "last_verified": "2026-06-28"
  },
  {
    "id": "cerebras",
    "name": "Cerebras",
    "base_url": "https://api.cerebras.ai/v1",
    "signup_url": "https://cloud.cerebras.ai/",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Very fast inference",
    "last_verified": "2026-06-28"
  },
  {
    "id": "cohere",
    "name": "Cohere",
    "base_url": "https://api.cohere.com/v2",
    "signup_url": "https://dashboard.cohere.com/api-keys",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Trial key, 20 calls/min",
    "last_verified": "2026-06-28"
  },
  {
    "id": "huggingface",
    "name": "Hugging Face",
    "base_url": "https://router.huggingface.co/v1",
    "signup_url": "https://huggingface.co/settings/tokens",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Free inference API, rate limited",
    "last_verified": "2026-06-28"
  },
  {
    "id": "nvidia_nim",
    "name": "NVIDIA NIM",
    "base_url": "https://integrate.api.nvidia.com/v1",
    "signup_url": "https://build.nvidia.com/settings/api-keys",
    "credit_card_required": "phone",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Phone verification required, 75+ models",
    "last_verified": "2026-06-28"
  },
  {
    "id": "cloudflare",
    "name": "Cloudflare Workers AI",
    "base_url": "https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run",
    "signup_url": "https://dash.cloudflare.com/profile/api-tokens",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "10,000 neurons/day free",
    "last_verified": "2026-06-28"
  },
  {
    "id": "sambanova",
    "name": "SambaNova",
    "base_url": "https://api.sambanova.ai/v1",
    "signup_url": "https://cloud.sambanova.ai/apis",
    "credit_card_required": "registration",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "Fast Llama inference",
    "last_verified": "2026-06-28"
  },
  {
    "id": "llm7",
    "name": "LLM7.io",
    "base_url": "https://api.llm7.io/v1",
    "signup_url": "https://token.llm7.io",
    "credit_card_required": "no",
    "free_type": "permanent",
    "credit_amount_usd": null,
    "credit_expiry": null,
    "notes": "No signup required for basic use",
    "last_verified": "2026-06-28"
  },
  {
    "id": "deepseek",
    "name": "DeepSeek",
    "base_url": "https://api.deepseek.com/v1",
    "signup_url": "https://platform.deepseek.com/api_keys",
    "credit_card_required": "registration",
    "free_type": "credits",
    "credit_amount_usd": 5,
    "credit_expiry": "on signup",
    "notes": "$5 free credits on signup",
    "last_verified": "2026-06-28"
  },
  {
    "id": "together_ai",
    "name": "Together AI",
    "base_url": "https://api.together.xyz/v1",
    "signup_url": "https://api.together.ai/settings/api-keys",
    "credit_card_required": "no",
    "free_type": "credits",
    "credit_amount_usd": 1,
    "credit_expiry": "never",
    "notes": "$1 free credit on signup, 100+ models",
    "last_verified": "2026-06-28"
  },
  {
    "id": "fireworks",
    "name": "Fireworks AI",
    "base_url": "https://api.fireworks.ai/inference/v1",
    "signup_url": "https://fireworks.ai/account/api-keys",
    "credit_card_required": "no",
    "free_type": "credits",
    "credit_amount_usd": 1,
    "credit_expiry": "never",
    "notes": "$1 free credit on signup",
    "last_verified": "2026-06-28"
  },
  {
    "id": "openrouter",
    "name": "OpenRouter",
    "base_url": "https://openrouter.ai/api/v1",
    "signup_url": "https://openrouter.ai/workspaces/default/keys",
    "credit_card_required": "registration",
    "free_type": "credits",
    "credit_amount_usd": 0,
    "credit_expiry": "never",
    "notes": "Free models available; $10 topup unlocks Anthropic models",
    "last_verified": "2026-06-28"
  },
  {
    "id": "hyperbolic",
    "name": "Hyperbolic",
    "base_url": "https://api.hyperbolic.xyz/v1",
    "signup_url": "https://app.hyperbolic.xyz/settings",
    "credit_card_required": "no",
    "free_type": "credits",
    "credit_amount_usd": 10,
    "credit_expiry": "never",
    "notes": "$10 free credits on signup",
    "last_verified": "2026-06-28"
  },
  {
    "id": "perplexity",
    "name": "Perplexity AI",
    "base_url": "https://api.perplexity.ai",
    "signup_url": "https://www.perplexity.ai/settings/api",
    "credit_card_required": "yes",
    "free_type": "credits",
    "credit_amount_usd": 5,
    "credit_expiry": "never",
    "notes": "$5 free credits; card required to activate",
    "last_verified": "2026-06-28"
  },
  {
    "id": "xai",
    "name": "xAI (Grok)",
    "base_url": "https://api.x.ai/v1",
    "signup_url": "https://console.x.ai",
    "credit_card_required": "registration",
    "free_type": "credits",
    "credit_amount_usd": 25,
    "credit_expiry": "monthly",
    "notes": "$25 free credits/month",
    "last_verified": "2026-06-28"
  },
  {
    "id": "siliconflow",
    "name": "SiliconFlow",
    "base_url": "https://api.siliconflow.cn/v1",
    "signup_url": "https://cloud.siliconflow.cn/account/ak",
    "credit_card_required": "registration",
    "free_type": "credits",
    "credit_amount_usd": 2,
    "credit_expiry": "never",
    "notes": "~14 CNY (~$2) free credits",
    "last_verified": "2026-06-28"
  },
  {
    "id": "nscale",
    "name": "Nscale",
    "base_url": "https://inference.api.nscale.com/v1",
    "signup_url": "https://console.nscale.com/",
    "credit_card_required": "registration",
    "free_type": "credits",
    "credit_amount_usd": 1,
    "credit_expiry": "never",
    "notes": "$1 free credits on signup",
    "last_verified": "2026-06-28"
  }
]
```

- [ ] **Step 2: Create `data/schema.md`** — document field names and valid values (see spec)

- [ ] **Step 3: Create `README.md` template** — static sections + empty comment markers:
  `<!-- BEGIN_STATS --><!-- END_STATS -->`, `<!-- BEGIN_PERMANENT --><!-- END_PERMANENT -->`,
  `<!-- BEGIN_CREDITS --><!-- END_CREDITS -->`, `<!-- BEGIN_BASE_URLS --><!-- END_BASE_URLS -->`

- [ ] **Step 4: Create `CONTRIBUTING.md`** and `LICENSE` (MIT, 2026)

- [ ] **Step 5: Init git and commit**

```bash
cd /home/khushal/raw_codes/freellm
git init
git add data/ README.md CONTRIBUTING.md LICENSE
git commit -m "feat: initial scaffold — providers data + README template"
```

---

### Task 2: Models data

**Files:**
- Create: `data/models.json`

**Interfaces:**
- Consumes: `data/providers.json` — `provider_id` values must match `id` fields
- Produces: `data/models.json` — consumed by Task 3 script

- [ ] **Step 1: Create `data/models.json`** with entries for groq, mistral, google_gemini, github_models, cerebras, together_ai, fireworks, hyperbolic, xai, deepseek, openrouter, cohere, huggingface — each with fields: `provider_id`, `model_id`, `context_window`, `modalities[]`, `rpm`, `rpd`, `tpm`, `deprecated`

- [ ] **Step 2: Commit**

```bash
git add data/models.json
git commit -m "feat: add models data for initial providers"
```

---

### Task 3: README generator script

**Files:**
- Create: `scripts/generate_readme.py`
- Create: `scripts/test_generate.py`

**Interfaces:**
- Consumes: `data/providers.json`, `data/models.json`, `README.md`
- Produces: Updated `README.md` with tables injected between markers

- [ ] **Step 1: Write `scripts/test_generate.py`**

```python
import subprocess, pathlib

ROOT = pathlib.Path(__file__).parent.parent

def test_generates_tables():
    result = subprocess.run(
        ["python", "scripts/generate_readme.py"],
        cwd=ROOT, capture_output=True, text=True
    )
    assert result.returncode == 0, result.stderr
    readme = (ROOT / "README.md").read_text()
    assert "Groq" in readme
    assert "Together AI" in readme
    assert "2026-06-28" in readme
    assert "<!-- BEGIN_PERMANENT -->" in readme
    assert "<!-- BEGIN_CREDITS -->" in readme

def test_stats_injected():
    readme = (ROOT / "README.md").read_text()
    assert "providers" in readme
    assert "models" in readme

if __name__ == "__main__":
    test_generates_tables()
    test_stats_injected()
    print("All tests passed.")
```

- [ ] **Step 2: Run test to verify it fails**

```bash
python scripts/test_generate.py
```

Expected: error — script not found.

- [ ] **Step 3: Write `scripts/generate_readme.py`**

```python
#!/usr/bin/env python3
import json
from pathlib import Path
from datetime import date

ROOT = Path(__file__).parent.parent
PROVIDERS_FILE = ROOT / "data" / "providers.json"
MODELS_FILE = ROOT / "data" / "models.json"
README_FILE = ROOT / "README.md"


def load():
    providers = json.loads(PROVIDERS_FILE.read_text())
    models = json.loads(MODELS_FILE.read_text())
    return providers, models


def model_count(pid, models):
    return sum(1 for m in models if m["provider_id"] == pid and not m["deprecated"])


def max_context(pid, models):
    ctxs = [m["context_window"] for m in models if m["provider_id"] == pid and not m["deprecated"]]
    if not ctxs:
        return "—"
    c = max(ctxs)
    return f"{c // 1_000_000}M" if c >= 1_000_000 else f"{c // 1_000}K"


def modalities_str(pid, models):
    mods = set()
    for m in models:
        if m["provider_id"] == pid and not m["deprecated"]:
            mods.update(m["modalities"])
    return ", ".join(sorted(mods)) or "text"


CARD = {"no": "✅ No", "registration": "📧 Email", "phone": "📱 Phone", "yes": "💳 Yes"}


def inject(content, marker, table):
    s, e = f"<!-- BEGIN_{marker} -->", f"<!-- END_{marker} -->"
    return content.split(s)[0] + s + "\n" + table + "\n" + e + content.split(e)[1]


def permanent_table(providers, models):
    rows = sorted([p for p in providers if p["free_type"] == "permanent"],
                  key=lambda p: -model_count(p["id"], models))
    out = "| Provider | Models | Card? | Max Context | Modalities | Last Verified | Get Key |\n"
    out += "|---|---|---|---|---|---|---|\n"
    for p in rows:
        out += (f"| {p['name']} | {model_count(p['id'], models)} | {CARD.get(p['credit_card_required'], p['credit_card_required'])} "
                f"| {max_context(p['id'], models)} | {modalities_str(p['id'], models)} "
                f"| {p['last_verified']} | [Get Key →]({p['signup_url']}) |\n")
    return out


def credits_table(providers, models):
    rows = sorted([p for p in providers if p["free_type"] == "credits"],
                  key=lambda p: -(p["credit_amount_usd"] or 0))
    out = "| Provider | Credits (USD) | Expiry | Card? | Models | Last Verified | Get Key |\n"
    out += "|---|---|---|---|---|---|---|\n"
    for p in rows:
        amount = f"${p['credit_amount_usd']}" if p["credit_amount_usd"] else "Free tier"
        out += (f"| {p['name']} | {amount} | {p['credit_expiry'] or '—'} "
                f"| {CARD.get(p['credit_card_required'], p['credit_card_required'])} "
                f"| {model_count(p['id'], models)} | {p['last_verified']} "
                f"| [Get Key →]({p['signup_url']}) |\n")
    return out


def base_urls_table(providers):
    out = "| Provider | Base URL | Get Key |\n|---|---|---|\n"
    for p in sorted(providers, key=lambda x: x["name"]):
        out += f"| {p['name']} | `{p['base_url']}` | [→]({p['signup_url']}) |\n"
    return out


def stats_block(providers, models):
    total_p = len(providers)
    total_m = sum(1 for m in models if not m["deprecated"])
    return (f'<p align="center"><strong>{total_p} providers · '
            f'{total_m} models · last verified {date.today().isoformat()}</strong></p>\n')


def main():
    providers, models = load()
    content = README_FILE.read_text()
    content = inject(content, "STATS", stats_block(providers, models))
    content = inject(content, "PERMANENT", permanent_table(providers, models))
    content = inject(content, "CREDITS", credits_table(providers, models))
    content = inject(content, "BASE_URLS", base_urls_table(providers))
    README_FILE.write_text(content)
    total_m = sum(1 for m in models if not m["deprecated"])
    print(f"README.md updated — {len(providers)} providers, {total_m} models.")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Run tests**

```bash
python scripts/generate_readme.py
python scripts/test_generate.py
```

Expected: `All tests passed.`

- [ ] **Step 5: Commit**

```bash
git add scripts/ README.md
git commit -m "feat: add readme generator script + self-tests"
```

---

### Task 4: GitHub Actions + final check

**Files:**
- Create: `.github/workflows/generate.yml`

- [ ] **Step 1: Create `.github/workflows/generate.yml`**

```yaml
name: Regenerate README

on:
  push:
    paths:
      - 'data/providers.json'
      - 'data/models.json'

jobs:
  generate:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v4
      - name: Run generator
        run: python scripts/generate_readme.py
      - name: Commit updated README
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git diff --quiet README.md || (git add README.md && git commit -m "chore: regenerate README [skip ci]")
          git push
```

- [ ] **Step 2: Verify final README**

```bash
grep -c "Get Key" README.md   # should be >= 20
python scripts/test_generate.py
```

- [ ] **Step 3: Final commit**

```bash
mkdir -p .github/workflows
git add .github/
git commit -m "ci: auto-regenerate README on data changes"
```
