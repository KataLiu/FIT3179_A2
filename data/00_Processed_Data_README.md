# Processed dashboard data

These files are derived only from the documented source files in `newRaw`.
The raw files were not modified.

## Scope

- Observation charts use 2018–2024 so every comparison uses completed years with stable coverage.
- C4 contains verified stratified sample locations, not national abundance estimates.
- C10 and C11 retain only 2023–2025 rows verified against BirdLife Australia primary sources.
- The 2024 participant figure is stored as 57,000 with the display label `57,000+`, matching the source wording.
- C12 circle positions are manually placed approximations for a Dorling cartogram; circle area must encode `total_records`.
- The TopoJSON is derived from the official ABS ASGS 2021 state boundary shapefile. It keeps the eight states and territories and simplifies coastline geometry for web display.

## Row counts

{
  "C02_AnnualRecords_2018_2024.csv": 14,
  "C03_C08_MonthlyRecords_2018_2024.csv": 168,
  "C01_C07_C09_StateMetrics_2018_2024.csv": 56,
  "C12_DorlingCartogram_2024.csv": 8,
  "C04_HeroSpeciesSampleLocations_2018_2024.csv": 6180,
  "C10_C11_AussieBirdCount_Confirmed_2023_2025.csv": 3,
  "Australia_States_ASGS2021_Simplified.topojson features": 8
}
