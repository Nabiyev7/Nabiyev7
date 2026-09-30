import destinations from '../data/destinations.json';
import posts from '../data/posts.json';

export type Destination = (typeof destinations)[number];
export type Post = (typeof posts)[number];
export { destinations, posts };

/** Unsplash photo URL at a given width. */
export const photo = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const srcset = (id: string, widths: number[]) =>
  widths.map((w) => `${photo(id, w)} ${w}w`).join(', ');

/** Prefix a site path with the configured base (GitHub Pages sub-path). */
export const url = (path = '/') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (path.startsWith('/') ? path : '/' + path);
};

const MONTHS = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]}, ${y}`;
};

export const destBySlug = (slug: string) => destinations.find((d) => d.slug === slug)!;

export const facts = (d: Destination) => [
  { label: 'Eng yaxshi vaqt', value: d.best },
  { label: 'Davomiyligi', value: d.duration },
  { label: 'Narxi', value: `${d.price} dan` },
  { label: 'Guruh', value: d.group },
  { label: 'Valyuta', value: d.currency },
  { label: 'Vaqt farqi', value: d.timeDiff },
];
