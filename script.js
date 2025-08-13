// script.js — site behaviour: translations (EN/DE), theme persistence, accessibility helpers,
// responsive image/icon safety, and active-nav marking.
//
// Put this file at the repo root and include it in each page (it's already referenced in the HTML).
// It assumes the HTML uses data-i18n attributes for text that should be translated,
// and that a button with id="lang-toggle" exists to toggle language.

(function () {
  'use strict';

  /* =========================
     Translation dictionary
     ========================= */
  const I18N = {
    en: {
      brand_name: "George P. Mathew",
      brand_sub: "The Engineer's Folio",
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_contact: "Contact",
      nav_social: "Social",
      hero_eyebrow: "Engineer GPM",
      hero_name: "George P. Mathew",
      hero_role: "Civil Engineer & Materials Science Student",
      hero_lead: "I combine hands-on construction supervision and precast experience with materials research at RWTH Aachen. I also use AI & LLMs to speed up analysis, reporting and prototyping.",
      what_title: "What I do",
      what_1: "Construction supervision & site coordination (foundations, precast erection, finishing)",
      what_2: "Materials testing and characterization (concrete durability)",
      what_3: "Quality assurance, documentation, technical problem solving",
      what_4: "AI & LLMs: strong prompt engineering, practical LLM workflows for engineering tasks",
      btn_experience: "View Experience",
      btn_cv: "Download CV",
      contact_title: "Get In Touch",
      contact_desc: "Actively seeking internships and Werkstudent roles in the Aachen area.",
      about_heading: "About Me",
      about_paragraph: "I am George P. Mathew, passionate about engineering, AI, and technology. I have strong skills in prompting, and deep knowledge of Large Language Models (LLMs). I enjoy creating innovative solutions and sharing knowledge through my YouTube channel.",
      about_more: "Beyond AI, I explore creative projects, modern web design, and enjoy connecting with global audiences.",
      experience_title: "Professional Experience",
      skills_title: "My Skills",
      skills_ai: "Practical prompt engineering; LLM-assisted drafting, data extraction and analysis pipelines.",
      education_title: "Education",
      social_title: "My Channels & Socials"
    },
    de: {
      brand_name: "George P. Mathew",
      brand_sub: "Das Ingenieur-Portfolio",
      nav_home: "Start",
      nav_about: "Über",
      nav_experience: "Erfahrung",
      nav_skills: "Fähigkeiten",
      nav_education: "Bildung",
      nav_contact: "Kontakt",
      nav_social: "Social",
      hero_eyebrow: "Engineer GPM",
      hero_name: "George P. Mathew",
      hero_role: "Bauingenieur & Student der Werkstofftechnik",
      hero_lead: "Ich vereine praktische Bauüberwachung und Fertigteil-Erfahrung mit Materialforschung an der RWTH Aachen. Ich nutze KI & LLMs zur beschleunigten Analyse, Berichterstellung und Prototyping.",
      what_title: "Was ich mache",
      what_1: "Bauüberwachung & Baustellenkoordination (Fundamente, Fertigteilmontage, Ausbau)",
      what_2: "Materialprüfungen & Charakterisierung (Beton, Dauerhaftigkeit)",
      what_3: "Qualitätssicherung, Dokumentation, technische Problemlösung",
      what_4: "KI & LLMs: Prompt-Engineering und praktische LLM-Workflows für Ingenieuraufgaben",
      btn_experience: "Erfahrung ansehen",
      btn_cv: "Lebenslauf herunterladen",
      contact_title: "Kontakt aufnehmen",
      contact_desc: "Ich suche aktiv Praktika und Werkstudentenstellen im Raum Aachen.",
      about_heading: "Über mich",
      about_paragraph: "Ich bin George P. Mathew, leidenschaftlich für Ingenieurwesen, KI und Technologie. Ich habe starke Prompting-Fähigkeiten und fundierte Kenntnisse in großen Sprachmodellen (LLMs). Ich erstelle gerne Lösungen und teile Wissen über meinen YouTube-Kanal.",
      about_more: "Neben KI arbeite ich an kreativen Projekten, modernem Webdesign und vernetze mich gerne mit internationalen Zielgruppen.",
      experience_title: "Berufserfahrung",
      skills_title: "Fähigkeiten",
      skills_ai: "Praktisches Prompt-Engineering; LLM-unterstütztes Erstellen von Texten, Datenauswertung und Analyse-Pipelines.",
      education_title: "Bildung",
      social_title: "Meine Kanäle & Socials"
    }
  };

  /* =========================
     Persistence keys & defaults
     ========================= */
  const LANG_KEY = 'ef_lang';
  const THEME_KEY = 'ef_theme'; // values: 'default' | 'german' | 'dark'

  function getSavedLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }
  function saveLang(code) {
    localStorage.setItem(LANG_KEY, code);
  }

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'default';
  }
  function saveTheme(t) {
    localStorage.setItem(THEME_KEY, t);
  }

  /* =========================
     Apply translations
     ========================= */
  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    // Replace text content for elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const txt = dict[key];
      if (txt === undefined) return;
      // Use innerHTML cautiously if element contains child HTML in future
      // Prefer textContent to avoid injecting HTML accidentally
      el.textContent = txt;
    });
  }

  /* =========================
     Theme handling
     ========================= */
  function applyTheme(themeValue) {
    // themeValue: 'default' | 'german' | 'dark'
    // We'll use a data-theme attribute on <html>
    const html = document.documentElement;
    html.removeAttribute('data-theme'); // clear default
    if (themeValue === 'german') {
      html.setAttribute('data-theme', 'german');
    } else if (themeValue === 'dark') {
      html.setAttribute('data-theme', 'dark');
    } else {
      // default = no attribute
    }
    saveTheme(themeValue);
  }

  /* =========================
     UI helpers & bindings
     ========================= */
  function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    const current = getSavedLang();
    setLangButtonState(btn, current);

    btn.addEventListener('click', () => {
      const cur = getSavedLang();
      const next = cur === 'en' ? 'de' : 'en';
      saveLang(next);
      applyTranslations(next);
      setLangButtonState(btn, next);
      // If you want theme change for german, optionally switch theme automatically:
      // applyTheme(next === 'de' ? 'german' : getSavedTheme());
    });
  }

  function setLangButtonState(btn, code) {
    btn.textContent = code.toUpperCase();
    btn.setAttribute('aria-pressed', code === 'de' ? 'true' : 'false');
    // Update document lang
    document.documentElement.setAttribute('lang', code);
  }

  function initThemeShortcuts() {
    // keyboard shortcut: Alt+T cycles themes (default -> german -> dark)
    window.addEventListener('keydown', (e) => {
      if ((e.altKey || e.metaKey) && (e.key === 't' || e.key === 'T')) {
        e.preventDefault();
        const cur = getSavedTheme();
        const next = cur === 'default' ? 'german' : cur === 'german' ? 'dark' : 'default';
        applyTheme(next);
      }
    });
  }

  /* =========================
     Active nav highlighting
     ========================= */
  function markActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const normalize = (href) => (href ? href.split('/').pop() : '');
    // Both desktop and mobile nav links have class nav-link
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = normalize(a.getAttribute('href'));
      if (!href) return;
      // treat index.html and '' as same
      if (href === path || (href === 'index.html' && path === '')) {
        a.classList.add('active');
        a.setAttribute('aria-current', 'page');
      } else {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      }
    });
  }

  /* =========================
     Images & icons auto-fit safety
     ========================= */
  function ensureImagesAutoFit() {
    document.querySelectorAll('img').forEach(img => {
      // only set inline styles if not already set via CSS to keep specificity low
      // these ensure images/icons won't overflow their containers and keep aspect ratio
      if (!img.style.maxWidth) img.style.maxWidth = '100%';
      if (!img.style.height) img.style.height = 'auto';
      if (!img.style.objectFit) img.style.objectFit = 'contain';
      // For SVG icons, it's helpful to set display to inline-block so CSS margins align
      img.style.display = img.style.display || 'inline-block';
    });
  }

  /* =========================
     Mobile nav auto-close (if you later add a toggled menu)
     ========================= */
  function initAutoCloseMobileNav() {
    // If you later add a JS-driven toggle for a mobile menu, this will close it on outside clicks
    // Here we attempt to gracefully handle a potential element with id="mobileNavToggle" and #mobileNav
    const toggle = document.getElementById('mobileNavToggle');
    const mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if (!mobileNav.classList.contains('open')) return;
      if (mobileNav.contains(e.target) || toggle.contains(e.target)) return;
      mobileNav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }, { passive: true });
  }

  /* =========================
     Small accessibility & niceties
     ========================= */
  function keyboardShortcuts() {
    // L toggles language; T cycles theme (also Alt+T)
    window.addEventListener('keydown', (e) => {
      // ignore when typing in form fields
      const active = document.activeElement;
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable)) return;

      if (e.key === 'l' || e.key === 'L') {
        const next = getSavedLang() === 'en' ? 'de' : 'en';
        saveLang(next);
        applyTranslations(next);
        const btn = document.getElementById('lang-toggle');
        if (btn) setLangButtonState(btn, next);
      }
      if (e.key === 't' || e.key === 'T') {
        // plain T cycles as well
        const cur = getSavedTheme();
        const next = cur === 'default' ? 'german' : cur === 'german' ? 'dark' : 'default';
        applyTheme(next);
      }
    });
  }

  /* =========================
     Initialization on DOM ready
     ========================= */
  function init() {
    // Apply saved language first (so initial paint uses correct text)
    const lang = getSavedLang();
    applyTranslations(lang);

    // Setup language toggle UI and state
    initLangToggle();

    // Apply saved theme
    const theme = getSavedTheme();
    applyTheme(theme);

    // Mark active nav link
    markActiveNav();

    // Ensure images/icons auto-fit
    ensureImagesAutoFit();

    // Setup keyboard shortcuts and theme shortcut
    keyboardShortcuts();
    initThemeShortcuts();

    // Setup mobile nav auto-close if elements exist
    initAutoCloseMobileNav();

    // Re-apply some sizing after window resize to be safe
    window.addEventListener('resize', () => {
      ensureImagesAutoFit();
    }, { passive: true });

    // On SPA navigation or history changes you might want to re-run markActiveNav/applyTranslations
    // If you use PJAX or client routing, call these functions after route change.
  }

  // DOMContentLoaded to ensure elements exist
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* =========================
     Expose small API on window for debugging / manual control
     (optional — helpful while iterating)
     ========================= */
  window._ef = {
    setLang: (code) => { saveLang(code); applyTranslations(code); const b = document.getElementById('lang-toggle'); if (b) setLangButtonState(b, code); },
    setTheme: applyTheme,
    reapply: () => { applyTranslations(getSavedLang()); markActiveNav(); ensureImagesAutoFit(); }
  };

})();
