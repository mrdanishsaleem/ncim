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

  // Interactive cursor ring (desktop only)
  function initCursorRing() {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);
    // Keep native cursor visible alongside the ring

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = null;

    const lerp = (start, end, amount) => (1 - amount) * start + amount * end;

    function animate() {
      currentX = lerp(currentX, targetX, 0.2);
      currentY = lerp(currentY, targetY, 0.2);
      // Use left/top to preserve CSS centering transform
      ring.style.left = currentX + 'px';
      ring.style.top = currentY + 'px';
      rafId = requestAnimationFrame(animate);
    }

    function onMouseMove(e) {
      targetX = e.clientX;
      targetY = e.clientY;
    }

    function onMouseDown() {
      ring.classList.add('is-click');
    }

    function onMouseUp() {
      ring.classList.remove('is-click');
    }

    function setHoverState(isHover) {
      if (isHover) {
        ring.classList.add('is-hover');
      } else {
        ring.classList.remove('is-hover');
      }
    }

    // Hover targets
    const hoverSelectors = 'a, button, [role="button"], input, textarea, select, .clickable';
    document.addEventListener('mouseover', (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest(hoverSelectors)) {
        setHoverState(true);
      }
    });
    document.addEventListener('mouseout', (e) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest(hoverSelectors)) {
        setHoverState(false);
      }
    });

    // Optional: adapt to dark sections if marked with .cursor-dark-area
    document.addEventListener('mousemove', (e) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el && el.closest && el.closest('.cursor-dark-area')) {
        ring.classList.add('on-dark');
      } else {
        ring.classList.remove('on-dark');
      }
    });

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown, { passive: true });
    window.addEventListener('mouseup', onMouseUp, { passive: true });

    // Cleanup on page hide
    window.addEventListener('pagehide', () => {
      if (rafId) cancelAnimationFrame(rafId);
    });

    // Start animation immediately so the ring is visible at load
    animate();
  }

  // Initialize all interactive features
  function init() {
    initNavbarScroll();
    // Parallax is disabled by default - can be enabled if needed
    // initParallax();
    initCursorRing();
    
    console.log('NCIM site initialized with interactive features');
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

