# Format zestawu (`zestawy/<id>.json`)

Lekcje z projektu `lekcje-audio` robi narzędzie (`importuj`, mają `"zrodlo": "lekcje-audio"`) — nie edytuj ich ręcznie,
popraw JSON lekcji w `lekcje-audio` i zaimportuj jeszcze raz. Ręcznie piszesz tylko kartkówki ze zdjęć.

```json
{
  "id": "2026-10-20-julek-wspolrzedne",       // = nazwa pliku; nie zmieniaj po publikacji (od niego zależą wyniki)
  "dla": ["julek"],
  "tytul": "Współrzędne geograficzne — kartkówka",
  "opis": "Szerokość i długość geograficzna, odczytywanie położenia z mapy.",
  "termin": "2026-10-21",                    // dzień kartkówki (opcjonalnie) — karta trafi do „Przed kartkówką”
  "dodano": "2026-10-19",
  "dzial": "III", "dzialTytul": "…", "lekcja": 2, "strony": "55–58",   // opcjonalnie: miejsce w podręczniku
  "ikona": "globus",                         // globus kompas mapa pinezka gory slonce ksiezyc planeta zegar fala drzewo wulkan termometr ludzie walizka miasto
  "kolor": "zolty",                          // lila | mietowy | zolty | brzoskwinia | niebieski | rozowy | krem
  "ocena": true,                             // pokaż przybliżoną ocenę szkolną w podsumowaniu
  "nagrania": [ { "tytul": "…", "opis": "…", "plik": "nagrania/x.mp3", "minuty": 9 },
                { "tytul": "…", "prywatne": "nagrania/x.mp3", "minuty": 15 } ],   // prywatne = ścieżka w repo geografoza-dane
  "sciaga": ["punkt 1", "punkt 2"], "definicje": { "pojęcie": "opis" },
  "obrazy": [ { "plik": "obrazy/lekcje/x.svg", "po": 4, "podpis": "…" } ],     // obrazek w ściądze pod punktem nr „po”
  "bloki": [ { … } ]                         // jeden typ zadań = jeden blok
}
```

## Blok

```json
{ "id": "szerokosc", "tytul": "Szerokość geograficzna", "polecenie": "Wybierz poprawną odpowiedź.", "ile": 6,
  "jak": { "intro": "…", "zasady": [["Równik", "0°, dzieli Ziemię na półkule N i S"]] },   // „Przypomnij sobie” przed blokiem (opcjonalnie)
  "zadania": [ … ] }
```
`ile` — ile pytań w rundzie (losowane z `zadania`, bez powtórek); bez `ile` — wszystkie.

## Zadania (`kind`)

```json
{ "kind": "wybor", "e": "Która linia ma szerokość 0°?", "a": "równik", "choices": ["równik", "południk 0°", "zwrotnik Raka"], "exp": ["…"], "zrodlo": "s. 7" }
{ "kind": "pf", "e": "Południki mają różną długość.", "a": false, "exp": ["Wszystkie południki są jednakowo długie — biegną od bieguna do bieguna."] }
{ "kind": "wpisz", "e": "Linia łącząca bieguny to ___.", "a": "południk", "inne": ["poludnik"], "exp": ["…"] }
{ "kind": "kolejnosc", "e": "Ułóż planety od Słońca.", "elementy": ["Merkury", "Wenus", "Ziemia", "Mars"], "exp": ["…"] }
{ "kind": "pary", "e": "Połącz kierunek ze skrótem.", "pary": [["północ", "N"], ["wschód", "E"]], "exp": ["…"] }
{ "kind": "otwarte", "e": "Czym różni się szerokość od długości geograficznej?", "a": "wzorcowa odpowiedź", "blad": "typowa pomyłka", "zrodlo": "s. 9" }
```

- `e` — treść; w `wpisz` luka to `___` (najwyżej jedna). `kolejnosc` — `elementy` w POPRAWNEJ kolejności (aplikacja tasuje).
- `wpisz` przyjmuje bez wielkich liter, z innym myślnikiem i kropką na końcu; bez ogonków i z jedną literówką (dwiema przy
  długich słowach) też przechodzi, ale z uwagą o pisowni. Inne poprawne formy dopisz do `inne`.
- `exp` — wyjaśnienie po błędzie (obowiązkowe poza `otwarte`); `zrodlo` — gdzie w książce szukać (pokazywane jako „Zajrzyj do książki”).
- `obraz` (przy zadaniu) — własny rysunek z `obrazy/`; nigdy zdjęcie strony podręcznika.
- Wszystko własnymi słowami — repo jest publiczne.
