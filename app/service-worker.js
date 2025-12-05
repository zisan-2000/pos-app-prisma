self.addEventListener("install", () => {
  // Placeholder for offline caching strategy.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener("fetch", () => {
  // TODO: add offline-first routing for POS data.
});
