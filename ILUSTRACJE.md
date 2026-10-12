# Ilustracje Geografozy — prompty

**Styl: atlas geograficzny** — tusz z delikatną akwarelą, dokładne formy terenu, spokojne barwy, jak tablice w dobrym atlasie.
To geograficzny odpowiednik „atlasu przyrodniczego”, który Wojtek wybrał dla Biologozy (2026-10-12), po odrzuceniu słodkiej
plasteliny 3D. Zasada całego projektu: grafika dla 11–13 lat (`~/CLAUDE.md`). **Bez maskotki.** Motywy konkretne
(fiord Lysefjorden, gejzer Strokkur, Troki), nie ogólne. Przed całością próbka.

Dwa rodzaje obrazów, ta sama technika:
1. **Ikony do aplikacji** (ChatGPT): działy i lekcje, arkusze z siatką, tnie je `tnij_arkusz.py` z Lingozy (nazwy komórek niżej).
2. **Ilustracje do ściąg** rozdziału 3 (ChatGPT albo Gemini): pionowe, bez napisów. Obraz zapisz w Pobranych pod nazwą
   z nagłówka (np. `geo5-wybrzeze`); `python3 scripts/dodaj_ilustracje.py` w `uczsiesprytniej` wrzuci go do `ilustracje/`,
   potem dopisuję go do `obrazy` w JSON lekcji (pole `po` i podpis niżej) i importuję do Geografozy.

Źródło wszystkich promptów: `narzedzia/prompty.json`.

# 1. Ikony do aplikacji (ChatGPT)

## Krok 1 — próbka stylu (tylko arkusz działów, 6 ilustracji)

```
Create one square image (1:1) with a grid of 3 columns × 2 rows = 6 separate atlas illustrations for the chapters of a 6th-grade geography textbook. Row 1: (1) a brass desk globe with a fine graticule of meridians and parallels, beside a pair of dividers and a magnetic compass — geographic coordinates; (2) a small orbit diagram: the Sun at the centre and the Earth, tilted on its axis, shown in four positions on its orbit, with the Moon beside one of them — how the Earth moves; (3) a landscape block of Europe's nature: a snow-capped Alpine range, a green lowland with a winding river and a village, and a fjord coast — nature and people of Europe. Row 2: (4) a row of offshore wind turbines, a car assembly plant with a sawtooth roof and a Mediterranean beach with umbrellas — economy of Europe; (5) a European bison standing at the edge of a primeval forest, with a red-brick island castle on a lake in the background — Poland's neighbours; (6) a geographer's field kit: a folded topographic map with contour lines, a compass, a hand lens and a field notebook — geography in general. Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject. Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.
```

Gdy styl się podoba — krok 2.

## Krok 2 — obrazy do każdej lekcji (2 arkusze, 24 ilustracje)

Arkusz działów jest już zrobiony i wstawiony (`obrazy/ilustracje/dzial-*.webp`, 2026-10-12). Ten prompt robi tylko dwa arkusze lekcji: 22 lekcje podręcznika + podsumowanie i test.

