import type { Strings } from './en';

const de: Strings = {
  nav: { models: 'Modelle', blog: 'Blog', about: 'Über uns', github: 'GitHub', language: 'Sprache' },
  footer: {
    privacy: 'Datenschutz',
    terms: 'AGB',
    about: 'Über uns',
    contact: 'Kontakt',
    cookies: 'Cookies',
    legalNav: 'Rechtliches und Seitenlinks',
    updated: 'Daten werden regelmäßig aktualisiert',
    contribute: 'Auf GitHub mitwirken',
  },
  common: {
    provider: 'Anbieter',
    models: 'Modelle',
    card: 'Karte?',
    maxContext: 'Max. Kontext',
    lastVerified: 'Zuletzt geprüft',
    getKey: 'Key holen',
    getKeyCta: 'Key holen →',
    credits: 'Guthaben',
    expiry: 'Gültigkeit',
    freeTier: 'Gratis-Tarif',
    readMore: 'Weiterlesen →',
    cardLabel: {
      no: 'Keine Karte',
      registration: 'E-Mail-Anmeldung',
      phone: 'Telefonverifizierung',
      yes: 'Karte erforderlich',
    },
  },
  home: {
    title: 'Kostenlose LLM-API — Gratis LLM-API-Keys von über 30 Anbietern | freellm.site',
    description: (p, m) =>
      `Finde eine kostenlose LLM-API ohne Kreditkarte. ${p} Anbieter, ${m} Modelle — Groq, Gemini, Mistral, GitHub Models. Hol dir deinen gratis LLM-API-Key in Sekunden.`,
    eyebrow: d => `Kostenlos & geprüft · Aktualisiert ${d}`,
    h1a: 'Jede kostenlose LLM-API.',
    h1b: 'An einem Ort.',
    lede: p =>
      `Dauerhaft kostenlose Tarife und Gratis-Guthaben von ${p} Anbietern — kein Suchen, keine Paywalls. Finde deinen Key in Sekunden.`,
    statProviders: 'Anbieter',
    statModels: 'Modelle',
    statAlwaysFree: 'Immer kostenlos',
    quickPick: 'Schnellwahl',
    quickPickMeta: (n, ctx) =>
      `— ${n} Modelle · ${ctx} Kontext · keine Karte nötig · dauerhaft kostenlos`,
    quickPickCta: 'Gratis-Key holen →',
    permanentTitle: 'Dauerhaft kostenlose Tarife',
    creditsTitle: 'Gratis-Guthaben bei Anmeldung',
    seoTitle: 'Jede kostenlose LLM-API in einem Verzeichnis',
    seoP1: (p, m) =>
      `Eine kostenlose LLM-API zu finden, die funktioniert — und das ohne Kreditkarte — sollte keinen halben Nachmittag Tab-Hopping kosten. Dieses Verzeichnis erfasst ${p} Anbieter und ${m} Modelle, von dauerhaft kostenlosen Tarifen bis zu Gratis-Guthaben, damit du dir in Minuten einen gratis LLM-API-Key holst und loslegst. Jede API hier bietet einen `,
    seoP1Link: 'OpenAI-kompatiblen Endpoint',
    seoP1End: ', ein Anbieterwechsel ist also eine Sache von einer Zeile.',
    seoP2:
      'Ob du die günstigste LLM-API für ein Nebenprojekt suchst, die besten Open-Source-LLM-Modelle wie Llama und Mistral oder eine schnelle kostenlose LLM-API zum Programmieren: Die Tabellen oben vergleichen sie nach Modellen, Kontextfenster und Kartenpflicht. Später mehr Volumen nötig? Starte kostenlos und vergleiche dann die Preise der Anbieter. Praxisnahe Anleitungen findest du in unserer ',
    seoP2Link1: 'Übersicht der besten kostenlosen LLM-APIs',
    seoP2Link2: 'besten Open-Source-LLM-APIs',
    seoP2Link3: 'besten kostenlosen LLM-APIs zum Programmieren',
    guidesTitle: 'Anleitungen',
    faqTitle: 'FAQ zu kostenlosen LLM-APIs',
    faqs: p => [
      {
        q: 'Was ist die beste kostenlose LLM-API?',
        a: `Die beste kostenlose LLM-API hängt vom Anwendungsfall ab. Groq ist am schnellsten, Google Gemini hat das größte kostenlose Kontextfenster und GitHub Models braucht keine separate Anmeldung. Alle ${p} hier gelisteten Anbieter bieten eine kostenlose LLM-API ohne Vorabkosten.`,
      },
      {
        q: 'Wie bekomme ich einen kostenlosen LLM-API-Key?',
        a: 'Wähle oben in den Tabellen einen Anbieter, klicke auf „Key holen" und registriere dich in dessen Konsole. Die meisten stellen den gratis LLM-API-Key sofort per E-Mail aus — ohne Kreditkarte. Danach setzt du ihn als API-Key und schickst deine ersten Requests.',
      },
      {
        q: 'Gibt es kostenlose LLM-APIs ohne Kreditkarte?',
        a: 'Ja. Viele Anbieter hier bieten eine kostenlose LLM-API ohne Kreditkarte — erkennbar am Badge „Keine Karte". Groq, Google Gemini, GitHub Models und Mistral geben gratis API-Keys ohne jegliche Zahlungsdaten aus.',
      },
      {
        q: 'Was ist die günstigste LLM-API?',
        a: 'Die günstigste LLM-API ist eine kostenlose. Jeder Anbieter auf dieser Seite hat einen Gratis-Tarif oder Gratis-Guthaben, der Einstieg kostet also nichts. Bei hohem Volumen vergleichst du die Bezahlpreise der Anbieter, sobald dein Freikontingent aufgebraucht ist.',
      },
      {
        q: 'Gibt es Open-Source-LLM-APIs?',
        a: 'Ja. Anbieter wie Groq, Together AI und DeepInfra stellen Open-Source-Modelle wie Llama und Mistral über eine kostenlose LLM-API bereit. Du bekommst die besten offenen Modelle über einen gehosteten, OpenAI-kompatiblen Endpoint, ohne eigene Hardware zu betreiben.',
      },
      {
        q: 'Gibt es Open-Source-LLM-API-Keys kostenlos?',
        a: 'Ja. Du kannst bei jedem Anbieter auf dieser Seite einen kostenlosen API-Key holen und damit Open-Source-LLM-Modelle ansprechen. So bekommst du Keys für offene Modelle ohne Kreditkarte — Groq, Together AI und DeepInfra liefern Open-Weight-Modelle genau so aus.',
      },
      {
        q: 'Welcher LLM-API-Anbieter ist am günstigsten?',
        a: 'Für kostenlose Nutzung ist jeder Anbieter hier die günstigste LLM-API — der Start kostet nichts. Wenn du kostenpflichtig skalierst, vergleiche die Preise, denn die Token-Raten schwanken je nach Modell und Region stark.',
      },
      {
        q: 'Kann ich unbegrenzt kostenlose LLM-API-Calls machen?',
        a: 'Kostenlose LLM-API-Calls haben Limits pro Minute und pro Tag, sie sind nicht unbegrenzt. Für Prototypen und leichten Produktivbetrieb reichen sie gut aus. Wird es mehr, wechsle den Anbieter oder steige auf einen bezahlten Plan um.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Anleitungen & Tutorials für kostenlose LLM-APIs | freellm.site',
    description:
      'Anleitungen, Tutorials und Vergleiche zu kostenlosen LLM-APIs. Lerne, wie du Groq, Gemini, GitHub Models und über 90 kostenlose KI-Anbieter nutzt.',
    h1: 'Blog',
    lede: 'Anleitungen und Tutorials zur Nutzung kostenloser LLM-APIs.',
  },
  modelsIndex: {
    title: (m, p) =>
      `Kostenlose LLM-Modelle — ${m} Modelle von ${p} Anbietern durchsuchen | freellm.site`,
    description: (m, p) =>
      `Durchsuche ${m} kostenlose LLM-Modelle von ${p} Anbietern kostenloser LLM-APIs. Vergleiche offene und proprietäre Modelle nach Anbieter und Modalität.`,
    h1: 'Kostenlose LLM-Modelle',
    lede: (m, p) => `${m} Modelle von ${p} Anbietern`,
    allProviders: 'Alle Anbieter',
    allModalities: 'Alle Modalitäten',
    modelId: 'Modell-ID',
    context: 'Kontext',
    modalities: 'Modalitäten',
  },
};

export default de;
