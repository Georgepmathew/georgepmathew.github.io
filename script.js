/* script.js — Engineer GPM Folio
   - Handles EN/DE translations, theme persistence, active navigation,
   - and the "Intelligent Interface" hero experience.
   - FINAL POLISHED VERSION 4.0
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
      footer_subtext: "Where hard work transforms vision into reality.",

      // Navigation
      nav_home: "Home",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_skills: "Skills",
      nav_germany: "Germany",
      nav_about: "About",
      nav_social: "Social",
      nav_contact: "Contact",

      // Homepage Hero
      hero_name: "George P. Mathew",
      hero_role: "Civil Engineer & Future Materials Innovator",
      hero_lead_1: "My on-site experience taught me that construction's biggest challenges are often materials problems. This insight drives my move to Germany to pursue an M.Sc. in Materials Engineering.",
      btn_journey: "Explore My Journey",
      btn_work: "View My Work",

      // Homepage Timeline
      timeline_title: "An Evolving Engineering Journey",
      timeline_civil: "Civil Engineer",
      info_civil: "Building my foundation in real-world construction challenges, from site supervision to precast component management.",
      timeline_materials: "Materials Engineer",
      info_materials: "My next chapter: Pursuing an M.Sc. at RWTH Aachen to innovate construction's core components.",
      timeline_content: "Content Creator",
      info_content: "Sharing knowledge and insights through the 'Engineer GPM' brand on platforms like YouTube.",
      timeline_entrepreneur: "Entrepreneur",
      info_entrepreneur: "Applying an engineering mindset to business challenges, from customer service to marketing.",
      
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
      germany_col1_title: "Why Germany?",
      germany_item1_title: "Engineering & Innovation Leadership",
      germany_item1_desc: "Home to industry giants and a culture of precision, Germany is where theoretical knowledge meets world-class application. It's the ideal environment to develop my expertise.",
      germany_item2_title: "Industry 4.0 & Research Ecosystem",
      germany_item2_desc: "As the birthplace of Industry 4.0, Germany's collaborative ecosystem between academia and industry is unmatched. This is crucial for bridging my construction background with advanced materials.",
      germany_item3_title: "Leading Construction & Materials Industry",
      germany_item3_desc: "Renowned for sustainability and precision, the German construction industry and materials firms provide the perfect landscape to contribute to meaningful advancements.",
      germany_col2_title: "Why RWTH Aachen?",
      germany_item4_title: "World-Class University",
      germany_item4_desc: "RWTH Aachen's global ranking and reputation in Materials Engineering open doors worldwide and ensure an education at the forefront of the field.",
      germany_item5_title: "Perfect Program & Industry Integration",
      germany_item5_desc: "The M.Sc. program is perfectly tailored for my background, and the university's strong industry connections provide opportunities to work on real-world materials challenges.",
      germany_item6_title: "Strategic Career Positioning",
      germany_item6_desc: "This choice positions me at the unique intersection of construction knowledge, advanced materials science, German engineering excellence, and an international perspective.",
      germany_bigger_picture_title: "The Bigger Picture",
      germany_bigger_picture_desc: "This isn't just about a degree; it's a strategic move to be an active contributor at a global inflection point for construction and materials. With my hands-on experience and now access to world-class education, I'm positioned to help solve the real-world challenges I've witnessed on construction sites. My goal is to help revolutionize how we build, one material innovation at a time.",

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
      contact_email_title: "Email",
      contact_linkedin_title: "LinkedIn",
      contact_linkedin_desc: "Professional Networking",
      contact_email_cta: "Send an Email",
      contact_linkedin_cta: "View My Profile",

      // Education Page
      education_heading: "Education",
      edu1_degree: "M.Sc. Materials Engineering",
      edu1_school: "RWTH Aachen University, Germany",
      edu1_date: "Accepted Offer — Starting Winter 2025",
      edu2_degree: "B.E. Civil Engineering",
      edu2_school: "Mar Ephraem College of Engineering and Technology, India",
      edu2_date: "07/06/2017 – 29/07/2021",
      edu3_degree: "Higher Secondary Education",
      edu3_school: "St. Thomas Higher Secondary School, India",
      edu3_date: "2015 – 2017",
    },
    de: {
      // General
      brand_name: "George P. Mathew",
      brand_sub: "Engineer GPM",
      footer_text: "Entwickelt von George P. Mathew",
      footer_subtext: "Wo harte Arbeit Vision in Realität umsetzt.",

      // Navigation & Buttons
      nav_home: "Start",
      nav_experience: "Erfahrung",
      nav_education: "Bildung",
      nav_skills: "Fähigkeiten",
      nav_germany: "Deutschland",
      nav_about: "Über mich",
      nav_social: "Soziales",
      nav_contact: "Kontakt",
      btn_journey: "Meine Reise entdecken",
      btn_work: "Meine Arbeit ansehen",

      // Homepage & Timeline
      hero_name: "George P. Mathew",
      hero_role: "Bauingenieur & Zukünftiger Werkstoff-Innovator",
      hero_lead_1: "Meine Baustellenerfahrung hat mir gezeigt, dass die größten Herausforderungen oft Materialprobleme sind. Diese Erkenntnis treibt meinen Wechsel nach Deutschland an, um einen M.Sc. in Werkstofftechnik zu absolvieren.",
      timeline_title: "Eine facettenreiche Ingenieurreise",
      timeline_civil: "Bauingenieur",
      info_civil: "Aufbau meines Fundaments durch reale Bauherausforderungen, von der Bauüberwachung bis zum Management von Fertigteilen.",
      timeline_materials: "Werkstoffingenieur",
      info_materials: "Mein nächstes Kapitel: Ein Master-Studium an der RWTH Aachen, um die Kernkomponenten des Bauens zu innovieren.",
      timeline_content: "Content Creator",
      info_content: "Wissensaustausch und Einblicke über die Marke 'Engineer GPM' auf Plattformen wie YouTube.",
      timeline_entrepreneur: "Unternehmer",
      info_entrepreneur: "Anwendung einer Ingenieur-Denkweise auf geschäftliche Herausforderungen, vom Kundenservice bis zum Marketing.",
      
      // Other pages...
      // (For brevity, only new/changed DE translations are shown. The rest can be filled in.)
    }
  };

  /* =========================
     PERSISTENCE & HELPERS
     ========================= */
  const LANG_KEY = 'gpm_lang';
  const THEME_KEY = 'gpm_theme';
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);
  const getSavedTheme = () => localStorage.getItem(THEME_KEY) || 'default';
  const saveTheme = (t) => localStorage.setItem(THEME_KEY, t);

  /* =========================
     CORE FUNCTIONS
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
    if (!document.body.classList.contains('home-page')) {
      document.documentElement.setAttribute('data-theme', themeValue);
    }
    saveTheme(themeValue);
  }

  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mainnav .nav-link, .mobile-nav-scroll .nav-link').forEach(link => {
      const linkPage = (link.getAttribute('href') || '').split('/').pop() || 'index.html';
      link.classList.toggle('active', currentPage === linkPage);
      if (currentPage === linkPage) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  /* =========================
     UI & ANIMATIONS
     ========================= */
  function initHeroAnimation() {
    const title = document.querySelector('.hero-interface .title');
    if (!title) return;

    const originalText = title.textContent.trim();
    title.innerHTML = ''; 

    originalText.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'reveal-char';
      span.style.animationDelay = `${0.5 + i * 0.03}s`;
      span.textContent = char === ' ' ? '\u00A0' : char;
      title.appendChild(span);
    });
  }
  
  function initParallaxBlueprint() {
    const blueprint = document.querySelector('.blueprint-bg');
    if (!blueprint) return;

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 30;
      const y = (clientY / innerHeight - 0.5) * 30;
      blueprint.style.transform = `translate(${-x}px, ${-y}px)`;
    });
  }

  function initTimelineScrollAnimation() {
    const timelineSection = document.getElementById('journey');
    if (!timelineSection) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          timelineSection.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    observer.observe(timelineSection);
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
    pill.innerHTML = `<span class="en">EN</span><span class="de">DE</span><div class="glider"></div>`;
    
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
     INITIALIZATION
     ========================= */
  function init() {
    if (!document.body.classList.contains('home-page')) {
      applyTheme(getSavedTheme());
    }
    
    applyTranslations(getSavedLang());
    markActiveNav();
    initLangToggle();
    initThemeShortcuts();

    // Homepage-specific initializations
    initHeroAnimation();
    initParallaxBlueprint();
    initTimelineScrollAnimation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
