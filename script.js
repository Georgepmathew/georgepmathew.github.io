/* ==========================================================================
   Engineer GPM Portfolio --- Modern Overhaul v2.0
   --- [ script.js ] ---
   - Handles EN/DE translations and theme switching
   - Manages active navigation links for desktop AND floating mobile nav
   - Animates the vertical storyline on scroll
   - Creates the 3D tilt effect on the About page image
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
        footer_brand: "Engineered by George P Mathew",

        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_profile: "Profile",
        nav_connect: "Connect",

        // Homepage
        hero_title: "Civil Engineer & Future Materials Innovator",
        hero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        btn_profile: "View My Profile",
        btn_story: "Read My Story",
        journey_title: "An Evolving Engineering Journey",
        journey1_title: "Civil Engineer",
        journey1_desc_revised: "My career began on-site, managing precast component erection and supervising foundation work. This hands-on experience provided a deep understanding of real-world construction challenges and the critical role of material integrity.",
        journey2_title: "Entrepreneur",
        journey2_desc_revised: "At my family's business, I expanded our offerings from hardware sales to include painting services. This initiative diversified our revenue, increased profits, and taught me invaluable lessons in business development and customer relations.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "As 'Engineer GPM,' I share my expertise on complex engineering topics, including practical use cases for LLMs in the field. This platform hones my ability to communicate technical knowledge clearly and effectively.",
        journey4_title: "Materials Engineer",
        journey4_desc_revised: "My journey converges on a single insight: the future of construction is in materials. My upcoming M.Sc. at RWTH Aachen is a deliberate step to be at the forefront of innovating the very materials we use to build a sustainable future.",
        
        // About Page (includes old Germany page content)
        about_intro: "I'm",
        about_name_full: "George P Mathew",
        about_p1: "My career began on construction sites in India, where I managed the erection of precast components and supervised foundation work. This wasn't just a job; it was a real-world laboratory where I witnessed the critical link between material quality and project success.",
        about_p2: "This on-site experience led me to a clear conclusion: to build better, more durable structures, we must first innovate the materials themselves. This realization is the driving force behind my decision to pursue a Master's in Materials Engineering at the world-renowned RWTH Aachen University.",
        about_p3: "I am also defined by my resourcefulness. This website is my proof. With zero prior coding experience, I treated its creation as an engineering problem, guiding AI to generate the code, structure the design, and build the features you see now. It's the forward-thinking mindset I bring to every challenge.",
        germany_heading: "My Commitment to Engineering in Germany",
        germany_intro: "My on-site experience revealed the critical need for material innovation, leading me directly to Germany—the European leader in engineering research. This is the epicenter of the future I want to help build.",
        germany_col1_title: "Why Germany?",
        germany_item1_title: "Engineering & Innovation Leadership",
        germany_item1_desc: "Home to industry giants and a culture of precision, Germany is where theoretical knowledge meets world-class application. It's the ideal environment to develop my expertise.",
        germany_item2_title: "Industry 4.0 & Research Ecosystem",
        germany_item2_desc: "The collaborative ecosystem between academia and industry is unmatched, which is crucial for bridging my construction background with advanced materials.",
        germany_item3_title: "Leading Construction & Materials Industry",
        germany_item3_desc: "Renowned for sustainability and precision, the German construction and materials industries provide the perfect landscape to contribute to meaningful advancements.",
        germany_col2_title: "Why RWTH Aachen?",
        germany_item4_title: "World-Class University",
        germany_item4_desc: "RWTH Aachen's global reputation in Materials Engineering ensures an education at the forefront of the field and opens doors to global opportunities.",
        germany_item5_title: "Perfect Program & Industry Integration",
        germany_item5_desc: "The M.Sc. program is perfectly tailored for my background, and the university's strong industry connections provide opportunities to work on real-world challenges.",
        germany_item6_title: "Strategic Career Positioning",
        germany_item6_desc: "This choice positions me at the unique intersection of construction knowledge, advanced materials science, and German engineering excellence.",
        germany_bigger_picture_title: "The Bigger Picture",
        germany_bigger_picture_desc: "This isn't just about a degree; it's a strategic move to be an active contributor at a global inflection point for construction and materials. With my hands-on experience and access to a world-class education, I am positioned to help solve the real-world challenges I've witnessed on construction sites.",
        
        // Profile Page
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
        exp1_li1: "Assisted customers with product inquiries, improving sales through personalized service and technical guidance.",
        exp1_li2: "Handled billing operations and contributed to local marketing efforts, including promotions and flyer distribution.",
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
        lang2_name: "Malayalam",
        lang3_name: "German",
        lang4_name: "Tamil",
        lang5_name: "Hindi",

        // Connect Page
        connect_heading: "Let's Connect",
        connect_intro: "Whether you have a project in mind, a professional opportunity, or want to follow my work, here are the best places to find me.",
        connect_sec1_title: "For Professional Inquiries",
        connect_email_title: "Email",
        connect_email_desc: "For direct messages and project proposals.",
        connect_linkedin_title: "LinkedIn",
        connect_linkedin_desc: "The best place for professional networking.",
        connect_sec2_title: "Follow My Content",
        social_youtube_title: "YouTube",
        social_youtube_desc: "Engineering videos & tutorials",
        social_x_title: "X (Twitter)",
        social_x_desc: "Short updates & tech insights",
        social_brand_insta_title: "Instagram (Brand)",
        social_brand_insta_desc: "Content & updates for Engineer GPM",
        social_brand_fb_title: "Facebook (Brand)",
        social_brand_fb_desc: "Page for Engineer GPM",
    },
    de: {
        // German translations...
        brand_name: "George P Mathew",
        brand_sub: "Ingenieur GPM",
        nav_home: "Startseite",
        nav_about: "Über Mich",
        nav_profile: "Profil",
        nav_connect: "Kontakt",
        // ... and so on for all keys
    }
  };

  const LANG_KEY = 'gpm_lang_v3';
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);

  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', code);
    document.documentElement.setAttribute('data-theme', code === 'de' ? 'german' : 'default');
  }

  function initLangToggle() {
    const container = document.querySelector('.header-actions');
    if (!container) return;
    const toggleHTML = `
      <div class="lang-toggle" title="Toggle Language (EN/DE)">
        <button class="lang-toggle-btn en" data-lang="en">EN</button>
        <button class="lang-toggle-btn de" data-lang="de">DE</button>
        <div class="lang-glider"></div>
      </div>
    `;
    container.innerHTML = toggleHTML;
    const toggle = container.querySelector('.lang-toggle');
    const buttons = toggle.querySelectorAll('.lang-toggle-btn');
    const glider = toggle.querySelector('.lang-glider');
    function setButtonState(lang) {
        buttons.forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        glider.classList.toggle('de', lang === 'de');
    }
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            saveLang(newLang);
            applyTranslations(newLang);
            setButtonState(newLang);
        });
    });
    setButtonState(getSavedLang());
  }


  /* =========================
     2. Navigation (Desktop & Mobile)
     ========================= */
  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Mark both desktop nav and floating mobile nav links
    const navLinks = document.querySelectorAll('.main-nav .nav-link, .mobile-float-nav .float-nav-link');
    
    navLinks.forEach(link => {
      link.classList.remove('active'); // Reset all first
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* =========================
     3. Homepage Storyline Animation
     ========================= */
  function initStorylineObserver() {
    const milestones = document.querySelectorAll('.storyline-milestone');
    if (milestones.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('in-view');
                }, index * 150); // Staggered delay
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.2
    });

    milestones.forEach(milestone => {
        observer.observe(milestone);
    });
  }

  /* =========================
     4. About Page Interactive Image
     ========================= */
  function initInteractiveImage() {
    const imageContainer = document.getElementById('interactive-image');
    if (!imageContainer) return;

    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5; // Reduced intensity for a subtle effect
        const rotateY = ((x - centerX) / centerX) * 5;
        imageContainer.style.transition = 'transform 0.1s linear';
        imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        imageContainer.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
        imageContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }

  /* =========================
     5. Initialization
     ========================= */
  function init() {
    applyTranslations(getSavedLang());
    initLangToggle();
    markActiveNav();
    initStorylineObserver();
    initInteractiveImage();
  }

  document.addEventListener('DOMContentLoaded', init);

})();
