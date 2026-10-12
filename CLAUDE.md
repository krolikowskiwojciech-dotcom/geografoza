# Geografoza — rodzinna aplikacja do nauki geografii (PWA)

Zawsze po polsku. Aplikacja webowa na iPhone'a (dodana do ekranu początkowego), siostra Lingozy, Geografozy i Matmozy. Zbudowana na wzór Geografozy (ten sam silnik ćwiczeń, wygląd i import lekcji).

- **Adres:** https://krolikowskiwojciech-dotcom.github.io/geografoza/ (GitHub Pages z gałęzi `main`, repo publiczne).
- **Dane (prywatne repo `krolikowskiwojciech-dotcom/geografoza-dane`):** `profile/<id>.json` = `{ id, proby: [...] }` (wyniki)
  oraz `nagrania/<id>.mp3` — pełne nagrania „do nauki z podręcznikiem”. Telefon pobiera je tokenem wklejonym raz w Ustawieniach.
- **Profil:** tylko `julek` (Julek, klasa 6, geografia — „Planeta Nowa 6”, Nowa Era). Lista w `narzedzia/geografoza.mjs` (PROFILE).

## Skąd są lekcje

Lekcje robi skill `lekcja-audio` w `iCloud/Audio - do nauki /lekcje-audio` (ekstrakcja ze skanu → narracja według
`references/narracja.md` → pytania, ściąga, definicje w `skrypty/<id>.json` → nagrania ElevenLabs). Geografoza niczego
tam nie pisze, tylko wczytuje gotowe pliki z `KLASA 6/Geografia/Dział */`:

| z lekcje-audio | w Geografozie | gdzie |
|---|---|---|
| `skrypty/<id>.json` (pytania, ściąga, definicje) | zestaw z blokami: Pojęcia, Test wyboru, Prawda czy fałsz, Uzupełnij, Pytania z podręcznika + ściąga | `zestawy/` (publiczne) |
| `audio/na-strone/<id>_www.mp3` | „Krótka powtórka” | `nagrania/` (publiczne — to samo jest na uczsiesprytniej.pl) |
| `audio/do-nauki-z-podrecznikiem/<id>.mp3` | „Lekcja z podręcznikiem” | **tylko** `geografoza-dane/nagrania/` (blisko tekstu książki) |
| ilustracje z `uczsiesprytniej/ilustracje/` | obrazki w ściądze | `obrazy/lekcje/` |

Pełne nagranie i ekstrakcja są blisko tekstu podręcznika — **nigdy** nie trafiają do publicznego repo.

## Prośba „wrzuć nową lekcję do Geografozy” / po nagraniu lekcji geografii Julka

1. `git pull`.
2. `node narzedzia/geografoza.mjs importuj` — wczytuje wszystkie lekcje, wysyła nowe pełne nagrania do `geografoza-dane`
   (pomija niezmienione), sprawdza zestawy i przebudowuje `zestawy/indeks.json`. **Musi przejść bez błędów.**
   Zestawy z importu (`"zrodlo": "lekcje-audio"`) przy każdym imporcie generują się od nowa — błąd w pytaniu poprawiaj
   w `lekcje-audio/.../skrypty/<id>.json`, nie w `zestawy/`. Zachowują się tylko `termin`, `ikona`, `kolor`, `dodano`.
3. Commit + `git push` — Pages publikuje w 1–2 min. Powiedz Wojtkowi, jakie lekcje doszły (pytania, nagrania).

## Kartkówka ze zdjęcia („Julek ma kartkówkę z geografii, zrób mu ćwiczenia z tego zdjęcia”)

1. `git pull`. Sprawdź wyniki: `node narzedzia/geografoza.mjs wyniki` — dołóż ćwiczeń z pomyłek.
2. Rozpoznaj na zdjęciu (podręcznik, karta pracy, zeszyt) **typy zadań** — każdy typ = osobny blok — i zrób
   `zestawy/<rrrr-mm-dd>-julek-<temat>.json` według `ZESTAWY.md` (`termin` = dzień kartkówki). Poziom i treść **jak na zdjęciu**,
   nie trudniej; własnymi słowami. Jeśli ta lekcja jest już zaimportowana, termin można też wpisać w jej zestawie.
   Zdjęcie nie trafia do repo (prawa autorskie wydawnictwa).
