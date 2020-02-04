const staticMonsterMatch = "monster-match-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/monster1.png",
  "/images/monster2.png",
  "/images/monster3.png",
  "/images/monster4.png"
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticMonsterMatch).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});