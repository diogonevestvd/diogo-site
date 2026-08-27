(() => {
  const menuButton = document.querySelector('[data-menu-button]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const closeButton = document.querySelector('[data-menu-close]');
  let previouslyFocused = null;

  const focusables = () => mobileMenu ? [...mobileMenu.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')] : [];

  const closeMenu = ({ restoreFocus = true } = {}) => {
    if (!mobileMenu || !menuButton) return;
    mobileMenu.hidden = true;
    mobileMenu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    if (restoreFocus && previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
  };

  const openMenu = () => {
    if (!mobileMenu || !menuButton) return;
    previouslyFocused = document.activeElement;
    mobileMenu.hidden = false;
    mobileMenu.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => (closeButton || focusables()[0])?.focus());
  };

  menuButton?.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });
  closeButton?.addEventListener('click', () => closeMenu());
  mobileMenu?.addEventListener('click', (event) => {
    if (event.target === mobileMenu) closeMenu();
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu({ restoreFocus: false })));

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') closeMenu();
    if (event.key === 'Tab' && mobileMenu && !mobileMenu.hidden) {
      const items = focusables();
      if (!items.length) return;
      const first = items[0], last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 940 && mobileMenu && !mobileMenu.hidden) closeMenu({ restoreFocus: false });
  });

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => observer.observe(el));
})();
