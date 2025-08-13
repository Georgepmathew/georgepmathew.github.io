/* ------------------------------------------------------
   Interactions: theme, language, nav, auto-hide toggle
   ------------------------------------------------------ */
const qs = (s, r=document) => r.querySelector(s);
const qsa = (s, r=document) => [...r.querySelectorAll(s)];

// Persisted state
const STORE = {
  theme: localStorage.getItem('theme') || 'theme-gold',
  lang: localStorage.getItem('lang') || 'en'
};

document.documentElement.classList.add(STORE.theme);

// Translation map
const I18N = {
  en: {
    brand: 'Engineer GPM',
    nav_home: 'Home', nav_about: 'About', nav_exp: 'Experience', nav_skills: 'Skills', nav_edu: 'Education', nav_contact: 'Contact', nav_social: 'Social',
    hero_title: 'George P Mathew',
    hero_sub: 'Civil Engineer & Materials Science Student',
    hero_line: 'Pursuing M.Sc. Materials Engineering at RWTH Aachen University',
    hero_do: 'What I Do',
    hero_do_text: 'I bridge civil engineering fundamentals with modern materials science and practical AI. I prototype, analyze, and optimize — using LLMs and strong prompting skills to work faster and smarter.',
    view_exp: 'View Experience',
    download_cv: 'Download CV',
    about_title: 'About',
    about_text: 'Skilled Civil Engineer now specializing in Materials Engineering. I enjoy solving messy, real-world problems and communicating the results clearly.',
    exp_title: 'Professional Experience',
    skills_title: 'Skills',
    edu_title: 'Education',
    contact_title: 'Get In Touch',
    contact_text: 'Actively seeking internships and Werkstudent roles in the Aachen area. If my background fits your needs, I’d love to connect.',
    email_cta: 'Email Me',
    nav_social: 'My Channels & Socials'
  },
  de: {
    brand: 'Engineer GPM',
    nav_home: 'Startseite', nav_about: 'Über mich', nav_exp: 'Erfahrung', nav_skills: 'Fähigkeiten', nav_edu: 'Bildung', nav_contact: 'Kontakt', nav_social: 'Social',
    hero_title: 'George P Mathew',
    hero_sub: 'Bauingenieur & Student der Werkstofftechnik',
    hero_line: 'Studiert M.Sc. Werkstofftechnik an der RWTH Aachen University',
    hero_do: 'Was ich mache',
    hero_do_text: 'Ich verbinde Bauingenieurwesen mit moderner Werkstofftechnik und praktischer KI. Mit LLMs und starken Prompting-Fähigkeiten prototypisiere, analysiere und optimiere ich schneller und smarter.',
    view_exp: 'Erfahrung ansehen',
    download_cv: 'Lebenslauf herunterladen',
    about_title: 'Über mich',
    about_text: 'Erfahrener Bauingenieur mit Spezialisierung in Werkstofftechnik. Ich löse reale Probleme und kommuniziere die Ergebnisse klar.',
    exp_title: 'Berufserfahrung',
    skills_title: 'Fähigkeiten',
    edu_title: 'Bildung',
    contact_title: 'Kontakt aufnehmen',
    contact_text: 'Ich suche aktiv Praktika und Werkstudentenstellen im Raum Aachen. Wenn mein Profil passt, freue ich mich auf Ihre Nachricht.',
    email_cta: 'E-Mail senden',
    nav_social: 'Meine Kanäle & Socials'
  }
};

function applyLang(lang){
  const dict = I18N[lang] || I18N.en;
  qsa('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && dict[key]) el.textContent = dict[key];
  });
  STORE.lang = lang;
  localStorage.setItem('lang', lang);
}

// initial
applyLang(STORE.lang);

// language toggle
qs('#lang-toggle')?.addEventListener('click', () => {
  const newLang = STORE.lang === 'en' ? 'de' : 'en';
  applyLang(newLang);
});

// theme toggle
qs('#theme-toggle')?.addEventListener('click', () => {
  const themes = ['theme-gold', 'theme-dark', 'theme-light'];
  const currentIndex = themes.indexOf(STORE.theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length] || themes[0];

  document.documentElement.classList.remove(STORE.theme);
  document.documentElement.classList.add(nextTheme);

  STORE.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  // update icon if you want (switch sun/moon)
});

// nav toggle (mobile)
qs('#nav-toggle')?.addEventListener('click', () => {
  // show/hide the nav-mobile by toggling class on header or nav
  const nav = qs('.nav-mobile');
  if (nav) nav.classList.toggle('open');
});

// auto-hide mobile toggle button (hide after inactivity)
(function autoHideMobileToggle(){
  const t = qs('#nav-toggle');
  if (!t) return;
  let timer;
  const show = () => t.classList.remove('is-hidden');
  const hideSoon = () => { clearTimeout(timer); timer = setTimeout(() => t.classList.add('is-hidden'), 3000); };
  const wake = () => { show(); hideSoon(); };
  ['mousemove','touchstart','scroll','keydown'].forEach(evt => window.addEventListener(evt, wake, { passive: true }));
  // start hidden soon
  hideSoon();
})();
