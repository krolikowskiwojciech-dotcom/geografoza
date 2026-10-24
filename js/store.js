// Stan w przeglądarce i synchronizacja prób z prywatnym repo geografoza-dane (jak w Lingozie: GitHub API + token).
// Pod *.ogarnijmaterial.pl zamiast tokenu: serwer ogarnijmaterial.pl (/api/gh, ciasteczko sesji, dane w Cloudflare KV,
// odpowiedzi w kształcie API GitHuba — js/konto.js).
// Każde dziecko ma plik profile/<id>.json = { id, proby: [...], u }. Próby się tylko dopisują, więc scalanie
// dwóch kopii to suma bez powtórzeń (po id próby).

import { OGARNIJ, TEST, POSREDNIK } from './konto.js';

export const LS = {
  get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch { /* tryb prywatny */ } },
};

export const REPO_DANYCH = 'krolikowskiwojciech-dotcom/geografoza-dane';
const API = 'https://api.github.com';
const BRAK_REPO_TOKEN = 'Token nie widzi repozytorium geografoza-dane. W ustawieniach tokenu na GitHubie: Repository access → Only select repositories → dodaj geografoza-dane.';
const BRAK_ZAPISU_TOKEN = 'Token widzi repozytorium, ale nie może w nim zapisywać. W ustawieniach tokenu: Permissions → Repositories → Contents → Read and write.';

const BRAK_REPO = OGARNIJ ? 'Serwer ogarnijmaterial.pl nie wpuszcza do wyników Julka. Otwórz ogarnijmaterial.pl i wybierz Julka.' : BRAK_REPO_TOKEN;
const BRAK_ZAPISU = OGARNIJ ? 'Serwer ogarnijmaterial.pl nie przyjął wyników. Spróbuj za chwilę albo napisz do taty.' : BRAK_ZAPISU_TOKEN;
const ZRODLO = OGARNIJ ? 'Serwer' : 'GitHub'; // w komunikatach błędów

export const profil = () => LS.get('gz.profil');
export const ustawProfil = (id) => (id ? LS.set('gz.profil', id) : LS.del('gz.profil'));
export const dzwiek = () => LS.get('gz.dzwiek', true);
export const ustawDzwiek = (v) => LS.set('gz.dzwiek', v);
export const token = () => LS.get('gz.token');
export const ustawToken = (t) => (t ? LS.set('gz.token', t) : LS.del('gz.token'));

// czy wyniki i pełne nagrania mają skąd przyjść: na ogarnijmaterial.pl zawsze (sesja), na github.io — gdy jest token;
// w teście lokalnym (?ogarnij=…) nigdy, żeby próby nie trafiły do prawdziwych wyników
export const polaczone = () => (OGARNIJ ? !TEST : !!token());

export const proby = (id) => LS.get('gz.proby.' + id, []);
const zapiszProby = (id, lista) => LS.set('gz.proby.' + id, lista.slice(-500));

export function dodajProbe(id, proba) {
  zapiszProby(id, [...proby(id), proba]);
}

// najlepsza i ostatnia próba danego zestawu (całego, nie pojedynczego bloku)
export function wynikiZestawu(id, zestaw) {
  const lista = proby(id).filter((p) => p.zestaw === zestaw && !p.tylkoBlok);
  return { ostatnia: lista[lista.length - 1] || null, ile: lista.length };
}

function scal(a = [], b = []) {
  const m = new Map();
  for (const p of [...a, ...b]) m.set(p.id, p);
  return [...m.values()].sort((x, y) => x.d - y.d);
}

const enc = (str) => {
  const bytes = new TextEncoder().encode(str);
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(s);
};
const dec = (b64) => new TextDecoder().decode(Uint8Array.from(atob(b64.replace(/\s/g, '')), (c) => c.charCodeAt(0)));

async function gh(path, opts = {}) {
  if (OGARNIJ) {
    if (TEST) throw new Error('Tryb testowy: bez połączenia z danymi rodziny.');
    const r = await fetch(POSREDNIK + path, {
      cache: 'no-store', credentials: 'include', ...opts,
      headers: { Accept: 'application/vnd.github+json', ...(opts.headers || {}) },
    });
    if (r.status === 401) throw new Error('Sesja na ogarnijmaterial.pl wygasła. Otwórz ogarnijmaterial.pl i wybierz Julka jeszcze raz.');
    return r;
  }
  const r = await fetch(API + path, {
    cache: 'no-store', ...opts,
    headers: { Authorization: `Bearer ${token()}`, Accept: 'application/vnd.github+json', ...(opts.headers || {}) },
  });
  if (r.status === 401) throw new Error('Token jest nieprawidłowy albo wygasł.');
  return r;
}

