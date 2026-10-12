# Ilustracje Geografozy — prompty

Dwa rodzaje obrazów, jak w Biologozie i na uczsiesprytniej.pl:

1. **Ikony do aplikacji** (ChatGPT): maskotka, działy, lekcje. Styl jak w Lingozie i Biologozie: 3D z plasteliny,
   pastele, przezroczyste tło, siatka (jeden obiekt w komórce). Wklejasz **jeden zbiorczy prompt**, ChatGPT robi 4 arkusze.
   Gotowe arkusze tnie `tnij_arkusz.py` z Lingozy (siatka kolumny×wiersze, nazwy komórek jak niżej).
2. **Ilustracje do ściąg** rozdziału 3 (Gemini): styl „notatnik naukowy” z `uczsiesprytniej/projekt/ilustracje-prompty-v2.md`,
   pionowe, bez napisów. Każdy prompt to **jeden kompletny blok** (Gemini nie łączy wstępu z treścią). Zapisz obraz w Pobranych
   pod nazwą z nagłówka (np. `geo5-wybrzeze`), a `python3 scripts/dodaj_ilustracje.py` w `uczsiesprytniej` wrzuci go do
   `ilustracje/`; potem dopisuję go do `obrazy` w JSON lekcji (pole `po` i podpis są niżej) i importuję do Geografozy.

Źródło wszystkich promptów: `narzedzia/prompty.json`.

# 1. Ikony do aplikacji (ChatGPT)

## Zbiorczy prompt (wszystkie 4 arkusze)

