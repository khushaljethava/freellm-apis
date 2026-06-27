# Contributing

Thank you for your interest in contributing to the Free LLM APIs directory!

## Adding or Updating Providers

To add a new LLM provider or update existing information:

1. **Update `data/providers.json`** with the provider details
2. **Verify all required fields** are present and correctly formatted
3. **Follow the schema** defined in `data/schema.md`
4. **Set `last_verified`** to today's date in ISO 8601 format (YYYY-MM-DD)
5. **Keep IDs lowercase** with underscores (no spaces or special characters)
6. **Be accurate** about free tier limitations, credit amounts, and requirements

## Provider Fields

When adding a provider, include all required fields:

| Field | Example | Notes |
|-------|---------|-------|
| `id` | `"groq"` | Unique, lowercase identifier |
| `name` | `"Groq"` | Human-readable name |
| `base_url` | `"https://api.groq.com/openai/v1"` | OpenAI-compatible endpoint |
| `signup_url` | `"https://console.groq.com/keys"` | API key management URL |
| `credit_card_required` | `"no"` | `"yes"`, `"no"`, `"phone"`, or `"registration"` |
| `free_type` | `"permanent"` | `"permanent"` or `"credits"` |
| `credit_amount_usd` | `null` or `5` | Amount in USD; `null` for permanent tiers |
| `credit_expiry` | `null` or `"never"` | When credits expire; `null` for permanent |
| `notes` | `"30 RPM free tier"` | Brief description of free tier |
| `last_verified` | `"2026-06-28"` | Today's date in YYYY-MM-DD format |

## Format Requirements

- **JSON**: Must be valid JSON with proper formatting
- **Dates**: ISO 8601 format only (YYYY-MM-DD)
- **URLs**: Must be complete and valid
- **Case sensitivity**: IDs use lowercase with underscores; Names use proper capitalization

## Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b add-provider-name`)
3. Make your changes to `data/providers.json`
4. Validate the JSON is properly formatted
5. Commit with a clear message (`feat: add [Provider Name]` or `fix: update [Provider Name]`)
6. Push to your fork and open a pull request
7. Describe the provider and any recent changes you've verified

## Quality Standards

- Verify information on the provider's official website
- Test API endpoints if possible
- Ensure URLs are current and functional
- Update `last_verified` to the date of verification
- Remove duplicate providers (check by `id`)
- Keep the list sorted alphabetically by `name` (optional)

## Reporting Issues

If you find outdated information or a provider that no longer offers free tiers:

1. Open an issue describing the problem
2. Include the provider ID and what needs updating
3. Provide a link to verification source

## Code of Conduct

Be respectful and professional in all interactions. This is a community project maintained by volunteers.
