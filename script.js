// script.js
// Restored — robust mobile-first interactions for snap + multi-page fallback.
// - Nav click (data-target preferred, href fallback)
// - IntersectionObserver for active nav highlighting on snap/index pages
// - Pointer-based swipe/drag for .snap-container
// - Language toggle (localStorage)
// - Toast notifications
// - Basic lazy-load helper (data-src support)
// - Keyboard activation for nav buttons

(function () {
  'use strict';

  /* -------------------------
     Helpers
  ------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const isSameDocument = (href) => {
    try {
      const url = new URL(href, location.href);
      return url.pathname === location.pathname && (url.hash || '') !== '';
    } catch {
      return false;
    }
  };

  /* -------------------------
     Smooth scroll to target (if present in DOM)
  ------------------------- */
  function goToTargetId(id, options = { behavior: 'smooth' }) {
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return false;
    // prefer scrollIntoView for compatibility; ensure top of section shows under header
    el.scrollIntoView({ behavior: options.behavior, block: 'start', inline: 'nearest' });
    return true;
  }

  /* -------------------------
     NAV: wire up buttons & anchors
     Behavior:
     - Elements with [data-target] => treat as single-page nav (scroll to section id)
     - Anchor <a href="otherpage.html"> => default navigation, leave alone
     - Anchor with same-page hash (href="#section" or href="page.html#section") => smooth-scroll to id
  ------------------------- */
  function setupNav() {
    const clickable = $$('[data-target], a[href]');
    clickable.forEach(el => {
      // keyboard activation
      el.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          el.click();
        }
      });

      el.addEventListener('click', (ev) => {
        const dataTarget = el.getAttribute('data-target');
        const href = el.getAttribute('href');

        // data-target takes precedence for single-page scrolling
        if (dataTarget) {
          ev.preventDefault();
          const ok = goToTargetId(dataTarget);
          if (ok) {
            setActiveNavByTarget(dataTarget);
          }
          return;
        }

        // If it's an anchor to the same document (hash), intercept and smooth-scroll
        if (href && (href.startsWith('#') || isSameDocument(href))) {
          ev.preventDefault();
          let id = href.startsWith('#') ? href.slice(1) : (new URL(href, location.href)).hash.slice(1);
          if (id) {
            const ok = goToTargetId(id);
            if (ok) setActiveNavByTarget(id);
          }
          return;
        }

        // Otherwise let the link behave normally (navigate to other page)
      });
    });
  }

  /* -------------------------
     Active nav helpers
  ------------------------- */
  function setActiveNavByTarget(targetId) {
    const navBtns = $$('button.nav-btn, button.nav-cta, a.nav-btn');
    navBtns.forEach(btn => {
      const dt = btn.getAttribute('data-target');
      let isActive = false;
      if (dt && dt === targetId) isActive = true;

      // fallback: for anchors, check href hash or pathname+hash
      if (!isActive && btn.tagName === 'A') {
        const href = btn.getAttribute('href') || '';
        try {
          const url = new URL(href, location.href);
          if (url.hash && url.hash.slice(1) === targetId) isActive = true;
        } catch {}
      }

      btn.classList.toggle('active', isActive);
    });
  }

  function setActiveNavByPath() {
    // run on page load for multi-page site: match location.pathname to nav anchors
    const links = $$('a.nav-btn, a.nav-cta');
    const current = location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      try {
        const url = new URL(href, location.href);
        const targetFile = url.pathname.split('/').pop();
        a.classList.toggle('active', targetFile === current);
      } catch {
        // ignore invalid urls
      }
    });
  }

  /* -------------------------
     IntersectionObserver (for snap container / index page)
  ------------------------- */
  function setupSectionObserver() {
    const sections = Array.from(document.querySelectorAll('.snap-item, .section'));
    if (!sections.length) return;

    const navBtns = $$('button.nav-btn, button.nav-cta, a.nav-btn, a.nav-cta');

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const id = entry.target.id;
          // highlight nav buttons that have data-target equal to id
          navBtns.forEach(btn => {
            const dt = btn.getAttribute('data-target');
            if (dt) {
              btn.classList.toggle('active', dt === id);
            }
          });
        }
      });
    }, { threshold: [0.5] });

    sections.forEach(s => {
      if (s.id) io.observe(s);
    });
  }

  /* -------------------------
     Pointer-based swipe (drag) support for snap container
     Uses Pointer Events for unified handling
  ------------------------- */
  function setupDragForSnapContainer() {
    const container = document.querySelector('.snap-container');
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let lastPointerId = null;

    container.addEventListener('pointerdown', (e) => {
      // only left button or touch
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      isDown = true;
      lastPointerId = e.pointerId;
      container.setPointerCapture(lastPointerId);
      startX = e.clientX;
      scrollStart = container.scrollLeft;
      container.classList.add('dragging');
    });

    container.addEventListener('pointermove', (e) => {
      if (!isDown || e.pointerId !== lastPointerId) return;
      const dx = e.clientX - startX;
      container.scrollLeft = scrollStart - dx;
    });

    function endDrag(e) {
      if (!isDown || e.pointerId !== lastPointerId) return;
      isDown = false;
      try { container.releasePointerCapture(lastPointerId); } catch (err) {}
      lastPointerId = null;
      container.classList.remove('dragging');
      // Snap to nearest child for good measure
      snapToNearest(container);
    }
    container.addEventListener('pointerup', endDrag);
    container.addEventListener('pointercancel', endDrag);
    container.addEventListener('pointerleave', endDrag);

    // touchend on some browsers may not fire pointerup reliably; also listen to touchend
    container.addEventListener('touchend', () => { if (isDown) { isDown = false; container.classList.remove('dragging'); snapToNearest(container); } }, { passive: true });
  }

  function snapToNearest(container) {
    // pick the child whose left is closest to container.scrollLeft
    const children = Array.from(container.children).filter(c => c.scrollSnapAlign !== 'none');
    if (!children.length) return;
    const scrollLeft = container.scrollLeft;
    let closest = children[0];
    let closestDiff = Infinity;
    children.forEach(child => {
      const left = child.offsetLeft;
      const diff = Math.abs(left - scrollLeft);
      if (diff < closestDiff) {
        closestDiff = diff;
        closest = child;
      }
    });
    if (closest) {
      closest.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }

  /* -------------------------
     Language toggle
  ------------------------- */
  function setupLanguageToggle() {
    const toggles = $$('[id="lang-toggle"], .lang-toggle');
    if (!toggles.length) return;

    toggles.forEach(toggle => {
      // initialize from localStorage or html attr
      const saved = localStorage.getItem('site_lang') || toggle.getAttribute('data-lang') || 'en';
      applyLangToToggle(toggle, saved);

      toggle.addEventListener('click', (ev) => {
        ev.preventDefault();
        const current = toggle.getAttribute('data-lang') || 'en';
        const next = current === 'en' ? 'de' : 'en';
        applyLangToToggle(toggle, next);
        localStorage.setItem('site_lang', next);
        showToast(next === 'en' ? 'English selected' : 'Deutsch ausgewählt');
      });
    });
  }

  function applyLangToToggle(toggle, lang) {
    toggle.setAttribute('data-lang', lang);
    toggle.setAttribute('aria-pressed', String(lang === 'de'));
    const texts = Array.from(toggle.querySelectorAll('.lang-text'));
    if (texts.length >= 2) {
      texts.forEach(t => t.classList.remove('inactive'));
      if (lang === 'en') texts[1].classList.add('inactive');
      else texts[0].classList.add('inactive');
    } else {
      // fallback: update visible text
      toggle.textContent = lang === 'en' ? 'EN' : 'DE';
    }
  }

  /* -------------------------
     Toast
  ------------------------- */
  let toastTimeout = null;
  function showToast(msg, ms = 1800) {
    const toast = document.getElementById('toast') || createToastNode();
    toast.textContent = msg;
    toast.classList.add('show');
    toast.hidden = false;
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.hidden = true;
    }, ms);
  }

  function createToastNode() {
    const t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    t.hidden = true;
    document.body.appendChild(t);
    return t;
  }

  /* -------------------------
     Lazy loader (data-src)
  ------------------------- */
  function setupLazyLoading() {
    const lazyEls = $$('img[data-src], video[data-src], iframe[data-src]');
    if (!lazyEls.length) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const src = el.getAttribute('data-src');
        if (src) {
          if (el.tagName === 'IMG') {
            el.src = src;
            el.removeAttribute('data-src');
          } else if (el.tagName === 'VIDEO') {
            const sources = Array.from(el.querySelectorAll('source'));
            if (sources.length) {
              sources.forEach(s => {
                const ssrc = s.getAttribute('data-src');
                if (ssrc) s.src = ssrc;
              });
            }
            el.load();
            el.removeAttribute('data-src');
          } else if (el.tagName === 'IFRAME') {
            el.src = src;
            el.removeAttribute('data-src');
          }
        }
        io.unobserve(el);
      });
    }, { rootMargin: '200px 0px' });

    lazyEls.forEach(el => io.observe(el));
  }

  /* -------------------------
     Page-load initialization
  ------------------------- */
  function init() {
    setupNav();
    setupLanguageToggle();
    setupLazyLoading();

    // If this page uses the snap container, wire up observer + drag
    const snapContainer = document.querySelector('.snap-container');
    if (snapContainer) {
      setupDragForSnapContainer();
      setupSectionObserver();
    } else {
      // otherwise try to mark active nav by path (multi-page)
      setActiveNavByPath();
    }

    // Accessibility: add role attributes for nav buttons missing them
    document.querySelectorAll('.nav-btn, .nav-cta').forEach(btn => {
      if (!btn.hasAttribute('role')) btn.setAttribute('role', 'menuitem');
    });
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose a small API for debugging (optional)
  window.__siteUI = {
    goToTargetId,
    showToast,
    snapToNearest
  };

})();
