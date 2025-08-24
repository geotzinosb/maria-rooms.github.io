// Service Worker for Maria Rooms - Version 2.0 with proper cache management
const CACHE_VERSION = 'v2.0.0';
const CACHE_NAME = `maria-rooms-${CACHE_VERSION}`;
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

// Skip waiting to activate immediately
self.addEventListener('install', event => {
  console.log(`Service Worker installing with version ${CACHE_VERSION}...`);
  self.skipWaiting(); // Force activation
  
  event.waitUntil(
    Promise.all([
      // Clear ALL old caches first
      caches.keys().then(cacheNames => {
        console.log('Clearing old caches:', cacheNames);
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Create new cache
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

// Force activation and clear old caches
self.addEventListener('activate', event => {
  console.log(`Service Worker activating version ${CACHE_VERSION}...`);
  
  event.waitUntil(
    Promise.all([
      // Clear all old caches
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
    ]).then(() => {
      console.log('Service Worker activated successfully');
      // Force refresh all clients to get new content
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'FORCE_REFRESH' });
        });
      });
    }).catch(error => {
      console.log('Service Worker activation failed:', error);
    })
  );
});

// Handle fetch requests
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
      event.request.url.includes('localhost:1313') ||
      event.request.url.includes('localhost:1314')) {
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
    // Production mode - Network first for HTML, cache first for assets
    const isStaticAsset = requestUrl.pathname.match(/\.(css|js|jpg|jpeg|png|svg|gif|webp|woff|woff2)$/i);
    
    if (isStaticAsset) {
      // Cache first for static assets (images, CSS, JS)
      event.respondWith(
        caches.match(event.request)
          .then(response => {
            if (response) {
              // Return cached version but also update in background
              fetch(event.request).then(fetchResponse => {
                if (fetchResponse.status === 200) {
                  const responseClone = fetchResponse.clone();
                  caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseClone);
                  });
                }
              });
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

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  }
});
