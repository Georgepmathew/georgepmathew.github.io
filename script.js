/* script.js — Engineer GPM Folio
   - Handles EN/DE translations, theme persistence, active navigation,
   - and the interactive "Living Timeline" hero experience.
   - FINAL POLISHED VERSION 3.0
*/

(function () {
  'use strict';

  /* =========================
     Translation Dictionary
     ========================= */
  const I18N = {
    en: {
      // General
      brand_name: "George P. Mathew",
      brand_sub: "Engineer GPM",
      footer_text: "Engineered by George P. Mathew",
      footer_subtext: "Leveraging AI to bridge vision and reality.",

      // Navigation
      nav_home: "Home",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_germany: "Germany",
      nav_about: "About",
      nav_social: "Social",
      nav_contact: "Contact",

      // Homepage Timeline
      timeline_brand: "◆ Engineer GPM",
      timeline_materials: "Materials Engineer",
      timeline_content: "Content Creator",
      timeline_entrepreneur: "Entrepreneur",
      timeline_civil: "Civil Engineer",
      timeline_headline: "A Multi-faceted Engineering Journey.",
      timeline_cta: "Explore My Work",

      // About Page
      about_heading: "My Story",
      about_p1: "My career began on construction sites in India, where I managed the erection of precast components and supervised foundation work. This wasn't just a job; it was a real-world laboratory where I witnessed the critical link between material quality and project success. Seeing the challenges of material defects firsthand ignited my passion for understanding the 'why' behind the materials we use.",
      about_p2: "This on-site experience led me to a clear conclusion: to build better, more durable structures, we must first innovate the materials themselves. This realization is the driving force behind my decision to pursue a Master's in Materials Engineering at the world-renowned RWTH Aachen University, positioning myself at the forefront of construction innovation.",
      about_subtitle: "My Mindset: The Story of this Website",
      about_p3: "I am defined by my resourcefulness. This website is my proof. With zero prior coding experience, I treated its creation as an engineering problem. My tool wasn't a CAD program; it was Artificial Intelligence. Through iterative prompting and logical debugging, I guided AI to generate the code, structure the design, and build the features you see now. This is the forward-thinking, tool-agnostic mindset I bring to every challenge.",

      // Experience Page
      experience_heading: "Professional Experience",
      exp1_role: "Business Assistant",
      exp1_date: "12/2023 – Present",
      exp1_company: "Best Trading, Pathanapuram, India",
      exp1_li1: "Assisted customers with product inquiries, improving sales through personalized service and technical guidance.",
      exp1_li2: "Handled billing operations and contributed to local marketing efforts, including promotions and flyer distribution.",
      exp2_role: "Junior Engineer",
      exp2_date: "07/02/2023 – 30/11/2023",
      exp2_company: "SG Construction Company, Mumbai, India",
      exp2_li1: "Supervised pile foundation work and finishing stages of the building project.",
      exp2_li2: "Coordinated with various teams to ensure project milestones were met on schedule.",
      exp2_li3: "Resolved on-site issues to maintain project quality and maintained communication with contractors.",
      exp3_role: "Graduate Engineer Trainee",
      exp3_date: "01/10/2021 – 30/09/2022",
      exp3_company: "Excel Precast Solutions Pvt Ltd, Bangalore, India",
      exp3_li1: "Managed the erection of precast components including wall panels, beams, and slabs.",
      exp3_li2: "Conducted grouting, repair work, and assisted in quality checks for precast components.",
      exp3_li3: "Collaborated with the team to ensure timely completion of construction tasks.",
      tag_cs: "Customer Service",
      tag_sales: "Sales",
      tag_marketing: "Marketing",
      tag_supervision: "Site Supervision",
      tag_coordination: "Project Coordination",
      tag_qa: "Quality Assurance",
      tag_precast: "Precast Erection",
      tag_civil: "Civil Engineering",

      // Skills Page
      skills_heading: "My Capabilities",
      skill1_title: "Engineering Foundation",
      skill1_desc: "Site Supervision, Precast Erection, Quality Assurance, and Project Coordination.",
      skill2_title: "AI & Resourcefulness",
      skill2_desc_revised: "Expert in prompting for complex tasks like code generation and image synthesis. I leverage AI models to rapidly prototype solutions and solve daily engineering challenges.",
      skill3_title: "Software & Tools",
      skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), and MS Office.",
      lang_heading: "Languages & Communication",
      lang1_name: "English",
      lang1_level: "C1 – Professional Proficiency",
      lang2_name: "Malayalam",
      lang2_level: "Native Speaker",
      lang3_name: "German",
      lang3_level: "Actively Learning",
      lang4_name: "Tamil",
      lang4_level: "Conversational",
      lang5_name: "Hindi",
      lang5_level: "Conversational",
      
      // Germany Page
      germany_heading: "My Commitment to Engineering in Germany",
      germany_intro: "My on-site experience revealed the critical need for material innovation, which led me directly to Germany—the European leader in engineering research and sustainable technology. This is not just a destination; it's the epicenter of the future I want to help build.",
      
      // Social Page
      social_heading: "My Channels & Socials",
      social_intro: "Follow my journey, watch my projects, and connect with me on your favorite platform.",
      social_brand_heading: "My Brand Channels (Engineer GPM)",
      social_youtube_title: "YouTube",
      social_youtube_desc: "Engineering videos & tutorials",
      social_brand_insta_title: "Instagram (Brand)",
      social_brand_insta_desc: "Content & updates for Engineer GPM",
      social_x_title: "X (Twitter)",
      social_x_desc: "Short updates & tech insights",
      social_brand_fb_title: "Facebook (Brand)",
      social_brand_fb_desc: "Page for Engineer GPM",
      social_personal_heading: "Connect with Me Personally",
      social_linkedin_title: "LinkedIn",
      social_linkedin_desc: "For professional networking",
      social_insta_title: "Instagram (Personal)",
      social_insta_desc: "Personal updates & photography",
      
      // Contact Page
      contact_heading: "Get In Touch",
      contact_intro_simple: "I'm always open to discussing new projects, creative ideas, or opportunities. The best ways to reach me are below.",

      // Education Page
      education_heading: "Education",
      edu1_degree: "M.Sc. Materials Engineering",
      edu1_school: "RWTH Aachen University, Germany",
      edu1_date: "Accepted Offer — Starting Winter 2025",
      edu2_degree: "B.E. Civil Engineering",
      edu2_school: "Mar Ephraem College of Engineering and Technology, India",
      edu2_date: "06/2017 – 07/2021",
    },
    de: {
      // General
      brand_name: "George P. Mathew",
      brand_sub: "Engineer GPM",
      footer_text: "Entwickelt von George P. Mathew",
      footer_subtext: "KI nutzen, um Vision und Realität zu verbinden.",

      // Navigation
      nav_home: "Start",
      nav_experience: "Erfahrung",
      nav_education: "Bildung",
      nav_skills: "Fähigkeiten",
      nav_germany: "Deutschland",
      nav_about: "Über mich",
      nav_social: "Soziales",
      nav_contact: "Kontakt",

      // Homepage Timeline
      timeline_brand: "◆ Engineer GPM",
      timeline_materials: "Werkstoffingenieur",
      timeline_content: "Content Creator",
      timeline_entrepreneur: "Unternehmer",
      timeline_civil: "Bauingenieur",
      timeline_headline: "Eine facettenreiche Ingenieurreise.",
      timeline_cta: "Meine Arbeit entdecken",
      
      // Experience Page
      experience_heading: "Berufserfahrung",
      // ... other German translations ...
    }
  };

  /* =========================
     Persistence & Helpers
     ========================= */
  const LANG_KEY = 'gpm_lang';
  const THEME_KEY = 'gpm_theme'; // Note: Homepage theme is CSS-driven by body class
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);
  const getSavedTheme = () => localStorage.getItem(THEME_KEY) || 'default';
  const saveTheme = (t) => localStorage.setItem(THEME_KEY, t);

  /* =========================
     Core Functions
     ========================= */
  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', code);
  }

  function applyTheme(themeValue) {
    // Homepage has its own theme, so this applies only to other pages.
    if(!document.body.classList.contains('home-page')) {
      document.documentElement.setAttribute('data-theme', themeValue);
    }
    saveTheme(themeValue);
  }

  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mainnav .nav-link, .mobile-nav-scroll .nav-link').forEach(link => {
      const linkPage = (link.getAttribute('href') || '').split('/').pop() || 'index.html';
      if (currentPage === linkPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* =========================
     UI & Animations
     ========================= */
  function initLivingTimeline() {
    const svg = document.getElementById('timeline-svg');
    if (!svg) return; // Only run on homepage

    const milestones = svg.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
      const targetSelector = milestone.getAttribute('data-scroll-to');
      const targetElement = document.querySelector(targetSelector);
      if (targetElement) {
        milestone.addEventListener('click', () => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });
  }
  
  function initLangToggle() {
    const btnContainer = document.querySelector('.header-actions');
    if (!btnContainer) return; 
  
    const pill = document.createElement('div');
    pill.className = 'lang-toggle-pill';
    pill.title = 'Toggle language (EN/DE)';
    pill.setAttribute('aria-label', 'Toggle language');
    pill.setAttribute('role', 'button');
    pill.setAttribute('tabindex', '0');
    pill.innerHTML = `
      <span class="en">EN</span>
      <span class="de">DE</span>
      <div class="glider"></div>
    `;
    
    btnContainer.appendChild(pill);
  
    const setButtonState = (lang) => {
      pill.classList.toggle('de', lang === 'de');
      pill.querySelector('.en').classList.toggle('active', lang === 'en');
      pill.querySelector('.de').classList.toggle('active', lang === 'de');
    };
  
    const toggleLang = () => {
      const newLang = getSavedLang() === 'en' ? 'de' : 'en';
      saveLang(newLang);
      applyTranslations(newLang);
      setButtonState(newLang);
    };

    pill.addEventListener('click', toggleLang);
    pill.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleLang();
      }
    });
    
    setButtonState(getSavedLang());
  }

  function initThemeShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.altKey || e.metaKey) && e.key.toLowerCase() === 't') {
        e.preventDefault();
        const currentTheme = getSavedTheme();
        const themes = ['default', 'german', 'dark'];
        const currentIndex = themes.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        applyTheme(themes[nextIndex]);
      }
    });
  }

  /* =========================
     Initialization
     ========================= */
  function init() {
    // Set theme for non-homepage pages
    if (!document.body.classList.contains('home-page')) {
      applyTheme(getSavedTheme());
    }
    
    applyTranslations(getSavedLang());
    markActiveNav();
    initLangToggle();
    initThemeShortcuts();

    // Page-specific initializations
    initLivingTimeline(); // Will only run if timeline SVG is found
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
