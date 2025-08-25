// Performance monitoring for Maria Rooms - Local version
class PerformanceMonitor {
    constructor() {
        this.metrics = {};
        this.init();
    }
    
    init() {
        this.observePerformance();
        this.observeResources();
        this.observeLayoutShifts();
    }
    
    observePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => this.captureMetrics(), 0);
            });
        }
    }
    
    captureMetrics() {
        const perfData = performance.getEntriesByType('navigation')[0];
        if (perfData) {
            this.metrics = {
                'DOM Content Loaded': perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                'Load Complete': perfData.loadEventEnd - perfData.loadEventStart,
                'Total Load Time': perfData.loadEventEnd - perfData.fetchStart,
                'First Paint': this.getFirstPaint(),
                'Largest Contentful Paint': this.getLCP()
            };
            
            console.log('Local Performance Metrics:', this.metrics);
        }
    }
    
    getFirstPaint() {
        const paintEntries = performance.getEntriesByType('paint');
        const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
        return firstPaint ? firstPaint.startTime : null;
    }
    
    getLCP() {
        if ('PerformanceObserver' in window) {
            return new Promise(resolve => {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    resolve(lastEntry.startTime);
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            });
        }
        return null;
    }
    
    observeResources() {
        if ('PerformanceObserver' in window) {
            const observer = new PerformanceObserver((list) => {
                list.getEntries().forEach(entry => {
                    if (entry.duration > 1000) {
                        console.warn('Slow resource:', entry.name, entry.duration + 'ms');
                    }
                });
            });
            observer.observe({ entryTypes: ['resource'] });
        }
    }
    
    observeLayoutShifts() {
        if ('PerformanceObserver' in window) {
            let clsValue = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                }
                if (clsValue > 0.1) {
                    console.warn('High CLS detected:', clsValue);
                }
            });
            observer.observe({ entryTypes: ['layout-shift'] });
        }
    }
}

// Initialize performance monitoring
new PerformanceMonitor();
