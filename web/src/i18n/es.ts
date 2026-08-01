import type { Strings } from './en';

const es: Strings = {
  nav: { models: 'Modelos', blog: 'Blog', about: 'Acerca de', github: 'GitHub', language: 'Idioma' },
  footer: {
    privacy: 'Privacidad',
    terms: 'Términos',
    about: 'Acerca de',
    contact: 'Contacto',
    cookies: 'Cookies',
    legalNav: 'Enlaces legales y del sitio',
    updated: 'Datos actualizados con regularidad',
    contribute: 'Contribuye en GitHub',
  },
  common: {
    provider: 'Proveedor',
    models: 'Modelos',
    card: '¿Tarjeta?',
    maxContext: 'Contexto máx.',
    lastVerified: 'Última verificación',
    getKey: 'Obtener clave',
    getKeyCta: 'Obtener clave →',
    credits: 'Créditos',
    expiry: 'Caducidad',
    freeTier: 'Nivel gratuito',
    readMore: 'Leer más →',
    cardLabel: {
      no: 'Sin tarjeta',
      registration: 'Registro por email',
      phone: 'Verificación por teléfono',
      yes: 'Tarjeta obligatoria',
    },
  },
  home: {
    title: 'API LLM gratis — Claves de API LLM gratuitas de más de 30 proveedores | freellm.site',
    description: (p, m) =>
      `Encuentra una API LLM gratis sin tarjeta de crédito. ${p} proveedores, ${m} modelos — Groq, Gemini, Mistral, GitHub Models. Consigue tu clave de API LLM gratis en segundos.`,
    eyebrow: d => `Gratis y verificado · Actualizado ${d}`,
    h1a: 'Todas las API LLM gratis.',
    h1b: 'En un solo lugar.',
    lede: p =>
      `Niveles gratuitos permanentes y planes con créditos gratis de ${p} proveedores: sin búsquedas interminables ni muros de pago. Encuentra tu clave en segundos.`,
    statProviders: 'Proveedores',
    statModels: 'Modelos',
    statAlwaysFree: 'Siempre gratis',
    quickPick: 'Elección rápida',
    quickPickMeta: (n, ctx) =>
      `— ${n} modelos · ${ctx} de contexto · sin tarjeta · gratis para siempre`,
    quickPickCta: 'Consigue tu clave gratis →',
    permanentTitle: 'Niveles gratuitos permanentes',
    creditsTitle: 'Créditos gratis al registrarte',
    seoTitle: 'Todas las API LLM gratis en un solo directorio',
    seoP1: (p, m) =>
      `Encontrar una API LLM gratis que funcione —y sin tarjeta de crédito— no debería costarte una tarde entera saltando entre pestañas. Este directorio recoge ${p} proveedores y ${m} modelos, desde niveles siempre gratuitos hasta planes con créditos, para que consigas una clave de API LLM gratis y empieces a construir en minutos. Todas las API de esta lista exponen un `,
    seoP1Link: 'endpoint compatible con OpenAI',
    seoP1End: ', así que cambiar de proveedor es cuestión de una línea.',
    seoP2:
      'Tanto si buscas la API LLM más barata para un proyecto personal, los mejores modelos LLM de código abierto como Llama y Mistral, o una API LLM gratis y rápida para programar, las tablas de arriba los comparan por modelos, ventana de contexto y si exigen tarjeta. ¿Necesitas escalar más adelante? Empieza gratis y luego compara precios entre proveedores. Para guías prácticas, consulta nuestro ',
    seoP2Link1: 'ranking de las mejores API LLM gratis',
    seoP2Link2: 'mejores API LLM de código abierto',
    seoP2Link3: 'mejores API LLM gratis para programar',
    guidesTitle: 'Guías',
    faqTitle: 'Preguntas frecuentes sobre API LLM gratis',
    faqs: p => [
      {
        q: '¿Cuál es la mejor API LLM gratis?',
        a: `La mejor API LLM gratis depende de tu caso de uso. Groq es la más rápida, Google Gemini tiene la mayor ventana de contexto gratuita y GitHub Models no requiere un registro aparte. Los ${p} proveedores de esta lista ofrecen una API LLM gratis sin coste inicial.`,
      },
      {
        q: '¿Cómo consigo una clave de API LLM gratis?',
        a: 'Elige un proveedor de las tablas de arriba, pulsa «Obtener clave» y regístrate en su consola. La mayoría emite una clave de API LLM gratis al instante con solo un correo electrónico, sin tarjeta de crédito. Después la configuras como tu clave de API y empiezas a hacer peticiones.',
      },
      {
        q: '¿Hay API LLM gratis sin tarjeta de crédito?',
        a: 'Sí. Muchos proveedores de esta lista ofrecen una API LLM gratis sin tarjeta de crédito: los identifica la etiqueta «Sin tarjeta». Groq, Google Gemini, GitHub Models y Mistral entregan claves de API gratuitas sin pedir datos de pago.',
      },
      {
        q: '¿Cuál es la API LLM más barata?',
        a: 'La API LLM más barata es una gratuita. Todos los proveedores de esta página tienen nivel gratuito o créditos gratis, así que empezar no te cuesta nada. Para volúmenes altos, compara los precios de pago de cada proveedor cuando se agoten tus llamadas gratuitas.',
      },
      {
        q: '¿Existen API LLM de código abierto?',
        a: 'Sí. Proveedores como Groq, Together AI y DeepInfra sirven modelos LLM de código abierto como Llama y Mistral a través de una API LLM gratis. Accedes a los mejores modelos abiertos mediante un endpoint alojado y compatible con OpenAI, sin gestionar hardware propio.',
      },
      {
        q: '¿Hay claves de API LLM de código abierto disponibles gratis?',
        a: 'Sí. Puedes obtener una clave de API gratis de cualquier proveedor de esta página y usarla para llamar a modelos LLM de código abierto. Así consigues claves para modelos abiertos sin tarjeta de crédito: Groq, Together AI y DeepInfra sirven modelos de pesos abiertos de esta forma.',
      },
      {
        q: '¿Cuál es el proveedor de API LLM más barato?',
        a: 'Para uso gratuito, cualquier proveedor de aquí es la API LLM más barata: empezar no cuesta nada. Cuando necesites escalar de pago, compara precios entre proveedores, porque las tarifas por token varían mucho según el modelo y la región.',
      },
      {
        q: '¿Puedo hacer llamadas a una API LLM gratis sin límites?',
        a: 'Las llamadas gratuitas tienen límites por minuto y por día, no son ilimitadas. Aun así son suficientes para prototipar y para producción ligera. Cuando te quedes corto, cambia de proveedor o pasa a un plan de pago.',
      },
    ],
  },
  blogIndex: {
    title: 'Blog — Guías y tutoriales de API LLM gratis | freellm.site',
    description:
      'Guías, tutoriales y comparativas de API LLM gratis. Aprende a usar Groq, Gemini, GitHub Models y más de 90 proveedores de IA gratuitos.',
    h1: 'Blog',
    lede: 'Guías y tutoriales para usar API LLM gratis.',
  },
  modelsIndex: {
    title: (m, p) => `Modelos LLM gratis — Explora ${m} modelos de ${p} proveedores | freellm.site`,
    description: (m, p) =>
      `Explora ${m} modelos LLM gratis de ${p} proveedores de API LLM gratuitas. Compara modelos abiertos y propietarios por proveedor y modalidad.`,
    h1: 'Modelos LLM gratis',
    lede: (m, p) => `${m} modelos de ${p} proveedores`,
    allProviders: 'Todos los proveedores',
    allModalities: 'Todas las modalidades',
    modelId: 'ID del modelo',
    context: 'Contexto',
    modalities: 'Modalidades',
  },
};

export default es;
