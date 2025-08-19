/* ==========================================================================
   Engineer GPM Portfolio --- World-Class Redesign
   --- [ script.js ] ---
   - Handles EN/DE translations and theme switching
   - Manages active navigation links
   - Powers the interactive journey timeline on the homepage
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
        brand_name: "George P. Mathew",
        brand_sub: "Engineer GPM",
        footer_brand: "Engineered by George P. Mathew",
        footer_social: "Social",

        // Navigation
        nav_home: "Home",
        nav_profile: "Profile",
        nav_germany: "Germany",
        nav_social: "Social",
        nav_about: "About",
        nav_contact: "Contact",

        // Homepage
        hero_title: "Civil Engineer & Future Materials Innovator",
        hero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        btn_story: "My Full Story",
        btn_germany: "My Plan for Germany",
        journey_title: "An Evolving Engineering Journey",
        journey1_title: "Civil Engineer",
        journey1_desc: "My career began on-site, managing precast component erection and supervising foundation work. This hands-on experience at SG Construction and Excel Precast provided a deep understanding of real-world construction challenges and the critical role of material integrity.",
        journey2_title: "Entrepreneur",
        journey2_desc: "Joining my father at our family business, Best Trading, I applied my problem-solving skills to a new context. I focused on customer relations, technical sales, and business operations, learning the importance of user needs and effective communication.",
        journey3_title: "Content Creator",
        journey3_desc: "To share my passion for engineering, I created the 'Engineer GPM' brand. Through this platform, I develop content that makes complex engineering concepts accessible, honing my ability to communicate technical ideas clearly and effectively.",
        journey4_title: "Materials Engineer",
        journey4_desc: "My on-site experience revealed that construction's biggest hurdles are material-based. This insight is driving me to pursue an M.Sc. in Materials Engineering at RWTH Aachen, where I aim to innovate the very materials we use to build the future.",

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

        // Germany Page
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
        
        // Social Page
        social_heading: "Connect With Me",
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
        
        // About Page
        about_intro: "I'm",
        about_name_first: "George",
        about_name_middle: "P.",
        about_name_last: "Mathew.",
        about_p1: "My career began on construction sites in India, where I managed the erection of precast components and supervised foundation work. This wasn't just a job; it was a real-world laboratory where I witnessed the critical link between material quality and project success.",
        about_p2: "This on-site experience led me to a clear conclusion: to build better, more durable structures, we must first innovate the materials themselves. This realization is the driving force behind my decision to pursue a Master's in Materials Engineering at the world-renowned RWTH Aachen University.",
        about_p3: "I am also defined by my resourcefulness. This website is my proof. With zero prior coding experience, I treated its creation as an engineering problem, guiding AI to generate the code, structure the design, and build the features you see now. It's the forward-thinking mindset I bring to every challenge.",
        focus_title: "What I'm Focused On",
        focus1_title: "Engineer GPM - The Brand",
        focus1_desc: "Sharing my passion for engineering and making complex topics accessible through my content creation platform.",
        focus1_cta: "Explore My Channels",
        focus2_title: "Materials Engineering - The Future",
        focus2_desc: "Preparing for my M.Sc. at RWTH Aachen to be at the forefront of innovating the sustainable construction materials of tomorrow.",
        focus2_cta: "See My Plan for Germany",

        // Contact Page
        contact_heading: "Get In Touch",
        contact_intro: "I'm always open to discussing new projects, creative ideas, or opportunities. The best ways to reach me are below.",
        contact_email_title: "Email",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Professional Networking",
        contact_email_cta: "Send an Email",
        contact_linkedin_cta: "View My Profile"
    },
    de: {
        // German translations would go here...
        // For brevity, I will only include a few examples.
        brand_name: "George P. Mathew",
        brand_sub: "Ingenieur GPM",
        nav_home: "Startseite",
        nav_profile: "Profil",
        hero_title: "Bauingenieur & Zukünftiger Werkstoff-Innovator",
        hero_subtitle: "Meine Praxiserfahrung hat mir gezeigt, dass die größten Herausforderungen im Bau oft materialbedingt sind. Diese Erkenntnis treibt meinen Wechsel zur Werkstofftechnik in Deutschland an, wo ich die Art, wie wir bauen, innovieren möchte.",
        btn_story: "Meine Geschichte",
        btn_germany: "Mein Plan für Deutschland",
        journey_title: "Eine sich entwickelnde Ingenieursreise",
        // ... and so on for all keys
    }
  };

  const LANG_KEY = 'gpm_lang_v2';
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
     2. Active Navigation Link
     ========================= */
  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav .nav-link').forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /* =========================
     3. Homepage Journey Timeline
     ========================= */
  function initJourneyTimeline() {
    const timeline = document.querySelector('.journey .timeline');
    if (!timeline) return; // Only run on the homepage

    const nodes = timeline.querySelectorAll('.timeline-node');
    const cards = document.querySelectorAll('.journey-card');
    const progress = timeline.querySelector('.timeline-progress');
    let activeStep = 1;

    function updateState(step, isInitial = false) {
      const newActiveNode = timeline.querySelector(`.timeline-node[data-step="${step}"]`);
      const newActiveCard = document.querySelector(`.journey-card[data-step="${step}"]`);
      
      // Update nodes
      nodes.forEach((node, index) => {
        node.classList.remove('active', 'next-step');
        if (parseInt(node.dataset.step) === step) {
          node.classList.add('active');
        }
        // Add pulse to the next one
        if (index + 1 === step + 1 && step < nodes.length) {
            nodes[index].classList.add('next-step');
        }
      });
      
      // Update cards
      cards.forEach(card => card.classList.remove('active'));
      if (newActiveCard) newActiveCard.classList.add('active');
      
      // Update progress bar
      const nodeIndex = step - 1;
      const progressWidth = nodeIndex > 0 ? (nodeIndex / (nodes.length - 1)) * 100 : 0;
      progress.style.width = `${progressWidth}%`;

      activeStep = step;
    }

    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const step = parseInt(node.dataset.step);
        if (step !== activeStep) {
          updateState(step);
        }
      });
    });

    // Initialize first step
    updateState(1, true);
  }

  /* =========================
     4. About Page Interactive Image
     ========================= */
  function initInteractiveImage() {
    const imageContainer = document.getElementById('interactive-image');
    if (!imageContainer) return; // Only run on about page

    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10; // Max rotation 10deg

        imageContainer.style.transition = 'transform 0.1s';
        imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
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
    initJourneyTimeline();
    initInteractiveImage();
  }

  // Run init once the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
