# Australia Through Birdwatchers' Eyes

An interactive FIT3179 Data Visualisation 2 project about Australian birdwatching and citizen science.

## Live dashboard

https://kataliu.github.io/FIT3179_A2_BirdWatching/

## Story

The single-page visualisation asks four questions:

1. Where do citizen-science bird records reach?
2. Which birds are reported, and where?
3. How does reporting activity change through the year and across Australia?
4. How does community participation contribute to wildlife research?

The page contains 12 Vega-Lite visualisations, including a proportional-symbol map, point-distribution map, choropleth map and Dorling cartogram. Interactive controls are used where they support comparisons by year, source or species.

## Data sources

- **eBird Australia**, accessed through Atlas of Living Australia data resource `dr2009`: https://collections.ala.org.au/public/show/dr2009 — CC0 1.0.
- **BirdLife Australia Birdata**, accessed through Atlas of Living Australia data resource `dr359`: https://birdata.birdlife.org.au — CC BY-NC 3.0.
- **BirdLife Australia Aussie Bird Count results**, including the confirmed 2025 results: https://birdlife.org.au/news/the-2025-aussie-bird-count-results-are-in/.
- **Australian Bureau of Statistics**, ASGS Edition 3 state and territory boundaries: https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files — CC BY 4.0.

Data were accessed on 2 October 2026. Full processing notes and chart-specific limitations are documented in [`data/00_Processed_Data_README.md`](data/00_Processed_Data_README.md).

## Scope and limitations

- Core observation comparisons use the common processed period 2018–2024.
- National, monthly and state totals are exact server-computed counts from the source services.
- Species locations and taxonomic composition use matched stratified samples and are not national abundance estimates.
- A record represents reporting activity. More records do not necessarily mean that more birds were present.
- Birdata and eBird are independent citizen-science programs, although both were accessed through the Atlas of Living Australia.

## Repository structure

- `index.html` — narrative page and metadata
- `style.css` — responsive layout and typography
- `script.js` — Vega-Lite embedding
- `charts/` — human-readable Vega-Lite JSON specifications
- `data/` — processed chart data and geographic boundaries
- `assets/` — decorative Australian bird illustrations used in section headings
- `documentation/sketch.pdf` — submitted dashboard sketch

## Authorship and AI acknowledgement

Visualisation and analysis by **Hanjia Liu**, October 2026.

Generative AI tools, including Claude and OpenAI Codex/ChatGPT, were used for development feedback, code assistance and language refinement. The decorative magpie and lorikeet illustrations were generated with OpenAI image generation. The author checked the data, sources, calculations and final design.
