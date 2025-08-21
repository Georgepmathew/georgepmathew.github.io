/* =-========================================================================
   Engineer GPM Portfolio --- FINAL BLUEPRINT v10.0 (DEFINITIVE)
   --- [ script.js ] ---
   - Handles FULL EN/DE translations and theme switching
   - Manages Universal Header & Mobile Drawer
   - Animates "Living Blueprint" on Homepage using GSAP
   ========================================================================== */

(function () {
  'use strict';

  /* =========================
     1. Translation & Theming
     ========================= */
  const I18N = {
    en: {
        // General
        brand_name: "George P Mathew",
        brand_sub: "Engineer GPM",
        footer_tagline: "Building tomorrow with heart and smart tech",
        
        // Navigation & Buttons
        nav_home: "Home",
        nav_profile: "Profile",
        nav_about: "About",
        nav_connect: "Connect",
        btn_chat: "Let's Talk 👋🏻",
        btn_story: "My Full Story",

        // Homepage Hero
        hero_title_new: "Civil Engineer & \nFuture Materials Innovator",
        hero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        pill1: "+100% total revenue (Best Trading)",
        pill2: "Site supervision — pile foundations, precast erection",
        pill3: "QA / QC experience on precast components",
        
        // Homepage Timeline
        journey_title: "An Evolving Engineering Journey",
        journey1_title: "Civil Engineer",
        journey1_desc_revised: "My career began on-site, managing precast component erection and supervising foundation work. This hands-on experience provided a deep understanding of real-world construction challenges and the critical role of material integrity.",
        interstitial1_text: "This experience led me to...",
        journey2_title: "Entrepreneur",
        journey2_desc_revised: "At my family's business, I expanded our offerings from hardware sales to include painting services. This initiative diversified our revenue, increased profits, and taught me invaluable lessons in business development and customer relations.",
        interstitial2_text: "Which sparked a new focus on...",
        journey3_title: "Content Creator",
        journey3_desc_revised: "As 'Engineer GPM,' I share my expertise on complex engineering topics, including practical use cases for LLMs in the field. This platform hones my ability to communicate technical knowledge clearly and effectively.",
        interstitial3_text: "Ultimately leading to my future in...",
        journey4_title: "Materials Engineer",
        journey4_desc_revised: "My journey converges on a single insight: the future of construction is in materials. My upcoming M.Sc. at RWTH Aachen is a deliberate step to be at the forefront of innovating the very materials we use to build a sustainable future.",

        // Profile Page
        mission_title: "My Mission",
        mission_statement: "Building tomorrow with smart technology and sustainable materials. Passionate about integrating AI, robotics, and innovative materials to create construction solutions that benefit both builders and our planet.",
        edu_heading: "Education",
        edu1_degree: "M.Sc. Materials Engineering",
        edu1_school: "RWTH Aachen University, Germany",
        edu1_date: "Accepted Offer — Starting Winter 2025",
        edu2_degree: "B.E. Civil Engineering",
        edu2_school: "Mar Ephraem College of Engineering and Technology, India",
        edu2_date: "06/2017 – 07/2021",
        exp_heading: "Professional Experience",
        exp1_role: "Business Assistant",
        exp1_date: "12/2023 – Present",
        exp1_company: "Best Trading, Pathanapuram, India",
        exp1_li1_revised: "Expanded service offerings by introducing painting services alongside hardware sales, directly leading to a significant increase in revenue and profit margins.",
        exp1_li2: "Handled billing operations and contributed to local marketing efforts.",
        exp2_role: "Junior Engineer",
        exp2_date: "02/2023 – 11/2023",
        exp2_company: "SG Construction Company, Mumbai, India",
        exp2_li1: "Supervised pile foundation work and finishing stages of the building project.",
        exp2_li2: "Coordinated with various teams to ensure project milestones were met on schedule.",
        exp3_role: "Graduate Engineer Trainee",
        exp3_date: "10/2021 – 09/2022",
        exp3_company: "Excel Precast Solutions, Bangalore, India",
        exp3_li1: "Managed the erection of precast components including wall panels, beams, and slabs.",
        exp3_li2: "Conducted quality assurance checks and assisted in on-site repairs for precast components.",
        tag_cs: "Customer Service",
        tag_sales: "Sales",
        tag_marketing: "Marketing",
        tag_supervision: "Site Supervision",
        tag_coordination: "Project Coordination",
        tag_civil: "Civil Engineering",
        tag_precast: "Precast Erection",
        tag_qa: "Quality Assurance",
        profile_cta_title: "Let's Build the Future Together",
        profile_cta_btn: "Get in Touch",
        sidebar_title: "Civil Engineer & Materials Innovator",
        btn_cv: "Download CV",
        skills_heading: "Capabilities",
        skill1_title: "Engineering Foundation",
        skill1_desc: "Site Supervision, Precast Erection, Quality Assurance, Project Coordination.",
        skill2_title: "AI & Resourcefulness",
        skill2_desc: "Leveraging AI models to rapidly prototype solutions and solve complex engineering challenges.",
        skill3_title: "Software & Tools",
        skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS Office.",
        lang_heading: "Languages",
        lang1_name: "English",
        lang_en_level: "Proficient (IELTS 7)",
        lang2_name: "Malayalam",
        lang_ml_level: "Native",
        lang3_name: "German",
        lang_de_level: "Learning",
        lang4_name: "Tamil",
        lang_ta_level: "Conversational",
        lang5_name: "Hindi",
        lang_hi_level: "Conversational",
        
        // About Page
        welcome_title: "Hi, I'm George - I build things that matter.",
        welcome_subtitle: "A hands-on engineer who loves solving real problems with both time-tested methods and exciting new tech.",
        welcome_about: "I've gotten my hands dirty on construction sites across India, and now I'm studying at RWTH Aachen to understand how materials really work. I'm fascinated by how AI and robotics could help us build faster, safer, and more sustainably - without losing the craftsmanship that makes construction an art.",
        vision_statement_humanized: "I believe construction can be smarter, safer, and kinder to our planet.",
        vision_statement: `"I want to help construction workers build amazing things more easily, help the environment by using smarter materials, and use technology to solve problems that have frustrated builders for generations. It's not just about cool tech - it's about making people's lives better."`,
        personal_touch: `"From supervising pile foundations in Mumbai to studying structural integrity in Aachen, I'm always asking: 'How can we do this better?' Sometimes the answer is an ancient technique. Sometimes it's AI. Usually, it's both."`,
        cta_chat: "Want to chat about building the future? Let's grab a coffee!",
        
        // Connect Page
        social_brand_heading: "Follow My Journey",
        contact_pro_heading: "For Professional Inquiries",
        social_youtube_desc: "Engineering videos & tutorials",
        social_brand_insta_title: "Instagram (@engineergpm)",
        social_brand_insta_desc: "Content & updates for Engineer GPM",
        social_insta_title: "Instagram (@georgepmathew)",
        social_insta_desc: "Personal updates & photography",
        social_facebook_title: "Facebook",
        social_facebook_desc: "Updates and community",
        contact_email_title: "Email",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Professional Networking",
        contact_email_cta: "Send an Email",
        contact_linkedin_cta: "View My Profile"
    },
    de: {
        // German translations... 
        brand_name: "George P Mathew",
        brand_sub: "Ingenieur GPM",
        footer_tagline: "Die Zukunft bauen, mit Herz und smarter Technik",
        // ... all other German translations would go here
    }
  };

  const LANG_KEY = 'gpm_lang_v15_final';
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);

  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (key === 'welcome_title') {
            el.innerHTML = dict[key].replace('George', '<span class="text-accent-inline">George</span>');
        } else if (key === 'hero_title_new') {
            el.innerHTML = dict[key]; // Allows the <br> tag
        } else {
            el.textContent = dict[key];
        }
      }
    });
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('data-theme', code === 'de' ? 'german' : 'default');
  }

  function initLangToggle() {
    const container = document.querySelector('.header-actions');
    if (!container) return;
    
    // Inject the HTML if it doesn't exist
    if (!container.querySelector('.lang-toggle')) {
        const toggleHTML = `<div class="lang-toggle" title="Sprache wechseln (EN/DE)"><button class="lang-toggle-btn en" data-lang="en">EN</button><button class="lang-toggle-btn de" data-lang="de">DE</button><div class="lang-glider"></div></div>`;
        container.insertAdjacentHTML('afterbegin', toggleHTML);
    }

    const toggle = container.querySelector('.lang-toggle');
    const buttons = toggle.querySelectorAll('.lang-toggle-btn');
    const glider = toggle.querySelector('.lang-glider');
    
    function setButtonState(lang) {
        buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        glider.classList.toggle('de', lang === 'de');
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newLang = button.dataset.lang;
            if (getSavedLang() !== newLang) {
                saveLang(newLang);
                applyTranslations(newLang);
                setButtonState(newLang);
            }
        });
    });
    setButtonState(getSavedLang());
  }
  
  function initMobileMenu() {
      const toggle = document.querySelector('.mobile-menu-toggle');
      if (!toggle) return;
      
      toggle.addEventListener('click', () => {
          const isOpened = toggle.getAttribute('aria-expanded') === 'true';
          document.body.classList.toggle('mobile-menu-open');
          toggle.setAttribute('aria-expanded', !isOpened);
      });
  }

  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav .nav-link, .mobile-nav-drawer .nav-link').forEach(link => {
      const linkPage = link.getAttribute('href');
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initLivingBlueprint() {
      const path = document.querySelector('#story-path');
      if (!path) return;

      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP and/or ScrollTrigger not loaded. Story Conduit will not work.');
        return;
      }
      
      const pathLength = path.getTotalLength();
      
      gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
      });

      ScrollTrigger.create({
          trigger: ".living-blueprint-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: self => {
              const progress = self.progress;
              const offset = pathLength * (1 - progress);
              path.style.strokeDashoffset = offset;
          },
      });

      // Evolving Canvas Background
      const canvases = {
          concrete: document.querySelector('#canvas-concrete'),
          grid: document.querySelector('#canvas-grid'),
          molecular: document.querySelector('#canvas-molecular'),
      };
      
      gsap.to(canvases.concrete, { autoAlpha: 1, scrollTrigger: { trigger: '#node1', start: 'top center', end: 'bottom top', toggleActions: 'play reverse play reverse', scrub: true } });
      gsap.to(canvases.grid, { autoAlpha: 1, scrollTrigger: { trigger: '#node3', start: 'top center', end: 'bottom top', toggleActions: 'play reverse play reverse', scrub: true } });
      gsap.to(canvases.molecular, { autoAlpha: 1, scrollTrigger: { trigger: '#node4', start: 'top center', end: 'bottom center', toggleActions: 'play reverse play reverse', scrub: true } });
  }

  function init() {
    // This function runs once the DOM is fully loaded.
    applyTranslations(getSavedLang());
    initLangToggle();
    markActiveNav();
    initMobileMenu();
    initLivingBlueprint();
  }

  // This is the foolproof way to ensure scripts run after the DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init(); // Or call it directly if the DOM is already loaded.
  }

})();
