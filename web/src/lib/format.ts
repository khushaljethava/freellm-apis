// Small display helpers shared by the directory pages.

/** 131072 -> "131K", 1048576 -> "1M". Zero/unknown -> "—". */
export const fmtCtx = (c?: number | null) =>
  !c ? '—' : c >= 1_000_000 ? `${Math.round(c / 1_000_000)}M` : `${Math.round(c / 1_000)}K`;

/** Badge variant for each credit_card_required value. */
export const CARD_VARIANT = { no: 'success', registration: 'info', phone: 'warning', yes: 'danger' } as const;

/** Curated compare pairs (quality gate: no N×N thin pages). Order = URL order. */
export const COMPARE_PAIRS: [string, string][] = [
  ['groq', 'google_gemini'], ['groq', 'cerebras'], ['groq', 'sambanova'],
  ['cerebras', 'sambanova'], ['mistral', 'groq'], ['google_gemini', 'mistral'],
  ['openrouter', 'groq'], ['cohere', 'mistral'],
];

/** Titles over ~60 chars get truncated in results; the brand suffix is the first thing to go. */
export const SUFFIX = ' | freellm.site';
export const seoTitle = (title: string) =>
  title.length > 60 && title.endsWith(SUFFIX) ? title.slice(0, -SUFFIX.length) : title;
