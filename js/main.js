// wireframe.js
// Script for generating wireframe items and functionality

document.addEventListener('DOMContentLoaded', function() {
    // Generate all wireframe items
    generateWireframeItems();
    
    // Add any additional interactive functionality here
});

function generateWireframeItems() {
    const container = document.querySelector('.wireframe-container');
    
    if (!container) return;
    
    const header = container.querySelector('.wireframe-header');
    const footer = container.querySelector('.wireframe-footer');
    
    // Remove any placeholder items if they exist
    const placeholders = container.querySelectorAll('.wireframe-item[aria-label^="Item"]');
    placeholders.forEach(el => el.remove());
    
    // Generate all 584 items
    for (let i = 1; i <= 584; i++) {
        const item = document.createElement('div');
        item.className = 'wireframe-item';
        item.setAttribute('role', 'article');
        item.setAttribute('aria-label', `Item ${i}`);
        item.textContent = i;
        
        // Add click event for demonstration
        item.addEventListener('click', function() {
            console.log(`Item ${i} clicked`);
            // You could add visual feedback or other interactions here
        });
        
        // Insert before footer
        container.insertBefore(item, footer);
    }
    
    // Optional: Add keyboard navigation
    setupKeyboardNavigation();
}

function setupKeyboardNavigation() {
    // This would add keyboard navigation between items
    const items = document.querySelectorAll('.wireframe-item');
    
    items.forEach((item, index) => {
        item.setAttribute('tabindex', '0');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
                e.preventDefault();
            }
            
            // Arrow key navigation
            if (e.key === 'ArrowRight') {
                const nextItem = items[index + 1];
                if (nextItem) nextItem.focus();
            }
            
            if (e.key === 'ArrowLeft') {
                const prevItem = items[index - 1];
                if (prevItem) prevItem.focus();
            }
            
            if (e.key === 'ArrowDown') {
                // This would need more complex logic for grid navigation
                const nextRowItem = items[index + Math.floor(items.length / 10)];
                if (nextRowItem) nextRowItem.focus();
            }
            
            if (e.key === 'ArrowUp') {
                const prevRowItem = items[index - Math.floor(items.length / 10)];
                if (prevRowItem) prevRowItem.focus();
            }
        });
    });
}