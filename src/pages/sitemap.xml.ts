import type { APIRoute } from 'astro';
import { destinations, posts, url } from '../lib/utils';

export const GET: APIRoute = ({ site }) => {
  const paths = [
    '/', '/yonalishlar/', '/blog/', '/aloqa/',
    ...destinations.map((d) => `/yonalishlar/${d.slug}/`),
    ...posts.map((p) => `/blog/${p.slug}/`),
  ];
  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    paths.map((p) => `  <url><loc>${new URL(url(p), site).href}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
