// Image optimization for Maria Rooms - Local version
class ImageOptimizer {
    constructor() {
        this.observer = null;
        this.init();
    }
    
    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { rootMargin: '50px' }
            );
            
            this.observeImages();
        } else {
            this.loadAllImages();
        }
    }
    
    observeImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.observer.observe(img));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                this.loadImage(entry.target);
                this.observer.unobserve(entry.target);
            }
        });
    }
    
    loadImage(img) {
        const src = img.dataset.src;
        if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
        }
    }
    
    loadAllImages() {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => this.loadImage(img));
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ImageOptimizer());
} else {
    new ImageOptimizer();
}