```
Please generate 2 separate images for a geography learning app for 11–13-year-olds, one after another (Image 1, then 2). Do not ask me questions in between — just generate both in order. Use exactly the same visual style as the chapter illustrations you made before, described below.

Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject.

Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.

IMAGE 1 of 2 — arkusz-02-lekcje-1 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) a cutaway globe showing the graticule, with a wedge removed to reveal the angle between the equator plane and a point on the surface; (2) a topographic map sheet with a square grid and contour lines (no lettering), a transparent ruler and a drafting compass on it; (3) the Sun and the eight planets in a curved row from Mercury to Neptune, Saturn with its rings, sizes roughly to scale; (4) the Earth tilted on its axis, half in sunlight and half in night shadow, with a curved arrow showing rotation from west to east. Row 2: (5) the Earth in four positions on its orbit around the Sun, the axis always tilted the same way; (6) the Earth lit by parallel sun rays from one side, with the tropics and polar circles shading the hot, temperate and cold zones; (7) a deep Norwegian fjord with sheer rock walls and a flat-topped cliff (Preikestolen) above the water; (8) the Strokkur geyser erupting a white column of steam, with the snowy cone of Hekla volcano in the distance. Row 3: (9) three small stacked landscape strips: Arctic tundra with lichen, a dark spruce taiga, and a dry Mediterranean hillside with olive trees; (10) a fragment of the Berlin Wall standing in a square, beside the dome of St Peter's Basilica in the Vatican; (11) a crowded lowland town along a river beside an almost empty high mountain valley with a single farmhouse — where people live; (12) a railway platform with a high-speed train and a few travellers carrying suitcases and backpacks, seen from behind.

IMAGE 2 of 2 — arkusz-03-lekcje-2 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) the Eiffel Tower beside Tower Bridge over the Thames — Paris and London; (2) a passenger airliner being assembled in a hangar beside a high-speed train — industry and services in France; (3) offshore wind turbines, a field of solar panels and the cooling towers of a power plant — energy in Europe; (4) whitewashed houses with blue domes on a cliff above the Aegean Sea, beside the marble columns of an ancient Greek temple — tourism in southern Europe. Row 2: (5) an old coal mine headframe turned into a museum beside a modern car factory with robotic arms — changes in German industry; (6) a Gothic stone bridge with statues leading to a hilltop castle, with the jagged peaks of the High Tatras behind — Czechia and Slovakia; (7) a European bison in the Białowieża Forest beside the red-brick Trakai Island Castle on a lake — Lithuania and Belarus; (8) wide wheat fields and sunflowers on the Ukrainian steppe under a high sky, with a broad river in the distance; (9) Lake Baikal with taiga forest on its shores and a smoking volcano of Kamchatka in the distance — nature of Russia; (10) a bridge over a border river linking two small towns, with a raised barrier at the crossing — Poland and its neighbours. Row 3: (11) chapter summary: an open geographer's field notebook with small landscape sketches, a pencil and a compass; (12) end-of-chapter test: a clipboard with a checklist of ticks, a pencil and a hand lens.
```

## Wszystkie 3 arkusze naraz (gdyby trzeba było zrobić działy od nowa)

```
Please generate 3 separate images for a geography learning app for 11–13-year-olds, one after another (Image 1, then 2, then 3). Do not ask me questions in between — just generate all of them in order. Every image uses the same visual style described below.

Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject.

Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.

IMAGE 1 of 3 — arkusz-01-dzialy (3 columns × 2 rows)
Create one square image (1:1) with a grid of 3 columns × 2 rows = 6 separate atlas illustrations for the chapters of a 6th-grade geography textbook. Row 1: (1) a brass desk globe with a fine graticule of meridians and parallels, beside a pair of dividers and a magnetic compass — geographic coordinates; (2) a small orbit diagram: the Sun at the centre and the Earth, tilted on its axis, shown in four positions on its orbit, with the Moon beside one of them — how the Earth moves; (3) a landscape block of Europe's nature: a snow-capped Alpine range, a green lowland with a winding river and a village, and a fjord coast — nature and people of Europe. Row 2: (4) a row of offshore wind turbines, a car assembly plant with a sawtooth roof and a Mediterranean beach with umbrellas — economy of Europe; (5) a European bison standing at the edge of a primeval forest, with a red-brick island castle on a lake in the background — Poland's neighbours; (6) a geographer's field kit: a folded topographic map with contour lines, a compass, a hand lens and a field notebook — geography in general.

IMAGE 2 of 3 — arkusz-02-lekcje-1 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) a cutaway globe showing the graticule, with a wedge removed to reveal the angle between the equator plane and a point on the surface; (2) a topographic map sheet with a square grid and contour lines (no lettering), a transparent ruler and a drafting compass on it; (3) the Sun and the eight planets in a curved row from Mercury to Neptune, Saturn with its rings, sizes roughly to scale; (4) the Earth tilted on its axis, half in sunlight and half in night shadow, with a curved arrow showing rotation from west to east. Row 2: (5) the Earth in four positions on its orbit around the Sun, the axis always tilted the same way; (6) the Earth lit by parallel sun rays from one side, with the tropics and polar circles shading the hot, temperate and cold zones; (7) a deep Norwegian fjord with sheer rock walls and a flat-topped cliff (Preikestolen) above the water; (8) the Strokkur geyser erupting a white column of steam, with the snowy cone of Hekla volcano in the distance. Row 3: (9) three small stacked landscape strips: Arctic tundra with lichen, a dark spruce taiga, and a dry Mediterranean hillside with olive trees; (10) a fragment of the Berlin Wall standing in a square, beside the dome of St Peter's Basilica in the Vatican; (11) a crowded lowland town along a river beside an almost empty high mountain valley with a single farmhouse — where people live; (12) a railway platform with a high-speed train and a few travellers carrying suitcases and backpacks, seen from behind.

IMAGE 3 of 3 — arkusz-03-lekcje-2 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) the Eiffel Tower beside Tower Bridge over the Thames — Paris and London; (2) a passenger airliner being assembled in a hangar beside a high-speed train — industry and services in France; (3) offshore wind turbines, a field of solar panels and the cooling towers of a power plant — energy in Europe; (4) whitewashed houses with blue domes on a cliff above the Aegean Sea, beside the marble columns of an ancient Greek temple — tourism in southern Europe. Row 2: (5) an old coal mine headframe turned into a museum beside a modern car factory with robotic arms — changes in German industry; (6) a Gothic stone bridge with statues leading to a hilltop castle, with the jagged peaks of the High Tatras behind — Czechia and Slovakia; (7) a European bison in the Białowieża Forest beside the red-brick Trakai Island Castle on a lake — Lithuania and Belarus; (8) wide wheat fields and sunflowers on the Ukrainian steppe under a high sky, with a broad river in the distance; (9) Lake Baikal with taiga forest on its shores and a smoking volcano of Kamchatka in the distance — nature of Russia; (10) a bridge over a border river linking two small towns, with a raised barrier at the crossing — Poland and its neighbours. Row 3: (11) chapter summary: an open geographer's field notebook with small landscape sketches, a pencil and a compass; (12) end-of-chapter test: a clipboard with a checklist of ticks, a pencil and a hand lens.
```

