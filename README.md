# Free LLM APIs

A structured directory of free LLM APIs for developers. Curated list of providers offering free tiers or trial credits for large language models.

## Overview

This repository maintains up-to-date information about free LLM APIs, including:
- Provider details and API endpoints
- Free tier limitations and credit amounts
- Signup requirements and verification methods
- Last verification dates

## Quick Start

Browse the [providers list](data/providers.json) to find free LLM APIs. Each provider includes:
- **Base URL**: OpenAI-compatible API endpoint
- **Signup URL**: Where to get API keys
- **Free Tier**: Type and duration of free access
- **Requirements**: Credit card or verification needed

## Providers by Free Type

### Permanent Free Tier

Providers with unlimited free access (rate-limited):

<!-- BEGIN_PERMANENT -->
| Provider | Models | Card? | Max Context | Modalities | Last Verified | Get Key |
|---|---|---|---|---|---|---|
| Groq | 3 | ✅ No | 131K | text | 2026-06-28 | [Get Key →](https://console.groq.com/keys) |
| GitHub Models | 3 | ✅ No | 131K | image, text | 2026-06-28 | [Get Key →](https://github.com/marketplace/models) |
| Mistral AI | 2 | ✅ No | 128K | text | 2026-06-28 | [Get Key →](https://console.mistral.ai/api-keys) |
| Google Gemini | 2 | ✅ No | 2M | audio, code, image, text | 2026-06-28 | [Get Key →](https://aistudio.google.com/app/apikey) |
| Cerebras | 2 | ✅ No | 131K | text | 2026-06-28 | [Get Key →](https://cloud.cerebras.ai/) |
| Cohere | 1 | ✅ No | 128K | text | 2026-06-28 | [Get Key →](https://dashboard.cohere.com/api-keys) |
| Hugging Face | 1 | ✅ No | 32K | text | 2026-06-28 | [Get Key →](https://huggingface.co/settings/tokens) |
| NVIDIA NIM | 0 | 📱 Phone | — | text | 2026-06-28 | [Get Key →](https://build.nvidia.com/settings/api-keys) |
| Cloudflare Workers AI | 0 | ✅ No | — | text | 2026-06-28 | [Get Key →](https://dash.cloudflare.com/profile/api-tokens) |
| SambaNova | 0 | 📧 Email | — | text | 2026-06-28 | [Get Key →](https://cloud.sambanova.ai/apis) |
| LLM7.io | 0 | ✅ No | — | text | 2026-06-28 | [Get Key →](https://token.llm7.io) |

<!-- END_PERMANENT -->

### Free Credits

Providers offering trial or promotional credits:

<!-- BEGIN_CREDITS -->
| Provider | Credits (USD) | Expiry | Card? | Models | Last Verified | Get Key |
|---|---|---|---|---|---|---|
| xAI (Grok) | $25 | monthly | 📧 Email | 1 | 2026-06-28 | [Get Key →](https://console.x.ai) |
| Hyperbolic | $10 | never | ✅ No | 1 | 2026-06-28 | [Get Key →](https://app.hyperbolic.xyz/settings) |
| DeepSeek | $5 | on signup | 📧 Email | 1 | 2026-06-28 | [Get Key →](https://platform.deepseek.com/api_keys) |
| Perplexity AI | $5 | never | 💳 Yes | 0 | 2026-06-28 | [Get Key →](https://www.perplexity.ai/settings/api) |
| SiliconFlow | $2 | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://cloud.siliconflow.cn/account/ak) |
| Together AI | $1 | never | ✅ No | 1 | 2026-06-28 | [Get Key →](https://api.together.ai/settings/api-keys) |
| Fireworks AI | $1 | never | ✅ No | 1 | 2026-06-28 | [Get Key →](https://fireworks.ai/account/api-keys) |
| Nscale | $1 | never | 📧 Email | 0 | 2026-06-28 | [Get Key →](https://console.nscale.com/) |
| OpenRouter | Free tier | never | 📧 Email | 2 | 2026-06-28 | [Get Key →](https://openrouter.ai/workspaces/default/keys) |

<!-- END_CREDITS -->

## API Endpoints

Base URLs for each provider:

<!-- BEGIN_BASE_URLS -->
| Provider | Base URL | Get Key |
|---|---|---|
| Cerebras | `https://api.cerebras.ai/v1` | [→](https://cloud.cerebras.ai/) |
| Cloudflare Workers AI | `https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run` | [→](https://dash.cloudflare.com/profile/api-tokens) |
| Cohere | `https://api.cohere.com/v2` | [→](https://dashboard.cohere.com/api-keys) |
| DeepSeek | `https://api.deepseek.com/v1` | [→](https://platform.deepseek.com/api_keys) |
| Fireworks AI | `https://api.fireworks.ai/inference/v1` | [→](https://fireworks.ai/account/api-keys) |
| GitHub Models | `https://models.github.ai/inference` | [→](https://github.com/marketplace/models) |
| Google Gemini | `https://generativelanguage.googleapis.com/v1beta` | [→](https://aistudio.google.com/app/apikey) |
| Groq | `https://api.groq.com/openai/v1` | [→](https://console.groq.com/keys) |
| Hugging Face | `https://router.huggingface.co/v1` | [→](https://huggingface.co/settings/tokens) |
| Hyperbolic | `https://api.hyperbolic.xyz/v1` | [→](https://app.hyperbolic.xyz/settings) |
| LLM7.io | `https://api.llm7.io/v1` | [→](https://token.llm7.io) |
| Mistral AI | `https://api.mistral.ai/v1` | [→](https://console.mistral.ai/api-keys) |
| NVIDIA NIM | `https://integrate.api.nvidia.com/v1` | [→](https://build.nvidia.com/settings/api-keys) |
| Nscale | `https://inference.api.nscale.com/v1` | [→](https://console.nscale.com/) |
| OpenRouter | `https://openrouter.ai/api/v1` | [→](https://openrouter.ai/workspaces/default/keys) |
| Perplexity AI | `https://api.perplexity.ai` | [→](https://www.perplexity.ai/settings/api) |
| SambaNova | `https://api.sambanova.ai/v1` | [→](https://cloud.sambanova.ai/apis) |
| SiliconFlow | `https://api.siliconflow.cn/v1` | [→](https://cloud.siliconflow.cn/account/ak) |
| Together AI | `https://api.together.xyz/v1` | [→](https://api.together.ai/settings/api-keys) |
| xAI (Grok) | `https://api.x.ai/v1` | [→](https://console.x.ai) |

<!-- END_BASE_URLS -->

## Statistics

<!-- BEGIN_STATS -->
<p align="center"><strong>20 providers · 21 models · last verified 2026-06-28</strong></p>

<!-- END_STATS -->

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to add or update providers.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Disclaimer

This repository is community-maintained and information may become outdated. Always verify provider details on their official websites before using their APIs. Free tier limitations and offerings are subject to change without notice.
