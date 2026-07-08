/* ========================================
   MAIN.JS — Core site functionality
   ======================================== */

(function() {
  'use strict';

  /* --- Dynamic Site Name from domain --- */
  function setSiteName() {
    const host = window.location.hostname || 'TechSpecs';
    const raw = host.replace(/^www\./, '');
    const brands = {'gsmhq.com':'GSMHq','phonemuse.com':'PhoneMuse'};
    const name = brands[raw] || raw;
    document.querySelectorAll('.site-name').forEach(el => {
      if (el.textContent !== name) {
        el.textContent = name;
      }
    });
    const titleEl = document.querySelector('title');
    if (titleEl && titleEl.textContent.includes('SITENAME')) {
      titleEl.textContent = titleEl.textContent.replace(/SITENAME/g, name);
    }
  }

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
    const full = Math.floor(rating / 2);
    const half = (rating % 2) >= 1 ? 1 : 0;
    const empty = max - full - half;
    let html = '';
    for (let i = 0; i < full; i++) html += '<span class="star">★</span>';
    if (half) html += '<span class="star">★</span>';
    for (let i = 0; i < empty; i++) html += '<span class="star empty">★</span>';
    return html;
  };

  /* --- Init --- */
  document.addEventListener('DOMContentLoaded', () => {
    setSiteName();
    initTheme();
    initNavbar();
    initScrollReveal();
    initLazyImages();
    setActiveNavLink();
  });
})();
