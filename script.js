// script.js
// Handles navigation, swipe detection, language toggle, and section highlighting

// Smooth scroll to section when nav buttons are clicked
document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const targetId = btn.getAttribute("data-target");
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  });
});

// IntersectionObserver for highlighting active nav item
const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-btn, .nav-cta");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.id;
      navButtons.forEach(btn => {
        btn.classList.toggle("active", btn.getAttribute("data-target") === sectionId);
      });
    }
  });
}, { threshold: 0.6 });

sections.forEach(section => observer.observe(section));

// Language toggle with localStorage persistence
const langToggle = document.getElementById("lang-toggle");
if (langToggle) {
  const savedLang = localStorage.getItem("lang") || "en";
  setLanguage(savedLang);

  langToggle.addEventListener("click", () => {
    const current = langToggle.getAttribute("data-lang");
    const next = current === "en" ? "de" : "en";
    setLanguage(next);
    localStorage.setItem("lang", next);
    showToast(next === "en" ? "English selected" : "Deutsch ausgewählt");
  });
}

function setLanguage(lang) {
  if (!langToggle) return;
  langToggle.setAttribute("data-lang", lang);
  langToggle.setAttribute("aria-pressed", lang === "de");
  const texts = langToggle.querySelectorAll(".lang-text");
  texts.forEach(el => el.classList.remove("inactive"));
  if (lang === "en") {
    texts[1].classList.add("inactive");
  } else {
    texts[0].classList.add("inactive");
  }
  // Future: dynamically load translations here
}

// Swipe detection for horizontal scroll containers
let startX = 0;
let scrollLeft = 0;
const snapContainer = document.querySelector(".snap-container");
if (snapContainer) {
  snapContainer.addEventListener("mousedown", startDrag);
  snapContainer.addEventListener("touchstart", startDrag);

  function startDrag(e) {
    snapContainer.classList.add("dragging");
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = snapContainer.scrollLeft;
    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", stopDrag);
    document.addEventListener("touchend", stopDrag);
  }

  function drag(e) {
    const x = e.pageX || (e.touches && e.touches[0].pageX);
    const walk = (x - startX) * -1;
    snapContainer.scrollLeft = scrollLeft + walk;
  }

  function stopDrag() {
    snapContainer.classList.remove("dragging");
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("mouseup", stopDrag);
    document.removeEventListener("touchend", stopDrag);
  }
}

// Toast notifications
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
    toast.hidden = true;
  }, 2000);
}

// Lazy-load images/videos (basic)
const lazyElements = document.querySelectorAll("img[loading='lazy'], video");
const lazyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      if (el.tagName === "VIDEO") {
        el.setAttribute("preload", "auto");
      }
      lazyObserver.unobserve(el);
    }
  });
});

lazyElements.forEach(el => lazyObserver.observe(el));
