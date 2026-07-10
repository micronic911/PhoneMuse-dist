/* ========================================
   COMPARE.JS — Dynamic comparison tool
   ======================================== */
(function() {
  'use strict';

  const sel1 = document.getElementById('compareSelect1');
  const sel2 = document.getElementById('compareSelect2');
  const tableWrap = document.getElementById('compareTable');
  const card1 = document.getElementById('compareCard1');
  const card2 = document.getElementById('compareCard2');

  if (!sel1 || !sel2) return;

  /* Populate selects */
  function populateSelects() {
    const brands = {};
    Object.entries(phonesData).forEach(([key, phone]) => {
      if (!brands[phone.brand]) brands[phone.brand] = [];
      brands[phone.brand].push({ key, name: phone.name });
    });

    [sel1, sel2].forEach(sel => {
      sel.innerHTML = '<option value="">Select a phone...</option>';
      Object.entries(brands).forEach(([brand, phones]) => {
        const group = document.createElement('optgroup');
        group.label = brand;
        phones.forEach(p => {
          const opt = document.createElement('option');
          opt.value = p.key;
          opt.textContent = p.name;
          group.appendChild(opt);
        });
        sel.appendChild(group);
      });
    });
  }

  /* Update card preview */
  function updateCard(card, phoneKey) {
    if (!phoneKey || !phonesData[phoneKey]) {
      card.innerHTML = '<p style="color:var(--color-text-muted)">Pick a phone</p>';
      card.parentElement.classList.remove('selected');
      return;
    }
    const p = phonesData[phoneKey];
    card.parentElement.classList.add('selected');
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <span class="phone-price" style="font-family:var(--font-mono);color:var(--color-accent);font-weight:700">${p.price}</span>
    `;
  }

  /* Build comparison table */
  async function buildTable() {
    const k1 = sel1.value, k2 = sel2.value;
    if (!k1 || !k2 || !phonesData[k1] || !phonesData[k2]) {
      tableWrap.innerHTML = '<p class="search-empty">Select two phones to compare their specifications</p>';
      return;
    }

    tableWrap.innerHTML = '<p class="search-empty" style="text-align:center">Loading specifications...</p>';

    const p1 = phonesData[k1], p2 = phonesData[k2];
    
    try {
      const [html1, html2] = await Promise.all([
        fetch(`/phones/${p1.brandSlug}/${p1.slug}.html`).then(r => r.text()),
        fetch(`/phones/${p2.brandSlug}/${p2.slug}.html`).then(r => r.text())
      ]);

      const parser = new DOMParser();
      const doc1 = parser.parseFromString(html1, 'text/html');
      const doc2 = parser.parseFromString(html2, 'text/html');

      const s1 = extractSpecs(doc1);
      const s2 = extractSpecs(doc2);

      const specGroups = ['Display', 'Performance', 'Camera', 'Battery', 'Connectivity', 'General'];

      let outHtml = `
        <div class="compare-table-header">
          <div>Specification</div>
          <div>${p1.name}</div>
          <div>${p2.name}</div>
        </div>`;

      specGroups.forEach(groupLabel => {
        const group1 = s1[groupLabel] || {};
        const group2 = s2[groupLabel] || {};
        const allKeys = [...new Set([...Object.keys(group1), ...Object.keys(group2)])];
        
        if (allKeys.length === 0) return;

        outHtml += `<div class="compare-group-header">${groupLabel}</div>`;

        allKeys.forEach(key => {
          const v1 = group1[key] || '—';
          const v2 = group2[key] || '—';
          const winner = getWinner(key, v1, v2);
          outHtml += `
            <div class="compare-table-row">
              <div class="spec-name">${key}</div>
              <div class="${winner === 1 ? 'winner' : ''}" style="font-family:var(--font-mono);font-size:var(--text-sm)">${v1}</div>
              <div class="${winner === 2 ? 'winner' : ''}" style="font-family:var(--font-mono);font-size:var(--text-sm)">${v2}</div>
            </div>`;
        });
      });

      tableWrap.innerHTML = outHtml;
    } catch (e) {
      console.error('Compare fetch error:', e);
      tableWrap.innerHTML = '<p class="search-empty">Failed to load specifications.</p>';
    }
  }

  function extractSpecs(doc) {
    const specs = {};
    const groups = doc.querySelectorAll('.spec-group');
    groups.forEach(group => {
      const title = group.querySelector('.spec-group-title');
      if (!title) return;
      const groupName = title.textContent.trim();
      specs[groupName] = {};
      const rows = group.querySelectorAll('.spec-row');
      rows.forEach(row => {
        const label = row.querySelector('.spec-label');
        const value = row.querySelector('.spec-value');
        if (label && value) {
          specs[groupName][label.textContent.trim()] = value.innerHTML.replace(/<br\s*\/?>/gi, ', ').replace(/<[^>]+>/g, '').trim();
        }
      });
    });
    return specs;
  }

  /* Determine winner for numeric-like specs */
  function getWinner(key, v1, v2) {
    if (v1 === v2 || v1 === '—' || v2 === '—') return 0;
    const numKeys = ['Size', 'RAM', 'Capacity', 'Wired Charging', 'Wireless', 'Resolution'];
    const lowerKey = key.toLowerCase();
    if (!numKeys.some(k => k.toLowerCase() === lowerKey)) return 0;
    const n1 = parseFloat(v1.replace(/[^\d.]/g, ''));
    const n2 = parseFloat(v2.replace(/[^\d.]/g, ''));
    if (isNaN(n1) || isNaN(n2)) return 0;
    if (lowerKey === 'weight') return n1 < n2 ? 1 : n1 > n2 ? 2 : 0;
    return n1 > n2 ? 1 : n1 < n2 ? 2 : 0;
  }

  /* Check URL params for pre-selected phones */
  function checkUrlParams() {
    const params = new URLSearchParams(window.location.search);
    const phone1 = params.get('phone1') || params.get('phone');
    const phone2 = params.get('phone2');
    if (phone1 && phonesData[phone1]) sel1.value = phone1;
    if (phone2 && phonesData[phone2]) sel2.value = phone2;
  }

  /* Init */
  populateSelects();
  checkUrlParams();

  sel1.addEventListener('change', () => { updateCard(card1, sel1.value); buildTable(); });
  sel2.addEventListener('change', () => { updateCard(card2, sel2.value); buildTable(); });

  updateCard(card1, sel1.value);
  updateCard(card2, sel2.value);
  buildTable();
})();
