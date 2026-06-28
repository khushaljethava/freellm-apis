<p align="center">
  <h1 align="center">🆓 Free LLM APIs</h1>
  <p align="center"><strong>90+ free LLM API providers across 8 regions</strong> — find, compare & start calling AI models in seconds.</p>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><img src="https://img.shields.io/badge/🌐_Live_Site-freellm.site-6366f1?style=for-the-badge" alt="Live Site"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/khushaljethava/freellm-apis?style=for-the-badge&color=f59e0b" alt="Stars"/></a>
  <a href="https://github.com/khushaljethava/freellm-apis/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge" alt="MIT License"/></a>
  <img src="https://img.shields.io/badge/Providers-90%2B-ec4899?style=for-the-badge" alt="90+ Providers"/>
  <img src="https://img.shields.io/badge/Updated-2026--06--28-3b82f6?style=for-the-badge" alt="Last Updated"/>
</p>

<p align="center">
  <a href="https://www.freellm.site" target="_blank" rel="noopener"><strong>🌐 freellm.site</strong></a> ·
  <a href="data/providers.json">providers.json</a> ·
  <a href="data/models.json">models.json</a> ·
  <a href="CONTRIBUTING.md">Contribute</a>
</p>

<p align="center">
  <strong>English</strong> · <a href="README.zh.md">简体中文</a> · <a href="README.hi.md">हिन्दी</a> · <a href="README.es.md">Español</a> · <a href="README.ja.md">日本語</a> · <a href="README.ko.md">한국어</a> · <a href="README.pt.md">Português</a> · <a href="README.ar.md">العربية</a> · <a href="README.fr.md">Français</a> · <a href="README.de.md">Deutsch</a> · <a href="README.ru.md">Русский</a>
</p>

---

## Why This Exists

Finding a free LLM API shouldn't mean hunting through dozens of websites, signing up on five platforms, or guessing which free tier still works.

This repo is a **structured, machine-readable directory** of every free LLM API — with credit card requirements, base URLs, and direct API key links. All in one place.

- ✅ **No-card options first** — clearly shows which providers need zero payment info
- ✅ **OpenAI-compatible** — every provider works as a drop-in `baseURL` replacement
- ✅ **90+ providers** — global, India, China, Japan, Korea, Europe, Middle East, SEA
- ✅ **Machine-readable** — structured JSON in `data/providers.json` for scripts & tools
- ✅ **Community-maintained** — PRs welcome to add or update providers

---

## ⚡ How to Use — 3 Steps

**1. Pick a provider** — see [Provider Directory](#-provider-directory) below. Start with **Groq** (no credit card, 30 RPM free).

**2. Get your API key** — click any `Get Key →` link, sign up (most need just an email), copy your key. Takes < 1 minute.

**3. Plug it in** — copy the base URL + model ID into your tool.

---

## 🚀 Quick Start — Use Any Free API in 30 Seconds

All providers below expose an **OpenAI-compatible endpoint**. Any tool that accepts `baseURL` + `apiKey` works.

### Python (OpenAI SDK)

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.groq.com/openai/v1",  # free, no credit card
    api_key="YOUR_GROQ_KEY",                     # get at console.groq.com/keys
)

response = client.chat.completions.create(
    model="llama-3.3-70b-versatile",
    messages=[{"role": "user", "content": "Hello!"}],
)
print(response.choices[0].message.content)
# Groq free tier: 30 RPM, 14,400 RPD
```

### Node.js (OpenAI SDK)

```javascript
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",  // free, no credit card
  apiKey: process.env.GROQ_API_KEY,            // get at console.groq.com/keys
});

const response = await client.chat.completions.create({
  model: "llama-3.3-70b-versatile",
  messages: [{ role: "user", content: "Hello!" }],
});
console.log(response.choices[0].message.content);
```

### curl

```bash
curl https://api.groq.com/openai/v1/chat/completions \
  -H "Authorization: Bearer $GROQ_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "llama-3.3-70b-versatile",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

