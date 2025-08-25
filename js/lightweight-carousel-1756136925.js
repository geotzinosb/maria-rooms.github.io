// Lightweight Carousel - Performance Optimized
class LightweightCarousel {
    constructor(container, options = {}) {
        this.container = container;
        this.currentSlide = 0;
        this.slides = container.querySelectorAll('.carousel-slide');
        this.totalSlides = this.slides.length;
        this.autoPlay = options.autoPlay !== false;
        this.autoPlayDelay = options.autoPlayDelay || 5000;
        this.autoPlayTimer = null;
        
        this.init();
    }
    
    init() {
        if (this.totalSlides <= 1) return;
        
        // Show first slide
        this.showSlide(0);
        
        // Auto-play
        if (this.autoPlay) {
            this.startAutoPlay();
        }
        
        // Touch/swipe support
        this.addTouchSupport();
    }
    
    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.style.opacity = '0';
        });
        
        // Show current slide
        this.currentSlide = index;
        this.slides[index].style.display = 'block';
        
        // Fade in effect
        setTimeout(() => {
            this.slides[index].style.opacity = '1';
        }, 10);
        
        // Update pagination
        this.updatePagination();
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.totalSlides;
        this.showSlide(next);
    }
    
    prevSlide() {
        const prev = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
        this.showSlide(prev);
    }
    
    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.showSlide(index);
        }
    }
    
    startAutoPlay() {
        this.autoPlayTimer = setInterval(() => {
            this.nextSlide();
        }, this.autoPlayDelay);
    }
    
    stopAutoPlay() {
        if (this.autoPlayTimer) {
            clearInterval(this.autoPlayTimer);
            this.autoPlayTimer = null;
        }
    }
    
    updatePagination() {
        const pagination = this.container.querySelector('.carousel-pagination');
        if (pagination) {
            const dots = pagination.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentSlide);
            });
        }
    }
    
    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        
        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            this.stopAutoPlay();
        });
        
        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
            
            if (this.autoPlay) {
                this.startAutoPlay();
            }
        });
        
        // Add navigation button support
        const prevBtn = this.container.querySelector('.carousel-prev');
        const nextBtn = this.container.querySelector('.carousel-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
                if (this.autoPlay) {
                    this.stopAutoPlay();
                    this.startAutoPlay();
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
                if (this.autoPlay) {
                    this.stopAutoPlay();
                    this.startAutoPlay();
                }
            });
        }
        
        // Add pagination dot support
        const dots = this.container.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                if (this.autoPlay) {
                    this.stopAutoPlay();
                    this.startAutoPlay();
                }
            });
        });
    }
}

// Initialize carousels when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Hero carousel
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        new LightweightCarousel(heroCarousel, {
            autoPlay: true,
            autoPlayDelay: 4000
        });
    }
    
    // Thumbnail carousel
    const thumbnailCarousel = document.querySelector('.thumbnail-carousel');
    if (thumbnailCarousel) {
        new LightweightCarousel(thumbnailCarousel, {
            autoPlay: false
        });
    }
});