## arkusz-01-dzialy — Działy podręcznika (3×2)

Komórki (wierszami): `dzial-1`, `dzial-2`, `dzial-3`, `dzial-4`, `dzial-5`, `geografia`

```
Create one square image (1:1) with a grid of 3 columns × 2 rows = 6 separate atlas illustrations for the chapters of a 6th-grade geography textbook. Row 1: (1) a brass desk globe with a fine graticule of meridians and parallels, beside a pair of dividers and a magnetic compass — geographic coordinates; (2) a small orbit diagram: the Sun at the centre and the Earth, tilted on its axis, shown in four positions on its orbit, with the Moon beside one of them — how the Earth moves; (3) a landscape block of Europe's nature: a snow-capped Alpine range, a green lowland with a winding river and a village, and a fjord coast — nature and people of Europe. Row 2: (4) a row of offshore wind turbines, a car assembly plant with a sawtooth roof and a Mediterranean beach with umbrellas — economy of Europe; (5) a European bison standing at the edge of a primeval forest, with a red-brick island castle on a lake in the background — Poland's neighbours; (6) a geographer's field kit: a folded topographic map with contour lines, a compass, a hand lens and a field notebook — geography in general. Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject. Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.
```

## arkusz-02-lekcje-1 — Lekcje: działy I–III (4×3)

Komórki (wierszami): `dz1-l1`, `dz1-l2`, `dz2-l1`, `dz2-l2`, `dz2-l3`, `dz2-l4`, `dz3-l1`, `dz3-l2`, `dz3-l3`, `dz3-l4`, `dz3-l5`, `dz3-l6`

