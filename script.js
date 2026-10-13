const charts = [
  ["chart-c01", "charts/C01.json"],
  ["chart-c02", "charts/C02.json"],
  ["chart-c03", "charts/C03.json"],
  ["chart-c04", "charts/C04.json"],
  ["chart-c05", "charts/C05.json"],
  ["chart-c06", "charts/C06.json"],
  ["chart-c07", "charts/C07.json"],
  ["chart-c08", "charts/C08.json"],
  ["chart-c09", "charts/C09.json"],
  ["chart-c10", "charts/C10.json"],
  ["chart-c11", "charts/C11.json"],
  ["chart-c12", "charts/C12.json"]
];

const embedOptions = {
  actions: false,
  renderer: "svg",
  tooltip: true
};

async function renderChart(elementId, specificationPath) {
  const element = document.getElementById(elementId);

  if (!element) {
    return;
  }

  try {
    await vegaEmbed(`#${elementId}`, specificationPath, embedOptions);
  } catch (error) {
    console.error(`Could not render ${specificationPath}`, error);
    element.innerHTML = `
      <div class="chart-error">
        This visualisation could not be loaded. Check that
        <strong>${specificationPath}</strong> exists and contains valid Vega-Lite JSON.
      </div>
    `;
  }
}

Promise.allSettled(
  charts.map(([elementId, specificationPath]) =>
    renderChart(elementId, specificationPath)
  )
);
