/* ============================================================
   TESTOFY — App Engine
   ============================================================ */

(function () {
  'use strict';

  // ── State ─────────────────────────────────────────────────
  const STORAGE_KEY = 'testofy_v1';
  let currentChapter = 0;
  let state = loadState();

  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { checks: {}, visited: [] };
    } catch { return { checks: {}, visited: [] }; }
  }
  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // ── DOM refs ──────────────────────────────────────────────
  const menuBtn       = document.getElementById('menu-btn');
  const sidebar       = document.getElementById('sidebar');
  const sidebarOverlay= document.getElementById('sidebar-overlay');
  const sidebarClose  = document.getElementById('sidebar-close');
  const sidebarNav    = document.getElementById('sidebar-nav');
  const sidebarBar    = document.getElementById('sidebar-bar');
  const sidebarPct    = document.getElementById('sidebar-pct');
  const progressCircle= document.getElementById('progress-ring-circle');
  const progressPct   = document.getElementById('progress-pct');
  const chapterBar    = document.getElementById('chapter-bar');

  const screenWelcome = document.getElementById('screen-welcome');
  const screenChapter = document.getElementById('screen-chapter');
  const screenComplete= document.getElementById('screen-complete');

  const startBtn   = document.getElementById('start-btn');
  const restartBtn = document.getElementById('restart-btn');
  const reviewBtn  = document.getElementById('review-btn');
  const btnPrev    = document.getElementById('btn-prev');
  const btnNext    = document.getElementById('btn-next');
  const chapterDots= document.getElementById('chapter-dots');

  const welcomeStats = document.getElementById('welcome-stats');
  const completeStats= document.getElementById('complete-stats');

  // ── Init ──────────────────────────────────────────────────
  function init() {
    populateWelcome();
    buildSidebarNav();
    updateProgress();

    startBtn.addEventListener('click', () => goToChapter(0));
    restartBtn.addEventListener('click', () => goToChapter(0));
    reviewBtn.addEventListener('click', () => goToChapter(0));
    btnPrev.addEventListener('click', prevChapter);
    btnNext.addEventListener('click', nextChapter);

    menuBtn.addEventListener('click', openSidebar);
    sidebarClose.addEventListener('click', closeSidebar);
    sidebarOverlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSidebar();
      if (e.key === 'ArrowRight') nextChapter();
      if (e.key === 'ArrowLeft') prevChapter();
    });
  }

  // ── Welcome ───────────────────────────────────────────────
  function populateWelcome() {
    const totalItems = countTotalItems();
    welcomeStats.innerHTML = `
      <div class="welcome__stat"><div class="welcome__stat-num">${BOOK.chapters.length}</div><div class="welcome__stat-label">Chapters</div></div>
      <div class="welcome__stat"><div class="welcome__stat-num">${totalItems.checklists}</div><div class="welcome__stat-label">Checklists</div></div>
      <div class="welcome__stat"><div class="welcome__stat-num">${totalItems.items}</div><div class="welcome__stat-label">Action Items</div></div>
    `;
  }

  function countTotalItems() {
    let checklists = 0, items = 0;
    BOOK.chapters.forEach(ch => {
      ch.blocks.forEach(b => {
        if (b.type === 'checklist') { checklists++; items += b.items.length; }
      });
    });
    return { checklists, items };
  }

  // ── Sidebar ───────────────────────────────────────────────
  function buildSidebarNav() {
    sidebarNav.innerHTML = '';
    BOOK.chapters.forEach((ch, i) => {
      const done = isChapterDone(i);
      const active = i === currentChapter && !screenChapter.classList.contains('active') ? false : i === currentChapter;
      const btn = document.createElement('button');
      btn.className = `sidebar__chapter-btn${active ? ' active' : ''}${done ? ' done' : ''}`;
      btn.innerHTML = `
        <div class="sidebar__chapter-icon">${done ? '✓' : i + 1}</div>
        <div class="sidebar__chapter-info">
          <div class="sidebar__chapter-name">${ch.title}</div>
          <div class="sidebar__chapter-meta">${chapterCheckCount(i)} items</div>
        </div>
        <div class="sidebar__chapter-check">✓</div>
      `;
      btn.addEventListener('click', () => { goToChapter(i); closeSidebar(); });
      sidebarNav.appendChild(btn);
    });
  }

  function chapterCheckCount(i) {
    let total = 0;
    BOOK.chapters[i].blocks.forEach(b => { if (b.type === 'checklist') total += b.items.length; });
    return total;
  }

  function openSidebar() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ── Chapter navigation ────────────────────────────────────
  function goToChapter(index) {
    currentChapter = Math.max(0, Math.min(index, BOOK.chapters.length - 1));

    // Mark visited
    if (!state.visited.includes(currentChapter)) {
      state.visited.push(currentChapter);
      saveState();
    }

    showScreen('chapter');
    renderChapter();
    updateProgress();
    buildSidebarNav();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function nextChapter() {
    if (currentChapter < BOOK.chapters.length - 1) {
      goToChapter(currentChapter + 1);
    } else {
      showScreen('complete');
      renderComplete();
    }
  }
  function prevChapter() {
    if (currentChapter > 0) goToChapter(currentChapter - 1);
  }

  // ── Render chapter ────────────────────────────────────────
  function renderChapter() {
    const ch = BOOK.chapters[currentChapter];

    document.getElementById('ch-num').textContent   = `Chapter ${currentChapter + 1}`;
    document.getElementById('ch-total').textContent = `of ${BOOK.chapters.length}`;
    document.getElementById('ch-title').textContent = ch.title;
    document.getElementById('ch-desc').textContent  = ch.description || '';

    const body = document.getElementById('ch-body');
    body.innerHTML = '';
    ch.blocks.forEach(block => body.appendChild(renderBlock(block)));

    // Nav buttons
    btnPrev.style.visibility = currentChapter === 0 ? 'hidden' : 'visible';
    btnNext.textContent = currentChapter === BOOK.chapters.length - 1 ? 'Finish' : 'Next';
    if (currentChapter === BOOK.chapters.length - 1) {
      btnNext.innerHTML = 'Finish <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>';
    } else {
      btnNext.innerHTML = 'Next <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
    }

    // Dots
    chapterDots.innerHTML = '';
    BOOK.chapters.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = `chapter-dot${i === currentChapter ? ' active' : ''}${isChapterDone(i) ? ' done' : ''}`;
      dot.addEventListener('click', () => goToChapter(i));
      chapterDots.appendChild(dot);
    });

    // Chapter bar
    const pct = ((currentChapter) / BOOK.chapters.length) * 100;
    chapterBar.style.width = pct + '%';
  }

  // ── Render blocks ─────────────────────────────────────────
  function renderBlock(block) {
    const el = document.createElement('div');

    switch (block.type) {

      case 'text':
        el.className = 'block-text';
        el.innerHTML = block.content;
        break;

      case 'title':
        el.className = 'block-title';
        el.textContent = block.content;
        break;

      case 'callout':
        el.className = `block-callout${block.variant === 'red' ? ' block-callout--red' : ''}`;
        el.innerHTML = block.content;
        break;

      case 'tip':
        el.className = 'block-tip';
        el.innerHTML = `
          <div class="block-tip__icon">${block.icon || '💡'}</div>
          <div class="block-tip__content">
            <div class="block-tip__label">${block.label || 'Tip'}</div>
            <div class="block-tip__text">${block.content}</div>
          </div>`;
        break;

      case 'quote':
        el.className = 'block-quote';
        el.innerHTML = `
          <div class="block-quote__text">"${block.text}"</div>
          ${block.author ? `<div class="block-quote__author">— ${block.author}</div>` : ''}`;
        break;

      case 'checklist':
        el.className = 'block-checklist';
        const listId = block.id || `cl-${Math.random().toString(36).slice(2)}`;
        const checkedItems = state.checks[listId] || [];
        el.innerHTML = `
          <div class="block-checklist__header">
            <div class="block-checklist__title">${block.title || 'Checklist'}</div>
            <div class="block-checklist__count" id="count-${listId}">${checkedItems.length}/${block.items.length}</div>
          </div>
          <div class="block-checklist__items" id="items-${listId}"></div>`;
        const itemsContainer = el.querySelector(`#items-${listId}`);
        block.items.forEach((text, idx) => {
          const isChecked = checkedItems.includes(idx);
          const item = document.createElement('div');
          item.className = `checklist-item${isChecked ? ' checked' : ''}`;
          item.innerHTML = `
            <div class="checklist-item__box"><span class="checklist-item__check">✓</span></div>
            <div class="checklist-item__text">${text}</div>`;
          item.addEventListener('click', () => toggleCheck(listId, idx, block.items.length, item, el.querySelector(`#count-${listId}`)));
          itemsContainer.appendChild(item);
        });
        break;

      case 'list':
        el.className = 'block-list';
        const liItems = block.items.map(i => `<li>${i}</li>`).join('');
        el.innerHTML = `
          ${block.title ? `<div class="block-list__title">${block.title}</div>` : ''}
          <ul>${liItems}</ul>`;
        break;

      case 'divider':
        el.className = 'block-divider';
        break;

      default:
        break;
    }

    return el;
  }

  // ── Checklist interaction ─────────────────────────────────
  function toggleCheck(listId, idx, total, itemEl, countEl) {
    if (!state.checks[listId]) state.checks[listId] = [];
    const arr = state.checks[listId];
    const pos = arr.indexOf(idx);
    if (pos === -1) arr.push(idx); else arr.splice(pos, 1);
    saveState();
    itemEl.classList.toggle('checked');
    countEl.textContent = `${arr.length}/${total}`;
    updateProgress();
  }

  // ── Progress ──────────────────────────────────────────────
  function isChapterDone(i) {
    return state.visited.includes(i);
  }

  function calcOverallProgress() {
    let total = 0, done = 0;
    BOOK.chapters.forEach(ch => {
      ch.blocks.forEach(b => {
        if (b.type === 'checklist') {
          total += b.items.length;
          done += (state.checks[b.id] || []).length;
        }
      });
    });
    if (total === 0) {
      // fallback: visited chapters
      return Math.round((state.visited.length / BOOK.chapters.length) * 100);
    }
    return Math.round((done / total) * 100);
  }

  function updateProgress() {
    const pct = calcOverallProgress();
    const circumference = 88;
    const offset = circumference - (circumference * pct / 100);
    progressCircle.style.strokeDashoffset = offset;
    progressPct.textContent = pct + '%';
    sidebarBar.style.width = pct + '%';
    sidebarPct.textContent = pct + '%';
  }

  // ── Screen switch ─────────────────────────────────────────
  function showScreen(name) {
    screenWelcome.classList.remove('active');
    screenChapter.classList.remove('active');
    screenComplete.classList.remove('active');
    if (name === 'welcome')  screenWelcome.classList.add('active');
    if (name === 'chapter')  screenChapter.classList.add('active');
    if (name === 'complete') screenComplete.classList.add('active');
  }

  // ── Completion screen ─────────────────────────────────────
  function renderComplete() {
    const pct = calcOverallProgress();
    const total = countTotalItems();
    let done = 0;
    BOOK.chapters.forEach(ch => {
      ch.blocks.forEach(b => {
        if (b.type === 'checklist') done += (state.checks[b.id] || []).length;
      });
    });
    completeStats.innerHTML = `
      <div class="welcome__stat"><div class="welcome__stat-num">${pct}%</div><div class="welcome__stat-label">Progress</div></div>
      <div class="welcome__stat"><div class="welcome__stat-num">${done}/${total.items}</div><div class="welcome__stat-label">Items Done</div></div>
      <div class="welcome__stat"><div class="welcome__stat-num">${BOOK.chapters.length}</div><div class="welcome__stat-label">Chapters</div></div>
    `;
    updateProgress();
  }

  // ── Start ─────────────────────────────────────────────────
  init();

})();