```
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) a cutaway globe showing the graticule, with a wedge removed to reveal the angle between the equator plane and a point on the surface; (2) a topographic map sheet with a square grid and contour lines (no lettering), a transparent ruler and a drafting compass on it; (3) the Sun and the eight planets in a curved row from Mercury to Neptune, Saturn with its rings, sizes roughly to scale; (4) the Earth tilted on its axis, half in sunlight and half in night shadow, with a curved arrow showing rotation from west to east. Row 2: (5) the Earth in four positions on its orbit around the Sun, the axis always tilted the same way; (6) the Earth lit by parallel sun rays from one side, with the tropics and polar circles shading the hot, temperate and cold zones; (7) a deep Norwegian fjord with sheer rock walls and a flat-topped cliff (Preikestolen) above the water; (8) the Strokkur geyser erupting a white column of steam, with the snowy cone of Hekla volcano in the distance. Row 3: (9) three small stacked landscape strips: Arctic tundra with lichen, a dark spruce taiga, and a dry Mediterranean hillside with olive trees; (10) a fragment of the Berlin Wall standing in a square, beside the dome of St Peter's Basilica in the Vatican; (11) a crowded lowland town along a river beside an almost empty high mountain valley with a single farmhouse — where people live; (12) a railway platform with a high-speed train and a few travellers carrying suitcases and backpacks, seen from behind. Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject. Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.
```

## arkusz-03-lekcje-2 — Lekcje: działy III–V, podsumowanie i test (4×3)

Komórki (wierszami): `dz3-l7`, `dz4-l1`, `dz4-l2`, `dz4-l3`, `dz5-l1`, `dz5-l2`, `dz5-l3`, `dz5-l4`, `dz5-l5`, `dz5-l6`, `podsumowanie`, `test`

```
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate atlas illustrations for lessons of a 6th-grade geography textbook. Row 1: (1) the Eiffel Tower beside Tower Bridge over the Thames — Paris and London; (2) a passenger airliner being assembled in a hangar beside a high-speed train — industry and services in France; (3) offshore wind turbines, a field of solar panels and the cooling towers of a power plant — energy in Europe; (4) whitewashed houses with blue domes on a cliff above the Aegean Sea, beside the marble columns of an ancient Greek temple — tourism in southern Europe. Row 2: (5) an old coal mine headframe turned into a museum beside a modern car factory with robotic arms — changes in German industry; (6) a Gothic stone bridge with statues leading to a hilltop castle, with the jagged peaks of the High Tatras behind — Czechia and Slovakia; (7) a European bison in the Białowieża Forest beside the red-brick Trakai Island Castle on a lake — Lithuania and Belarus; (8) wide wheat fields and sunflowers on the Ukrainian steppe under a high sky, with a broad river in the distance; (9) Lake Baikal with taiga forest on its shores and a smoking volcano of Kamchatka in the distance — nature of Russia; (10) a bridge over a border river linking two small towns, with a raised barrier at the crossing — Poland and its neighbours. Row 3: (11) chapter summary: an open geographer's field notebook with small landscape sketches, a pencil and a compass; (12) end-of-chapter test: a clipboard with a checklist of ticks, a pencil and a hand lens. Style: physical geography atlas plates — precise fine ink linework with delicate watercolor washes, accurate landforms, proportions and details, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like illustrations in a good school atlas or travel field guide for teenagers. Serious and mature: no cartoon faces, no big cute eyes, no smiles, no mascots, no toys, no confetti, no plasticine or 3D clay look. Geographically correct (Earth's axis is tilted, the Sun is at the centre of the orbits, a stratovolcano has a crater, a fjord has steep walls). Do not draw real country borders or political maps. No text, no letters, no numbers, no labels or callout lines, no frames, no background scene. Each subject drawn in isolation on a fully transparent background (PNG), with no paper texture outside the subject. Grid rules for every image: square 1:1 canvas, subjects arranged in an even grid, each subject centered in its own cell with clear empty space around it, nothing crossing cell borders, consistent scale and line weight within one image.
```

## Po wygenerowaniu arkuszy

- Zapisz arkusz jako PNG z przezroczystym tłem i wyślij go w czacie z nazwą arkusza.
- Białe tło zamiast przezroczystego: „Make the background fully transparent, keep everything else the same.”
- Za słodko albo za błyszcząco: „Make it look like a plate from a school atlas: ink lines with soft watercolor, no cartoon style.”
- Zły obiekt: „Fix only the geyser in row 2, column 4 — keep everything else identical.”

# 2. Ilustracje do ściąg — rozdział 3

Jeśli wyjdzie zdjęcie zamiast rysunku, dopisz: „hand-drawn ink and watercolor illustration, visible line work”.
Jeśli pojawią się napisy, poproś o wersję bez nich albo je przytniemy.

