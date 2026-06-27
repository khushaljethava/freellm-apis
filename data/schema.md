# Provider Schema

This document specifies the structure and valid values for each field in `providers.json`.

## Provider Object

Each provider is a JSON object with the following fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the provider (lowercase, no spaces, e.g., "groq", "mistral"). Used internally for deduplication. |
| `name` | string | Yes | Human-readable provider name (e.g., "Groq", "Mistral AI"). |
| `base_url` | string | Yes | OpenAI-compatible API base URL (e.g., "https://api.groq.com/openai/v1"). May contain placeholder segments like `{account_id}`. |
| `signup_url` | string | Yes | URL to sign up or manage API keys (e.g., "https://console.groq.com/keys"). |
| `credit_card_required` | string | Yes | Whether a credit card is needed to access the free tier. Valid values: `"yes"`, `"no"`, `"phone"`, `"registration"`. |
| `free_type` | string | Yes | Type of free offering. Valid values: `"permanent"` (unlimited free tier), `"credits"` (time-limited or quota-based free credits). |
| `credit_amount_usd` | number or null | Yes | Numeric free credit amount in USD (e.g., 5, 10). Use `null` for permanent free tiers with no explicit credits. |
| `credit_expiry` | string or null | Yes | When credits expire. Examples: `"never"`, `"monthly"`, `"on signup"`, or `null` for permanent free tiers. |
| `notes` | string | Yes | Brief human-readable notes about the free tier (e.g., "30 RPM free tier", "$5 free credits on signup"). |
| `last_verified` | string | Yes | ISO 8601 date when this provider info was last verified (format: YYYY-MM-DD, e.g., "2026-06-28"). |

## Valid Values

### credit_card_required
- `"yes"` — Credit card required to enable free tier
- `"no"` — No credit card required
- `"phone"` — Phone verification required (no card)
- `"registration"` — Email/account registration only

### free_type
- `"permanent"` — Unlimited free tier (rate-limited)
- `"credits"` — Time-limited or quota-based free credits

### Dates
- ISO 8601 format: `YYYY-MM-DD`
- Example: `"2026-06-28"`

## Example

```json
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
}
```
