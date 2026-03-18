function initMobileMenu() {
  const nav = document.querySelector('nav');
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburgerBtn');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!nav || !menu || !hamburger) {
    return;
  }

  function toggleMenu() {
    const isOpen = menu.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  }

  function closeMenu() {
    menu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.addEventListener('click', toggleMenu);

  menuLinks.forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', function(event) {
    if (!nav.contains(event.target)) {
      closeMenu();
    }
  });
}