```
Please generate 4 separate images for a geography learning app, one after another (Image 1, then 2, 3 and 4). Do not ask me questions in between — just generate all four in order. Every image uses the same visual style described below.

Style: cute 3D clay icons — smooth matte plasticine, soft rounded shapes, soft pastel palette (lilac, mint, butter yellow, peach, sky blue, pink) with natural accents only where geography needs them (blue sea, green lowlands, white snow, orange lava). Soft studio light from the top left and a gentle soft shadow under each object. Friendly for a 12-year-old, not babyish. Geographically correct details (Earth's axis is tilted, the Sun is in the middle of the planets' orbits, a volcano has a crater, a compass has four main directions). Do not draw real country borders or real map outlines — use simple generic land shapes instead. No text, no letters, no numbers, no labels, no flags with writing, no frames, no background scene. Transparent background (PNG).

Grid rules for every image: square 1:1 canvas, objects arranged in an even grid, each object centered in its own cell with clear empty space around it, nothing crossing cell borders, same scale for all objects within one image.

IMAGE 1 of 4 — arkusz-01-maskotka (2 columns × 2 rows)
Create one square image (1:1) with a grid of 2 columns × 2 rows: the same mascot character in 4 different poses, each pose centered in its own cell with clear empty space between cells; nothing crosses cell borders. The character: a cute 3D clay mascot for a geography learning app — a small sea turtle explorer whose rounded shell looks like a tiny globe (sky-blue oceans, mint-green continents as simple blobs, thin grid lines of meridians and parallels), big friendly eyes, tiny pink cheeks and a small peach explorer satchel. Keep the same character, proportions and colors in all four poses. Row 1: (1) waving hello with one flipper, smiling; (2) giving a cheerful thumbs-up with a flipper and nodding. Row 2: (3) jumping with joy, flippers up, a few small pastel confetti pieces and stars around; (4) thinking, holding a small compass near its chin, eyes looking up, with a tiny empty thought bubble.

IMAGE 2 of 4 — arkusz-02-dzialy (3 columns × 2 rows)
Create one square image (1:1) with a grid of 3 columns × 2 rows = 6 separate icons for chapters of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) a globe with clearly drawn meridians and parallels as a grid, with a small red map pin stuck into it — geographic coordinates; (2) a small Earth tilted on its axis circling a warm sun on a thin orbit ring, with a tiny moon — how the Earth moves; (3) a small piece of land with snowy mountains, a volcano, green lowlands, a lake and a few tiny houses — nature and people of a continent. Row 2: (4) a small factory with a chimney, a wind turbine and a beach umbrella grouped together — economy: industry, energy and tourism; (5) a cluster of six small houses with different colored roofs standing around one central house, connected by little paths — neighbouring countries; (6) a globe on a stand next to a compass and a magnifying glass — geography in general.

IMAGE 3 of 4 — arkusz-03-lekcje-1 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate icons for lessons of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) a globe with a clear grid of meridians and parallels, the equator thicker, a small red pin on one crossing point; (2) a folded paper map with a grid of lines (no writing), a compass and a ruler lying on it; (3) a warm sun in the middle with small planets on thin orbit rings around it, the blue-green Earth among them; (4) the Earth tilted on its axis with a curved arrow showing it spinning, one half bright (day) and the other half dark blue with tiny stars (night). Row 2: (5) the Earth on an oval orbit around the sun, shown four times, with a tiny tree next to each one: blossoming, green, orange and snowy — the four seasons; (6) the Earth lit by sun rays from one side, with a warm yellow band around its middle and white icy caps at both poles — zones of light; (7) a small piece of land with a long, jagged coastline full of bays, a narrow peninsula, a few islands and a deep narrow fjord, with green lowlands and snowy mountains; (8) an erupting volcano with orange lava next to a geyser shooting a column of steam and water, on dark lava rock. Row 3: (9) a thermometer standing between a sun on one side and a snowflake with a rain cloud on the other — climates; (10) colorful jigsaw puzzle pieces fitting together into one shape, next to a small blue flag with a circle of yellow stars — countries and their union; (11) a group of small clay people: several grey-haired grandparents, one with a walking cane, and only two children, standing in front of tiny houses — population and an ageing society; (12) a suitcase and a backpack next to a signpost with arrows pointing in different directions and a small train — migration.

IMAGE 4 of 4 — arkusz-04-lekcje-2 (4 columns × 3 rows)
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate icons for lessons of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) the Eiffel Tower next to the Big Ben clock tower (clock face without numbers) and a small red double-decker bus — two great European cities; (2) a small factory next to a passenger airplane and a shopping bag — industry and services; (3) a wind turbine, a solar panel and a small power plant with a cooling tower, with a glowing light bulb — energy; (4) a striped beach umbrella on sand by turquoise sea waves, a warm sun and an ancient white stone column — tourism in the south. Row 2: (5) a modern car next to big gears and a small robotic arm — modern industry; (6) green mountains with a small castle on a hill and a hiking backpack — tourism in the mountains; (7) a wooden forest with a big European bison (wisent) and a small red brick castle on a lake island — nature and heritage; (8) a golden wheat field with a tall sunflower under a clear blue sky — farmland; (9) a snowy taiga forest of dark green spruces with a brown bear and a deep blue lake — wild nature of the north; (10) two small houses side by side connected by a little bridge, with a friendly handshake above them — good neighbours. Row 3: (11) an open notebook with a small globe and a pencil — a chapter summary; (12) a clipboard with a checklist of ticks and a pencil — an end-of-chapter test.
```

## arkusz-01-maskotka — Maskotka (4 pozy) (2×2)

Komórki (wierszami): `maskotka-czesc`, `maskotka-ok`, `maskotka-brawo`, `maskotka-mysli`

```
Create one square image (1:1) with a grid of 2 columns × 2 rows: the same mascot character in 4 different poses, each pose centered in its own cell with clear empty space between cells; nothing crosses cell borders. The character: a cute 3D clay mascot for a geography learning app — a small sea turtle explorer whose rounded shell looks like a tiny globe (sky-blue oceans, mint-green continents as simple blobs, thin grid lines of meridians and parallels), big friendly eyes, tiny pink cheeks and a small peach explorer satchel. Keep the same character, proportions and colors in all four poses. Row 1: (1) waving hello with one flipper, smiling; (2) giving a cheerful thumbs-up with a flipper and nodding. Row 2: (3) jumping with joy, flippers up, a few small pastel confetti pieces and stars around; (4) thinking, holding a small compass near its chin, eyes looking up, with a tiny empty thought bubble. Style: cute 3D clay icons — smooth matte plasticine, soft rounded shapes, soft pastel palette (lilac, mint, butter yellow, peach, sky blue, pink) with natural accents only where geography needs them (blue sea, green lowlands, white snow, orange lava). Soft studio light from the top left and a gentle soft shadow under each object. Friendly for a 12-year-old, not babyish. Geographically correct details (Earth's axis is tilted, the Sun is in the middle of the planets' orbits, a volcano has a crater, a compass has four main directions). Do not draw real country borders or real map outlines — use simple generic land shapes instead. No text, no letters, no numbers, no labels, no flags with writing, no frames, no background scene. Transparent background (PNG).
```

