/**
 * Expand View - Interactive Card Expansion
 * Handles click events for expandable cards in the expand-view container
 */
(function() {
  'use strict';

  function initExpandView() {
    const expandView = document.querySelector('.expand-view');
    if (!expandView) return;

    const cards = expandView.querySelectorAll('.main-card');
    
    cards.forEach(card => {
      card.addEventListener('click', function() {
        // Remove active class from all cards
        cards.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked card
        this.classList.add('active');
        
        // Update height classes for visual effect
        // The active card should expand to full height
        // All collapsed cards should have the same height
        cards.forEach((c) => {
          if (c === this) {
            // Active card - expand to full height
            c.classList.remove('hp-collapsed', 'hp-75', 'hp-85', 'hp-90', 'hp-95');
            c.classList.add('hp-100');
          } else {
            // Collapsed cards - all same height
            c.classList.remove('hp-100', 'hp-75', 'hp-85', 'hp-90', 'hp-95');
            c.classList.add('hp-collapsed');
          }
        });
      });
    });

    // Set first card as active by default
    if (cards.length > 0) {
      cards[0].classList.add('active');
      cards[0].classList.add('hp-100');
      cards[0].classList.remove('hp-collapsed', 'hp-95', 'hp-90', 'hp-85', 'hp-75');
      
      // Set all other cards to collapsed state
      for (let i = 1; i < cards.length; i++) {
        cards[i].classList.remove('hp-100', 'hp-95', 'hp-90', 'hp-85', 'hp-75');
        cards[i].classList.add('hp-collapsed');
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExpandView);
  } else {
    initExpandView();
  }
})();