// pobiera plik profilu, scala z lokalnymi próbami i odsyła, jeśli coś doszło
export async function synchronizuj(id) {
  if (!polaczone() || !id) return { stan: 'wylaczona' };
  const plik = `/repos/${REPO_DANYCH}/contents/profile/${id}.json`;
  for (let proba = 0; proba < 3; proba++) {
    if (proba === 0 && !OGARNIJ) { // sprawdzenie zakresu tokenu; pośrednik ogarnijmaterial.pl obsługuje tylko pliki
      const repo = await gh(`/repos/${REPO_DANYCH}`);
      if (repo.status === 404 || repo.status === 403) throw new Error(BRAK_REPO);
    }
    const r = await gh(plik);
    if (!r.ok && r.status !== 404) throw new Error(r.status === 403 ? BRAK_REPO : `${ZRODLO}: błąd ${r.status}`);
    const j = r.ok ? await r.json() : null;
    const zdalne = j ? JSON.parse(dec(j.content || '') || 'null') : null;
    const razem = scal(zdalne?.proby, proby(id));
    zapiszProby(id, razem);
    if (zdalne && zdalne.proby.length === razem.length) return { stan: 'ok' };
    const body = { message: `Geografia: wyniki ${id}`, content: enc(JSON.stringify({ id, proby: razem, u: Date.now() }) + '\n') };
    if (j?.sha) body.sha = j.sha;
    const w = await gh(plik, { method: 'PUT', body: JSON.stringify(body) });
    if (w.status === 409 || w.status === 422) continue;
    if (!w.ok) throw new Error(w.status === 403 || w.status === 404 ? BRAK_ZAPISU : `${ZRODLO}: błąd ${w.status} przy zapisie`);
    return { stan: 'ok' };
  }
  throw new Error('Nie udało się zapisać wyników (konflikt). Spróbuj za chwilę.');
}

// pełne nagrania (blisko tekstu podręcznika) leżą tylko w prywatnym repo — pobieramy je tokenem (albo przez pośrednika)
// i trzymamy w pamięci podręcznej telefonu, żeby drugi raz grały bez sieci
const CACHE_NAGRAN = 'geografoza-nagrania';
// klucz zawiera wersję pliku: po ponownym nagraniu (np. w nowszym modelu) telefon pobiera nowy plik, a stary usuwa
const kluczNagrania = (sciezka, wersja) => `https://prywatne.geografoza/${sciezka}${wersja ? '?v=' + wersja : ''}`;
export async function nagraniePrywatne(sciezka, wersja) {
  const klucz = kluczNagrania(sciezka, wersja);
  try {
    const c = await caches.open(CACHE_NAGRAN);
    const jest = await c.match(klucz);
    if (jest) return jest.blob();
    for (const r of await c.keys()) if (r.url.split('?')[0] === klucz.split('?')[0]) await c.delete(r); // starsze wersje
  } catch { /* brak Cache Storage */ }
  if (!polaczone()) throw new Error(TEST ? 'Tryb testowy: pełne nagrania się nie pobierają.' : 'Pełne nagranie jest prywatne. Wklej token w Ustawieniach, żeby je odtworzyć.');
  const r = await gh(`/repos/${REPO_DANYCH}/contents/${sciezka.split('/').map(encodeURIComponent).join('/')}`, { headers: { Accept: 'application/vnd.github.raw' } });
  if (r.status === 404 || r.status === 403) throw new Error(OGARNIJ ? 'Nie widzę tego nagrania w prywatnym repozytorium. Napisz do taty.' : 'Nie widzę tego nagrania w prywatnym repozytorium. Sprawdź token w Ustawieniach.');
  if (!r.ok) throw new Error(`${ZRODLO}: błąd ${r.status} przy pobieraniu nagrania`);
  const blob = new Blob([await r.arrayBuffer()], { type: 'audio/mpeg' });
  try { (await caches.open(CACHE_NAGRAN)).put(klucz, new Response(blob, { headers: { 'Content-Type': 'audio/mpeg' } })); } catch { /* pełna pamięć */ }
  return blob;
}
// ogarnijmaterial.pl: adres pliku do odtwarzania strumieniowo (<audio src>, Range, ciasteczko leci samo) — bez czekania
// na pobranie całości; w teście lokalnym i na github.io — null (tam nagranie pobiera się tokenem do pamięci)
export const adresNagrania = (sciezka) => (OGARNIJ && !TEST
  ? `${POSREDNIK}/repos/${REPO_DANYCH}/contents/${sciezka.split('/').map(encodeURIComponent).join('/')}?raw=1` : null);

export async function maNagranie(sciezka, wersja) {
  try { return !!(await (await caches.open(CACHE_NAGRAN)).match(kluczNagrania(sciezka, wersja))); } catch { return false; }
}
