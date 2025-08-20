/* =-========================================================================
   Engineer GPM Portfolio --- FINAL OVERHAUL v2.0
   --- [ script.js ] ---
   - Handles FULL EN/DE translations and theme switching
   - Manages active navigation links (Desktop & Mobile Tab Bar)
   - Animates the immersive homepage timeline on scroll
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
        
        // Navigation
        nav_home: "Home",
        nav_profile: "Profile",
        nav_about: "About",
        nav_connect: "Connect",

        // Homepage
        hero_title: "Civil Engineer & Future Materials Innovator",
        hero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        btn_story: "My Full Story",
        journey_title: "AnOf Evolving Engineering Journey",
        journey1_title: "Civil Engineer",
        journey1_desc_revised: " course. The structure is in place, and the aesthetic is defined. Now,My career began on-site, managing precast component erection and supervising foundation work. This hands-on experience provided a deep understanding of we add the intelligence and motion.

This JavaScript file is the engine that drives the portfolio's interactive elements. It handles real-world construction challenges and the critical role of material integrity.",
        journey2_title: "Entrepreneur",
 the language translations, theme switching, and active navigation states. Most importantly, it contains the new, custom logic for the "        journey2_desc_revised: "At my family's business, I expanded our offerings from hardware saleswonderful" immersive timeline animation on the homepage, as well as the 3D tilt effect for the image on the about page to include painting services. This initiative diversified our revenue, increased profits, and taught me invaluable lessons in business development and customer relations.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "As.

---

**File 3 of 6: `script.js`**

```javascript
/* =- 'Engineer GPM,' I share my expertise on complex engineering topics, including practical use cases for LLMs in the field. This========================================================================
   Engineer GPM Portfolio --- FINAL OVERHAUL v2.0
   --- [ platform hones my ability to communicate technical knowledge clearly and effectively.",
        journey4_title: "Materials Engineer",
        journey script.js ] ---
   - Handles FULL EN/DE translations and theme switching
   - Manages active navigation links (4_desc_revised: "My journey converges on a single insight: the future of construction is in materials. My upcoming M.Sc. at RWTH Aachen is a deliberate step to be at the forefront of innovating the very materials weDesktop & Mobile Tab Bar)
   - Animates the NEW immersive vertical storyline on scroll
   - Creates the  use to build a sustainable future.",

        // Profile Page
        edu_heading: "Education",
        edu13D tilt effect on the About page image
   ========================================================================== */

