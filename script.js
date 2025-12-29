// Portfolio: dynamic projects rendering, filters & search
(function() {
  // Loading overlay: hide when all resources are loaded
  window.addEventListener('load', () => {
    document.body.classList.add('is-loaded');
  });

  // Mobile nav toggle & active section highlighting
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const sections = Array.from(document.querySelectorAll('main section[id]'));

  function setActiveLink(id) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${id}`) link.classList.add('active');
      else link.classList.remove('active');
    });
  }

  function initObserveActive() {
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const header = document.querySelector('.site-header');
    const headerH = header ? header.offsetHeight : 0;
    const observer = new IntersectionObserver((entries) => {
      // Choose the most visible intersecting section to set active state
      let best = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
      });
      if (best) setActiveLink(best.target.id);
    }, { rootMargin: `-${headerH}px 0px -30% 0px`, threshold: [0.25, 0.5, 0.75] });
    sections.forEach(sec => observer.observe(sec));
  }

  function initNavToggle() {
    if (!nav || !navToggle) return;
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
      if (window.feather) window.feather.replace();
    });
    // Close menu on link click (mobile UX)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }


  // Projects Section
  const projects = [
    {
      id: 'spotify-listening-history',
      title: 'Spotify Listening History',
      desc: 'This ETL pipeline transforms and cleans Spotify listening history data, loads it into a PostgreSQL database, and then feeds Power BI dashboards that visualise user listening habits and trends.',
      image: 'assets/images/spotify-header-lg.jpg',
      tags: ['Data', 'Python', 'PostgreSQL', 'ETL', 'Power BI'],
      links: {
        repo: 'https://github.com/GrantedV1rus/Spotify-LH',
      }
    },
    {
      id: 'dashboard-viz',
      title: 'Ongoing',
      desc: '',
      image: 'assets/images/ongoing.jpg',
      tags: [],
      links: {
        repo: '',
        demo: '#'
      }
    },
    {
      id: 'web-app',
      title: 'Ongoing',
      desc: '',
      image: 'assets/images/ongoing.jpg',
      tags: [],
      links: {
        repo: '',
        demo: '#'
      }
    },
    {
      id: 'api-octopus',
      title: 'Ongoing',
      desc: '',
      image: 'assets/images/ongoing.jpg',
      tags: [],
      links: {
        repo: '',
        demo: '#'
      }
    }
  ];

  const state = {
    filter: 'all',
    search: ''
  };

  const gridEl = document.getElementById('projectsGrid');
  const searchEl = document.getElementById('searchInput');
  const chips = Array.from(document.querySelectorAll('.chip'));

  function matchesFilter(p) {
    if (state.filter === 'all') return true;
    const f = (state.filter || '').toLowerCase();
    return p.tags.some(t => String(t).toLowerCase() === f);
  }

  function matchesSearch(p) {
    if (!state.search) return true;
    const needle = state.search.toLowerCase();
    return (
      p.title.toLowerCase().includes(needle) ||
      p.desc.toLowerCase().includes(needle) ||
      p.tags.join(' ').toLowerCase().includes(needle)
    );
  }

  function renderProjects() {
    const filtered = projects.filter(p => matchesFilter(p) && matchesSearch(p));

    if (!filtered.length) {
      gridEl.innerHTML = `<div class="empty">No projects match your filters.</div>`;
      return;
    }

    gridEl.innerHTML = filtered.map(p => `
      <article class="card" aria-label="${p.title}">
        <div class="card-media">
          <img alt="${p.title}" src="${p.image}" loading="lazy" />
        </div>
        <div class="card-body">
          <h3 class="card-title">${p.title}</h3>
          <p class="card-desc">${p.desc}</p>
          <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <div class="card-actions">
            <a class="link" href="${p.links.repo}" target="_blank" rel="noopener"><i data-feather="github"></i><span>Repo</span></a>
          </div>
        </div>
      </article>
    `).join('');
    if (window.feather) window.feather.replace();
  }

  // Events
  searchEl.addEventListener('input', (e) => {
    state.search = e.target.value.trim();
    renderProjects();
  });

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.filter = chip.dataset.filter;
      renderProjects();
    });
  });

  // Init
  document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initObserveActive();
    initNavToggle();
    if (window.feather) window.feather.replace();
  });
})();