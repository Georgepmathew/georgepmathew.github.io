// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Elements
  const langToggle = document.getElementById("lang-toggle");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  // Responsive Nav Toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Language translations
  const translations = {
    de: {
      nav_home: "Startseite",
      nav_about: "Über mich",
      nav_experience: "Erfahrung",
      nav_skills: "Fähigkeiten",
      nav_education: "Ausbildung",
      nav_contact: "Kontakt",
      nav_social: "Soziale Medien",
      hero_greeting: "Hallo, ich bin",
      hero_title: "Ingenieur & KI-Enthusiast",
      hero_subtitle: "Ich baue moderne Web-Erlebnisse und beherrsche LLMs",
      hero_ai: "Experte für KI und LLM-Prompting",
      hero_dev: "Webentwicklung & Automatisierung",
      hero_tutor: "Inhalts- und Bildungsvideos"
    },
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_experience: "Experience",
      nav_skills: "Skills",
      nav_education: "Education",
      nav_contact: "Contact",
      nav_social: "Social",
      hero_greeting: "Hi, I'm",
      hero_title: "Engineer & AI Enthusiast",
      hero_subtitle: "I build modern web experiences and master LLMs",
      hero_ai: "Expert in AI and LLM Prompting",
      hero_dev: "Web Development & Automation",
      hero_tutor: "Content & Educational Videos"
    }
  };

  // Language toggle function
  let currentLang = "en";
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "de" : "en";
    document.documentElement.setAttribute("lang", currentLang);
    applyTranslations(currentLang);
    document.body.classList.toggle("theme-german", currentLang === "de");
  });

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  // Ensure images/icons auto-fit
  document.querySelectorAll("img").forEach(img => {
    img.style.maxWidth = "100%";
    img.style.height = "auto";
    img.style.objectFit = "contain";
  });
});
