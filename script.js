/* script.js
 - Injects header + footer so pages are consistent
 - Handles theme (gold, german, dark) via html.classList (persisted)
 - Handles language (en/de) translations via data-i18n attributes (persisted)
 - Highlights active nav link
*/

(function(){
  // ---------- Header & Footer HTML (injected into pages) ----------
  const headerHTML = `
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html">
          <div class="logo">GM</div>
          <div>
            <div class="brand-name">George P. Mathew</div>
            <div class="brand-sub" data-i18n="brand_sub">The Engineer's Folio</div>
          </div>
        </a>

        <nav class="nav" role="navigation" aria-label="Main">
          <a class="nav-link" href="index.html" data-i18n="nav_home">Home</a>
          <a class="nav-link" href="about.html" data-i18n="nav_about">About</a>
          <a class="nav-link" href="experience.html" data-i18n="nav_experience">Experience</a>
          <a class="nav-link" href="skills.html" data-i18n="nav_skills">Skills</a>
          <a class="nav-link" href="education.html" data-i18n="nav_education">Education</a>
          <a class="nav-link" href="social.html" data-i18n="nav_social">Social</a>
          <a class="nav-link" href="contact.html" data-i18n="nav_contact">Contact</a>

          <a class="small-btn" href="assets/resume.pdf" target="_blank" rel="noreferrer" data-i18n="btn_cv">Download CV</a>

          <button class="lang-btn" id="langToggle" aria-pressed="false">EN</button>

          <select id="themeSelect" class="theme-select" title="Theme">
            <option value="theme-gold">Gold</option>
            <option value="theme-german">German (green)</option>
            <option value="theme-dark">Dark</option>
          </select>
        </nav>
      </div>
    </header>
  `;

  const footerHTML = `
    <footer class="footer container">
      <div>&copy; <span data-i18n="brand_name">George P. Mathew</span></div>
      <div><button id="themeToggleFooter" class="link-like" data-i18n="btn_toggle_theme">Toggle theme</button></div>
    </footer>
  `;

  document.getElementById('site-header')?.insertAdjacentHTML('afterbegin', headerHTML);
  document.getElementById('site-footer')?.insertAdjacentHTML('afterbegin', footerHTML);

  // ---------- Translations (EN / DE) ----------
  const translations = {
    en: {
      brand_sub: "The Engineer's Folio",
      nav_home: "Home", nav_about: "About", nav_experience: "Experience", nav_skills: "Skills", nav_education: "Education", nav_contact: "Contact", nav_social: "Social",
      btn_cv: "Download CV", btn_experience: "View Experience",
      hero_eyebrow: "The Engineer's Folio",
      hero_sub: "Civil Engineer & Materials Science Student",
      hero_desc: "I am a Civil Engineer with hands-on construction and precast experience — now pursuing an M.Sc. in Materials Engineering at RWTH Aachen University. I combine on-site execution with materials research to improve durability and sustainability.",
      what_title: "What I do",
      what_1: "Construction supervision & site coordination (foundations, precast erection, finishing)",
      what_2: "Materials testing and characterization (concrete, durability)",
      what_3: "Project quality assurance & technical problem solving",
      what_4: "AI & LLMs: practical prompt engineering and LLM usage to speed analysis and documentation",
      hero_current: "<strong>Current:</strong> Pursuing M.Sc., Materials Engineering — RWTH Aachen University",
      chip_loc: "Aachen, Germany",
      chip_seek: "Seeking: Internships / Werkstudent",
      nav_social: "Social", contact_title: "Get In Touch", contact_desc: "I am actively seeking internships and Werkstudent opportunities in the Aachen area.",
      brand_name: "George P. Mathew", btn_toggle_theme: "Toggle theme",
      about_lead: "I am a Civil Engineer with hands-on experience in construction supervision, precast works, quality assurance, and site coordination. My current focus is materials science and materials testing.",
      about_h3_1: "Profile highlights", about_li1: "Supervised pile foundation and finishing works.", about_li2: "Experienced in precast erection, grouting and repairs.", about_li3: "Skilled in AutoCAD, SketchUp, Microsoft Office.",
      skills_ai: "Practical knowledge of prompt engineering, LLM usage and AI-based assistance for technical documentation and analysis.",
      social_lead: "Follow my engineering work, tutorials and experiments:"
    },
    de: {
      brand_sub: "Das Ingenieur-Portfolio",
      nav_home: "Start", nav_about: "Über", nav_experience: "Erfahrung", nav_skills: "Fähigkeiten", nav_education: "Ausbildung", nav_contact: "Kontakt", nav_social: "Sozial",
      btn_cv: "Lebenslauf herunterladen", btn_experience: "Erfahrung ansehen",
      hero_eyebrow: "Das Ingenieur-Portfolio",
      hero_sub: "Bauingenieur & Materialwissenschafts-Student",
      hero_desc: "Ich bin Bauingenieur mit praktischer Erfahrung in der Bauüberwachung und im Fertigteilbau – derzeit im M.Sc. Materials Engineering an der RWTH Aachen. Ich verbinde Baustellenpraxis mit Materialforschung für bessere Dauerhaftigkeit und Nachhaltigkeit.",
      what_title: "Was ich tue",
      what_1: "Bauüberwachung & Baustellenkoordination (Fundamente, Fertigteilmontage, Ausbau)",
      what_2: "Materialprüfungen und Charakterisierung (Beton, Dauerhaftigkeit)",
      what_3: "Qualitätssicherung & technische Problemlösung",
      what_4: "KI & LLMs: praktische Erfahrung in Prompt-Engineering und Nutzung von LLMs zur Beschleunigung von Analysen und Dokumentation",
      hero_current: "<strong>Aktuell:</strong> M.Sc. Materials Engineering — RWTH Aachen University",
      chip_loc: "Aachen, Deutschland",
      chip_seek: "Suche: Praktika / Werkstudentenstellen",
      nav_social: "Sozial", contact_title: "Kontakt aufnehmen", contact_desc: "Ich suche aktiv Praktika und Werkstudentenstellen im Raum Aachen.",
      brand_name: "George P. Mathew", btn_toggle_theme: "Theme wechseln",
      about_lead: "Ich bin Bauingenieur mit praktischer Erfahrung in Bauleitung, Fertigteilbau, QS und Baustellenkoordination. Derzeit liegt mein Fokus auf Materialwissenschaften und Materialprüfungen.",
      about_h3_1: "Profil-Highlights", about_li1: "Überwachung von Pfahlgründungen und Ausbauarbeiten.", about_li2: "Erfahrung in Fertigteilmontage, Verguss und Reparaturen.", about_li3: "Erfahren in AutoCAD, SketchUp, Microsoft Office.",
      skills_ai: "Praktische Kenntnisse im Prompt-Engineering, Nutzung von LLMs und KI-Unterstützung für technische Dokumentation und Analyse.",
      social_lead: "Folge meinen Ingenieursarbeiten, Tutorials und Experimenten:"
    }
  };

  // ---------- Language state ----------
  const langKey = 'ef_lang';
  const themeKey = 'ef_theme_class';

  function getSavedLang(){ return localStorage.getItem(langKey) || 'en'; }
  function getSavedTheme(){ return localStorage.getItem(themeKey) || 'theme-gold'; }

  // apply saved theme and set select
  const html = document.documentElement;
  html.classList.remove('theme-gold','theme-german','theme-dark');
  const savedTheme = getSavedTheme();
  html.classList.add(savedTheme);

  // set theme select value (if exists)
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) themeSelect.value = savedTheme;
  if (themeSelect) themeSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    html.classList.remove('theme-gold','theme-german','theme-dark');
    html.classList.add(val);
    localStorage.setItem(themeKey, val);
  });

  // language toggle button
  const langBtn = document.getElementById('langToggle');
  function setLangButtonText(code){ if (langBtn) langBtn.textContent = code.toUpperCase(); }
  setLangButtonText(getSavedLang());

  // translation function - fill all elements with data-i18n
  function translateAll(code){
    const dict = translations[code] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // support HTML content
        el.innerHTML = dict[key];
      }
    });
    // update lang button aria + text
    setLangButtonText(code);
    localStorage.setItem(langKey, code);
  }

  // initial translate
  translateAll( getSavedLang() );

  if (langBtn){
    langBtn.addEventListener('click', () => {
      const current = localStorage.getItem(langKey) || 'en';
      const next = current === 'en' ? 'de' : 'en';
      translateAll(next);
    });
  }

  // footer theme toggle quick button
  document.getElementById('themeToggleFooter')?.addEventListener('click', ()=>{
    // cycle through themes
    const current = getSavedTheme();
    const order = ['theme-gold','theme-german','theme-dark'];
    const next = order[(order.indexOf(current)+1) % order.length];
    html.classList.remove(...order);
    html.classList.add(next);
    localStorage.setItem(themeKey, next);
    if (themeSelect) themeSelect.value = next;
  });

  // --------- highlight active nav link ----------
  function markActiveLink(){
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href === path || (path === '' && href === 'index.html') ) a.classList.add('active');
      else a.classList.remove('active');
    });
  }
  markActiveLink();

  // re-run translations if page content loads later
  window.addEventListener('load', () => { translateAll(localStorage.getItem(langKey) || 'en'); markActiveLink(); });
})();
