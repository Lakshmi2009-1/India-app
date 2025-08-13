// NAVBAR: toggle menu on small screens
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('show');
});

// Close mobile menu when clicking any nav link (and smooth scroll)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    // smooth scroll
    const targetId = link.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // hide menu if open (mobile)
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Smooth scroll for Know More button (in case it uses href)
const knowBtn = document.getElementById('know-more');
if (knowBtn) {
  knowBtn.addEventListener('click', (e) => {
    const href = knowBtn.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

// Optional: close mobile menu on resize to desktop widths
window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});