## arkusz-02-dzialy — Działy podręcznika (3×2)

Komórki (wierszami): `dzial-1`, `dzial-2`, `dzial-3`, `dzial-4`, `dzial-5`, `geografia`

```
Create one square image (1:1) with a grid of 3 columns × 2 rows = 6 separate icons for chapters of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) a globe with clearly drawn meridians and parallels as a grid, with a small red map pin stuck into it — geographic coordinates; (2) a small Earth tilted on its axis circling a warm sun on a thin orbit ring, with a tiny moon — how the Earth moves; (3) a small piece of land with snowy mountains, a volcano, green lowlands, a lake and a few tiny houses — nature and people of a continent. Row 2: (4) a small factory with a chimney, a wind turbine and a beach umbrella grouped together — economy: industry, energy and tourism; (5) a cluster of six small houses with different colored roofs standing around one central house, connected by little paths — neighbouring countries; (6) a globe on a stand next to a compass and a magnifying glass — geography in general. Style: cute 3D clay icons — smooth matte plasticine, soft rounded shapes, soft pastel palette (lilac, mint, butter yellow, peach, sky blue, pink) with natural accents only where geography needs them (blue sea, green lowlands, white snow, orange lava). Soft studio light from the top left and a gentle soft shadow under each object. Friendly for a 12-year-old, not babyish. Geographically correct details (Earth's axis is tilted, the Sun is in the middle of the planets' orbits, a volcano has a crater, a compass has four main directions). Do not draw real country borders or real map outlines — use simple generic land shapes instead. No text, no letters, no numbers, no labels, no flags with writing, no frames, no background scene. Transparent background (PNG).
```

## arkusz-03-lekcje-1 — Lekcje: działy I–III (4×3)

Komórki (wierszami): `dz1-l1`, `dz1-l2`, `dz2-l1`, `dz2-l2`, `dz2-l3`, `dz2-l4`, `dz3-l1`, `dz3-l2`, `dz3-l3`, `dz3-l4`, `dz3-l5`, `dz3-l6`

```
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate icons for lessons of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) a globe with a clear grid of meridians and parallels, the equator thicker, a small red pin on one crossing point; (2) a folded paper map with a grid of lines (no writing), a compass and a ruler lying on it; (3) a warm sun in the middle with small planets on thin orbit rings around it, the blue-green Earth among them; (4) the Earth tilted on its axis with a curved arrow showing it spinning, one half bright (day) and the other half dark blue with tiny stars (night). Row 2: (5) the Earth on an oval orbit around the sun, shown four times, with a tiny tree next to each one: blossoming, green, orange and snowy — the four seasons; (6) the Earth lit by sun rays from one side, with a warm yellow band around its middle and white icy caps at both poles — zones of light; (7) a small piece of land with a long, jagged coastline full of bays, a narrow peninsula, a few islands and a deep narrow fjord, with green lowlands and snowy mountains; (8) an erupting volcano with orange lava next to a geyser shooting a column of steam and water, on dark lava rock. Row 3: (9) a thermometer standing between a sun on one side and a snowflake with a rain cloud on the other — climates; (10) colorful jigsaw puzzle pieces fitting together into one shape, next to a small blue flag with a circle of yellow stars — countries and their union; (11) a group of small clay people: several grey-haired grandparents, one with a walking cane, and only two children, standing in front of tiny houses — population and an ageing society; (12) a suitcase and a backpack next to a signpost with arrows pointing in different directions and a small train — migration. Style: cute 3D clay icons — smooth matte plasticine, soft rounded shapes, soft pastel palette (lilac, mint, butter yellow, peach, sky blue, pink) with natural accents only where geography needs them (blue sea, green lowlands, white snow, orange lava). Soft studio light from the top left and a gentle soft shadow under each object. Friendly for a 12-year-old, not babyish. Geographically correct details (Earth's axis is tilted, the Sun is in the middle of the planets' orbits, a volcano has a crater, a compass has four main directions). Do not draw real country borders or real map outlines — use simple generic land shapes instead. No text, no letters, no numbers, no labels, no flags with writing, no frames, no background scene. Transparent background (PNG).
```

