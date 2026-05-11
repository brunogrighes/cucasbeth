/* =============================================
   CUCAS BETH — Scripts de Interação
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV: encolhe ao rolar ──────────────────
  const nav = document.querySelector('nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // ── SMOOTH SCROLL para âncoras ─────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ── INTERSECTION OBSERVER: fade-in ao rolar ─
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  }, { threshold: 0.12 });

  // Elementos que recebem animação de entrada
  const animatedSelectors = [
    '.sabor-card',
    '.ing-card',
    '.processo-card',
    '.contato-card',
    '.timeline-item',
    '.stat',
  ];

  document.querySelectorAll(animatedSelectors.join(', ')).forEach((el, i) => {
    el.classList.add('fade-in');
    // Escalonamento suave por índice dentro do pai
    const siblings = el.parentElement.querySelectorAll(':scope > *');
    const idx = Array.from(siblings).indexOf(el);
    el.style.transitionDelay = `${idx * 80}ms`;
    observer.observe(el);
  });

  // ── TOOLTIP do botão WhatsApp flutuante ─────
  const floatBtn = document.querySelector('.whatsapp-float');
  if (floatBtn) {
    floatBtn.addEventListener('mouseenter', () => {
      const tooltip = floatBtn.querySelector('.whatsapp-float-tooltip');
      if (tooltip) tooltip.style.opacity = '1';
    });
    floatBtn.addEventListener('mouseleave', () => {
      const tooltip = floatBtn.querySelector('.whatsapp-float-tooltip');
      if (tooltip) tooltip.style.opacity = '0';
    });
  }

  // ── HIGHLIGHT do link ativo no nav ──────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}`
            ? 'var(--rosa-claro)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

});
