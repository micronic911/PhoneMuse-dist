/* ========================================
   SEARCH.JS — Full-screen search overlay
   ======================================== */
(function() {
  'use strict';

  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const toggleBtn = document.getElementById('searchToggle');
  const closeBtn = document.getElementById('searchClose');

  if (!overlay || !input) return;

  function open() {
    overlay.classList.add('open');
    setTimeout(() => input.focus(), 200);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    overlay.classList.remove('open');
    input.value = '';
    results.innerHTML = '';
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open(); }
  });

  /* Search logic */
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = '<p class="search-empty">Type at least 2 characters to search</p>'; return; }

    let html = '';

    /* Search phones */
    if (typeof phonesData !== 'undefined') {
      const phoneMatches = Object.entries(phonesData).filter(([, p]) =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
      if (phoneMatches.length) {
        html += '<div class="search-result-group"><h4>Phones</h4>';
        phoneMatches.forEach(([key, p]) => {
          html += `<a href="/phones/${p.brandSlug}/${p.slug}.html" class="search-result-item">
            <img src="${p.image}" alt="${p.name}">
            <div class="search-result-info">
              <div class="result-title">${highlight(p.name, q)}</div>
              <div class="result-sub">${p.brand} · ${p.price}</div>
            </div></a>`;
        });
        html += '</div>';
      }
    }

    /* Search news */
    if (typeof newsData !== 'undefined') {
      const newsMatches = newsData.filter(n =>
        n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
      );
      if (newsMatches.length) {
        html += '<div class="search-result-group"><h4>News</h4>';
        newsMatches.forEach(n => {
          html += `<a href="/news/${n.slug}.html" class="search-result-item">
            <img src="${n.image}" alt="">
            <div class="search-result-info">
              <div class="result-title">${highlight(n.title, q)}</div>
              <div class="result-sub">${n.category} · ${n.date}</div>
            </div></a>`;
        });
        html += '</div>';
      }
    }

    /* Search reviews */
    if (typeof reviewsData !== 'undefined') {
      const revMatches = reviewsData.filter(r => r.title.toLowerCase().includes(q));
      if (revMatches.length) {
        html += '<div class="search-result-group"><h4>Reviews</h4>';
        revMatches.forEach(r => {
          html += `<a href="/reviews/${r.slug}.html" class="search-result-item">
            <div class="search-result-info">
              <div class="result-title">${highlight(r.title, q)}</div>
              <div class="result-sub">Score: ${r.score}/10 · ${r.date}</div>
            </div></a>`;
        });
        html += '</div>';
      }
    }

    if (!html) html = '<p class="search-empty">No results found</p>';
    results.innerHTML = html;
  });

  function highlight(text, query) {
    const re = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(re, '<mark style="background:var(--color-accent-muted);color:var(--color-accent);border-radius:2px;padding:0 2px">$1</mark>');
  }
})();