## arkusz-04-lekcje-2 — Lekcje: działy III–V, podsumowanie i test (4×3)

Komórki (wierszami): `dz3-l7`, `dz4-l1`, `dz4-l2`, `dz4-l3`, `dz5-l1`, `dz5-l2`, `dz5-l3`, `dz5-l4`, `dz5-l5`, `dz5-l6`, `podsumowanie`, `test`

```
Create one square image (1:1) with a grid of 4 columns × 3 rows = 12 separate icons for lessons of a 6th-grade geography textbook, each icon centered in its own cell with clear empty space between cells; nothing crosses cell borders. Row 1: (1) the Eiffel Tower next to the Big Ben clock tower (clock face without numbers) and a small red double-decker bus — two great European cities; (2) a small factory next to a passenger airplane and a shopping bag — industry and services; (3) a wind turbine, a solar panel and a small power plant with a cooling tower, with a glowing light bulb — energy; (4) a striped beach umbrella on sand by turquoise sea waves, a warm sun and an ancient white stone column — tourism in the south. Row 2: (5) a modern car next to big gears and a small robotic arm — modern industry; (6) green mountains with a small castle on a hill and a hiking backpack — tourism in the mountains; (7) a wooden forest with a big European bison (wisent) and a small red brick castle on a lake island — nature and heritage; (8) a golden wheat field with a tall sunflower under a clear blue sky — farmland; (9) a snowy taiga forest of dark green spruces with a brown bear and a deep blue lake — wild nature of the north; (10) two small houses side by side connected by a little bridge, with a friendly handshake above them — good neighbours. Row 3: (11) an open notebook with a small globe and a pencil — a chapter summary; (12) a clipboard with a checklist of ticks and a pencil — an end-of-chapter test. Style: cute 3D clay icons — smooth matte plasticine, soft rounded shapes, soft pastel palette (lilac, mint, butter yellow, peach, sky blue, pink) with natural accents only where geography needs them (blue sea, green lowlands, white snow, orange lava). Soft studio light from the top left and a gentle soft shadow under each object. Friendly for a 12-year-old, not babyish. Geographically correct details (Earth's axis is tilted, the Sun is in the middle of the planets' orbits, a volcano has a crater, a compass has four main directions). Do not draw real country borders or real map outlines — use simple generic land shapes instead. No text, no letters, no numbers, no labels, no flags with writing, no frames, no background scene. Transparent background (PNG).
```

## Po wygenerowaniu arkuszy

- Zapisz arkusz jako PNG z przezroczystym tłem i wyślij go w czacie z nazwą arkusza.
- Białe tło zamiast przezroczystego: „Make the background fully transparent, keep everything else the same.”
- Zły obiekt (np. wulkan bez krateru): „Fix only the volcano in row 2, column 4 — keep everything else identical.”

# 2. Ilustracje do ściąg — rozdział 3 (Gemini)

Jeśli Gemini zrobi zdjęcie zamiast rysunku, dopisz: „hand-drawn ink illustration, visible line work”.
Jeśli pojawią się napisy, poproś o wersję bez nich albo je przytniemy.

### geo5-wybrzeze

