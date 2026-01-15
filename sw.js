const CACHE_NAME = 'nexuslist-v2';
const ASSETS_TO_CACHE = [
  '/nexuslist/',
  '/nexuslist/index.html',
  '/nexuslist/nexuslist-icon.png',
  '/nexuslist/nexuslist-icon-192.png',
  '/nexuslist/manifest.json'
];

// Install Event: Cache the essential files
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event: Cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch Event: Network-first strategy
// This ensures the app works offline but prioritizes real-time updates when online.
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
