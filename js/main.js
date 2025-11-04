/**
 * Main JavaScript file
 * General site functionality and utilities
 */
(function() {
  'use strict';

  // Navbar scroll effect
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    const scrollThreshold = 50;

    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > scrollThreshold) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }

  // Parallax effect for sections
  function initParallax() {
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      
      sections.forEach((section, index) => {
        const rate = scrolled * 0.1 * (index % 2 === 0 ? 1 : -1);
        section.style.transform = `translateY(${rate}px)`;
      });
    });
  }

  // Initialize all interactive features
  function init() {
    initNavbarScroll();
    // Parallax is disabled by default - can be enabled if needed
    // initParallax();
    
    console.log('NCIM site initialized with interactive features');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

