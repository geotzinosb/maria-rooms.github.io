// Optimized main.js for Maria Rooms - Local version only
// This removes unused functions and optimizes critical paths

// Theme toggle functionality
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', `Switch to ${newTheme === 'light' ? 'dark' : 'light'} mode`);
        themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const html = document.documentElement;
    
    if (mobileMenu && mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        body.classList.add('mobile-menu-open');
        html.classList.add('mobile-menu-open');
    } else if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        body.classList.remove('mobile-menu-open');
        html.classList.remove('mobile-menu-open');
    }
}

// Close mobile menu
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;
    const html = document.documentElement;
    
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
        body.classList.remove('mobile-menu-open');
        html.classList.remove('mobile-menu-open');
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', `Switch to ${savedTheme === 'light' ? 'dark' : 'light'} mode`);
        themeToggle.innerHTML = savedTheme === 'light' ? '☀️' : '🌙';
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeSmoothScrolling();
    initializeLazyLoading();
    
    // Add event listeners
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (mobileMenu && mobileMenuToggle && !mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Local Performance:', {
                    'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart + 'ms',
                    'Load Complete': perfData.loadEventEnd - perfData.loadEventStart + 'ms',
                    'Total Load Time': perfData.loadEventEnd - perfData.fetchStart + 'ms'
                });
            }
        }, 0);
    });
}
