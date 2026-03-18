function initMobileMenu() {
  const nav = document.querySelector('nav');
  const menu = document.getElementById('mobileMenu');
  const hamburger = document.getElementById('hamburgerBtn');
  const menuLinks = document.querySelectorAll('.mobile-menu-link');

  if (!nav || !menu || !hamburger) {
    return;
  }

  function toggleMenu() {
    menu.classList.toggle('open');
  }

  function closeMenu() {
    menu.classList.remove('open');
  }

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
