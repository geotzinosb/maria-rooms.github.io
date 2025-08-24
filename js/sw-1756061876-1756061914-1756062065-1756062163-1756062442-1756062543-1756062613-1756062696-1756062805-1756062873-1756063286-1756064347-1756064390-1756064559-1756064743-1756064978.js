// Service Worker for Maria Rooms - Performance Optimization
const CACHE_NAME = 'maria-rooms-v1';
const STATIC_CACHE = 'maria-rooms-static-v1';
const DYNAMIC_CACHE = 'maria-rooms-dynamic-v1';

// Files to cache immediately
const STATIC_FILES = [
  '/css/style.css',
  '/css/swiper.css',
  '/js/main.min.js',
  '/js/swiper.min.js',
  '/js/clear-cache.min.js',
  '/images/logo.svg',
  '/images/carousel/1.webp',
  '/images/carousel/2.webp',
  '/images/carousel/3.webp',
  '/images/carousel/4.webp',
  '/images/carousel/5.webp',
  '/images/carousel/6.webp',
  '/images/carousel/7.webp',
  '/images/carousel/8.webp',
  '/images/carousel/9.webp',
  '/images/carousel/10.webp',
  '/images/carousel/11.webp',
  '/images/carousel/12.webp'
];

// Install event - cache static files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .catch(error => {
        console.log('Error caching static files:', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Handle image requests with WebP support
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
    return;
  }

  // Handle CSS and JS requests
  if (request.destination === 'style' || request.destination === 'script') {
    event.respondWith(handleStaticRequest(request));
    return;
  }

  // Handle HTML requests
  if (request.destination === 'document') {
    event.respondWith(handleHTMLRequest(request));
    return;
  }
});

// Handle image requests with WebP support
async function handleImageRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    return new Response('Image not available', { status: 404 });
  }
}

// Handle static file requests
async function handleStaticRequest(request) {
  const cache = await caches.open(STATIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Static file fetch failed:', error);
    return new Response('File not available', { status: 404 });
  }
}

// Handle HTML requests
async function handleHTMLRequest(request) {
  const cache = await caches.open(DYNAMIC_CACHE);
  const cachedResponse = await cache.match(request);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('HTML fetch failed:', error);
    if (cachedResponse) {
      return cachedResponse;
    }
    return new Response('Page not available', { status: 404 });
  }
}

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  try {
    // Perform background sync tasks
    console.log('Background sync completed');
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/logo.svg',
      badge: '/images/logo.svg',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