Lekcja: `geo_dz3_l01_polozenie-i-uksztaltowanie-powierzchni-europy_J` · w ściądze pod punktem 15 · podpis: „Poszarpany brzeg: półwyspy, wyspy, zatoki i fiord wcinający się daleko w ląd.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A bird's-eye three-quarter view of a stretch of a rugged northern coastline: a long narrow fjord cutting deep inland between steep rocky cliffs, a peninsula reaching into the sea, a row of many small rocky islands along the shore and several small bays, deep blue-grey sea, a tiny ship in the fjord for scale. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo5-rzezba

Lekcja: `geo_dz3_l01_polozenie-i-uksztaltowanie-powierzchni-europy_J` · w ściądze pod punktem 19 · podpis: „Od nizin do gór: wysokość terenu rośnie od rozległej równiny po ośnieżone szczyty.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A cross-section landscape block, like a geology textbook diagram: on the left a wide flat green lowland with a meandering river, in the middle gentle rolling uplands with fields, on the right high jagged snow-capped mountains with a glacier on the highest peak; the layers of the block visible on the cut side; the highest peak marked only by a tiny orange flag. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo6-plyty

Lekcja: `geo_dz3_l02_wulkany-i-trzesienia-ziemi-na-islandii_J` · w ściądze pod punktem 9 · podpis: „Płyty litosfery się rozsuwają, a magma wypełnia szczelinę — tak rośnie Islandia.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A cutaway block diagram of the Earth's crust under an island in the ocean: two rigid rock plates moving apart (shown by two thick teal arrows pointing away from each other), a crack between them filled with rising orange magma that comes up from a glowing layer below, a small volcano on the island above the crack, sea water on both sides. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo6-wulkan

Lekcja: `geo_dz3_l02_wulkany-i-trzesienia-ziemi-na-islandii_J` · w ściądze pod punktem 13 · podpis: „Wulkan w przekroju: magma pod ziemią, lawa na powierzchni, stożek z warstw dawnych wybuchów.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A cross-section of a cone volcano during an eruption: a magma chamber deep below, a narrow vent leading up to the crater, orange lava flowing down one slope, a dark cloud of ash and rock fragments above the crater, the cone built of visible layers of old lava and ash, a small geyser with a column of steam at the foot of the volcano. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo7-strefy

Lekcja: `geo_dz3_l03_zroznicowanie-klimatyczne-europy_J` · w ściądze pod punktem 4 · podpis: „Im dalej od równika, tym mniej energii ze Słońca — stąd strefy klimatyczne.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A large Earth globe seen from the side with parallel sun rays coming from the left: near the equator the rays hit the surface straight on and the band is tinted warm orange, at middle latitudes the rays hit at an angle and the bands are pale teal, near the poles the rays only graze the surface and the caps are white with ice; thin lines show how the same bundle of rays spreads over a bigger area near the poles. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo7-prad

Lekcja: `geo_dz3_l03_zroznicowanie-klimatyczne-europy_J` · w ściądze pod punktem 18 · podpis: „Ciepły prąd morski płynie przez ocean i ogrzewa zachodnie wybrzeża.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. An abstract ocean scene seen from above, without any real map outlines: a wide ocean between two generic coastlines, a broad orange curved arrow of a warm current flowing from the warm south across the ocean to the northeast coast, a thin teal arrow of a cold current flowing south along the other coast; on the warm-current side a green coast with leafy trees, on the cold side an icy coast with snow. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo8-unia

Lekcja: `geo_dz3_l04_podzial-polityczny-europy_J` · w ściądze pod punktem 20 · podpis: „Wspólna waluta i swobodne przekraczanie granic — tak działa Unia Europejska.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A still life of symbols of a union of countries: a stack of generic euro-style coins and a banknote with only abstract patterns, an open border barrier gate raised up on an empty road, a small blue flag with a circle of yellow stars on a pole, and a parliament-like modern glass building in the background. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo8-wielkosc

Lekcja: `geo_dz3_l04_podzial-polityczny-europy_J` · w ściądze pod punktem 7 · podpis: „Największy i najmniejszy: ogromny kraj i maleńkie państwo-miasto mieszczące się w jednym mieście.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A playful scale comparison drawn like an infographic: a huge plain teal land shape stretching across the whole width of the picture, and next to it, magnified in a round inset circle, a tiny walled city-state consisting only of a domed basilica, a square with colonnades and a small garden, with an orange outline around its border. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo9-gestosc