### geo5-wybrzeze

Lekcja: `geo_dz3_l01_polozenie-i-uksztaltowanie-powierzchni-europy_J` · w ściądze pod punktem 15 · podpis: „Poszarpany brzeg: półwyspy, wyspy, zatoki i fiord wcinający się daleko w ląd.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A bird's-eye three-quarter view of a stretch of a rugged northern coastline: a long narrow fjord cutting deep inland between steep rocky cliffs, a peninsula reaching into the sea, a row of many small rocky islands along the shore and several small bays, deep blue-grey sea, a tiny ship in the fjord for scale. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo5-rzezba

Lekcja: `geo_dz3_l01_polozenie-i-uksztaltowanie-powierzchni-europy_J` · w ściądze pod punktem 19 · podpis: „Od nizin do gór: wysokość terenu rośnie od rozległej równiny po ośnieżone szczyty.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A cross-section landscape block, like a geology textbook diagram: on the left a wide flat green lowland with a meandering river, in the middle gentle rolling uplands with fields, on the right high jagged snow-capped mountains with a glacier on the highest peak; the layers of the block visible on the cut side; the highest peak marked only by a tiny orange flag. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo6-plyty

Lekcja: `geo_dz3_l02_wulkany-i-trzesienia-ziemi-na-islandii_J` · w ściądze pod punktem 9 · podpis: „Płyty litosfery się rozsuwają, a magma wypełnia szczelinę — tak rośnie Islandia.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A cutaway block diagram of the Earth's crust under an island in the ocean: two rigid rock plates moving apart (shown by two thick teal arrows pointing away from each other), a crack between them filled with rising orange magma that comes up from a glowing layer below, a small volcano on the island above the crack, sea water on both sides. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo6-wulkan

Lekcja: `geo_dz3_l02_wulkany-i-trzesienia-ziemi-na-islandii_J` · w ściądze pod punktem 13 · podpis: „Wulkan w przekroju: magma pod ziemią, lawa na powierzchni, stożek z warstw dawnych wybuchów.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A cross-section of a cone volcano during an eruption: a magma chamber deep below, a narrow vent leading up to the crater, orange lava flowing down one slope, a dark cloud of ash and rock fragments above the crater, the cone built of visible layers of old lava and ash, a small geyser with a column of steam at the foot of the volcano. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo7-strefy

Lekcja: `geo_dz3_l03_zroznicowanie-klimatyczne-europy_J` · w ściądze pod punktem 4 · podpis: „Im dalej od równika, tym mniej energii ze Słońca — stąd strefy klimatyczne.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A large Earth globe seen from the side with parallel sun rays coming from the left: near the equator the rays hit the surface straight on and the band is tinted warm orange, at middle latitudes the rays hit at an angle and the bands are pale teal, near the poles the rays only graze the surface and the caps are white with ice; thin lines show how the same bundle of rays spreads over a bigger area near the poles. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo7-prad

Lekcja: `geo_dz3_l03_zroznicowanie-klimatyczne-europy_J` · w ściądze pod punktem 18 · podpis: „Ciepły prąd morski płynie przez ocean i ogrzewa zachodnie wybrzeża.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. An abstract ocean scene seen from above, without any real map outlines: a wide ocean between two generic coastlines, a broad orange curved arrow of a warm current flowing from the warm south across the ocean to the northeast coast, a thin teal arrow of a cold current flowing south along the other coast; on the warm-current side a green coast with leafy trees, on the cold side an icy coast with snow. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo8-unia

Lekcja: `geo_dz3_l04_podzial-polityczny-europy_J` · w ściądze pod punktem 20 · podpis: „Wspólna waluta i swobodne przekraczanie granic — tak działa Unia Europejska.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A still life of symbols of a union of countries: a stack of generic euro-style coins and a banknote with only abstract patterns, an open border barrier gate raised up on an empty road, a small blue flag with a circle of yellow stars on a pole, and a parliament-like modern glass building in the background. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo8-wielkosc

