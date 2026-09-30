// Bookmarks ("Saqlash") kept per visitor in localStorage.
const KEY = 'foxico:saved';

const read = (): string[] => {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; }
};
const write = (list: string[]) => {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* storage blocked */ }
};

export const isSaved = (slug: string) => read().includes(slug);

export function paint(root: ParentNode = document) {
  const saved = read();
  root.querySelectorAll<HTMLButtonElement>('[data-save]').forEach((b) => {
    const on = saved.includes(b.dataset.save!);
    b.setAttribute('aria-pressed', String(on));
    if (b.dataset.labelOn) b.textContent = on ? b.dataset.labelOn : b.dataset.labelOff!;
  });
}

export function initSaved() {
  document.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>('[data-save]');
    if (!b) return;
    e.stopPropagation();
    e.preventDefault();
    const slug = b.dataset.save!;
    const list = read();
    write(list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug]);
    paint();
  }, true);
  paint();
}