### Claude Code / Cursor / Codex

```bash
# Point any OpenAI-compatible tool at a free provider:
export OPENAI_BASE_URL="https://api.groq.com/openai/v1"
export OPENAI_API_KEY="your-groq-key"  # console.groq.com/keys
```

> **Tip:** Swap `base_url` to any provider in the tables below — same code, different provider, zero cost.

---

## 📋 Provider Directory

### ⚡ Permanent Free Tiers

Providers with **unlimited free access** (rate-limited) — no time expiry.

<!-- BEGIN_PERMANENT -->
| Provider | Card? | Notes | Max Context | Get Key |
|---|---|---|---|---|
| Groq | ✅ No | 30 RPM · 14,400 RPD | 262K | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">Get Key →</a> |
| GitHub Models | ✅ No | Requires GitHub account | 1M | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">Get Key →</a> |
| Google Gemini | ✅ No | 2M context on Flash | 2M | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">Get Key →</a> |
| Mistral AI | ✅ No | Rate-limited free tier | 256K | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">Get Key →</a> |
| Cerebras | ✅ No | Ultrafast inference | 131K | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">Get Key →</a> |
| Cohere | ✅ No | 20 calls/min | 256K | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">Get Key →</a> |
| Hugging Face | ✅ No | Free inference router | 131K | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">Get Key →</a> |
| Cloudflare Workers AI | ✅ No | 10,000 neurons/day | 10M | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">Get Key →</a> |
| OpenRouter | 📧 Email | 100+ permanent free models | 1M | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">Get Key →</a> |
| Chutes AI | ✅ No | Community free tier | 131K | <a href="https://chutes.ai" target="_blank" rel="noopener">Get Key →</a> |
| LLM7.io | ✅ No | No signup for basic use | 131K | <a href="https://token.llm7.io" target="_blank" rel="noopener">Get Key →</a> |
| NVIDIA NIM | 📱 Phone | 75+ models | 1M | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">Get Key →</a> |
| SambaNova Cloud | 📧 Email | Fast Llama inference | 128K | <a href="https://cloud.sambanova.ai/apis" target="_blank" rel="noopener">Get Key →</a> |
| Parasail | 📧 Email | Free tier available | — | <a href="https://parasail.io" target="_blank" rel="noopener">Get Key →</a> |
<!-- END_PERMANENT -->

### 💰 Free Credits on Signup

Providers that give **trial credits** at registration — no monthly renewal needed.

<!-- BEGIN_CREDITS -->
| Provider | Credits | Expiry | Card? | Get Key |
|---|---|---|---|---|
| xAI (Grok) | $25 | Monthly | 📧 Email | <a href="https://console.x.ai" target="_blank" rel="noopener">Get Key →</a> |
| Modal | $30 | Monthly | ✅ No | <a href="https://modal.com" target="_blank" rel="noopener">Get Key →</a> |
| Hyperbolic | $10 | Never | ✅ No | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">Get Key →</a> |
| Lambda AI | $10 | Never | ✅ No | <a href="https://lambda.ai" target="_blank" rel="noopener">Get Key →</a> |
| AI21 Labs | $10 | Never | ✅ No | <a href="https://www.ai21.com" target="_blank" rel="noopener">Get Key →</a> |
| DeepSeek | $5 | On signup | 📧 Email | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">Get Key →</a> |
| Anthropic | $5 | Never | 💳 Yes | <a href="https://console.anthropic.com" target="_blank" rel="noopener">Get Key →</a> |
| Perplexity AI | $5 | Never | 💳 Yes | <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener">Get Key →</a> |
| SiliconFlow | $2 | Never | 📧 Email | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">Get Key →</a> |
| Together AI | $1 | Never | ✅ No | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">Get Key →</a> |
| Fireworks AI | $1 | Never | ✅ No | <a href="https://fireworks.ai/account/api-keys" target="_blank" rel="noopener">Get Key →</a> |
| Nscale | $1 | Never | 📧 Email | <a href="https://console.nscale.com/" target="_blank" rel="noopener">Get Key →</a> |
| DeepInfra | $1 | Never | ✅ No | <a href="https://deepinfra.com" target="_blank" rel="noopener">Get Key →</a> |
| Novita AI | $1 | Never | ✅ No | <a href="https://novita.ai" target="_blank" rel="noopener">Get Key →</a> |
<!-- END_CREDITS -->

