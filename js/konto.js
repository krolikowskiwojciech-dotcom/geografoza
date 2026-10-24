// Konto rodziny na ogarnijmaterial.pl (Wojtek 2026-10-24). Aplikacja działa też pod geografia.ogarnijmaterial.pl:
// tam nie ma wyboru profilu ani tokenu — strona główna trzyma ciasteczko sesji na całą domenę, /api/ja mówi, kto patrzy,
// a wyniki i pełne nagrania idą przez /api/gh (bez nagłówka Authorization; dane w Cloudflare KV, odpowiedzi w kształcie
// API GitHuba, plik surowo pod ...contents/<ścieżka>?raw=1 z obsługą Range). Na github.io wszystko po staremu.
//
// Test lokalny (TYLKO 127.0.0.1 / localhost): ?ogarnij=julian | aniela | wojtek | magda | 401
// udaje odpowiedź /api/ja i niczego nie wysyła — ani do ogarnijmaterial.pl, ani do prawdziwych danych.

export const STRONA = 'https://ogarnijmaterial.pl/';
export const KONTA = 'https://ogarnijmaterial.pl/#konta';
export const POSREDNIK = 'https://ogarnijmaterial.pl/api/gh';

const host = location.hostname;
const lokalny = host === '127.0.0.1' || host === 'localhost';
export const TEST = lokalny ? new URLSearchParams(location.search).get('ogarnij') : null;
export const OGARNIJ = host === 'ogarnijmaterial.pl' || host.endsWith('.ogarnijmaterial.pl') || !!TEST;

// konta na ogarnijmaterial.pl → imiona; „julian” to w Geografii profil „julek” (pliki danych zostają pod starą nazwą)
const IMIONA = { wojtek: 'Wojtek', magda: 'Magda', aniela: 'Aniela', julian: 'Julek' };
export const PROFIL_JULKA = 'julek';
export const imie = (id) => IMIONA[id] || (id ? id[0].toUpperCase() + id.slice(1) : '');
export const inicjal = (id) => (imie(id)[0] || '?').toUpperCase();

let ja = null; // { id, email, maPin } po udanym /api/ja
export const kto = () => ja;

const OSTATNI = 'gz.om.ja'; // ostatnia znana osoba — żeby bez sieci aplikacja dalej działała jako Julek
const zapamietaj = (id) => { try { localStorage.setItem(OSTATNI, JSON.stringify(id)); } catch { /* tryb prywatny */ } };
const ostatni = () => { try { return JSON.parse(localStorage.getItem(OSTATNI)); } catch { return null; } };

// → { stan: 'julek' } | { stan: 'inna', id } | { stan: 'brak' } (przekierowanie w toku) | { stan: 'blad', tekst }
export async function sprawdzKonto() {
  if (TEST) {
    if (TEST === '401') return { stan: 'brak' }; // w teście bez przekierowania — widać pusty ekran „przekierowuję”
    ja = { id: TEST, email: TEST + '@test', maPin: true };
    return TEST === 'julian' ? { stan: 'julek' } : { stan: 'inna', id: TEST };
  }
  let r;
  try {
    r = await fetch(STRONA + 'api/ja', { credentials: 'include', cache: 'no-store' });
  } catch {
    // bez sieci: jeśli ostatnio był tu Julek, działamy dalej offline (wyniki wyślą się przy następnej synchronizacji)
    if (ostatni() === 'julian') { ja = { id: 'julian' }; return { stan: 'julek' }; }
    return { stan: 'blad', tekst: 'Nie mogę sprawdzić, kto jest zalogowany — brak połączenia z internetem.' };
  }
  if (r.status === 401) { location.replace(STRONA); return { stan: 'brak' }; }
  if (!r.ok) {
    if (ostatni() === 'julian') { ja = { id: 'julian' }; return { stan: 'julek' }; }
    return { stan: 'blad', tekst: `Strona ogarnijmaterial.pl odpowiedziała błędem ${r.status}. Spróbuj za chwilę.` };
  }
  ja = await r.json();
  zapamietaj(ja.id);
  return ja.id === 'julian' ? { stan: 'julek' } : { stan: 'inna', id: ja.id };
}
