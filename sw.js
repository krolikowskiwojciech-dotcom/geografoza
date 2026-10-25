// Offline i szybki start (Wojtek 2026-10-24): pliki aplikacji od razu z pamięci, a w tle ściąga się nowa wersja
// (stale-while-revalidate) — zmiany widać przy następnym otwarciu. Lekcje (zestawy/*.json) najpierw z sieci, ale czekamy
// najwyżej chwilę; bez sieci albo przy wolnej sieci — z pamięci. Krótkie nagrania (nagrania/*.mp3) idą prosto z sieci,
// bo odtwarzacz prosi o kawałki pliku; pełne nagrania z prywatnego repo trzyma osobna pamięć „geografoza-nagrania”
// (js/store.js), której ten plik nie czyści. Zapytania do api.github.com i ogarnijmaterial.pl (inne źródło) — bez SW.
const CACHE = 'geografoza-v12';
const SHELL = ['./', 'index.html', 'styles.css', 'manifest.webmanifest', 'js/app.js', 'js/dom.js', 'js/gra.js', 'js/sprawdz.js',
  'js/store.js', 'js/konto.js', 'js/dzwieki.js', 'zestawy/indeks.json', 'zestawy/spis.json', 'ikony/ikona-180.png', 'ikony/ikona-192.png',
  'fonts/Jost.ttf', 'fonts/LibreBaskerville.ttf',
  'audio/przycisk.mp3', 'audio/wybor.mp3', 'audio/cofnij.mp3',
  'audio/dobra-odpowiedz-podstawowa.mp3', 'audio/zla-odpowiedz.mp3'];
const ZACHOWAJ = [CACHE, 'geografoza-nagrania'];
const CZEKAJ_NA_LEKCJE_MS = 1500;

self.addEventListener('install', (e) => {
  // cache: 'reload' — z pominięciem pamięci przeglądarki, żeby nowa wersja nie złożyła się ze starych plików
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => !ZACHOWAJ.includes(x)).map((x) => caches.delete(x)))).then(() => self.clients.claim()));
});

function zSieci(req) {
  return fetch(req.url, { cache: 'no-cache' }).then((res) => {
    if (res.ok && res.type === 'basic') { const kopia = res.clone(); caches.open(CACHE).then((c) => c.put(req, kopia)); }
    return res;
  });
}
const zPamieci = (req) => caches.match(req, { ignoreSearch: true });
const strona = () => caches.match('index.html').then((r) => r || caches.match('./'));

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;
  if (url.pathname.includes('/nagrania/')) return; // odtwarzacz sam rozmawia z siecią (zapytania Range)

  if (url.pathname.includes('/zestawy/') && url.pathname.endsWith('.json')) {
    // lekcje: świeże z sieci, ale bez długiego czekania na starcie
    const siec = zSieci(req);
    e.waitUntil(siec.catch(() => {}));
    e.respondWith(new Promise((ok) => {
      let gotowe = false;
      const daj = (r) => { if (!gotowe && r) { gotowe = true; ok(r); } };
      const zapas = () => zPamieci(req).then((r) => (r ? daj(r) : siec.then(daj, () => daj(Response.error()))));
      const t = setTimeout(zapas, CZEKAJ_NA_LEKCJE_MS);
      siec.then((r) => { clearTimeout(t); if (r.ok) daj(r); else zapas(); }, () => { clearTimeout(t); zapas(); });
    }));
    return;
  }

  // pliki aplikacji: od razu z pamięci, odświeżanie w tle
  e.respondWith(zPamieci(req).then((jest) => {
    const siec = zSieci(req);
    if (jest) { e.waitUntil(siec.catch(() => {})); return jest; }
    return siec.catch(() => (req.mode === 'navigate' ? strona() : Response.error()));
  }));
});