Lekcja: `geo_dz3_l05_rozmieszczenie-ludnosci-starzenie-sie-spoleczenstw_J` · w ściądze pod punktem 6 · podpis: „Ludzie osiedlają się chętnie na nizinach, a rzadko w wysokich górach i na mroźnej północy.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A landscape block in three-quarter view showing where people live: a fertile green lowland with a river densely packed with small houses, roads and a town, gentle hills with scattered villages, high snowy mountains on one side with only one lonely hut, and a cold snowy northern edge with almost no houses. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo9-piramida

Lekcja: `geo_dz3_l05_rozmieszczenie-ludnosci-starzenie-sie-spoleczenstw_J` · w ściądze pod punktem 21 · podpis: „Dwie piramidy: społeczeństwo młode (szeroka podstawa) i starzejące się (szersza góra).”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. Two simple population pyramid shapes side by side drawn as stacks of horizontal bars without any numbers: the left one wide at the bottom and narrow at the top, like a triangle, with small child figures at its base; the right one narrow at the bottom and widest near the top, like an urn, with small grey-haired figures at its top; bars on the left half of each pyramid teal, on the right half orange. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo10-przyczyny

Lekcja: `geo_dz3_l06_migracje-w-europie_J` · w ściądze pod punktem 6 · podpis: „Czynniki wypychające i przyciągające: od złych warunków do lepszego życia.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A two-part diagram: on the left a grey, dry landscape with a closed factory and a cracked road, on the right a green landscape with a busy workshop, a school and a hospital; a family with suitcases walking along a path from left to right; a big teal arrow pushing away from the left side and a big orange arrow pulling towards the right side. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo10-skutki

Lekcja: `geo_dz3_l06_migracje-w-europie_J` · w ściądze pod punktem 22 · podpis: „Skutki migracji: nowe ręce do pracy i bogatsza kultura, ale też trudności we wspólnym życiu.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. A balanced scale with two pans: on one pan a pile of work tools (a wrench, a laptop, a stethoscope) and a cradle, on the other pan a small stack of coins and a tangled knot of string; in the background a city street with shops of different cultures, drawn with neutral calm figures seen from behind. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo11-miasta

Lekcja: `geo_dz3_l07_wielkie-miasta-europy-paryz-i-londyn_J` · w ściądze pod punktem 12 · podpis: „Dwie metropolie nad rzekami: Paryż nad Sekwaną i Londyn nad Tamizą.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. Two city skylines facing each other across a narrow strip of sea: on the left a river city with an iron lattice tower, a domed palace and a cluster of modern glass skyscrapers in a business district; on the right a river city with a gothic clock tower, a bascule bridge with two towers over the river and modern office towers; a high-speed train entering a tunnel under the sea between them. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```

### geo11-funkcje

Lekcja: `geo_dz3_l07_wielkie-miasta-europy-paryz-i-londyn_J` · w ściądze pod punktem 14 · podpis: „Za co znamy te miasta: finanse i handel, kultura i moda, transport i turystyka.”

```
Editorial educational illustration for a learning website for 10–12 year olds, in the style of a modern science magazine infographic mixed with a field notebook. An isometric still life of what makes a world city: a stock exchange building with columns, a stack of generic newspapers without readable text, an artist's easel with a painting, a glass museum pyramid, a dress form with a fashionable dress, an airplane taking off over an airport terminal and a tourist camera. Clean, precise, slightly technical: fine ink linework, subtle cross-hatching, flat muted colour fills, three-quarter view. Palette: cream paper #FBF7EF, deep teal #1D7A5F, warm orange #F5A524 as the single accent, ink #1F1B17, soft grey-blue. No cartoon faces, no mascots, no smiling objects, no glossy 3D, no photographic realism. Plain cream background. Portrait 3:4, subject centred with margin. Any text, letters, numbers or labels are strictly forbidden.
```
