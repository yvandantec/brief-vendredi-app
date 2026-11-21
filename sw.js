/* Carte Blanche : cache de l'app pour un usage hors ligne. Les données (api.github.com) ne passent pas par ce cache. */
const CACHE = "brief-app-v7";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/cb2-icon-192.png", "icons/cb2-icon-512.png", "icons/cb2-icon-maskable-192.png", "icons/cb2-icon-maskable-512.png", "icons/cb2-icon-monochrome-192.png", "icons/cb2-apple-touch-icon.png", "icons/cb2-favicon-light-32.png", "icons/cb2-favicon-dark-32.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((r) => { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("index.html")))
  );
});
