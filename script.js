/* =-========================================================================
   Engineer GPM Portfolio --- FINAL BLUEPRINT v11.0 (DEFINITIVE)
   --- [ script.js ] ---
   - Handles FULL EN/DE translations and theme switching (BUG FIXED)
   - Manages Universal Header & Floating Mobile Nav
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
        footer_brand: "Engineered by George P Mathew", // For germany.html
        
        // Navigation & Buttons
        nav_home: "Home",
        nav_profile: "Profile",
        nav_about: "About",
        nav_connect: "Connect",
        nav_germany: "Germany", // For germany.html
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
        contact_linkedin_cta: "View My Profile",

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
        germany_bigger_picture_desc: "This isn't just about a degree; it's a strategic move to be an active contributor at a global inflection point for construction and materials. With my hands-on experience and access to a world-class education, I am positioned to help solve the real-world challenges I've witnessed on construction sites."
    },
    de: {
        // General
        brand_name: "George P Mathew",
        brand_sub: "Ingenieur GPM",
        footer_tagline: "Die Zukunft bauen, mit Herz und smarter Technik",
        footer_brand: "Entwickelt von George P Mathew",
        
        // Navigation & Buttons
        nav_home: "Startseite",
        nav_profile: "Profil",
        nav_about: "Über Mich",
        nav_connect: "Kontakt",
        nav_germany: "Deutschland",
        btn_chat: "Sprechen wir 👋🏻",
        btn_story: "Meine ganze Geschichte",

        // Homepage Hero
        hero_title_new: "Bauingenieur & \nInnovator für Zukünftige Materialien",
        hero_subtitle: "Meine Erfahrung auf der Baustelle hat mir gezeigt, dass die größten Herausforderungen im Bauwesen materialbedingt sind. Diese Erkenntnis treibt meinen Wechsel zur Werkstofftechnik in Deutschland voran, wo ich die Art und Weise, wie wir bauen, innovieren möchte.",
        pill1: "+100 % Gesamtumsatz (Best Trading)",
        pill2: "Bauüberwachung — Pfahlgründungen, Fertigteilmontage",
        pill3: "QS / QK-Erfahrung bei Fertigteilen",
        
        // Homepage Timeline
        journey_title: "Eine sich entwickelnde Ingenieursreise",
        journey1_title: "Bauingenieur",
        journey1_desc_revised: "Meine Karriere begann auf der Baustelle, wo ich die Montage von Fertigteilen leitete und Gründungsarbeiten überwachte. Diese praktische Erfahrung verschaffte mir ein tiefes Verständnis für die realen Herausforderungen im Bauwesen und die entscheidende Rolle der Materialintegrität.",
        interstitial1_text: "Diese Erfahrung führte mich zu...",
        journey2_title: "Unternehmer",
        journey2_desc_revised: "Im Familienunternehmen erweiterte ich unser Angebot vom reinen Hardware-Verkauf auf Malerarbeiten. Diese Initiative diversifizierte unseren Umsatz, steigerte den Gewinn und lehrte mich wertvolle Lektionen in der Geschäftsentwicklung und Kundenbeziehung.",
        interstitial2_text: "Was einen neuen Fokus entfachte auf...",
        journey3_title: "Content Creator",
        journey3_desc_revised: "Als 'Engineer GPM' teile ich mein Fachwissen zu komplexen Ingenieurthemen, einschließlich praktischer Anwendungsfälle für LLMs in diesem Bereich. Diese Plattform schärft meine Fähigkeit, technisches Wissen klar und effektiv zu kommunizieren.",
        interstitial3_text: "Was letztendlich zu meiner Zukunft führte in...",
        journey4_title: "Werkstoffingenieur",
        journey4_desc_revised: "Mein Weg mündet in einer einzigen Erkenntnis: Die Zukunft des Bauens liegt in den Materialien. Mein bevorstehender M.Sc. an der RWTH Aachen ist ein bewusster Schritt, um an der Spitze der Innovation der Materialien zu stehen, die wir für eine nachhaltige Zukunft verwenden.",

        // Profile Page
        mission_title: "Meine Mission",
        mission_statement: "Die Zukunft mit smarter Technologie und nachhaltigen Materialien gestalten. Begeistert von der Integration von KI, Robotik und innovativen Materialien, um Baulösungen zu schaffen, die sowohl den Bauherren als auch unserem Planeten zugutekommen.",
        edu_heading: "Ausbildung",
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
        exp1_li1_revised: "Erweiterte das Dienstleistungsangebot durch die Einführung von Malerarbeiten neben dem Hardware-Verkauf, was direkt zu einer signifikanten Steigerung von Umsatz und Gewinnmargen führte.",
        exp1_li2: "Übernahm die Abrechnung und trug zu lokalen Marketingmaßnahmen bei.",
        exp2_role: "Junior-Ingenieur",
        exp2_date: "02/2023 – 11/2023",
        exp2_company: "SG Construction Company, Mumbai, Indien",
        exp2_li1: "Überwachte Pfahlgründungsarbeiten und die Endphase des Bauprojekts.",
        exp2_li2: "Koordinierte mit verschiedenen Teams, um sicherzustellen, dass die Projektmeilensteine termingerecht erreicht wurden.",
        exp3_role: "Trainee Ingenieur (Absolvent)",
        exp3_date: "10/2021 – 09/2022",
        exp3_company: "Excel Precast Solutions, Bangalore, Indien",
        exp3_li1: "Leitete die Montage von Fertigteilkomponenten wie Wandpaneelen, Trägern und Decken.",
        exp3_li2: "Führte Qualitätssicherungsprüfungen durch und unterstützte bei Reparaturen von Fertigteilen vor Ort.",
        tag_cs: "Kundenservice",
        tag_sales: "Vertrieb",
        tag_marketing: "Marketing",
        tag_supervision: "Bauüberwachung",
        tag_coordination: "Projektkoordination",
        tag_civil: "Bauingenieurwesen",
        tag_precast: "Fertigteilmontage",
        tag_qa: "Qualitätssicherung",
        profile_cta_title: "Lassen Sie uns gemeinsam die Zukunft bauen",
        profile_cta_btn: "Kontakt aufnehmen",
        sidebar_title: "Bauingenieur & Innovator für Werkstoffe",
        btn_cv: "Lebenslauf herunterladen",
        skills_heading: "Fähigkeiten",
        skill1_title: "Ingenieurwissen",
        skill1_desc: "Bauüberwachung, Fertigteilmontage, Qualitätssicherung, Projektkoordination.",
        skill2_title: "KI & Einfallsreichtum",
        skill2_desc: "Nutzung von KI-Modellen zur schnellen Prototypenentwicklung und Lösung komplexer technischer Herausforderungen.",
        skill3_title: "Software & Tools",
        skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS Office.",
        lang_heading: "Sprachen",
        lang1_name: "Englisch",
        lang_en_level: "Fließend (IELTS 7)",
        lang2_name: "Malayalam",
        lang_ml_level: "Muttersprache",
        lang3_name: "Deutsch",
        lang_de_level: "Lernend",
        lang4_name: "Tamil",
        lang_ta_level: "Konversationssicher",
        lang5_name: "Hindi",
        lang_hi_level: "Konversationssicher",
        
        // About Page
        welcome_title: "Hallo, ich bin George – ich baue Dinge, die wichtig sind.",
        welcome_subtitle: "Ein praxisorientierter Ingenieur, der es liebt, echte Probleme sowohl mit bewährten Methoden als auch mit spannenden neuen Technologien zu lösen.",
        welcome_about: "Ich habe mir auf Baustellen in ganz Indien die Hände schmutzig gemacht und studiere jetzt an der RWTH Aachen, um zu verstehen, wie Werkstoffe wirklich funktionieren. Ich bin fasziniert davon, wie KI und Robotik uns helfen könnten, schneller, sicherer und nachhaltiger zu bauen – ohne die Handwerkskunst zu verlieren, die das Bauen zu einer Kunst macht.",
        vision_statement_humanized: "Ich glaube, der Bau kann intelligenter, sicherer und umweltfreundlicher sein.",
        vision_statement: `"Ich möchte Bauarbeitern helfen, erstaunliche Dinge einfacher zu bauen, der Umwelt durch intelligentere Materialien helfen und Technologie nutzen, um Probleme zu lösen, die Bauherren seit Generationen frustrieren. Es geht nicht nur um coole Technik – es geht darum, das Leben der Menschen zu verbessern."`,
        personal_touch: `"Von der Überwachung von Pfahlgründungen in Mumbai bis zur Untersuchung der Baustatik in Aachen frage ich mich immer: 'Wie können wir das besser machen?' Manchmal ist die Antwort eine alte Technik. Manchmal ist es KI. Meistens ist es beides."`,
        cta_chat: "Möchten Sie über das Bauen der Zukunft sprechen? Lassen Sie uns einen Kaffee trinken!",
        
        // Connect Page
        social_brand_heading: "Folgen Sie meiner Reise",
        contact_pro_heading: "Für berufliche Anfragen",
        social_youtube_desc: "Ingenieurvideos & Tutorials",
        social_brand_insta_title: "Instagram (@engineergpm)",
        social_brand_insta_desc: "Inhalte & Updates für Engineer GPM",
        social_insta_title: "Instagram (@georgepmathew)",
        social_insta_desc: "Persönliche Updates & Fotografie",
        social_facebook_title: "Facebook",
        social_facebook_desc: "Updates und Community",
        contact_email_title: "E-Mail",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Berufliches Netzwerk",
        contact_email_cta: "E-Mail senden",
        contact_linkedin_cta: "Mein Profil ansehen",

        // Germany Page
        germany_heading: "Mein Engagement für das Ingenieurwesen in Deutschland",
        germany_intro: "Meine Erfahrung auf der Baustelle hat den entscheidenden Bedarf an Materialinnovationen offenbart und mich direkt nach Deutschland geführt – dem europäischen Spitzenreiter in der Ingenieurforschung. Dies ist das Epizentrum der Zukunft, die ich mitgestalten möchte.",
        germany_col1_title: "Warum Deutschland?",
        germany_item1_title: "Führungsrolle in Ingenieurwesen & Innovation",
        germany_item1_desc: "Als Heimat von Branchenriesen und einer Kultur der Präzision trifft in Deutschland theoretisches Wissen auf erstklassige Anwendung. Es ist die ideale Umgebung, um meine Expertise zu entwickeln.",
        germany_item2_title: "Industrie 4.0 & Forschungsökosystem",
        germany_item2_desc: "Das kollaborative Ökosystem zwischen Wissenschaft und Industrie ist unübertroffen, was entscheidend ist, um meine Bauerfahrung mit fortschrittlichen Materialien zu verbinden.",
        germany_item3_title: "Führende Bau- & Werkstoffindustrie",
        germany_item3_desc: "Bekannt für Nachhaltigkeit und Präzision, bietet die deutsche Bau- und Werkstoffindustrie die perfekte Landschaft, um zu bedeutenden Fortschritten beizutragen.",
        germany_col2_title: "Warum RWTH Aachen?",
        germany_item4_title: "Weltklasse-Universität",
        germany_item4_desc: "Der weltweite Ruf der RWTH Aachen in der Werkstofftechnik garantiert eine Ausbildung an der Spitze des Fachgebiets und öffnet Türen zu globalen Möglichkeiten.",
        germany_item5_title: "Perfektes Programm & Industrieintegration",
        germany_item5_desc: "Der M.Sc.-Studiengang ist perfekt auf meinen Hintergrund zugeschnitten, und die starken Industrieverbindungen der Universität bieten die Möglichkeit, an realen Herausforderungen zu arbeiten.",
        germany_item6_title: "Strategische Karrierepositionierung",
        germany_item6_desc: "Diese Wahl positioniert mich an der einzigartigen Schnittstelle von Bauwissen, fortschrittlicher Werkstoffwissenschaft und deutscher Ingenieursexzellenz.",
        germany_bigger_picture_title: "Das große Ganze",
        germany_bigger_picture_desc: "Es geht nicht nur um einen Abschluss; es ist ein strategischer Schritt, um an einem globalen Wendepunkt für das Bau- und Werkstoffwesen aktiv mitzuwirken. Mit meiner praktischen Erfahrung und dem Zugang zu einer erstklassigen Ausbildung bin ich positioniert, um die realen Herausforderungen zu lösen, die ich auf Baustellen erlebt habe."
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

  function createLangToggle(container) {
    if (!container || container.querySelector('.lang-toggle')) return;

    const toggleHTML = `<div class="lang-toggle" title="Sprache wechseln (EN/DE)"><button class="lang-toggle-btn en" data-lang="en">EN</button><button class="lang-toggle-btn de" data-lang="de">DE</button><div class="lang-glider"></div></div>`;
    container.insertAdjacentHTML('afterbegin', toggleHTML);

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

  function initNav() {
    // Universal Language Toggles
    const desktopToggleContainer = document.querySelector('.header-actions');
    const mobileToggleContainer = document.querySelector('.mobile-command-center');
    createLangToggle(desktopToggleContainer);
    if(mobileToggleContainer) createLangToggle(mobileToggleContainer); // Check if it exists before creating

    // Active Nav Link Highlighting
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
  }

  // This function is the single entry point for all initializations.
  function initialize() {
    applyTranslations(getSavedLang()); // Run translations first
    initNav();
    initLivingBlueprint();
  }

  // This is the foolproof way to ensure scripts run after the DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
  } else {
    initialize(); // Or call it directly if the DOM is already loaded.
  }

})();
