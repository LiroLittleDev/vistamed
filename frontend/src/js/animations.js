/* ── Scroll Reveal ── */
function initScrollReveal() {
  var revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
  if (!revealElements.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  // Elementos acima do fold ficam visíveis imediatamente, sem esconder/animar
  var viewportHeight = window.innerHeight;
  revealElements.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight) {
      // Já está visível no carregamento: mostra sem transição
      el.style.transition = 'none';
      el.classList.add('visible');
    } else {
      // Abaixo do fold: observa normalmente
      observer.observe(el);
    }
  });
}

/* ── Navbar Scroll Effect ── */
function initNavbarScroll() {
  var nav = document.querySelector('nav');
  if (!nav) return;

  var lastScroll = 0;
  var ticking = false;

  function onScroll() {
    lastScroll = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        if (lastScroll > 20) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── Counter Animation ── */
function initCounterAnimation() {
  var statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(function(el) {
    observer.observe(el);
  });
}

function animateCounter(el) {
  var text = el.textContent.trim();
  var match = text.match(/^(\d+)/);
  if (!match) return;

  var target = parseInt(match[1], 10);
  var suffix = text.replace(match[1], '');
  var duration = 1800;
  var startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = Math.min((timestamp - startTime) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 4);
    var current = Math.floor(eased * target);
    el.textContent = current + suffix;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      el.textContent = target + suffix;
    }
  }

  window.requestAnimationFrame(step);
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      var navHeight = document.querySelector('nav').offsetHeight || 72;
      var targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}
