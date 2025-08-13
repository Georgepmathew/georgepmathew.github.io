/* script.js — Engineer GPM Folio
   - Handles EN/DE translations, theme persistence, and active navigation.
   - Final Version
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
      brand_sub: "The Engineer's Folio",
      footer_subtext: "Leveraging AI to bridge vision and reality.",

      // Navigation
      nav_home: "Home",
      nav_experience: "Experience",
      nav_skills: "Skills",
      nav_germany: "Why Germany",
      nav_about: "About",
      nav_social: "Social",
      nav_contact: "Contact",

      // Homepage
      hero_name: "George P. Mathew",
      hero_role: "Civil Engineer & Future Materials Innovator",
      hero_lead_1: "My on-site experience with foundations and precast components taught me that construction's biggest challenges are often materials problems. This insight drives my move to Germany to pursue an M.Sc. in Materials Engineering at RWTH Aachen.",
      hero_lead_2: "I solve problems with a unique mindset. With no coding background, I leveraged AI to engineer this portfolio from scratch. It's how I approach every challenge: with resourcefulness, curiosity, and a drive to find the best solution.",
      btn_story: "My Full Story",
      btn_germany: "Why Germany?",

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
      skill2_desc: "Expert Prompt Engineering, AI-Assisted Project Execution, and Rapid Prototyping & Learning.",
      skill3_title: "Software & Tools",
      skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), and MS Office.",
      skill4_title: "Languages & Communication",
      skill4_desc: "English (C1), Malayalam (Native), Tamil & Hindi (Working Knowledge), German (Actively Learning).",
      
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
      social1_title: "LinkedIn",
      social1_desc: "Professional network & career updates",
      social2_title: "YouTube",
      social2_desc: "Engineering videos & tutorials",
      social3_title: "X (Twitter)",
      social3_desc: "Short updates & tech insights",
      social4_title: "Instagram",
      social4_desc: "Visual projects & personal updates",
      social5_title: "Threads",
      social5_desc: "Community posts & discussions",
      social6_title: "Facebook",
      social6_desc: "Connect & messages",
      
      // Contact Page
      contact_heading: "Get In Touch",
      contact_intro_simple: "I'm always open to discussing new projects, creative ideas, or opportunities. The best ways to reach me are below.",
      contact_email_title: "Email",
      contact_email_desc: "The most direct way to contact me.",
      contact_email_cta: "Send an Email",
      contact_linkedin_title: "LinkedIn",
      contact_linkedin_desc: "For professional networking and career-related inquiries.",
      contact_linkedin_cta: "View My Profile",

      // Education Page
      education_heading: "Education",
      edu1_degree: "M.Sc. Materials Engineering",
      edu1_school: "RWTH Aachen University, Germany",
      edu1_date: "Accepted Offer — Starting Winter 2025",
      edu2_degree: "B.E. Civil Engineering",
      edu2_school: "Mar Ephraem College of Engineering and Technology, India",
      edu2_date: "06/2017 – 07/2021",
      edu3_degree: "Higher Secondary Education (Science)",
      edu3_school: "St. Thomas Higher Secondary School, India",
      edu3_date: "2015 – 2017",
    },
    de: {
      // German translations will go here. For now, we'll copy English as a placeholder.
      // In a real project, these would be translated.
      brand_name: "George P. Mathew",
      brand_sub: "Das Ingenieur-Portfolio",
      footer_subtext: "KI nutzen, um Vision und Realität zu verbinden.",

      nav_home: "Startseite",
      nav_experience: "Erfahrung",
      nav_skills: "Fähigkeiten",
      nav_germany: "Warum Deutschland",
      nav_about: "Über mich",
      nav_social: "Soziale Medien",
      nav_contact: "Kontakt",

      hero_name: "George P. Mathew",
      hero_role: "Bauingenieur & Zukünftiger Werkstoff-Innovator",
      hero_lead_1: "Meine Praxiserfahrung mit Fundamenten und Fertigteilen hat mir gezeigt, dass die größten Herausforderungen im Bau oft Materialprobleme sind. Diese Erkenntnis treibt meinen Wechsel nach Deutschland an, um einen M.Sc. in Werkstofftechnik an der RWTH Aachen zu absolvieren.",
      hero_lead_2: "Ich löse Probleme mit einer einzigartigen Denkweise. Ohne Programmierkenntnisse habe ich KI genutzt, um dieses Portfolio von Grund auf zu entwickeln. So gehe ich jede Herausforderung an: mit Einfallsreichtum, Neugier und dem Antrieb, die beste Lösung zu finden.",
      btn_story: "Meine Geschichte",
      btn_germany: "Warum Deutschland?",

      about_heading: "Meine Geschichte",
      about_p1: "Meine Karriere begann auf Baustellen in Indien, wo ich die Montage von Fertigteilen leitete und Fundamentarbeiten überwachte. Das war nicht nur ein Job; es war ein Labor in der realen Welt, in dem ich die entscheidende Verbindung zwischen Materialqualität und Projekterfolg erlebte. Die Herausforderungen durch Materialfehler aus erster Hand zu sehen, weckte meine Leidenschaft, das 'Warum' hinter den von uns verwendeten Materialien zu verstehen.",
      about_p2: "Diese Erfahrung vor Ort führte mich zu einer klaren Schlussfolgerung: Um bessere, langlebigere Strukturen zu bauen, müssen wir zuerst die Materialien selbst innovieren. Diese Erkenntnis ist die treibende Kraft hinter meiner Entscheidung, einen Master in Werkstofftechnik an der weltberühmten RWTH Aachen zu absolvieren und mich an die Spitze der Bauinnovation zu setzen.",
      about_subtitle: "Meine Denkweise: Die Geschichte dieser Website",
      about_p3: "Ich definiere mich durch meinen Einfallsreichtum. Diese Website ist mein Beweis. Ohne vorherige Programmiererfahrung behandelte ich ihre Erstellung wie ein Ingenieurproblem. Mein Werkzeug war kein CAD-Programm; es war Künstliche Intelligenz. Durch iteratives Prompting und logisches Debugging leitete ich die KI an, den Code zu generieren, das Design zu strukturieren und die Funktionen zu erstellen, die Sie jetzt sehen. Das ist die zukunftsorientierte, werkzeugunabhängige Denkweise, die ich bei jeder Herausforderung anwende.",
      
      experience_heading: "Berufserfahrung",
      exp1_role: "Business Assistant",
      exp1_date: "12/2023 – Heute",
      exp1_company: "Best Trading, Pathanapuram, Indien",
      exp1_li1: "Unterstützung von Kunden bei Produktanfragen, Verbesserung des Vertriebs durch personalisierten Service und technische Beratung.",
      exp1_li2: "Abwicklung von Abrechnungen und Beitrag zu lokalen Marketingmaßnahmen, einschließlich Werbeaktionen und Flyerverteilung.",
      exp2_role: "Junior-Ingenieur",
      exp2_date: "07.02.2023 – 30.11.2023",
      exp2_company: "SG Construction Company, Mumbai, Indien",
      exp2_li1: "Überwachung von Pfahlgründungsarbeiten und Ausbauphasen des Bauprojekts.",
      exp2_li2: "Koordination mit verschiedenen Teams, um die Einhaltung der Projektmeilensteine sicherzustellen.",
      exp2_li3: "Lösung von Problemen vor Ort zur Aufrechterhaltung der Projektqualität und Kommunikation mit Auftragnehmern.",
      exp3_role: "Absolvent-Ingenieur Trainee",
      exp3_date: "01.10.2021 – 30.09.2022",
      exp3_company: "Excel Precast Solutions Pvt Ltd, Bangalore, Indien",
      exp3_li1: "Management der Montage von Fertigteilen einschließlich Wandpaneelen, Trägern und Platten.",
      exp3_li2: "Durchführung von Verpressungs-, Reparaturarbeiten und Unterstützung bei der Qualitätsprüfung von Fertigteilen.",
      exp3_li3: "Zusammenarbeit mit dem Team, um die rechtzeitige Fertigstellung der Bauaufgaben zu gewährleisten.",
      tag_cs: "Kundenservice",
      tag_sales: "Vertrieb",
      tag_marketing: "Marketing",
      tag_supervision: "Bauüberwachung",
      tag_coordination: "Projektkoordination",
      tag_qa: "Qualitätssicherung",
      tag_precast: "Fertigteilmontage",
      tag_civil: "Bauingenieurwesen",

      skills_heading: "Meine Fähigkeiten",
      skill1_title: "Ingenieurwissen",
      skill1_desc: "Bauüberwachung, Fertigteilmontage, Qualitätssicherung und Projektkoordination.",
      skill2_title: "KI & Einfallsreichtum",
      skill2_desc: "Experten-Prompt-Engineering, KI-gestützte Projektdurchführung und schnelles Prototyping & Lernen.",
      skill3_title: "Software & Werkzeuge",
      skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign) und MS Office.",
      skill4_title: "Sprachen & Kommunikation",
      skill4_desc: "Englisch (C1), Malayalam (Muttersprache), Tamil & Hindi (Arbeitskenntnisse), Deutsch (im Lernprozess).",
      
      germany_heading: "Mein Engagement für das Ingenieurwesen in Deutschland",
      germany_intro: "Meine Erfahrung vor Ort hat den dringenden Bedarf an Materialinnovationen offenbart, was mich direkt nach Deutschland führte – dem europäischen Marktführer in Ingenieurforschung und nachhaltiger Technologie. Dies ist nicht nur ein Ziel, sondern das Epizentrum der Zukunft, die ich mitgestalten möchte.",
      germany_col1_title: "Warum Deutschland?",
      germany_item1_title: "Ingenieurwesen & Innovationsführerschaft",
      germany_item1_desc: "Als Heimat von Branchenriesen und einer Kultur der Präzision ist Deutschland der Ort, an dem theoretisches Wissen auf erstklassige Anwendung trifft. Es ist das ideale Umfeld, um meine Expertise zu entwickeln.",
      germany_item2_title: "Industrie 4.0 & Forschungsökosystem",
      germany_item2_desc: "Als Geburtsort von Industrie 4.0 ist Deutschlands kollaboratives Ökosystem zwischen Wissenschaft und Industrie unübertroffen. Dies ist entscheidend, um meine Bauerfahrung mit modernen Werkstoffen zu verbinden.",
      germany_item3_title: "Führende Bau- & Werkstoffindustrie",
      germany_item3_desc: "Bekannt für Nachhaltigkeit und Präzision, bieten die deutsche Bauindustrie und Werkstofffirmen die perfekte Landschaft, um zu bedeutenden Fortschritten beizutragen.",
      germany_col2_title: "Warum RWTH Aachen?",
      germany_item4_title: "Weltklasse-Universität",
      germany_item4_desc: "Das globale Ranking und der Ruf der RWTH Aachen in der Werkstofftechnik öffnen weltweit Türen und garantieren eine Ausbildung an der Spitze des Fachgebiets.",
      germany_item5_title: "Perfektes Programm & Industrieintegration",
      germany_item5_desc: "Der M.Sc.-Studiengang ist perfekt auf meinen Hintergrund zugeschnitten, und die starken Industrieverbindungen der Universität bieten die Möglichkeit, an realen Materialherausforderungen zu arbeiten.",
      germany_item6_title: "Strategische Karrierepositionierung",
      germany_item6_desc: "Diese Wahl positioniert mich an der einzigartigen Schnittstelle von Bauwissen, moderner Werkstoffkunde, deutscher Ingenieurkunst und einer internationalen Perspektive.",
      germany_bigger_picture_title: "Das große Ganze",
      germany_bigger_picture_desc: "Hier geht es nicht nur um einen Abschluss; es ist ein strategischer Schritt, um an einem globalen Wendepunkt für Bau und Werkstoffe aktiv mitzuwirken. Mit meiner Praxiserfahrung und dem Zugang zu erstklassiger Ausbildung bin ich positioniert, um die realen Herausforderungen zu lösen, die ich auf Baustellen erlebt habe. Mein Ziel ist es, die Art, wie wir bauen, zu revolutionieren – eine Materialinnovation nach der anderen.",

      social_heading: "Meine Kanäle & Soziale Medien",
      social_intro: "Folgen Sie meiner Reise, sehen Sie sich meine Projekte an und vernetzen Sie sich mit mir auf Ihrer Lieblingsplattform.",
      social1_title: "LinkedIn",
      social1_desc: "Berufliches Netzwerk & Karriere-Updates",
      social2_title: "YouTube",
      social2_desc: "Ingenieurvideos & Tutorials",
      social3_title: "X (Twitter)",
      social3_desc: "Kurze Updates & technische Einblicke",
      social4_title: "Instagram",
      social4_desc: "Visuelle Projekte & persönliche Updates",
      social5_title: "Threads",
      social5_desc: "Community-Beiträge & Diskussionen",
      social6_title: "Facebook",
      social6_desc: "Vernetzen & Nachrichten",
      
      contact_heading: "Kontakt aufnehmen",
      contact_intro_simple: "Ich bin immer offen für die Diskussion neuer Projekte, kreativer Ideen oder Möglichkeiten. Die besten Wege, mich zu erreichen, sind unten aufgeführt.",
      contact_email_title: "E-Mail",
      contact_email_desc: "Der direkteste Weg, mich zu kontaktieren.",
      contact_email_cta: "E-Mail senden",
      contact_linkedin_title: "LinkedIn",
      contact_linkedin_desc: "Für berufliches Networking und karrierebezogene Anfragen.",
      contact_linkedin_cta: "Profil ansehen",

      education_heading: "Bildung",
      edu1_degree: "M.Sc. Werkstofftechnik",
      edu1_school: "RWTH Aachen University, Deutschland",
      edu1_date: "Zusage erhalten — Beginn Winter 2025",
      edu2_degree: "B.E. Bauingenieurwesen",
      edu2_school: "Mar Ephraem College of Engineering and Technology, Indien",
      edu2_date: "06/2017 – 07/2021",
      edu3_degree: "Höhere Sekundarschulbildung (Naturwissenschaften)",
      edu3_school: "St. Thomas Higher Secondary School, Indien",
      edu3_date: "2015 – 2017",
    }
  };

  /* =========================
     Persistence keys & defaults
     ========================= */
  const LANG_KEY = 'gpm_lang';
  const THEME_KEY = 'gpm_theme';

  function getSavedLang() {
    return localStorage.getItem(LANG_KEY) || 'en';
  }
  function saveLang(code) {
    localStorage.setItem(LANG_KEY, code);
  }

  function getSavedTheme() {
    return localStorage.getItem(THEME_KEY) || 'default';
  }
  function saveTheme(t) {
    localStorage.setItem(THEME_KEY, t);
  }

  /* =========================
     Core Functions
     ========================= */
  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key]; // Use innerHTML to allow for links in translations
      }
    });
    document.documentElement.setAttribute('lang', code);
  }

  function applyTheme(themeValue) {
    const html = document.documentElement;
    html.removeAttribute('data-theme');
    if (themeValue === 'german' || themeValue === 'dark') {
      html.setAttribute('data-theme', themeValue);
    }
    saveTheme(themeValue);
  }

  function markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
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
     UI Event Listeners
     ========================= */
  function initLangToggle() {
    const btn = document.getElementById('lang-toggle');
    if (!btn) return;
    
    const setButtonState = (lang) => {
        btn.textContent = lang.toUpperCase();
        // Optional: auto-switch theme to 'german' when language is 'de'
        if (lang === 'de') {
            applyTheme('german');
        } else {
            // If switching back to EN, revert to the saved theme that isn't 'german'
            const savedTheme = getSavedTheme();
            applyTheme(savedTheme === 'german' ? 'default' : savedTheme);
        }
    };

    btn.addEventListener('click', () => {
      const newLang = getSavedLang() === 'en' ? 'de' : 'en';
      saveLang(newLang);
      applyTranslations(newLang);
      setButtonState(newLang);
    });
    
    setButtonState(getSavedLang());
  }

  function initThemeShortcuts() {
    window.addEventListener('keydown', (e) => {
      if ((e.altKey || e.metaKey) && e.key.toLowerCase() === 't') {
        e.preventDefault();
        const currentTheme = getSavedTheme();
        const nextTheme = currentTheme === 'default' ? 'german' : currentTheme === 'german' ? 'dark' : 'default';
        applyTheme(nextTheme);
      }
    });
  }

  /* =========================
     Initialization
     ========================= */
  function init() {
    const savedLang = getSavedLang();
    const savedTheme = getSavedTheme();

    applyTheme(savedTheme);
    applyTranslations(savedLang);
    markActiveNav();
    
    initLangToggle();
    initThemeShortcuts();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
