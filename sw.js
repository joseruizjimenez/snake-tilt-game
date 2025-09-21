self.addEventListener("install", e=>{
  e.waitUntil(
    caches.open("snake-tilt-v1").then(c=>c.addAll([
      "./index.html","./manifest.json","./sw.js"
    ]))
  );
});
self.addEventListener("fetch", e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});