---

## 🔗 Quick Reference — Base URLs

<!-- BEGIN_BASE_URLS -->
| Provider | Base URL | Get Key |
|---|---|---|
| Groq | `https://api.groq.com/openai/v1` | <a href="https://console.groq.com/keys" target="_blank" rel="noopener">→</a> |
| GitHub Models | `https://models.github.ai/inference` | <a href="https://github.com/marketplace/models" target="_blank" rel="noopener">→</a> |
| Google Gemini | `https://generativelanguage.googleapis.com/v1beta` | <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener">→</a> |
| Mistral AI | `https://api.mistral.ai/v1` | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">→</a> |
| Cerebras | `https://api.cerebras.ai/v1` | <a href="https://cloud.cerebras.ai/" target="_blank" rel="noopener">→</a> |
| Cohere | `https://api.cohere.com/v2` | <a href="https://dashboard.cohere.com/api-keys" target="_blank" rel="noopener">→</a> |
| Hugging Face | `https://router.huggingface.co/v1` | <a href="https://huggingface.co/settings/tokens" target="_blank" rel="noopener">→</a> |
| Cloudflare Workers AI | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run` | <a href="https://dash.cloudflare.com/profile/api-tokens" target="_blank" rel="noopener">→</a> |
| OpenRouter | `https://openrouter.ai/api/v1` | <a href="https://openrouter.ai/workspaces/default/keys" target="_blank" rel="noopener">→</a> |
| Chutes AI | `https://llm.chutes.ai/v1` | <a href="https://chutes.ai" target="_blank" rel="noopener">→</a> |
| LLM7.io | `https://api.llm7.io/v1` | <a href="https://token.llm7.io" target="_blank" rel="noopener">→</a> |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | <a href="https://build.nvidia.com/settings/api-keys" target="_blank" rel="noopener">→</a> |
| SambaNova | `https://api.sambanova.ai/v1` | <a href="https://cloud.sambanova.ai/apis" target="_blank" rel="noopener">→</a> |
| xAI (Grok) | `https://api.x.ai/v1` | <a href="https://console.x.ai" target="_blank" rel="noopener">→</a> |
| Hyperbolic | `https://api.hyperbolic.xyz/v1` | <a href="https://app.hyperbolic.xyz/settings" target="_blank" rel="noopener">→</a> |
| Lambda AI | `https://api.lambdalabs.com/v1` | <a href="https://lambda.ai" target="_blank" rel="noopener">→</a> |
| Together AI | `https://api.together.xyz/v1` | <a href="https://api.together.ai/settings/api-keys" target="_blank" rel="noopener">→</a> |
| Fireworks AI | `https://api.fireworks.ai/inference/v1` | <a href="https://fireworks.ai/account/api-keys" target="_blank" rel="noopener">→</a> |
| DeepSeek | `https://api.deepseek.com/v1` | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">→</a> |
| Perplexity AI | `https://api.perplexity.ai` | <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener">→</a> |
| Anthropic | `https://api.anthropic.com/v1` | <a href="https://console.anthropic.com" target="_blank" rel="noopener">→</a> |
| SiliconFlow | `https://api.siliconflow.cn/v1` | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">→</a> |
| DeepInfra | `https://api.deepinfra.com/v1/openai` | <a href="https://deepinfra.com" target="_blank" rel="noopener">→</a> |
| Nebius AI | `https://api.studio.nebius.ai/v1` | <a href="https://studio.nebius.ai" target="_blank" rel="noopener">→</a> |
| Novita AI | `https://api.novita.ai/v3/openai` | <a href="https://novita.ai" target="_blank" rel="noopener">→</a> |
| Lepton AI | `https://llm.lepton.run/api/v1` | <a href="https://www.lepton.ai" target="_blank" rel="noopener">→</a> |
| FriendliAI | `https://inference.friendli.ai/v1` | <a href="https://friendli.ai" target="_blank" rel="noopener">→</a> |
| Infermatic AI | `https://api.infermatic.ai/v1` | <a href="https://infermatic.ai" target="_blank" rel="noopener">→</a> |
<!-- END_BASE_URLS -->

