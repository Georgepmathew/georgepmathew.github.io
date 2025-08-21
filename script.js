/* =-========================================================================
   Engineer GPM Portfolio --- EXECUTIVE BRIEFING v7.0 (FINAL)
   --- [ script.js ] ---
   - Handles FULL EN/DE translations and theme switching
   - Manages active navigation links
   - Animates "Story Conduit" on Homepage using GSAP
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
        
        // Navigation
        nav_home: "Home",
        nav_profile: "Profile",
        nav_about: "About",
        nav_connect: "Connect",

        // Homepage
        hero_title: "Civil Engineer & Future Materials Innovator",
        hero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        btn_story: "My Full Story",
        journey_title: "An Evolving Engineering Journey",
        journey1_title: "Civil Engineer",
        journey1_desc_revised: "My career began on-site, managing precast component erection and supervising foundation work. This hands-on experience provided a deep understanding of real-world construction challenges and the critical role of material integrity.",
        journey2_title: "Entrepreneur",
        journey2_desc_revised: "At my family's business, I expanded our offerings from hardware sales to include painting services. This initiative diversified our revenue, increased profits, and taught me invaluable lessons in business development and customer relations.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "As 'Engineer GPM,' I share my expertise on complex engineering topics, including practical use cases for LLMs in the field. This platform hones my ability to communicate technical knowledge clearly and effectively.",
        journey4_title: "Materials Engineer",
        journey4_desc_revised: "My journey converges on a single insight: the future of construction is in materials. My upcoming M.Sc. at RWTH Aachen is a deliberate step to be at the forefront of innovating the very materials we use to build a sustainable future.",

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
        
        // About Page
        welcome_intro: "WELCOME TO MY WORLD",
        welcome_title: "Hi, I'm George P Mathew, a Civil Engineer & Materials Innovator.",
        welcome_summary: "I solve real-world construction challenges by focusing on their core: the materials. My journey from on-site engineering to advanced materials science is driven by a mission to build a more sustainable and durable future.",
        focus_subtitle: "FEATURES",
        focus_title: "What I Do",
        focus1_title: "Civil Engineering Foundation",
        focus1_desc: "My on-site experience in precast erection and foundation work provides a deep understanding of real-world construction challenges and material integrity.",
        focus2_title: "Materials Science Innovation",
        focus2_desc: "My future is dedicated to innovating the very materials we use, driven by my upcoming M.Sc. at the world-renowned RWTH Aachen University.",
        focus3_title: "AI-Driven Problem Solving",
        focus3_desc: "I treat every challenge like an engineering problem, using modern tools like AI to design and build efficient solutions—this website is a prime example.",

        // Connect Page
        social_brand_heading: "Follow My Journey",
        contact_pro_heading: "For Professional Inquiries",
        social_brand_insta_title: "Instagram (@engineergpm)",
        social_brand_insta_desc: "Content & updates for Engineer GPM",
        social_insta_title: "Instagram (@georgepmathew)",
        social_insta_desc: "Personal updates & photography",
        contact_email_title: "Email",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Professional Networking",
        contact_email_cta: "Send an Email",
        contact_linkedin_cta: "View My Profile"
    },
    de: {
        // General
        brand_name: "George P Mathew",
        brand_sub: "Ingenieur GPM",
        nav_home: "Start",
        nav_profile: "Profil",
        nav_about: "Über mich",
        nav_connect: "Kontakt",
        hero_title: "Bauingenieur & Zukünftiger Werkstoff-Innovator",
        hero_subtitle: "Meine Praxiserfahrung hat mir gezeigt, dass die größten Herausforderungen im Bau oft materialbedingt sind. Diese Erkenntnis treibt meinen Wechsel zur Werkstofftechnik in Deutschland an, wo ich die Art, wie wir bauen, innovieren möchte.",
        btn_story: "Meine Geschichte",
        journey_title: "Eine sich entwickelnde Ingenieursreise",
        journey1_title: "Bauingenieur",
        journey1_desc_revised: "Meine Karriere begann auf der Baustelle, wo ich die Montage von Fertigteilen leitete und Fundamentarbeiten überwachte. Diese praktische Erfahrung ermöglichte ein tiefes Verständnis für reale Bauherausforderungen und die entscheidende Rolle der Materialintegrität.",
        journey2_title: "Unternehmer",
        journey2_desc_revised: "Im Familienunternehmen habe ich unser Angebot von Eisenwaren auf Malerarbeiten erweitert. Diese Initiative diversifizierte unsere Einnahmen, steigerte den Gewinn und lehrte mich wertvolle Lektionen in Geschäftsentwicklung und Kundenbeziehungen.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "Als 'Ingenieur GPM' teile ich mein Fachwissen zu komplexen Ingenieurthemen, einschließlich praktischer Anwendungsfälle für LLMs im Fachbereich. Diese Plattform schärft meine Fähigkeit, technisches Wissen klar und effektiv zu vermitteln.",
        journey4_title: "Werkstoffingenieur",
        journey4_desc_revised: "Meine Reise mündet in einer einzigen Erkenntnis: Die Zukunft des Bauens liegt in den Materialien. Mein bevorstehender M.Sc. an der RWTH Aachen ist ein bewusster Schritt, um an der Spitze der Innovation nachhaltiger Baumaterialien zu stehen.",
        edu_heading: "Bildung",
        edu1_degree: "M.Sc. Werkstofftechnik",
        edu1_school: "RWTH Aachen University, Deutschland",
        edu1_date: "Zusage erhalten — Beginn Winter 2025",
        edu2_degree: "B.E. Bauingenieurwesen",
        edu2_school: "Mar Ephraem College of Engineering and Technology, Indien",
        edu2_date: "06/2017 – 07/2021",
        exp_heading: "Berufserfahrung",
        exp1_role: "Geschäftsassistent",
        exp1_date: "12/2023 – Heute",
        exp1_company: "Best Trading, Pathanapuram, Indien",
        exp1_li1: "Unterstützung von Kunden bei Produktanfragen, wodurch der Umsatz durch persönlichen Service und technische Beratung verbessert wurde.",
        exp1_li2: "Abwicklung von Abrechnungen und Mitwirkung bei lokalen Marketingmaßnahmen, einschließlich Werbeaktionen und Flyerverteilung.",
        exp2_role: "Junior-Ingenieur",
        exp2_date: "02/2023 – 11/2023",
        exp2_company: "SG Construction Company, Mumbai, Indien",
        exp2_li1: "Überwachung von Pfahlgründungsarbeiten und Ausbauphasen des Bauprojekts.",
        exp2_li2: "Koordination mit verschiedenen Teams, um die Einhaltung der Projektmeilensteine sicherzustellen.",
        exp3_role: "Ingenieur-Absolvent (Trainee)",
        exp3_date: "10/2021 – 09/2022",
        exp3_company: "Excel Precast Solutions, Bangalore, Indien",
        exp3_li1: "Management der Montage von Fertigteilen wie Wandpaneelen, Trägern und Platten.",
        exp3_li2: "Durchführung von Qualitätssicherungsprüfungen und Unterstützung bei Reparaturen vor Ort an Fertigteilen.",
        tag_cs: "Kundenservice",
        tag_sales: "Vertrieb",
        tag_marketing: "Marketing",
        tag_supervision: "Bauüberwachung",
        tag_coordination: "Projektkoordination",
        tag_civil: "Bauingenieurwesen",
        tag_precast: "Fertigteilmontage",
        tag_qa: "Qualitätssicherung",
        sidebar_title: "Bauingenieur & Werkstoff-Innovator",
        btn_cv: "Lebenslauf herunterladen",
        skills_heading: "Fähigkeiten",
        skill1_title: "Ingenieurwissen",
        skill1_desc: "Bauüberwachung, Fertigteilmontage, Qualitätssicherung, Projektkoordination.",
        skill2_title: "KI & Einfallsreichtum",
        skill2_desc: "Nutzung von KI-Modellen, um schnell Prototypen zu entwickeln und komplexe Ingenieuraufgaben zu lösen.",
        skill3_title: "Software & Werkzeuge",
        skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS Office.",
        lang_heading: "Sprachen",
        lang1_name: "Englisch",
        lang2_name: "Malayalam",
        lang3_name: "Deutsch",
        lang4_name: "Tamil",
        lang5_name: "Hindi",
        welcome_intro: "WILLKOMMEN IN MEINER WELT",
        welcome_title: "Hallo, ich bin George P Mathew, ein Bauingenieur & Werkstoff-Innovator.",
        welcome_summary: "Ich löse reale Bauherausforderungen, indem ich mich auf ihren Kern konzentriere: die Materialien. Meine Reise vom Baustelleningenieur zur fortgeschrittenen Werkstoffwissenschaft ist von der Mission angetrieben, eine nachhaltigere und langlebigere Zukunft zu bauen.",
        focus_subtitle: "MERKMALE",
        focus_title: "Was ich tue",
        focus1_title: "Bauingenieur-Fundament",
        focus1_desc: "Meine praktische Erfahrung in der Fertigteilmontage und bei Fundamentarbeiten ermöglicht ein tiefes Verständnis für reale Bauherausforderungen und Materialintegrität.",
        focus2_title: "Werkstoff-Innovation",
        focus2_desc: "Meine Zukunft widme ich der Innovation der Materialien, die wir verwenden, angetrieben durch mein bevorstehendes M.Sc. an der weltberühmten RWTH Aachen.",
        focus3_title: "KI-gestützte Problemlösung",
        focus3_desc: "Ich behandle jede Herausforderung wie ein Ingenieurproblem und nutze moderne Werkzeuge wie KI, um effiziente Lösungen zu entwerfen – diese Website ist ein Paradebeispiel.",
        social_brand_heading: "Folge meiner Reise",
        contact_pro_heading: "Für berufliche Anfragen",
        social_brand_insta_title: "Instagram (@engineergpm)",
        social_brand_insta_desc: "Inhalte & Updates für Ingenieur GPM",
        social_insta_title: "Instagram (@georgepmathew)",
        social_insta_desc: "Persönliche Updates & Fotografie",
        contact_email_title: "E-Mail",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Berufliches Networking",
        contact_email_cta: "E-Mail senden",
        contact_linkedin_cta: "Profil ansehen"
    }
  };

  const LANG_KEY = 'gpm_lang_v12_final';
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);

  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        // Use innerHTML for text with spans
        if (key === 'welcome_title') {
            el.innerHTML = dict[key];
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
    if (!container || container.querySelector('.lang-toggle')) return;
    const toggleHTML = `<div class="lang-toggle" title="Sprache wechseln (EN/DE)"><button class="lang-toggle-btn en" data-lang="en">EN</button><button class="lang-toggle-btn de" data-lang="de">DE</button><div class="lang-glider"></div></div>`;
    container.innerHTML = toggleHTML;
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

  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.main-nav .nav-link, .mobile-tab-bar .tab-link').forEach(link => {
      const linkPage = link.getAttribute('href');
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      if (linkPage === currentPage) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  function initStoryConduit() {
      const path = document.querySelector('#story-conduit-path');
      if (!path) return;

      if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.error('GSAP and/or ScrollTrigger not loaded. Story Conduit will not work.');
        return;
      }
      
      const pathLength = path.getTotalLength();
      
      gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
          autoAlpha: 1
      });

      ScrollTrigger.create({
          trigger: ".story-timeline-section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: self => {
              const progress = self.progress;
              const offset = pathLength * (1 - progress);
              path.style.strokeDashoffset = offset;
          },
      });

      // Parallax for characters
      const scenes = gsap.utils.toArray('.story-scene');
      scenes.forEach(scene => {
        const char = scene.querySelector('.story-character');
        gsap.to(char, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: scene,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
      });
  }


  function init() {
    applyTranslations(getSavedLang());
    initLangToggle();
    markActiveNav();
    initStoryConduit();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
