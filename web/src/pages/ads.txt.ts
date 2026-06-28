import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const adsenseId = import.meta.env.PUBLIC_ADSENSE_ID || 'ca-pub-XXXXXXXXXX';
  const pubId = adsenseId.replace(/^ca-pub-/, 'pub-');
  return new Response(`google.com, ${pubId}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