---

## 🌍 Regional Providers

<details>
<summary><strong>🇮🇳 India (9 providers)</strong></summary>

| Provider | Specialty | Signup |
|---|---|---|
| Sarvam AI | Indian language models | <a href="https://sarvam.ai" target="_blank" rel="noopener">→</a> |
| Krutrim AI | Ola's Indian LLM | <a href="https://www.krutrim.com" target="_blank" rel="noopener">→</a> |
| AI4Bharat | IIT Madras — research APIs | <a href="https://ai4bharat.iitm.ac.in" target="_blank" rel="noopener">→</a> |
| BharatGen | IIT Bombay — research APIs | <a href="https://bharatgen.iitb.ac.in" target="_blank" rel="noopener">→</a> |
| Hanooman AI | Multilingual Indian LLM | <a href="https://www.hanooman.ai" target="_blank" rel="noopener">→</a> |
| Soket AI | Indian LLM API | <a href="https://soket.ai" target="_blank" rel="noopener">→</a> |
| Neysa AI | AI cloud platform | <a href="https://neysa.ai" target="_blank" rel="noopener">→</a> |
| CoRover BharatGPT | Enterprise conversational AI | <a href="https://corover.ai" target="_blank" rel="noopener">→</a> |
| Gnani.ai | Speech & language API | <a href="https://gnani.ai" target="_blank" rel="noopener">→</a> |

</details>

<details>
<summary><strong>🇨🇳 China (17 providers)</strong></summary>

| Provider | Base URL | Signup |
|---|---|---|
| DeepSeek | `https://api.deepseek.com/v1` | <a href="https://platform.deepseek.com/api_keys" target="_blank" rel="noopener">→</a> |
| Alibaba DashScope | `https://dashscope.aliyuncs.com/compatible-mode/v1` | <a href="https://dashscope.aliyun.com" target="_blank" rel="noopener">→</a> |
| Alibaba Model Studio | `https://dashscope-intl.aliyuncs.com/compatible-mode/v1` | <a href="https://www.alibabacloud.com/product/modelstudio" target="_blank" rel="noopener">→</a> |
| Moonshot AI (Kimi) | `https://api.moonshot.cn/v1` | <a href="https://platform.moonshot.ai" target="_blank" rel="noopener">→</a> |
| Zhipu AI | `https://open.bigmodel.cn/api/paas/v4` | <a href="https://open.bigmodel.cn" target="_blank" rel="noopener">→</a> |
| MiniMax | `https://api.minimax.chat/v1` | <a href="https://www.minimax.io" target="_blank" rel="noopener">→</a> |
| StepFun | `https://api.stepfun.com/v1` | <a href="https://platform.stepfun.com" target="_blank" rel="noopener">→</a> |
| Baichuan AI | `https://api.baichuan-ai.com/v1` | <a href="https://platform.baichuan-ai.com" target="_blank" rel="noopener">→</a> |
| SiliconFlow | `https://api.siliconflow.cn/v1` | <a href="https://cloud.siliconflow.cn/account/ak" target="_blank" rel="noopener">→</a> |
| SenseNova | `https://api.sensenova.cn/v1` | <a href="https://platform.sensenova.cn" target="_blank" rel="noopener">→</a> |
| iFlytek Spark | `https://spark-api-open.xf-yun.com/v1` | <a href="https://xinghuo.xfyun.cn" target="_blank" rel="noopener">→</a> |
| Volcengine Ark | `https://ark.cn-beijing.volces.com/api/v3` | <a href="https://www.volcengine.com/product/ark" target="_blank" rel="noopener">→</a> |
| Tencent Hunyuan | `https://hunyuan.tencentcloudapi.com` | <a href="https://cloud.tencent.com/product/hunyuan" target="_blank" rel="noopener">→</a> |
| Baidu ERNIE | `https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop` | <a href="https://cloud.baidu.com/product/wenxinworkshop" target="_blank" rel="noopener">→</a> |
| 01.AI (Yi) | `https://api.lingyiwanwu.com/v1` | <a href="https://platform.lingyiwanwu.com" target="_blank" rel="noopener">→</a> |
| ModelScope | `https://api-inference.modelscope.cn/v1` | <a href="https://modelscope.cn" target="_blank" rel="noopener">→</a> |
| Huawei Cloud Pangu | — | <a href="https://www.huaweicloud.com" target="_blank" rel="noopener">→</a> |

