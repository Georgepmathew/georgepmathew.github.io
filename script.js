// Basic interactivity: smooth scroll, theme toggle, active nav highlighting
(function(){
  const links = document.querySelectorAll('.nav-link, .btn[data-target]');
  const themeBtn = document.getElementById('themeToggle');
  const themeBtnFooter = document.getElementById('themeToggleFooter');
  const html = document.documentElement;

  // theme (localStorage)
  const saved = localStorage.getItem('ef_theme');
  if (saved) html.classList.toggle('dark', saved === 'dark');
  else {
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.toggle('dark', prefers);
  }

  function setTheme(t){
    html.classList.toggle('dark', t === 'dark');
    localStorage.setItem('ef_theme', t);
    if (themeBtn) themeBtn.setAttribute('aria-pressed', t === 'dark');
  }

  if (themeBtn){
    themeBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      setTheme(isDark ? 'dark' : 'light');
    });
  }
  if (themeBtnFooter){
    themeBtnFooter.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      setTheme(isDark ? 'dark' : 'light');
    });
  }

  // smooth scroll handler
  function scrollToId(id){
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 86; // nav offset
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      const id = btn.getAttribute('data-target');
      scrollToId(id);
    });
  });

  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      scrollToId(id);
    });
  });

  // Home button
  document.getElementById('homeBtn')?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // active menu via IntersectionObserver
  const sectionIds = ['about','experience','skills','education','contact'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  const navButtons = Array.from(document.querySelectorAll('.nav-link'));

  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          const id = entry.target.id;
          navButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-target') === id));
        }
      });
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 });

    sections.forEach(s => io.observe(s));
  } else {
    window.addEventListener('scroll', () => {
      let current = 'about';
      for (const s of sections){
        const rect = s.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = s.id;
      }
      navButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-target') === current));
    });
  }
})();

