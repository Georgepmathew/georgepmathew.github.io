// theme persistence and nav active highlighting
(function(){
  const html = document.documentElement;
  const themeKey = 'ef_theme';

  // apply saved theme
  const saved = localStorage.getItem(themeKey);
  if (saved) html.classList.toggle('dark', saved === 'dark');
  else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.classList.toggle('dark', prefersDark);
  }

  function setTheme(isDark){
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem(themeKey, 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem(themeKey, 'light');
    }
    // update aria pressed
    document.querySelectorAll('#themeToggle, #themeToggleFooter').forEach(btn => {
      if (btn) btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  // toggle buttons
  document.querySelectorAll('#themeToggle, #themeToggleFooter').forEach(btn => {
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      setTheme(isDark);
    });
  });

  // highlight active nav link based on current file
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const page = path.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(a => {
    const href = a.getAttribute('href') || '';
    // handle index (home)
    if ((page === 'index.html' && href === 'index.html') || (href === page) || (href === '' && page === 'index.html')) {
      a.classList.add('active');
    } else if (href === page) {
      a.classList.add('active');
    } else {
      a.classList.remove('active');
    }
  });
})();
