import { graj } from './dzwieki.js';

// Drobne pomocniki DOM, ikony (interfejs i geograficzne do bąbli na kartach) i własne okienka zamiast alert/confirm.

export function h(tag, attrs = {}, ...dzieci) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
    else if (k === 'class') el.className = v;
    else if (k === 'html') el.innerHTML = v;
    else el.setAttribute(k, v === true ? '' : v);
  }
  for (const d of dzieci.flat(Infinity)) if (d != null && d !== false) el.append(d instanceof Node ? d : String(d));
  return el;
}

// kolory kart jak w Lingozie (pastelowe, z ciemniejszym „brzegiem” 3D)
export const KOLORY = ['kolor-mietowy', 'kolor-lila', 'kolor-zolty', 'kolor-brzoskwinia', 'kolor-niebieski', 'kolor-rozowy'];
export const kolor = (i) => KOLORY[((i % KOLORY.length) + KOLORY.length) % KOLORY.length];

// ikony — ten sam rysunek co w Lingozie (jedna kreska 2.1, zaokrąglone końce)
const S = (w) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">${w}</svg>`;
const IKONY = {
  wstecz: S('<path d="M15 5l-7 7 7 7"/>'),
  zamknij: S('<path d="M6 6l12 12M18 6 6 18"/>'),
  zebatka: S('<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/>'),
  ptaszek: S('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
  dalej: S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  wyslij: S('<path d="M21 3 10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>'),
  powtorz: S('<path d="M4 12a8 8 0 0 1 14-5.3L20 9"/><path d="M20 4v5h-5"/><path d="M20 12a8 8 0 0 1-14 5.3L4 15"/><path d="M4 20v-5h5"/>'),
  sluchawki: S('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4.5" height="6.5" rx="2"/><rect x="16.5" y="14" width="4.5" height="6.5" rx="2"/>'),
  graj: S('<path d="M8 5.5v13l10.5-6.5z"/>'),
  pauza: S('<path d="M9 5.5v13M15 5.5v13"/>'),
  ksiazka: S('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>'),
  sciaga: S('<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 12h6M10 16h6"/>'),
  klodka: S('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V7.5a3.5 3.5 0 0 1 7 0v3"/>'),
  cofnij15: S('<path d="M4 12a8 8 0 1 0 2.4-5.7L4 8.5"/><path d="M4 4v4.5h4.5"/>'),
  // geografia — do bąbli na kartach zestawów (pole „ikona” w zestawie)
  globus: S('<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="3.8" ry="9"/><path d="M3 12h18M4.4 7.5h15.2M4.4 16.5h15.2"/>'),
  kompas: S('<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2 5.2-5.2 2 2-5.2z"/>'),
  mapa: S('<path d="M3 6.5l6-2.5 6 2.5 6-2.5v13.5l-6 2.5-6-2.5-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>'),
  pinezka: S('<path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.4"/>'),
  gory: S('<path d="M2.5 19.5l6.5-11 4.2 6.8 2.6-3.6 5.7 7.8z"/><path d="M7 11.8l2 1.4 2-1.4"/>'),
  slonce: S('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>'),
  ksiezyc: S('<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10z"/>'),
  planeta: S('<circle cx="12" cy="12" r="5.6"/><path d="M7.2 9.4C3.6 11 1.7 12.9 2.3 14.2c.9 1.9 6.6.8 12.3-2.4s9.4-6.9 8.5-8.8c-.5-1.1-2.5-1.1-5.3-.1"/>'),
  zegar: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'),
  fala: S('<path d="M2.5 9c2.5-2 4.5-2 7 0s4.5 2 7 0 3.5-1.5 5-.5M2.5 15c2.5-2 4.5-2 7 0s4.5 2 7 0 3.5-1.5 5-.5"/>'),
  drzewo: S('<path d="M12 3l-6 8h3.5l-4 5.5h13l-4-5.5H18z"/><path d="M12 16.5v4.5"/>'),
  wulkan: S('<path d="M3 20.5l5.5-10h7l5.5 10z"/><path d="M10 10.5l1-2.5h2l1 2.5M12 5.5V3M9.2 4.6 7.8 3.2M14.8 4.6l1.4-1.4"/>'),
  termometr: S('<path d="M10 4.5a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z"/><path d="M12 9v7.5"/><path d="M16.5 6h2M16.5 9.5h2"/>'),
  ludzie: S('<circle cx="9" cy="8" r="3"/><path d="M3.5 19.5c.4-3.3 2.6-5.3 5.5-5.3s5.1 2 5.5 5.3"/><circle cx="16.5" cy="9" r="2.4"/><path d="M15.6 14.4c2.6-.4 4.6 1.4 4.9 4.6"/>'),
  walizka: S('<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5V5.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 5.5v2M8 7.5v12M16 7.5v12"/>'),
  miasto: S('<path d="M3 20.5h18M5 20.5V10l4-2.5v13M9 20.5V4.5h6v16M15 20.5V11h4.5v9.5"/><path d="M11.5 8h1M11.5 11.5h1M11.5 15h1"/>'),
};
export const ik = (nazwa, klasa = '') => h('span', { class: `ik ik-${nazwa} ${klasa}`, html: IKONY[nazwa] || IKONY.globus });
export const IKONY_GEO = ['globus', 'kompas', 'mapa', 'pinezka', 'gory', 'slonce', 'ksiezyc', 'planeta', 'zegar', 'fala', 'drzewo', 'wulkan', 'termometr', 'ludzie', 'walizka', 'miasto'];

// ilustracje w stylu atlasu geograficznego (obrazy/ilustracje/, cięte z arkuszy ChatGPT — narzedzia/prompty.json)
const ARABSKIE = { I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6 };
export const obrazDzialu = (nr) => (ARABSKIE[nr] ? `obrazy/ilustracje/dzial-${ARABSKIE[nr]}.webp` : null);
export const obrazLekcji = (dzial, lekcja, typ) => (typ ? `obrazy/ilustracje/${typ}.webp`
  : ARABSKIE[dzial] && lekcja ? `obrazy/ilustracje/dz${ARABSKIE[dzial]}-l${lekcja}.webp` : null);
export const ilustracja = (src, klasa = '') => (src ? h('img', { class: 'ilustr ' + klasa, src, alt: '', loading: 'lazy', decoding: 'async', onerror: (e) => e.target.remove() }) : null);

// maskotka 3D (obrazy/maskotka-<poza>.png); dopóki pliku nie ma, element po prostu znika
export const maskotka = (poza, klasa = '') => h('img', { class: 'maskotka ' + klasa, src: `obrazy/maskotka-${poza}.png`, alt: '', onerror: (e) => e.target.remove() });

// własne okienko (wysuwane od dołu): okno({ tytul, tresc, przyciski: [{ tekst, wartosc, klasa }] }) → Promise<wartosc>
export function okno({ tytul, tresc, poza = 'mysli', przyciski = [{ tekst: 'Jasne', wartosc: true, klasa: 'glowny' }] }) {
  return new Promise((ok) => {
    const tlo = h('div', { class: 'okno-tlo', onclick: () => zamknij(null) });
    const pudlo = h('div', { class: 'okno', role: 'dialog', 'aria-modal': 'true', 'aria-label': tytul },
      maskotka(poza, 'okno-maskotka'),
      h('div', { class: 'okno-tytul serif' }, tytul),
      typeof tresc === 'string' ? h('p', { class: 'okno-tekst' }, tresc) : tresc,
      h('div', { class: 'okno-przyciski' }, przyciski.map((p) => h('button', { class: 'btn ' + (p.klasa || 'jasny'), type: 'button', onclick: () => zamknij(p.wartosc) }, p.tekst))));
    const klaw = (e) => { if (e.key === 'Escape') zamknij(null); };
    function zamknij(w) {
      tlo.classList.remove('wid'); pudlo.classList.remove('wid');
      document.removeEventListener('keydown', klaw);
      setTimeout(() => { tlo.remove(); pudlo.remove(); }, 250);
      ok(w);
    }
    document.body.append(tlo, pudlo);
    graj('okno');
    document.addEventListener('keydown', klaw);
    requestAnimationFrame(() => { tlo.classList.add('wid'); pudlo.classList.add('wid'); });
    pudlo.querySelector('.okno-przyciski button:last-child')?.focus({ preventScroll: true });
  });
}

export const odm = (n, a, b, c) => {
  const j = n % 10, d = n % 100;
  return n === 1 ? a : j >= 2 && j <= 4 && (d < 12 || d > 14) ? b : c;
};

// losowanie
export const los = {
  int: (a, b) => a + Math.floor(Math.random() * (b - a + 1)),
  wybierz: (t) => t[Math.floor(Math.random() * t.length)],
  tasuj: (t) => { const a = [...t]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
};
