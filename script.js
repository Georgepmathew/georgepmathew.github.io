// script.js: theme + language storage (simple) and mobile About toggle + nav highlight
(function(){
  // -- simple theme persistence (optional expand later) --
  const themeKey = 'ef_theme';
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'light') {
    // default desktop: light (the CSS uses light by default)
    document.documentElement.classList.remove('theme-dark');
  } else if (savedTheme === 'dark') {
    document.documentElement.classList.add('theme-dark');
  }

  // -- mobile About toggle --
  const aboutToggle = document.getElementById('mobileAboutToggle');
  const aboutContent = document.getElementById('mobileAboutContent');
  if (aboutToggle && aboutContent) {
    aboutToggle.addEventListener('click', () => {
      const expanded = aboutToggle.getAttribute('aria-expanded') === 'true';
      aboutToggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (expanded) {
        aboutContent.hidden = true;
      } else {
        aboutContent.hidden = false;
        // smooth open (scroll into view on small screens)
        setTimeout(()=> aboutContent.scrollIntoView({behavior:'smooth', block:'center'}), 50);
      }
    });
  }

  // -- bottom nav highlight (mobile) --
  const mbLinks = document.querySelectorAll('.mobile-bottom-nav .mb-link, .mainnav .nav-link');
  function markActive(){
    const path = window.location.pathname.split('/').pop() || 'index.html';
    mbLinks.forEach(a=>{
      const href = (a.getAttribute('href')||'').split('/').pop();
      if (href === path || (path === '' && href === 'index.html')) {
        a.classList.add('active');
        a.style.opacity = 1;
      } else {
        a.classList.remove('active');
        a.style.opacity = 0.85;
      }
    });
  }
  markActive();

  // mobile bottom nav hides on scroll down and shows on scroll up (small enhancement)
  let lastScroll = window.scrollY;
  const bottomNav = document.querySelector('.mobile-bottom-nav');
  if (bottomNav) {
    window.addEventListener('scroll', () => {
      const cur = window.scrollY;
      if (cur > lastScroll && cur > 100) bottomNav.style.transform = 'translateY(80px)'; // hide
      else bottomNav.style.transform = 'translateY(0)';
      lastScroll = cur;
    }, {passive:true});
  }

  // small accessibility: attach keyboard toggle for About
  if (aboutToggle) {
    aboutToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        aboutToggle.click();
      }
    });
  }
})();