3. `node narzedzia/geografoza.mjs katalog` — musi przejść bez błędów.
4. Obejrzyj lokalnie (`python3 -m http.server 8743 --bind 127.0.0.1`, telefon 390 px), potem commit + `git push`.

## Zasady wyglądu (jak w Biologozie)

Wygląd i kod jak w Biologozie — zmiany w Biologozie przenoś tutaj (wspólne pliki: `js/app.js`, `js/gra.js`, `js/store.js`,
`js/dzwieki.js`, `styles.css`). Rogi mniejsze niż w Lingozie (`--r: 14px`, sekcja „zaokrąglenia” na końcu `styles.css`).
Strona główna jak spis treści podręcznika (zwijane działy 3D, lekcje po kolei ze stronami, przyszłe „wkrótce”).
Ekran pytania: karta jak z talii, odpowiedzi 3D z literami A/B/C. Wyciszone dźwięki: lista `WYCISZONE` w `js/dzwieki.js`.

Reszta jak w Lingozie:

- Kroje: nagłówki Libre Baskerville (`.serif`), tekst Jost. **Zero kursywy.**
- **Bez emoji w interfejsie** — ikony SVG z `js/dom.js` (`ik('nazwa')`), kreska 2.1, zaokrąglone końce; nowe dopisuj do `IKONY`.
  Bąble na kartach lekcji to ikony geograficzne (`IKONY_GEO`), pole `ikona` w zestawie.
- Karty 3D z `--brzeg`, akcent geografii: biały globus z siatką, kompas i góry na kartach, siatka kartograficzna w tle ćwiczeń.
- Gwiazdki stonowane na kartach, kolorowe tylko w wynikach (`.gwiazdki-wynik`).
- Żadnych `confirm()`/`alert()` — tylko `okno()`.
- **Bez maskotki** (Wojtek 2026-10-12: grafiki dla 11–13 lat, styl atlasu, bez słodkich obrazków — zasada w `~/CLAUDE.md`);
  `maskotka()` nic nie pokazuje, bo plików `obrazy/maskotka-*.png` nie ma. Prompty na ikony działów i lekcji (ChatGPT) oraz ilustracje do ściąg (Gemini): `ILUSTRACJE.md` (źródło `narzedzia/prompty.json`).
  Arkusze tnie `narzedzia/tnij_arkusz.py` z Lingozy.
- Zmiany wizualne sprawdzaj renderem na 127.0.0.1 przed pushem.

## Kod

- `zestawy/spis.json` — spis treści „Planeta Nowa 6” (działy, lekcje, strony); strona główna pokazuje działy z niego, lekcje bez zestawu jako „wkrótce”.
- `index.html`, `styles.css`, `sw.js` (offline; pełne nagrania w osobnej pamięci `geografoza-nagrania`, której SW nie czyści).
- `js/app.js` (ekrany: lista działami, lekcja z nagraniami i ćwiczeniami, ściąga, ustawienia; odtwarzacz pamięta miejsce),
  `js/gra.js` (przebieg: wybor, pf, wpisz, kolejnosc, pary, otwarte; poprawka po błędzie, podsumowanie, „Wyślij wynik”),
  `js/sprawdz.js` (ocena odpowiedzi — wspólna z narzędziem), `js/store.js` (zapis, synchronizacja, pobieranie prywatnych nagrań),
  `js/dom.js` (pomocniki, ikony, okienka), `js/dzwieki.js` (dźwięki według `~/Projekty/biologoza/DZWIEKI.md` — te same pliki, z zapasem z „Ucz się sprytniej”).
- `narzedzia/dzwiek.sh "<plik>" <nazwa>` — dźwięk z Epidemic Sound → `audio/<nazwa>.mp3` (przycięty, mono, wyrównany).
- `narzedzia/geografoza.mjs` — `importuj | sprawdz [id] | katalog | wyniki`.
- Podgląd lokalny na 127.0.0.1 nie ma tokenu, więc nie zapisuje wyników do prawdziwych danych. Nie testuj z tokenem.
- Po każdej zmianie kodu podbij `CACHE` w `sw.js`, potem commit + push. Nowe lekcje i nagrania tego nie wymagają.
- Zakładanie repo i zmiany uprawnień tylko za zgodą Wojtka.