(function () {
  _degree: "M.Sc. Materials Engineering",
        edu1_school: "RWTH Aachen University,'use strict';

  /* =========================
     1. Translation & Theming
     ========================= */
  const Germany",
        edu1_date: "Accepted Offer — Starting Winter 2025",
        edu I18N = {
    en: {
        // General
        brand_name: "George P2_degree: "B.E. Civil Engineering",
        edu2_school: "Mar Ephraem College Mathew",
        brand_sub: "Engineer GPM",

        // Navigation
        nav_home: "Home of Engineering and Technology, India",
        edu2_date: "06/2017 – 07",
        nav_profile: "Profile",
        nav_about: "About",
        nav_connect/2021",
        exp_heading: "Professional Experience",
        exp1_role: "Business Assistant",
        exp1_date: "12/2023 – Present",
        exp1_company:: "Connect",

        // Homepage
        hero_title: "Civil Engineer & Future Materials Innovator",
         "Best Trading, Pathanapuram, India",
        exp1_li1: "Assisted customers with producthero_subtitle: "My on-site experience taught me that construction's biggest challenges are material-based. This insight drives my transition to Materials Engineering in Germany, where I aim to innovate how we build.",
        btn_story inquiries, improving sales through personalized service and technical guidance.",
        exp1_li2: "Handled billing operations and contributed to local marketing efforts, including promotions and flyer distribution.",
        exp2_role: "Junior Engineer",
        : "My Full Story",
        journey_title: "An Evolving Engineering Journey",
        journey1_title: "exp2_date: "02/2023 – 11/2023",
Civil Engineer",
        journey1_desc_revised: "My career began on-site, managing precast        exp2_company: "SG Construction Company, Mumbai, India",
        exp2_li1: " component erection and supervising foundation work. This hands-on experience provided a deep understanding of real-world construction challenges and theSupervised pile foundation work and finishing stages of the building project.",
        exp2_li2: "Coordinated with critical role of material integrity.",
        journey2_title: "Entrepreneur",
        journey2_desc_revised various teams to ensure project milestones were met on schedule.",
        exp3_role: "Graduate Engineer Trainee",
        exp3_date: "10/2021 – 09/2022",
        exp3: "At my family's business, I expanded our offerings from hardware sales to include painting services. This initiative diversified_company: "Excel Precast Solutions, Bangalore, India",
        exp3_li1: "Managed the our revenue, increased profits, and taught me invaluable lessons in business development and customer relations.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "As 'Engineer GPM,' I share my expertise erection of precast components including wall panels, beams, and slabs.",
        exp3_li2: "Conducted quality assurance checks and assisted in on-site repairs for precast components.",
        tag_cs: "Customer Service on complex engineering topics, including practical use cases for LLMs in the field. This platform hones my ability to communicate technical knowledge",
        tag_sales: "Sales",
        tag_marketing: "Marketing",
        tag_super clearly and effectively.",
        journey4_title: "Materials Engineer",
        journey4_desc_revised: "vision: "Site Supervision",
        tag_coordination: "Project Coordination",
        tag_civil: "Civil Engineering",
        tag_precast: "Precast Erection",
        tag_qa: "Quality Assurance",
My journey converges on a single insight: the future of construction is in materials. My upcoming M.Sc. at RW        sidebar_title: "Civil Engineer & Materials Innovator",
        btn_cv: "Download CV",
        TH Aachen is a deliberate step to be at the forefront of innovating the very materials we use to build a sustainable future.",

skills_heading: "Capabilities",
        skill1_title: "Engineering Foundation",
        skill1_desc        // Profile Page
        edu_heading: "Education",
        edu1_degree: "M.Sc. Materials: "Site Supervision, Precast Erection, Quality Assurance, Project Coordination.",
        skill2_title: "AI Engineering",
        edu1_school: "RWTH Aachen University, Germany",
        edu1_date: "Accepted & Resourcefulness",
        skill2_desc: "Leveraging AI models to rapidly prototype solutions and solve complex engineering challenges.",
        skill3_title: "Software & Tools",
        skill3_desc: "AutoCAD, SketchUp, Adobe Offer — Starting Winter 2025",
        edu2_degree: "B.E. Civil Engineering",
         Suite (Illustrator, Photoshop, InDesign), MS Office.",
        lang_heading: "Languages",
        lang1edu2_school: "Mar Ephraem College of Engineering and Technology, India",
        edu2_date:_name: "English",
        lang2_name: "Malayalam",
        lang3_name: "German "06/2017 – 07/2021",
        exp_heading: "Professional",
        lang4_name: "Tamil",
        lang5_name: "Hindi",
        
        // Experience",
        exp1_role: "Business Assistant",
        exp1_date: "12/20 About Page (Now Genesis)
        about_intro: "I'm",
        about_name_full: "George23 – Present",
        exp1_company: "Best Trading, Pathanapuram, India",
        exp1_ P Mathew",
        about_p1: "My career began on construction sites in India, where I managed the erection ofli1: "Assisted customers with product inquiries, improving sales through personalized service and technical guidance.",
        exp1_li2 precast components and supervised foundation work. This wasn't just a job; it was a real-world laboratory where I witnessed: "Handled billing operations and contributed to local marketing efforts, including promotions and flyer distribution.",
        exp2_role the critical link between material quality and project success.",
        about_p2: "This on-site experience led me to a: "Junior Engineer",
        exp2_date: "02/2023 – 11/20 clear conclusion: to build better, more durable structures, we must first innovate the materials themselves. This realization is the driving23",
        exp2_company: "SG Construction Company, Mumbai, India",
        exp2_ force behind my decision to pursue a Master's in Materials Engineering at the world-renowned RWTH Aachen University.",
        about_li1: "Supervised pile foundation work and finishing stages of the building project.",
        exp2_li2: "Cop3: "I am also defined by my resourcefulness. This website is my proof. With zero prior coding experienceordinated with various teams to ensure project milestones were met on schedule.",
        exp3_role: "Graduate Engineer Tra, I treated its creation as an engineering problem, guiding AI to generate the code, structure the design, and build the featuresinee",
        exp3_date: "10/2021 – 09/2022",
        exp3_company: "Excel Precast Solutions, Bangalore, India",
        exp3_li1: " you see now. It's the forward-thinking mindset I bring to every challenge.",
        focus_title: "What I'm Focused On",
        focus1_title: "Engineer GPM - The Brand",
        focus1_Managed the erection of precast components including wall panels, beams, and slabs.",
        exp3_li2: "Condesc: "Sharing my passion for engineering and making complex topics accessible through my content creation platform.",
        focus1_cta: "ducted quality assurance checks and assisted in on-site repairs for precast components.",
        tag_cs: "CustomerExplore My Channels",
        focus2_title: "Materials Engineering - The Future",
        focus2_desc: Service",
        tag_sales: "Sales",
        tag_marketing: "Marketing",
        tag_supervision: "Site Supervision",
        tag_coordination: "Project Coordination",
        tag_civil: "Preparing for my M.Sc. at RWTH Aachen to be at the forefront of innovating the sustainable construction materials of tomorrow "Civil Engineering",
        tag_precast: "Precast Erection",
        tag_qa: ".",
        focus2_cta: "See My Plan for Germany", // This will now link to the about page
        germQuality Assurance",
        sidebar_title: "Civil Engineer & Materials Innovator",
        btn_cv: "Downloadany_heading: "My Commitment to Engineering in Germany",
        germany_intro: "My on-site experience revealed CV",
        skills_heading: "Capabilities",
        skill1_title: "Engineering Foundation",
        skill1 the critical need for material innovation, leading me directly to Germany—the European leader in engineering research. This is the epicenter of_desc: "Site Supervision, Precast Erection, Quality Assurance, Project Coordination.",
        skill2_title: " the future I want to help build.",
        germany_col1_title: "Why Germany?",
        germanyAI & Resourcefulness",
        skill2_desc: "Leveraging AI models to rapidly prototype solutions and solve complex engineering challenges_item1_title: "Engineering & Innovation Leadership",
        germany_item1_desc: "Home.",
        skill3_title: "Software & Tools",
        skill3_desc: "AutoCAD, to industry giants and a culture of precision, Germany is where theoretical knowledge meets world-class application. It's the SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS Office.",
        lang_heading: "Languages", ideal environment to develop my expertise.",
        germany_item2_title: "Industry 4.0 &
        lang1_name: "English",
        lang2_name: "Malayalam",
        lang3_name Research Ecosystem",
        germany_item2_desc: "The collaborative ecosystem between academia and industry is unmatched, which: "German",
        lang4_name: "Tamil",
        lang5_name: "Hindi", is crucial for bridging my construction background with advanced materials.",
        germany_item3_title: "Leading Construction
        
        // About Page (Genesis)
        about_intro: "I'm",
        about_name & Materials Industry",
        germany_item3_desc: "Renowned for sustainability and precision, the German construction and_full: "George P Mathew",
        about_p1: "My career began on construction sites in India, where I materials industries provide the perfect landscape to contribute to meaningful advancements.",
        germany_col2_title: "Why RW managed the erection of precast components and supervised foundation work. This wasn't just a job; it was a real-world laboratoryTH Aachen?",
        germany_item4_title: "World-Class University",
        germany_item4 where I witnessed the critical link between material quality and project success.",
        about_p2: "This on-site experience_desc: "RWTH Aachen's global reputation in Materials Engineering ensures an education at the forefront of the field and opens led me to a clear conclusion: to build better, more durable structures, we must first innovate the materials themselves. This doors to global opportunities.",
        germany_item5_title: "Perfect Program & Industry Integration",
         realization is the driving force behind my decision to pursue a Master's in Materials Engineering at the world-renowned RWTH Aachen Universitygermany_item5_desc: "The M.Sc. program is perfectly tailored for my background, and the university's.",
        about_p3: "I am also defined by my resourcefulness. This website is my proof. With strong industry connections provide opportunities to work on real-world challenges.",
        germany_item6_title: "Strategic Career Positioning",
        germany_item6_desc: "This choice positions me at the unique intersection of construction knowledge, advanced zero prior coding experience, I treated its creation as an engineering problem, guiding AI to generate the code, structure the design materials science, and German engineering excellence.",
        germany_bigger_picture_title: "The Bigger Picture",, and build the features you see now. It's the forward-thinking mindset I bring to every challenge.",
        focus
        germany_bigger_picture_desc: "This isn't just about a degree; it's_title: "What I'm Focused On",
        focus1_title: "Engineer GPM - The Brand",
 a strategic move to be an active contributor at a global inflection point for construction and materials. With my hands-on experience and        focus1_desc: "Sharing my passion for engineering and making complex topics accessible through my content creation platform.",
        focus1 access to a world-class education, I am positioned to help solve the real-world challenges I've witnessed on construction sites.",

        // Connect Page
        connect_hub_title: "Let's Connect",
        connect_cta: "Explore My Channels",
        focus2_title: "Materials Engineering - The Future",
        focus2_desc: "Preparing for my M.Sc. at RWTH Aachen to be at the forefront of innovating the sustainable_hub_subtitle: "Follow my journey or get in touch for professional inquiries.",
        social_brand_heading: " construction materials of tomorrow.",
        focus2_cta: "See My Profile",
        germany_heading: "AFollow My Journey",
        contact_pro_heading: "For Professional Inquiries",
        social_youtube_title: "YouTube",
        social_youtube_desc: "Engineering videos & tutorials",
        social_brand_insta Deliberate Pivot to Germany",
        germany_intro: "My on-site experience revealed the critical need_title: "Instagram (Brand)",
        social_brand_insta_desc: "Content & updates for Engineer GPM",
        social_insta_title: "Instagram (Personal)",
        social_insta_desc: for material innovation, leading me directly to Germany—the European leader in engineering research. This is the epicenter of the future I want to help build.",
        germany_col1_title: "Why Germany?",
        germany_item "Personal updates & photography",
        contact_email_title: "Email",
        contact_linkedin_title: "LinkedIn1_title: "Engineering & Innovation Leadership",
        germany_item1_desc: "Home to industry",
        contact_linkedin_desc: "Professional Networking",
        contact_email_cta: "Send an Email",
 giants and a culture of precision, Germany is where theoretical knowledge meets world-class application. It's the ideal environment        contact_linkedin_cta: "View My Profile"
    },
    de: {
        // General
        brand_name: "George P Mathew",
        brand_sub: "Ingenieur GPM", to develop my expertise.",
        germany_item2_title: "Industry 4.0 & Research Ecosystem",


        // Navigation
        nav_home: "Start",
        nav_profile: "Profil",
                germany_item2_desc: "The collaborative ecosystem between academia and industry is unmatched, which is crucial for bridgingnav_about: "Über mich",
        nav_connect: "Kontakt",

        // Homepage
        hero_title: my construction background with advanced materials.",
        germany_item3_title: "Leading Construction & Materials Industry",
        germ "Bauingenieur & Zukünftiger Werkstoff-Innovator",
        hero_subtitle: "Meine Praany_item3_desc: "Renowned for sustainability and precision, the German construction and materials industries provide the perfect landscape toxiserfahrung hat mir gezeigt, dass die größten Herausforderungen im Bau oft materialbedingt sind. Diese Erkenntnis treibt meinen contribute to meaningful advancements.",
        germany_col2_title: "Why RWTH Aachen?",
        germany_item4_title: "World-Class University",
        germany_item4_desc: " Wechsel zur Werkstofftechnik in Deutschland an, wo ich die Art, wie wir bauen, innovieren möchte.",
        btnRWTH Aachen's global reputation in Materials Engineering ensures an education at the forefront of the field and opens doors to global opportunities.",_story: "Meine Geschichte",
        journey_title: "Eine sich entwickelnde Ingenieursreise",
        journey1_title: "Bauingenieur",
        journey1_desc_revised: "Meine Karriere
        germany_item5_title: "Perfect Program & Industry Integration",
        germany_item5_desc: "The M.Sc. program is perfectly tailored for my background, and the university's strong industry connections provide opportunities begann auf der Baustelle, wo ich die Montage von Fertigteilen leitete und Fundamentarbeiten überwachte. Diese praktische to work on real-world challenges.",
        germany_item6_title: "Strategic Career Positioning",
         Erfahrung ermöglichte ein tiefes Verständnis für reale Bauherausforderungen und die entscheidende Rolle der Materialintegrität.",
germany_item6_desc: "This choice positions me at the unique intersection of construction knowledge, advanced materials science, and        journey2_title: "Unternehmer",
        journey2_desc_revised: "Im Familienunternehmen habe German engineering excellence.",
        germany_bigger_picture_title: "The Bigger Picture",
        germany_bigger_ ich unser Angebot von Eisenwaren auf Malerarbeiten erweitert. Diese Initiative diversifizierte unsere Einnahmen, steigerte denpicture_desc: "This isn't just about a degree; it's a strategic move to be an active contributor at a global inflection point for construction and materials. With my hands-on experience and access to a world-class education, I am positioned to help solve the real-world challenges I've witnessed on construction sites.",


        // Connect Page
        connect_ Gewinn und lehrte mich wertvolle Lektionen in Geschäftsentwicklung und Kundenbeziehungen.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "Als 'Ingenieur GPM' teile ich mein Fachwissen zu komplexen Ingenieurthemen, einschließlich praktischer Anwendungsfälle für LLMs imhub_title: "Let's Connect",
        connect_hub_subtitle: "Follow my journey or get in touch for professional inquiries.",
        social_brand_heading: "Follow My Journey",
        contact_pro_heading: " Fachbereich. Diese Plattform schärft meine Fähigkeit, technisches Wissen klar und effektiv zu vermitteln.",
        For Professional Inquiries",
        social_youtube_title: "YouTube",
        social_youtube_desc: "Engineeringjourney4_title: "Werkstoffingenieur",
        journey4_desc_revised: "Meine Reise videos & tutorials",
        social_brand_insta_title: "Instagram (Brand)",
        social_brand_insta mündet in einer einzigen Erkenntnis: Die Zukunft des Bauens liegt in den Materialien. Mein bevorstehender M.Sc. an_desc: "Content & updates for Engineer GPM",
        social_insta_title: "Instagram (Personal)", der RWTH Aachen ist ein bewusster Schritt, um an der Spitze der Innovation nachhaltiger Baumaterialien zu stehen
        social_insta_desc: "Personal updates & photography",
        contact_email_title: "Email.",

        // Profile Page
        edu_heading: "Bildung",
        edu1_degree: "",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Professional Networking",
        M.Sc. Werkstofftechnik",
        edu1_school: "RWTH Aachen University, Deutschland",
contact_email_cta: "Send an Email",
        contact_linkedin_cta: "View My Profile"        edu1_date: "Zusage erhalten — Beginn Winter 2025",
        edu2_
    },
    de: {
        // General
        brand_name: "George P Mathew",
degree: "B.E. Bauingenieurwesen",
        edu2_school: "Mar Ephraem College of Engineering        brand_sub: "Ingenieur GPM",

        // Navigation
        nav_home: "Start and Technology, Indien",
        edu2_date: "06/2017 – 07",
        nav_profile: "Profil",
        nav_about: "Über mich",
        nav_connect: "/2021",
        exp_heading: "Berufserfahrung",
        exp1_roleKontakt",

        // Homepage
        hero_title: "Bauingenieur & Zukünftiger Werkstoff-Innovator: "Geschäftsassistent",
        exp1_date: "12/2023 – Heute",
        hero_subtitle: "Meine Praxiserfahrung hat mir gezeigt, dass die größten Herausforderungen im Bau",
        exp1_company: "Best Trading, Pathanapuram, Indien",
        exp1_li oft materialbedingt sind. Diese Erkenntnis treibt meinen Wechsel zur Werkstofftechnik in Deutschland an, wo ich die Art1: "Unterstützung von Kunden bei Produktanfragen, wodurch der Umsatz durch persönlichen Service und technische Beratung verbessert wurde.",
        exp1_li2: "Abwicklung von Abrechnungen und Mitwirkung bei lokalen Marketingmaßnahmen, einschließlich, wie wir bauen, innovieren möchte.",
        btn_story: "Meine Geschichte",
        journey_title: "Eine sich entwickelnde Ingenieursreise",
        journey1_title: "Bauingenieur",
 Werbeaktionen und Flyerverteilung.",
        exp2_role: "Junior-Ingenieur",
        exp2_date: "02/2023 – 11/2023",
        exp        journey1_desc_revised: "Meine Karriere begann auf der Baustelle, wo ich die Montage von Fert2_company: "SG Construction Company, Mumbai, Indien",
        exp2_li1: "Überwachung von Pfigteilen leitete und Fundamentarbeiten überwachte. Diese praktische Erfahrung ermöglichte ein tiefes Verständnis für reale Bauherahlgründungsarbeiten und Ausbauphasen des Bauprojekts.",
        exp2_li2:ausforderungen und die entscheidende Rolle der Materialintegrität.",
        journey2_title: "Unternehmer",
        journey2_desc_revised: "Im Familienunternehmen habe ich unser Angebot von Eisenwaren auf Malerarbeiten erweitert. Diese "Koordination mit verschiedenen Teams, um die Einhaltung der Projektmeilensteine sicherzustellen.",
        exp3_role: "Ingenieur-Absolvent (Trainee)",
        exp3_date: "10/20 Initiative diversifizierte unsere Einnahmen, steigerte den Gewinn und lehrte mich wertvolle Lektionen in21 – 09/2022",
        exp3_company: "Excel Precast Solutions, Bangalore, Indien",
        exp3_li1: "Management der Montage von Fertigteilen wie Wandpane Geschäftsentwicklung und Kundenbeziehungen.",
        journey3_title: "Content Creator",
        journey3_desc_revised: "Als 'Ingenieur GPM' teile ich mein Fachwissen zu komplexen Ingenieurthemen,elen, Trägern und Platten.",
        exp3_li2: "Durchführung von Qualitätssicherungsprüfungen und Unterstützung bei Reparaturen vor Ort an Fertigteilen.",
        tag_cs: "Kundenservice",
 einschließlich praktischer Anwendungsfälle für LLMs im Fachbereich. Diese Plattform schärft meine Fähigkeit, technisches Wissen klar und effektiv zu vermitteln.",
        journey4_title: "Werkstoffingenieur",
        journey4_desc        tag_sales: "Vertrieb",
        tag_marketing: "Marketing",
        tag_supervision: "Bau_revised: "Meine Reise mündet in einer einzigen Erkenntnis: Die Zukunft des Bauens liegt in den Materialien. Meinüberwachung",
        tag_coordination: "Projektkoordination",
        tag_civil: "Bauingenieurwesen",
        tag_precast: "Fertigteilmontage",
        tag_qa: "Qualitätssicherung", bevorstehender M.Sc. an der RWTH Aachen ist ein bewusster Schritt, um an der Spitze der Innovation
        sidebar_title: "Bauingenieur & Werkstoff-Innovator",
        btn_cv: "Lebenslauf herunterladen",
        skills_heading: "Fähigkeiten",
        skill1_title: nachhaltiger Baumaterialien zu stehen.",

        // Profile Page
        edu_heading: "Bildung",
         "Ingenieurwissen",
        skill1_desc: "Bauüberwachung, Fertigteilmontageedu1_degree: "M.Sc. Werkstofftechnik",
        edu1_school: "RWTH Aachen University,, Qualitätssicherung, Projektkoordination.",
        skill2_title: "KI & Einfallsreichtum Deutschland",
        edu1_date: "Zusage erhalten — Beginn Winter 2025",
        edu2_degree: "B.E. Bauingenieurwesen",
        edu2_school: "Mar Ephra",
        skill2_desc: "Nutzung von KI-Modellen, um schnell Prototypen zu entwickelnem College of Engineering and Technology, Indien",
        edu2_date: "06/2017 und komplexe Ingenieuraufgaben zu lösen.",
        skill3_title: "Software & Werkzeuge",
        skill3_desc: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS – 07/2021",
        exp_heading: "Berufserfahrung",
        exp1 Office.",
        lang_heading: "Sprachen",
        lang1_name: "Englisch",
_role: "Geschäftsassistent",
        exp1_date: "12/2023 –        lang2_name: "Malayalam",
        lang3_name: "Deutsch",
        lang4 Heute",
        exp1_company: "Best Trading, Pathanapuram, Indien",
        exp1_li1:_name: "Tamil",
        lang5_name: "Hindi",

        // About Page (Genesis) "Unterstützung von Kunden bei Produktanfragen, wodurch der Umsatz durch persönlichen Service und technische Beratung verbessert wurde.",
        exp1
        about_intro: "Ich bin",
        about_name_full: "George P Mathew",
_li2: "Abwicklung von Abrechnungen und Mitwirkung bei lokalen Marketingmaßnahmen, einschließlich Werbeaktionen und Flyer        about_p1: "Meine Karriere begann auf Baustellen in Indien, wo ich die Montage von Fertigteilen leitete. Dies war nicht nur ein Job; es war ein Labor, in dem ich die kritische Verbindung zwischen Materialqualität und Projekverteilung.",
        exp2_role: "Junior-Ingenieur",
        exp2_date: "02/2023 – 11/2023",
        exp2_company:terfolg erlebte.",
        about_p2: "Diese Erfahrung führte mich zu einem klaren Schluss: "SG Construction Company, Mumbai, Indien",
        exp2_li1: "Überwachung von Pfahlgründ Um bessere, langlebigere Strukturen zu bauen, müssen wir zuerst die Materialien selbst innovieren. Diese Erkenntnis ist die treungsarbeiten und Ausbauphasen des Bauprojekts.",
        exp2_li2: "Koordination mitibende Kraft für mein Masterstudium in Werkstofftechnik an der weltberühmten RWTH Aachen.",
        about_ verschiedenen Teams, um die Einhaltung der Projektmeilensteine sicherzustellen.",
        exp3_role: "Ingp3: "Ich zeichne mich auch durch meinen Einfallsreichtum aus. Diese Website ist der Beweis. Ohenieur-Absolvent (Trainee)",
        exp3_date: "10/2021 – 09/2022",
        exp3_company: "Excel Precast Solutionsne Programmiererfahrung behandelte ich ihre Erstellung wie ein Ingenieurproblem und leitete eine KI an, den Code, Bangalore, Indien",
        exp3_li1: "Management der Montage von Fertigteilen wie Wandpane zu generieren. Das ist die zukunftsorientierte Denkweise, die ich in jede Herausforderung einbringe.",
elen, Trägern und Platten.",
        exp3_li2: "Durchführung von Qualitätssicher        focus_title: "Worauf ich mich konzentriere",
        focus1_title: "Ingenieur Gungsprüfungen und Unterstützung bei Reparaturen vor Ort an Fertigteilen.",
        tag_cs: "Kundenservice",
PM - Die Marke",
        focus1_desc: "Ich teile meine Leidenschaft für das Ingenieurwesen und        tag_sales: "Vertrieb",
        tag_marketing: "Marketing",
        tag_supervision: "Bau mache komplexe Themen durch meine Content-Plattform zugänglich.",
        focus1_cta: "Meine Kanäle entdeckenüberwachung",
        tag_coordination: "Projektkoordination",
        tag_civil: "Bauingenieurwesen",",
        focus2_title: "Werkstofftechnik - Die Zukunft",
        focus2_desc: "Vorb
        tag_precast: "Fertigteilmontage",
        tag_qa: "Qualitätssicherung",ereitung auf meinen M.Sc. an der RWTH Aachen, um bei der Innovation nachhaltiger Baumaterialien von
        sidebar_title: "Bauingenieur & Werkstoff-Innovator",
        btn_cv: " morgen an vorderster Front zu stehen.",
        focus2_cta: "Meinen Plan für Deutschland sehen",
        Lebenslauf herunterladen",
        skills_heading: "Fähigkeiten",
        skill1_title: "Ingenieurwissen",
        skill1_desc: "Bauüberwachung, Fertigteilmontagegermany_heading: "Mein Engagement für das Ingenieurwesen in Deutschland",
        germany_intro: ", Qualitätssicherung, Projektkoordination.",
        skill2_title: "KI & Einfallsreichtum",
Meine Praxiserfahrung hat den dringenden Bedarf an Materialinnovationen offenbart, was mich direkt nach Deutschland führte –        skill2_desc: "Nutzung von KI-Modellen, um schnell Prototypen zu entwickeln und komple dem europäischen Marktführer in Ingenieurforschung. Dies ist das Epizentrum der Zukunft, die ich mitgestalten möchte.",xe Ingenieuraufgaben zu lösen.",
        skill3_title: "Software & Werkzeuge",
        skill3_desc
        germany_col1_title: "Warum Deutschland?",
        germany_item1_title:: "AutoCAD, SketchUp, Adobe Suite (Illustrator, Photoshop, InDesign), MS Office.",
         "Führung in Ingenieurwesen & Innovation",
        germany_item1_desc: "Als Heimat vonlang_heading: "Sprachen",
        lang1_name: "Englisch",
        lang2_name Branchenriesen und einer Kultur der Präzision verbindet Deutschland theoretisches Wissen mit erstklassiger Anwendung. Es: "Malayalam",
        lang3_name: "Deutsch",
        lang4_name: "Tamil",
        lang5_name: "Hindi",

        // About Page (Genesis)
        about_intro: "Ich ist das ideale Umfeld, um meine Expertise zu entwickeln.",
        germany_item2_title: "Industrie 4 bin",
        about_name_full: "George P Mathew",
        about_p1: "Meine Karriere.0 & Forschungsökosystem",
        germany_item2_desc: "Das kollaborative Ökosystem zwischen Wissenschaft und Industrie ist unübertroffen und entscheidend, um meine Bauerfahrung mit modernen Werkstoffen zu verbinden.", begann auf Baustellen in Indien, wo ich die Montage von Fertigteilen leitete. Dies war nicht nur ein Job; es
        germany_item3_title: "Führende Bau- & Werkstoffindustrie",
        germ war ein Labor, in dem ich die kritische Verbindung zwischen Materialqualität und Projekterfolg erlebte.",
        any_item3_desc: "Bekannt für Nachhaltigkeit und Präzision, bieten die deutsche Bau- undabout_p2: "Diese Erfahrung führte mich zu einem klaren Schluss: Um bessere, langlebigere Strukturen zu bauen, müssen wir zuerst die Materialien selbst innovieren. Diese Erkenntnis ist die treibende Kraft für mein Masterstudium in Werk Werkstoffindustrie die perfekte Landschaft, um zu bedeutenden Fortschritten beizutragen.",
        germany_col2_stofftechnik an der weltberühmten RWTH Aachen.",
        about_p3: "Ich zeichne mich auch durchtitle: "Warum RWTH Aachen?",
        germany_item4_title: "Weltklasse-Universität",
        germany_item4_desc: "Der weltweite Ruf der RWTH Aachen in der Werkstofftechnik sichert eine meinen Einfallsreichtum aus. Diese Website ist der Beweis. Ohne Programmiererfahrung behandelte ich ihre Erstellung wie ein Ingenieurproblem und leitete eine KI an, den Code zu generieren. Das ist die z Ausbildung an der Spitze des Fachgebiets und öffnet globale Möglichkeiten.",
        germany_item5_title: "Perfektes Programm & Industrieintegration",
        germany_item5_desc: "Der M.Sc.-Studiengangukunftsorientierte Denkweise, die ich in jede Herausforderung einbringe.",
        focus_title: "Worauf ich mich konzentriere",
        focus1_title: "Ingenieur GPM - Die Marke",
         ist perfekt auf meinen Hintergrund zugeschnitten, und die starken Industrieverbindungen der Universität bieten Chancen, an realenfocus1_desc: "Ich teile meine Leidenschaft für das Ingenieurwesen und mache komplexe Themen durch meine Content Herausforderungen zu arbeiten.",
        germany_item6_title: "Strategische Karrierepositionierung",
        germany_-Plattform zugänglich.",
        focus1_cta: "Meine Kanäle entdecken",
        focus2_title: "Werkstofftechnik - Die Zukunft",
        focus2_desc: "Vorbereitung auf meinen M.Scitem6_desc: "Diese Wahl positioniert mich an der einzigartigen Schnittstelle von Bauwissen, moderner Werkstoff. an der RWTH Aachen, um bei der Innovation nachhaltiger Baumaterialien von morgen an vorderster Front zu stehen.",
kunde und deutscher Ingenieurskunst.",
        germany_bigger_picture_title: "Das große Ganze",
                focus2_cta: "Mein Profil ansehen",
        germany_heading: "Ein bewusster Schgermany_bigger_picture_desc: "Dies ist nicht nur ein Abschluss; es ist ein strategischer Schritt, umwenk nach Deutschland",
        germany_intro: "Meine Praxiserfahrung hat den dringenden Bedarf an Material an einem globalen Wendepunkt für Bau und Werkstoffe aktiv mitzuwirken. Mit meiner Praxiserfahrung undinnovationen offenbart, was mich direkt nach Deutschland führte – dem europäischen Marktführer in Ingenieurforschung. Dies ist das dem Zugang zu erstklassiger Bildung bin ich in der Lage, die realen Herausforderungen zu lösen, die ich auf Epizentrum der Zukunft, die ich mitgestalten möchte.",
        germany_col1_title: "Warum Baustellen erlebt habe.",

        // Connect Page
        connect_hub_title: "Vernetzen wir uns",
         Deutschland?",
        germany_item1_title: "Führung in Ingenieurwesen & Innovation",
        connect_hub_subtitle: "Folgen Sie meiner Reise oder kontaktieren Sie mich für berufliche Anfragen.",
        germany_item1_desc: "Als Heimat von Branchenriesen und einer Kultur der Präzision verbindsocial_brand_heading: "Folgen Sie meiner Reise",
        contact_pro_heading: "Für berufet Deutschland theoretisches Wissen mit erstklassiger Anwendung. Es ist das ideale Umfeld, um meine Expertise zu entwickeln.",
        liche Anfragen",
        social_youtube_title: "YouTube",
        social_youtube_desc: "germany_item2_title: "Industrie 4.0 & Forschungsökosystem",
        germIngenieurvideos & Tutorials",
        social_brand_insta_title: "Instagram (Marke)",
        social_brand_insta_desc: "Inhalte & Updates für Ingenieur GPM",
        social_insta_title:any_item2_desc: "Das kollaborative Ökosystem zwischen Wissenschaft und Industrie ist unübertroffen und "Instagram (Persönlich)",
        social_insta_desc: "Persönliche Updates & Fotografie",
         entscheidend, um meine Bauerfahrung mit modernen Werkstoffen zu verbinden.",
        germany_item3_title: "Führende Bau- & Werkstoffindustrie",
        germany_item3_desc: "Bekannt für Nachhaltcontact_email_title: "E-Mail",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Berufliches Networking",
        contact_email_cta: "E-Mailigkeit und Präzision, bieten die deutsche Bau- und Werkstoffindustrie die perfekte Landschaft, um zu bedeutenden Fort senden",
        contact_linkedin_cta: "Profil ansehen"
    }
  };

  const LANGschritten beizutragen.",
        germany_col2_title: "Warum RWTH Aachen?",
        germany_KEY = 'gpm_lang_v6_final';
  const getSavedLang = () => localStorage_item4_title: "Weltklasse-Universität",
        germany_item4_desc: "Der welt.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(weite Ruf der RWTH Aachen in der Werkstofftechnik sichert eine Ausbildung an der Spitze des Fachgebiets und öffLANG_KEY, code);

  function applyTranslations(code) {
    const dict = I18N[code] || I18N.en;
    document.querySelectorAll('[data-i18n]').forEach(el =>net globale Möglichkeiten.",
        germany_item5_title: "Perfektes Programm & Industrieintegration",
         {
      const key = el.getAttribute('data-i18n');
      if (dict[key]germany_item5_desc: "Der M.Sc.-Studiengang ist perfekt auf meinen Hintergrund zug !== undefined) {
        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttributeeschnitten, und die starken Industrieverbindungen der Universität bieten Chancen, an realen Herausforderungen zu arbeiten.",
        germ('lang', code);
    document.documentElement.setAttribute('data-theme', code === 'de' ? 'germanany_item6_title: "Strategische Karrierepositionierung",
        germany_item6_desc: "Diese' : 'default');
  }

  function initLangToggle() {
    const container = document.querySelector('. Wahl positioniert mich an der einzigartigen Schnittstelle von Bauwissen, moderner Werkstoffkunde und deutscher Ingenieursheader-actions');
    if (!container) return;

    // Check if toggle already exists to prevent duplication
    ifkunst.",
        germany_bigger_picture_title: "Das große Ganze",
        germany_bigger_picture_desc: "Dies ist nicht nur ein Abschluss; es ist ein strategischer Schritt, um an einem global (container.querySelector('.lang-toggle')) return;

    const toggleHTML = `
      <div class="lang-toggle" title="Toggle Language (EN/DE)">
        <button class="lang-toggle-btn en" dataen Wendepunkt für Bau und Werkstoffe aktiv mitzuwirken. Mit meiner Praxiserfahrung und dem Zugang zu-lang="en">EN</button>
        <button class="lang-toggle-btn de" data-lang erstklassiger Bildung bin ich in der Lage, die realen Herausforderungen zu lösen, die ich auf Baustellen erlebt="de">DE</button>
        <div class="lang-glider"></div>
      </div>
     habe.",

        // Connect Page
        connect_hub_title: "Vernetzen wir uns",
        `;
    container.insertAdjacentHTML('beforeend', toggleHTML);

    const toggle = container.querySelector('.lang-toggle');
    const buttons = toggle.querySelectorAll('.lang-toggle-btn');
    const glider = toggle.querySelectorconnect_hub_subtitle: "Folgen Sie meiner Reise oder kontaktieren Sie mich für berufliche Anfragen.",
        social_brand_heading: "Folgen Sie meiner Reise",
        contact_pro_heading: "Für berufliche Anfragen('.lang-glider');

    function setButtonState(lang) {
        buttons.forEach(btn => btn.classList",
        social_youtube_title: "YouTube",
        social_youtube_desc: "Ingenieur.toggle('active', btn.dataset.lang === lang));
        glider.classList.toggle('de', langvideos & Tutorials",
        social_brand_insta_title: "Instagram (Marke)",
        social_brand_ === 'de');
    }

    buttons.forEach(button => {
        button.addEventListener('click', () =>insta_desc: "Inhalte & Updates für Ingenieur GPM",
        social_insta_title: "Instagram (Pers {
            const newLang = button.dataset.lang;
            saveLang(newLang);
            applyTranslations(önlich)",
        social_insta_desc: "Persönliche Updates & Fotografie",
        contact_email_newLang);
            setButtonState(newLang);
        });
    });
    setButtonState(getSavedLangtitle: "E-Mail",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_());
  }

  /* =========================
     2. Active Navigation
     ========================= */
  functiondesc: "Berufliches Networking",
        contact_email_cta: "E-Mail senden",
        contact_ markActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.linkedin_cta: "Profil ansehen"
    }
  };

  const LANG_KEY = 'ghtml';
    document.querySelectorAll('.main-nav .nav-link, .mobile-tab-bar .tabpm_lang_v7';
  const getSavedLang = () => localStorage.getItem(LANG_KEY) || 'en';
  const saveLang = (code) => localStorage.setItem(LANG_KEY, code);

  -link').forEach(link => {
      const linkPage = link.getAttribute('href');
      link.classList.remove('active');
      link.removeAttribute('aria-current');
      if (linkPage === currentPage) {
        function applyTranslations(code) {
    const dict = I18N[code] || I18N.link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key
    });
  }

  /* ==================================
     3. Immersive Timeline Animation
     ================ = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
================== */
  function initTimelineObserver() {
    const milestones = document.querySelectorAll('.timeline-milestone');        el.textContent = dict[key];
      }
    });
    document.documentElement.setAttribute('lang', code
    if (milestones.length === 0) return;

    const observer = new IntersectionObserver((entries);
    document.documentElement.setAttribute('data-theme', code === 'de' ? 'german' : 'default) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
');
  }

  function initLangToggle() {
    const container = document.querySelector('.header-actions');
                    entry.target.classList.add('in-view');
            }
        });
    }, {
        rootMargin: '0px 0px -25% 0px', // Trigger when the element is 25if (!container) return;
    const toggleHTML = `
      <div class="lang-toggle" title% from the bottom
        threshold: 0.1
    });

    milestones.forEach(milestone="Sprache wechseln (EN/DE)">
        <button class="lang-toggle-btn en" data-lang="en">EN</button>
        <button class="lang-toggle-btn de" data-lang="de"> => {
        observer.observe(milestone);
    });

    // Animate the conduit pulse based on scroll progress withinDE</button>
        <div class="lang-glider"></div>
      </div>
    `;
     the section
    const conduit = document.querySelector('.timeline-conduit');
    const timelineSection = document.querySelectorcontainer.innerHTML = toggleHTML;
    const toggle = container.querySelector('.lang-toggle');
    const buttons('.timeline-experience');
    if (!conduit || !timelineSection) return;

    const pulse = document.createElement(' = toggle.querySelectorAll('.lang-toggle-btn');
    const glider = toggle.querySelector('.lang-gliderdiv');
    pulse.className = 'timeline-pulse';
    conduit.appendChild(pulse);
    
    window');
    
    function setButtonState(lang) {
        buttons.forEach(btn => btn.classList.toggle.addEventListener('scroll', () => {
        const rect = timelineSection.getBoundingClientRect();
        const windowHeight('active', btn.dataset.lang === lang));
        glider.classList.toggle('de', lang === 'de'); = window.innerHeight;

        // Calculate when the top of the section hits the middle of the screen
        // and when
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            saveLang(newLang);
            applyTranslations(newLang);
 the bottom of the section hits the middle of the screen
        const start = rect.top + window.scrollY;
        const end = start + rect.height - windowHeight;
        
        let progress = (window.scrollY -            setButtonState(newLang);
        });
    });
    setButtonState(getSavedLang());
 start) / (end - start);
        progress = Math.max(0, Math.min(1, progress  }

  /* =========================
     2. Active Navigation
     ========================= */
  function markActiveNav)); // Clamp between 0 and 1

        pulse.style.height = `${progress * 100() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    }%`;
    }, { passive: true });
  }


  /* ===================================
     4. About Page Interactive Image
     =================================== */
  function initInteractiveImage() {
    const imageContainer = document.getElementByIdconst pageName = currentPage.split('.')[0]; // e.g., 'index', 'profile'
    
    document.querySelectorAll('.main-nav .nav-link, .mobile-tab-bar .tab-link').forEach('interactive-image');
    if (!imageContainer) return;

    imageContainer.addEventListener('mousemove', (e) => {
        const rect = imageContainer.getBoundingClientRect();
        const x = e.clientX - rect(link => {
      const linkPage = link.getAttribute('href').split('.')[0];
      // Special.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width /  case for homepage (index.html)
      const isHomePage = linkPage === 'index' && (pageName === '2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerYindex' || pageName === '');

      if (linkPage === pageName || isHomePage) {
        link) / centerY) * -8; // Invert for natural feel
        const rotateY = ((x - centerX) /.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    });
 centerX) * 8;
        
        imageContainer.style.transition = 'transform 0.1s linear';
  }

  /* =====================================
     3. Homepage Immersive Timeline Animation
     ===================================== */
  function initTimelineObserver() {
    const timeline = document.querySelector('.timeline-experience');
    if (!timeline)        imageContainer.style.transform = `perspective(1000px) rotateX(${rotateX}deg) return;

    const milestones = timeline.querySelectorAll('.timeline-milestone');
    const conduit = timeline.querySelector('.timeline rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        imageContainer.style.transition-conduit::before');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach( = 'transform 0.5s cubic-bezier(0.25, 1, 0.5,entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(' 1)';
        imageContainer.style.transform = 'perspective(1000px) rotateX(in-view');
        }
      });
    }, {
      rootMargin: '0px',
      threshold:0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }); 0.5 // Trigger when 50% of the milestone is visible
    });

    milestones.
  }

  /* =========================
     5. Initialization
     ========================= */
  function init()forEach(milestone => {
      observer.observe(milestone);
    });

    // Animate the conduit fill {
    applyTranslations(getSavedLang());
    initLangToggle();
    markActiveNav();
    initTimelineObserver based on scroll
    window.addEventListener('scroll', () => {
        const timelineRect = timeline.getBoundingClientRect();
        ();
    initInteractiveImage();
  }

  // Ensure the DOM is fully loaded before running scripts
  ifconst viewportHeight = window.innerHeight;

        // Start filling when the top of the timeline section is a bit into (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
