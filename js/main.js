/* ========================================
   MAIN.JS — Core site functionality
   ======================================== */

(function() {
  'use strict';

  /* --- Theme Toggle --- */
  function initTheme() {
    const toggle = document.getElementById('themeToggle');
    // Theme is already applied by inline <script> in <head>; just sync icon
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeIcon(currentTheme);

    if (toggle) {
      toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
      });
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (!localStorage.getItem('theme')) {
        const t = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t);
        updateThemeIcon(t);
      }
    });
  }

  function updateThemeIcon(theme) {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    toggle.innerHTML = theme === 'dark'
      ? '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
      : '<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  /* --- Navbar scroll effect & mobile toggle --- */
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const links = document.getElementById('navLinks');

    if (navbar) {
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
      }, { passive: true });
    }

    if (hamburger && links) {
      hamburger.addEventListener('click', () => {
        links.classList.toggle('open');
        const isOpen = links.classList.contains('open');
        if (navbar) navbar.classList.toggle('nav-open', isOpen);
        hamburger.innerHTML = isOpen
          ? '<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
          : '<svg viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      });
    }
  }

  /* --- Scroll Reveal Animation --- */
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
  }

  /* --- Lazy Loading Images --- */
  function initLazyImages() {
    const imgs = document.querySelectorAll('img[data-src]');
    if (!imgs.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '200px' });
    imgs.forEach(img => observer.observe(img));
  }

  /* --- Active Nav Link --- */
  function setActiveNavLink() {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href && path.startsWith(href) && href !== '/') {
        link.classList.add('active');
      } else if (href === '/' && path === '/') {
        link.classList.add('active');
      }
    });
  }

  /* --- Helper: generate star HTML --- */
  window.generateStars = function(rating, max) {
    max = max || 5;
    const val = Math.min(max, Math.max(0, parseFloat(rating) || 0));
    const full = Math.floor(val);
    const half = (val - full) >= 0.5 ? 1 : 0;
    const empty = max - full - half;
    let html = '';
    for (let i = 0; i < full; i++) html += '<span class="star">★</span>';
    if (half) html += '<span class="star half">★</span>';
    for (let i = 0; i < empty; i++) html += '<span class="star empty">★</span>';
    return html;
  };

  /* --- Benchmark Chart Interactivity & Battery Widget Renderer --- */
  function initBenchmarkWidgets() {
    document.querySelectorAll('.benchmark-widget, .bar-chart').forEach(widget => {
      const tabs = widget.querySelectorAll('ul.tabs li');
      const panels = widget.querySelectorAll('.phones');

      if (tabs.length && panels.length) {
        tabs.forEach((tab, index) => {
          tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            panels.forEach((panel, pIdx) => {
              if (pIdx === index) {
                panel.classList.remove('hide');
              } else {
                panel.classList.add('hide');
              }
            });
          });
        });
      }

      // Add Expand / Show More toggle for panels with hidden rows (.flex-row.hide)
      panels.forEach(panel => {
        const hiddenRows = panel.querySelectorAll('.flex-row.hide');
        if (hiddenRows.length && !panel.querySelector('.chart-expand-btn')) {
          const expandBtn = document.createElement('button');
          expandBtn.className = 'chart-expand-btn';
          expandBtn.textContent = `Show all (${panel.querySelectorAll('.flex-row').length} devices)`;

          let expanded = false;
          expandBtn.addEventListener('click', () => {
            expanded = !expanded;
            hiddenRows.forEach(row => {
              if (expanded) {
                row.classList.add('show-row');
              } else {
                row.classList.remove('show-row');
              }
            });
            expandBtn.textContent = expanded ? 'Show fewer devices' : `Show all (${panel.querySelectorAll('.flex-row').length} devices)`;
          });

          panel.appendChild(expandBtn);
        }
      });
    });

    // Render battery endurance widgets if present
    document.querySelectorAll('.battery-endurance-widget').forEach(widget => {
      if (widget.children.length > 0) return;
      const name = widget.getAttribute('data-name') || 'Device';
      const img = widget.getAttribute('data-image') || '';
      const batteryData = widget.getAttribute('data-battery2') || '';

      if (!batteryData) return;
      const parts = batteryData.split('_');
      const labels = ['Calls', 'Web Browsing', 'Video Streaming', 'Gaming'];
      const icons = ['📞', '🌐', '🎬', '🎮'];

      let metricsHtml = '';
      parts.forEach((val, i) => {
        if (!val) return;
        const timeStr = val.includes(':') ? `${val.replace(':', 'h ')}m` : `${val}h`;
        metricsHtml += `
          <div class="battery-metric-box">
            <span class="battery-metric-value">${timeStr}</span>
            <span class="battery-metric-label">${icons[i] || ''} ${labels[i] || 'Test'}</span>
          </div>
        `;
      });

      widget.innerHTML = `
        <div style="display:flex;align-items:center;gap:var(--space-md);margin-bottom:var(--space-md);">
          ${img ? `<img src="${img}" alt="${name}" style="width:48px;height:48px;object-fit:contain;">` : ''}
          <div>
            <h4 style="margin:0;font-size:var(--text-lg);">${name} Battery Endurance</h4>
            <span style="font-size:var(--text-xs);color:var(--color-text-muted);">Active Use Score Test Results</span>
          </div>
        </div>
        <div class="battery-endurance-metrics">${metricsHtml}</div>
      `;
    });
  }

  /* --- Client-Side Grid Pagination & Filtering --- */
  function initGridPagination() {
    const grids = document.querySelectorAll('.news-grid, .reviews-grid, .phones-grid');
    if (!grids.length) return;

    grids.forEach(grid => {
      const items = Array.from(grid.children);
      if (!items.length) return;

      // Check if server-rendered static pagination is present
      const existingPagination = grid.parentNode.querySelector('.pagination-wrap .pagination');

      // Check for filter buttons container
      const filterContainer = document.querySelector('.news-filters, .review-filters');
      const filterBtns = filterContainer ? filterContainer.querySelectorAll('.filter-btn') : [];

      if (existingPagination) {
        // Static pagination is active; handle client-side category filtering on page items if filter buttons exist
        if (filterBtns.length) {
          filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
              filterBtns.forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              const activeFilter = btn.textContent.trim().toLowerCase();

              items.forEach(item => {
                if (activeFilter === 'all') {
                  item.style.display = '';
                } else {
                  const badge = item.querySelector('.badge, .card-meta span');
                  const text = (item.textContent || '').toLowerCase();
                  const category = badge ? badge.textContent.trim().toLowerCase() : '';
                  if (category === activeFilter || text.includes(activeFilter)) {
                    item.style.display = '';
                  } else {
                    item.style.display = 'none';
                  }
                }
              });
            });
          });
        }
        return;
      }

      let currentPage = 1;
      let activeFilter = 'All';

      // Create pagination container below grid
      const paginationWrap = document.createElement('div');
      paginationWrap.className = 'pagination-wrap';
      grid.parentNode.insertBefore(paginationWrap, grid.nextSibling);


      function getGridColumnCount() {
        const gridStyle = window.getComputedStyle(grid);
        const templateColumns = gridStyle.getPropertyValue('grid-template-columns');
        if (!templateColumns) return 3;
        const cols = templateColumns.trim().split(/\s+/).length;
        return Math.max(1, cols);
      }

      function hasFeaturedItem() {
        if (!grid.classList.contains('news-grid')) return false;
        if (activeFilter !== 'All') return false;
        const first = items[0];
        if (!first) return false;
        const firstStyle = window.getComputedStyle(first);
        return firstStyle.getPropertyValue('grid-column-start') === '1' &&
               (firstStyle.getPropertyValue('grid-column-end') === '-1' || firstStyle.getPropertyValue('grid-column-end') === 'span 3');
      }

      function getVisibleItems() {
        if (activeFilter === 'All') return items;
        return items.filter(item => {
          const badge = item.querySelector('.badge, .card-meta span');
          const text = (item.textContent || '').toLowerCase();
          const category = badge ? badge.textContent.trim().toLowerCase() : '';
          const target = activeFilter.toLowerCase();
          return category === target || text.includes(target);
        });
      }

      function calculateEndIndex(visibleCount, page) {
        const cols = getGridColumnCount();
        const featured = hasFeaturedItem();

        // Target approx 12-15 items per batch (~4 full rows)
        const targetRows = 4;
        const rawTarget = (cols * targetRows) * page;

        if (rawTarget >= visibleCount) {
          return visibleCount; // Final page displays all remaining items
        }

        if (featured) {
          const nonFeatured = rawTarget - 1;
          const completeRows = Math.floor(nonFeatured / cols);
          const end = 1 + (completeRows * cols);
          return Math.max(1, Math.min(end, visibleCount));
        } else {
          const completeRows = Math.floor(rawTarget / cols);
          const end = completeRows * cols;
          return Math.max(cols, Math.min(end, visibleCount));
        }
      }

      function render() {
        const visible = getVisibleItems();

        if (!visible.length) {
          items.forEach(item => { item.style.display = 'none'; });
          paginationWrap.innerHTML = '<div class="pagination-info">No items match your filter</div>';
          return;
        }

        const endIndex = calculateEndIndex(visible.length, currentPage);

        // Hide all items first
        items.forEach(item => { item.style.display = 'none'; });

        // Show items up to calculated complete-row endIndex
        const currentBatch = visible.slice(0, endIndex);
        currentBatch.forEach(item => {
          item.style.display = '';
        });

        // Render pagination controls
        if (endIndex >= visible.length && currentPage === 1) {
          paginationWrap.innerHTML = '';
          return;
        }

        const remaining = visible.length - endIndex;
        if (remaining > 0) {
          paginationWrap.innerHTML = `
            <div class="pagination-info">Showing ${endIndex} of ${visible.length} items</div>
            <button class="btn btn-outline load-more-btn">Load More (${remaining} remaining)</button>
          `;
          const loadMoreBtn = paginationWrap.querySelector('.load-more-btn');
          if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
              currentPage++;
              render();
            });
          }
        } else {
          paginationWrap.innerHTML = `
            <div class="pagination-info">Showing all ${visible.length} items</div>
          `;
        }
      }

      // Re-render on window resize to ensure full grid rows on viewport changes
      let resizeTimer;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { render(); }, 150);
      });

      // Hook filter buttons if present
      if (filterBtns.length) {
        filterBtns.forEach(btn => {
          btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.textContent.trim();
            currentPage = 1;
            render();
          });
        });
      }

      render();
    });
  }

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavbar();
    initScrollReveal();
    initLazyImages();
    setActiveNavLink();
    initBenchmarkWidgets();
    initGridPagination();
  });
})();
