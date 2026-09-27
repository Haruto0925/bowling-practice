/* ボウリング練習ノート Service Worker (v4)
   キャッシュは使わず、起動時に古いキャッシュと自分自身を削除する。
   これにより更新が必ず全端末に反映される。 */
const CACHE_PREFIX = "bowling-practice";

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k.startsWith(CACHE_PREFIX)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
  );
});

// すべてのリクエストをネットワークに素通し(キャッシュしない)
self.addEventListener("fetch", e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
