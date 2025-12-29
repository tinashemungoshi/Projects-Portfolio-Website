// Portfolio project data and rendering
const projects = [
  {
    id: "spotify-listening-history",
    title: "Personal Spotify Listening History",
    description: "End-to-end ETL of Spotify streaming history with Tableau/Power BI dashboards and normalized SQL schema.",
    tags: ["ETL", "Tableau", "Power BI", "Spotify"],
    link: "projects/spotify-listening-history.html"
  },
  {
    id: "spotify-artists",
    title: "Spotify Artists ETL",
    description: "Artist-focused extraction and validation, PostgreSQL import order, and dashboard endpoints.",
    tags: ["ETL", "PostgreSQL", "Validation"],
    link: "projects/spotify-artists.html"
  },
  {
    id: "youtube-history",
    title: "Personal YouTube History",
    description: "Channel, comments, playlists, and video metadata organization for analysis.",
    tags: ["Data", "YouTube", "Analytics"],
    link: "projects/youtube-history.html"
  },
  {
    id: "etl-template",
    title: "Data Pipeline Template (ETL)",
    description: "Reusable ETL template with workspace assets and notebook workflows.",
    tags: ["Template", "ETL", "Python"],
    link: "projects/etl-template.html"
  },
  {
    id: "powerbi-tableau",
    title: "PowerBI & Tableau Outputs",
    description: "Curated CSV exports, DAX measures, and data model guidance.",
    tags: ["BI", "DAX", "Visualization"],
    link: "projects/powerbi-tableau.html"
  }
];

function renderProjectCard(p) {
  const tagHtml = (p.tags || []).map(t => `<span class="tag">${t}</span>`).join("\n");
  return `
  <article class="card" aria-labelledby="${p.id}-title">
    <div class="thumb"></div>
    <div class="body">
      <h3 id="${p.id}-title">${p.title}</h3>
      <p>${p.description}</p>
      <div class="meta">${tagHtml}</div>
    </div>
    <div class="footer">
      <a class="button" href="${p.link}">View details</a>
    </div>
  </article>`;
}

function mountProjectsGrid(targetId, limit = null) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = limit ? projects.slice(0, limit) : projects;
  el.innerHTML = list.map(renderProjectCard).join("\n");
}

function setupSearch(inputId, targetId) {
  const input = document.getElementById(inputId);
  const grid = document.getElementById(targetId);
  if (!input || !grid) return;
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase();
    const filtered = projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q))
    );
    grid.innerHTML = filtered.map(renderProjectCard).join("\n");
  });
}

// Page mounts
window.addEventListener('DOMContentLoaded', () => {
  mountProjectsGrid('featured-grid', 3);
  mountProjectsGrid('projects-grid');
  setupSearch('project-search', 'projects-grid');
});