</details>

<details>
<summary><strong>🇯🇵 Japan · 🇰🇷 Korea (12 providers)</strong></summary>

**Japan**

| Provider | Notes | Signup |
|---|---|---|
| Sakana AI | Japanese AI research lab | <a href="https://sakana.ai" target="_blank" rel="noopener">→</a> |
| Preferred Networks | PLaMo models | <a href="https://www.preferred.jp" target="_blank" rel="noopener">→</a> |
| Fujitsu Kozuchi | Enterprise AI platform | <a href="https://www.fujitsu.com/global/services/business-services/kozuchi" target="_blank" rel="noopener">→</a> |
| SB Intuitions | SoftBank Japanese LLMs | <a href="https://www.sbintuitions.co.jp" target="_blank" rel="noopener">→</a> |
| Rakuten AI | RakutenAI models | <a href="https://corp.rakuten.com" target="_blank" rel="noopener">→</a> |

**Korea**

| Provider | Notes | Signup |
|---|---|---|
| Naver HyperCLOVA X | Korea's leading LLM | <a href="https://clovastudio.naver.com" target="_blank" rel="noopener">→</a> |
| Upstage AI | Solar LLM, free credits | <a href="https://www.upstage.ai" target="_blank" rel="noopener">→</a> |
| LG EXAONE | LG AI research lab | <a href="https://www.lgresearch.ai" target="_blank" rel="noopener">→</a> |
| Wrtn Technologies | Korean AI assistant | <a href="https://wrtn.ai" target="_blank" rel="noopener">→</a> |

</details>

<details>
<summary><strong>🇪🇺 Europe (11 providers)</strong></summary>

| Provider | Country | Specialty | Signup |
|---|---|---|---|
| Mistral AI | France | Leading European LLM | <a href="https://console.mistral.ai/api-keys" target="_blank" rel="noopener">→</a> |
| Aleph Alpha | Germany | Luminous models | <a href="https://aleph-alpha.com" target="_blank" rel="noopener">→</a> |
| DeepL API | Germany | Translation — 500K chars/month free | <a href="https://developers.deepl.com" target="_blank" rel="noopener">→</a> |
| ElevenLabs | Poland | Voice synthesis | <a href="https://elevenlabs.io" target="_blank" rel="noopener">→</a> |
| Stability AI | UK | Image/audio/video models | <a href="https://stability.ai" target="_blank" rel="noopener">→</a> |
| Scaleway AI | France | Llama & Mistral on EU cloud | <a href="https://www.scaleway.com" target="_blank" rel="noopener">→</a> |
| OVHcloud AI | France | Open-source model hosting | <a href="https://www.ovhcloud.com" target="_blank" rel="noopener">→</a> |
| LightOn | France | Alfred models | <a href="https://lighton.ai" target="_blank" rel="noopener">→</a> |
| Silo AI | Finland | Poro Finnish LLMs | <a href="https://www.silo.ai" target="_blank" rel="noopener">→</a> |
| PolyAI | UK | Conversational AI | <a href="https://poly.ai" target="_blank" rel="noopener">→</a> |
| H Company | France | French AI startup | <a href="https://hcompany.ai" target="_blank" rel="noopener">→</a> |