Lekcja: `geo_dz3_l04_podzial-polityczny-europy_J` · w ściądze pod punktem 7 · podpis: „Największy i najmniejszy: ogromny kraj i maleńkie państwo-miasto mieszczące się w jednym mieście.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A playful scale comparison drawn as an atlas comparison plate: a huge plain teal land shape stretching across the whole width of the picture, and next to it, magnified in a round inset circle, a tiny walled city-state consisting only of a domed basilica, a square with colonnades and a small garden, with an orange outline around its border. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo9-gestosc

Lekcja: `geo_dz3_l05_rozmieszczenie-ludnosci-starzenie-sie-spoleczenstw_J` · w ściądze pod punktem 6 · podpis: „Ludzie osiedlają się chętnie na nizinach, a rzadko w wysokich górach i na mroźnej północy.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A landscape block in three-quarter view showing where people live: a fertile green lowland with a river densely packed with small houses, roads and a town, gentle hills with scattered villages, high snowy mountains on one side with only one lonely hut, and a cold snowy northern edge with almost no houses. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo9-piramida

Lekcja: `geo_dz3_l05_rozmieszczenie-ludnosci-starzenie-sie-spoleczenstw_J` · w ściądze pod punktem 21 · podpis: „Dwie piramidy: społeczeństwo młode (szeroka podstawa) i starzejące się (szersza góra).”

```
Physical geography atlas plate for a learning website for 11–13 year olds. Two simple population pyramid shapes side by side drawn as stacks of horizontal bars without any numbers: the left one wide at the bottom and narrow at the top, like a triangle, with small child figures at its base; the right one narrow at the bottom and widest near the top, like an urn, with small grey-haired figures at its top; bars on the left half of each pyramid teal, on the right half orange. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo10-przyczyny

Lekcja: `geo_dz3_l06_migracje-w-europie_J` · w ściądze pod punktem 6 · podpis: „Czynniki wypychające i przyciągające: od złych warunków do lepszego życia.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A two-part diagram: on the left a grey, dry landscape with a closed factory and a cracked road, on the right a green landscape with a busy workshop, a school and a hospital; a family with suitcases walking along a path from left to right; a big teal arrow pushing away from the left side and a big orange arrow pulling towards the right side. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo10-skutki

Lekcja: `geo_dz3_l06_migracje-w-europie_J` · w ściądze pod punktem 22 · podpis: „Skutki migracji: nowe ręce do pracy i bogatsza kultura, ale też trudności we wspólnym życiu.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. A balanced scale with two pans: on one pan a pile of work tools (a wrench, a laptop, a stethoscope) and a cradle, on the other pan a small stack of coins and a tangled knot of string; in the background a city street with shops of different cultures, with a few calm figures seen from behind. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo11-miasta

Lekcja: `geo_dz3_l07_wielkie-miasta-europy-paryz-i-londyn_J` · w ściądze pod punktem 12 · podpis: „Dwie metropolie nad rzekami: Paryż nad Sekwaną i Londyn nad Tamizą.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. Two city skylines facing each other across a narrow strip of sea: on the left a river city with an iron lattice tower, a domed palace and a cluster of modern glass skyscrapers in a business district; on the right a river city with a gothic clock tower, a bascule bridge with two towers over the river and modern office towers; a high-speed train entering a tunnel under the sea between them. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```

### geo11-funkcje

Lekcja: `geo_dz3_l07_wielkie-miasta-europy-paryz-i-londyn_J` · w ściądze pod punktem 14 · podpis: „Za co znamy te miasta: finanse i handel, kultura i moda, transport i turystyka.”

```
Physical geography atlas plate for a learning website for 11–13 year olds. An isometric still life of what makes a world city: a stock exchange building with columns, a stack of generic newspapers without readable text, an artist's easel with a painting, a glass museum pyramid, a dress form with a fashionable dress, an airplane taking off over an airport terminal and a tourist camera. Precise fine ink linework with delicate watercolor washes, accurate landforms and proportions, calm natural colors (muted greens, ochres, slate blues, soft reds), subtle hand-drawn hatching for relief and volume, like an illustration in a good school atlas. Serious and mature: no cartoon faces, no big cute eyes, no mascots, no plasticine or 3D clay look, no photographic realism. Plain off-white background. Portrait 3:4, subject centred with margin. Any text, letters, numbers, labels or callout lines are strictly forbidden.
```
