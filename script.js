/* script.js — header/footer injection, EN/DE translations, floating control,
   theme selection and mobile About toggle. Persists settings to localStorage. */

(function(){
  // ---------- HTML fragments (header + footer) ----------
  const header = `
  <header class="topbar">
    <div class="container topbar-inner">
      <a class="brand" href="index.html">
        <div class="logo"><img src="assets/profile.jpg" alt="Profile"></div>
        <div class="brand-text">
          <div class="brand-name" data-i18n="brand_name">George P. Mathew</div>
          <div class="brand-sub" data-i18n="brand_sub">The Engineer's Folio</div>
        </div>
      </a>

      <nav class="mainnav" role="navigation" aria-label="Primary">
        <a class="nav-link" href="index.html" data-i18n="nav_home">Home</a>
        <a class="nav-link" href="about.html" data-i18n="nav_about">About</a>
        <a class="nav-link" href="experience.html" data-i18n="nav_experience">Experience</a>
        <a class="nav-link" href="skills.html" data-i18n="nav_skills">Skills</a>
        <a class="nav-link" href="education.html" data-i18n="nav_education">Education</a>
        <a class="nav-link" href="social.html" data-i18n="nav_social">Social</a>
        <a class="nav-link" href="contact.html" data-i18n="nav_contact">Contact</a>
      </nav>
    </div>
  </header>`;

  const footer = `
  <footer class="footer container">
    <div><strong data-i18n="brand_name">George P. Mathew</strong></div>
    <div class="muted">Built with care • M.Sc. Materials Engineering</div>
  </footer>`;

  // Insert header/footer into placeholders
  document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', header);
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footer);

  // ---------- translations (EN/DE) ----------
  const dict = {
    en: {
      brand_name: "George P. Mathew",
      brand_sub: "The Engineer's Folio",
      nav_home: "Home", nav_about: "About", nav_experience: "Experience", nav_skills: "Skills", nav_education: "Education", nav_contact: "Contact", nav_social: "Social",
      hero_eyebrow: "The Engineer's Folio",
      hero_name: "George P. Mathew",
      hero_role: "Civil Engineer & Materials Science Student",
      hero_lead: "I combine hands-on construction supervision and precast experience with advanced materials research at RWTH Aachen University. I leverage AI & LLMs for faster analysis, reporting and prototyping.",
      what_title: "What I do",
      what_1: "Construction supervision & site coordination (foundations, precast erection, finishing)",
      what_2: "Materials testing and characterization (concrete durability)",
      what_3: "Quality assurance, technical problem solving",
      what_4: "AI & LLMs: prompt engineering and practical LLM workflows for engineering tasks",
      btn_experience: "View Experience",
      btn_cv: "Download CV",
      contact_title: "Get In Touch",
      contact_desc: "I am actively seeking internships and Werkstudent opportunities in the Aachen area."
    },
    de: {
      brand_name: "George P. Mathew",
      brand_sub: "Das Ingenieur-Portfolio",
      nav_home: "Start", nav_about: "Über", nav_experience: "Erfahrung", nav_skills: "Fähigkeiten", nav_education: "Ausbildung", nav_contact: "Kontakt", nav_social: "Sozial",
      hero_eyebrow: "Das Ingenieur-Portfolio",
      hero_name: "George P. Mathew",
      hero_role: "Bauingenieur & Materialwissenschafts-Student",
      hero_lead: "Ich vereine praktische Bauüberwachung und Fertigteil-Erfahrung mit Materialforschung an der RWTH Aachen. Ich nutze KI & LLMs zur beschleunigten Analyse, Berichterstellung und Prototyping.",
      what_title: "Was ich tue",
      what_1: "Bauüberwachung & Baustellenkoordination (Fundamente, Fertigteilmontage, Ausbau)",
      what_2: "Materialprüfungen und Charakterisierung (Beton, Dauerhaftigkeit)",
      what_3: "Qualitätssicherung, technische Problemlösung",
      what_4: "KI & LLMs: Prompt-Engineering und praktische LLM-Workflows für Ingenieuraufgaben",
      btn_experience: "Erfahrung ansehen",
      btn_cv: "Lebenslauf herunterladen",
      contact_title: "Kontakt aufnehmen",
      contact_desc: "Ich suche aktiv Praktika und Werkstudentenstellen im Raum Aachen."
    }
  };

  const LANG_KEY = 'ef_lang';
  const THEME_KEY = 'ef_theme';

  function currentLang(){ return localStorage.getItem(LANG_KEY) || 'en'; }
  function setLang(code){ localStorage.setItem(LANG_KEY, code); applyTranslations(code); setLangButtonText(); }

  function applyTranslations(code){
    const t = dict[code] || dict.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key && t[key] !== undefined) el.textContent = t[key];
    });
  }

  // initial translate
  applyTranslations(currentLang());

  // ---------- floating control (modern bottom-right) ----------
  const floatingHtml = `
    <div class="floating-control" id="floatingControl" aria-hidden="false">
      <div class="control-card" role="region" aria-label="Controls">
        <div class="control-row">
          <select id="themeSelect" class="select" aria-label="Theme select">
            <option value="default">Theme: Gold</option>
            <option value="theme-german">Theme: Green</option>
            <option value="theme-dark">Theme: Dark</option>
          </select>
          <button id="langBtn" class="lang-toggle" aria-pressed="false" title="Toggle language">EN</button>
        </div>
        <div class="control-row">
          <a class="icon-btn center" id="ctaResume" href="assets/resume.pdf" target="_blank" rel="noreferrer" title="Resume"><img src="assets/icons/document.svg" alt="Resume" style="width:20px;height:20px"></a>
          <a class="icon-btn center" id="ctaEmail" href="mailto:georgepmathew424@gmail.com" title="Email"><img src="assets/icons/mail.svg" alt="Email" style="width:18px;height:18px"></a>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', floatingHtml);

  // theme select logic
  const themeSelect = document.getElementById('themeSelect');
  const themeMap = { default: null, 'theme-german': 'theme-german', 'theme-dark': 'theme-dark' };

  // apply saved theme
  const savedTheme = localStorage.getItem(THEME_KEY) || 'default';
  if (savedTheme && themeMap[savedTheme]) document.documentElement.classList.add(themeMap[savedTheme]);
  if (themeSelect) themeSelect.value = savedTheme;

  if (themeSelect) {
    themeSelect.addEventListener('change', (e) => {
      const val = e.target.value;
      // remove custom theme classes
      document.documentElement.classList.remove('theme-german','theme-dark');
      if (val !== 'default') document.documentElement.classList.add(val);
      localStorage.setItem(THEME_KEY, val);
    });
  }

  // language button
  const langBtn = document.getElementById('langBtn');
  function setLangButtonText(){
    const c = currentLang();
    if (langBtn) {
      langBtn.textContent = c.toUpperCase();
      langBtn.setAttribute('aria-pressed', c==='de' ? 'true' : 'false');
    }
  }
  setLangButtonText();
  langBtn.addEventListener('click', () => {
    const next = currentLang() === 'en' ? 'de' : 'en';
    setLang(next);
  });

  // mark active nav link
  function markActive(){
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mainnav .nav-link').forEach(a=>{
      const href = a.getAttribute('href') || '';
      // normalize index
      if ((href === path) || (href === 'index.html' && path === '')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }
  markActive();

  // ensure translations re-run on load (for content added after injection)
  window.addEventListener('load', ()=> applyTranslations(currentLang()));

  // Accessibility: keyboard shortcut for language toggle (L)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'l' || e.key === 'L') {
      const next = currentLang() === 'en' ? 'de' : 'en';
      setLang(next);
    }
  });

  // small auto-hide for floating control on desktop after inactivity (optional)
  (function floatingAutoHide(){
    let timer;
    const fc = document.getElementById('floatingControl');
    if (!fc) return;
    const show = () => { fc.style.opacity = '1'; fc.style.transform = 'translateY(0)'; clearTimeout(timer); timer = setTimeout(()=>{ fc.style.opacity='0.12'; }, 6000); };
    ['mousemove','touchstart','scroll','keydown'].forEach(evt => window.addEventListener(evt, show, { passive:true }));
    show();
  })();

})();