</details>

<details>
<summary><strong>🇦🇪 Middle East · 🇸🇬 Southeast Asia (7 providers)</strong></summary>

**Middle East**

| Provider | Notes | Signup |
|---|---|---|
| Falcon (TII) | UAE open-source models — free via HuggingFace | <a href="https://falconllm.tii.ae" target="_blank" rel="noopener">→</a> |
| AI71 | Falcon-based API, UAE | <a href="https://ai71.ai" target="_blank" rel="noopener">→</a> |
| Inception AI | UAE AI startup | <a href="https://inceptionai.ai" target="_blank" rel="noopener">→</a> |
| Core42 | JAIS Arabic LLM | <a href="https://core42.ai" target="_blank" rel="noopener">→</a> |

**Southeast Asia**

| Provider | Notes | Signup |
|---|---|---|
| AI Singapore (SEA-LION) | Multilingual SEA models, open-source | <a href="https://aisingapore.org" target="_blank" rel="noopener">→</a> |
| GMI Cloud | Singapore GPU cloud | <a href="https://www.gmicloud.ai" target="_blank" rel="noopener">→</a> |
| NCS AI | Singapore enterprise AI | <a href="https://www.ncs.co" target="_blank" rel="noopener">→</a> |

</details>

---

## 🗄️ Data Structure

All provider data lives in [`data/providers.json`](data/providers.json). Schema:

```jsonc
{
  "id": "groq",                          // unique slug
  "name": "Groq",                        // display name
  "region": "global",                    // global | india | china | japan | korea | europe | middle_east | sea
  "base_url": "https://api.groq.com/openai/v1",
  "signup_url": "https://console.groq.com/keys",
  "credit_card_required": "no",          // no | registration | phone | yes
  "free_type": "permanent",              // permanent | credits
  "credit_amount_usd": null,             // null for permanent tiers
  "credit_expiry": null,                 // null | "never" | "monthly" | "on signup"
  "notes": "30 RPM free tier",
  "last_verified": "2026-06-28"
}
```

---

## 🤝 Contributing

Contributions are welcome! To add or update a provider:

1. **Fork** this repository
2. **Edit** `data/providers.json` following the [schema](data/schema.md)
3. **Submit a PR** with a brief description

Please verify provider details on their official websites before submitting. See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

---

## 📊 Stats

<p align="center">
  <img src="https://img.shields.io/badge/Total_Providers-90%2B-6366f1?style=flat-square" />
  <img src="https://img.shields.io/badge/Permanent_Free-20%2B-22c55e?style=flat-square" />
  <img src="https://img.shields.io/badge/Free_Credits-30%2B-f59e0b?style=flat-square" />
  <img src="https://img.shields.io/badge/Regions-8-ec4899?style=flat-square" />
  <img src="https://img.shields.io/badge/Last_Verified-2026--06--28-3b82f6?style=flat-square" />
</p>

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## ⚠️ Disclaimer

This repository is community-maintained and information may become outdated. Always verify provider details on their official websites before using their APIs. Free tier limitations and offerings are subject to change without notice.

---

<p align="center">
  <strong>If this saved you time, please ⭐ star the repo!</strong><br/>
  <a href="https://github.com/khushaljethava/freellm-apis">github.com/khushaljethava/freellm-apis</a>
</p>
