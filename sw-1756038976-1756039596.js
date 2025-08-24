// Service Worker for Maria Rooms - AGGRESSIVE CACHE CLEARING
const CACHE_NAME = 'maria-rooms-production-' + Date.now();
const OLD_CACHES = [
    'maria-rooms-v2-dev',
    'maria-rooms-v3-prod',
    'maria-rooms-v4-prod',
    'maria-rooms-carousel-fix-v5',
    'maria-rooms-production',
    'maria-rooms-staging',
    'maria-rooms-dev'
];
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/main.min.js',
  '/js/swiper.js',
  '/images/logo.svg',
  '/images/favicon.svg',
  '/images/logo-white.svg',
  '/images/carousel/1.jpg',
  '/images/carousel/2.jpg',
  '/images/carousel/3.jpg',
  '/images/carousel/4.jpg',
  '/images/carousel/5.jpg',
  '/images/carousel/6.jpg',
  '/images/carousel/7.jpg',
  '/images/carousel/8.jpg',
  '/images/carousel/9.jpg',
  '/images/carousel/10.jpg',
  '/images/carousel/11.jpg',
  '/images/carousel/12.jpg',
  '/images/apartment-1.jpg',
  '/images/apartment-2.jpg',
  '/images/apartment-3.jpg',
  '/images/apartment-4.jpg',
  '/images/apartment-5.jpg',
  '/images/apartment-6.jpg',
  '/manifest.json'
];

// Development mode detection
const isDevelopment = self.location.hostname === 'localhost' || self.location.hostname === '127.0.0.1';
const currentPort = self.location.port;

// Skip waiting to activate immediately
self.addEventListener('install', event => {
  console.log('Service Worker installing with AGGRESSIVE cache clearing...');
  self.skipWaiting(); // Force activation
  event.waitUntil(
    Promise.all([
      // Clear ALL caches first (nuclear option)
      caches.keys().then(cacheNames => {
        console.log('Clearing ALL existing caches:', cacheNames);
        return Promise.all(
          cacheNames.map(cacheName => {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }),
      // Clear any cache that starts with our app name
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName.startsWith('maria-rooms') && cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Then create new cache
      caches.open(CACHE_NAME)
        .then(cache => {
          console.log('Opened new cache:', CACHE_NAME);
          return cache.addAll(urlsToCache);
        })
        .catch(error => {
          console.error('Cache installation failed:', error);
        })
    ])
  );
});

// Force unregister old service workers
self.addEventListener('activate', event => {
  console.log('Service Worker activating - clearing all old caches...');
  event.waitUntil(
    Promise.all([
      // Clear all caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache on activate:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control of all clients immediately
      self.clients.claim()
    ])
  );
});

// Production-optimized fetch strategy
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);
  
  // Skip caching for external requests and non-GET requests
  if (requestUrl.origin !== self.location.origin || event.request.method !== 'GET') {
    return;
  }
  
  // Skip caching for Hugo's live reload and development requests
  if (event.request.url.includes('livereload') || 
      event.request.url.includes('_framework') ||
      event.request.url.includes('hot-reload') ||
      event.request.url.includes('localhost:1313') || // Skip requests to different ports
      (requestUrl.hostname === 'localhost' && requestUrl.port !== currentPort)) { // Skip cross-port requests
    return;
  }

  // In development mode, always try network first
  if (isDevelopment) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // If network request is successful, update cache
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseClone);
            }).catch(error => {
              console.log('Cache update failed:', error);
            });
          }
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request);
        })
    );
  } else {
    // Production mode - optimized caching strategy
    const isStaticAsset = requestUrl.pathname.match(/\.(css|js|jpg|jpeg|png|svg|gif|webp|woff|woff2)$/i);
    
    if (isStaticAsset) {
      // Cache first for static assets (images, CSS, JS)
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            return fetch(event.request).then(response => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, responseClone);
                });
              }
              return response;
            });
          })
      );
    } else {
      // Network first for HTML pages with cache fallback
      event.respondWith(
        fetch(event.request)
          .then(response => {
            if (response.status === 200) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseClone);
              });
            }
            return response;
          })
          .catch(() => {
            return caches.match(event.request);
          })
      );
    }
  }
});

// Clear all old caches on activation
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Take control of all clients immediately
      return self.clients.claim();
    }).catch(error => {
      console.log('Service Worker activation failed:', error);
    })
  );
});
