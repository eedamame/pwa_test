importScripts('/pwa_test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa_test/_nuxt/34a5473f1f1c1ff883f7.js",
    "revision": "caf2b4274884d9982ac463e1f63782c7"
  },
  {
    "url": "/pwa_test/_nuxt/47fad98ccae235574044.js",
    "revision": "336f0c55058affe63e8a1e8799fb83db"
  },
  {
    "url": "/pwa_test/_nuxt/a05f6df0c402684eae1b.js",
    "revision": "44a80d37f24838fcb67204e34dd4f7e0"
  },
  {
    "url": "/pwa_test/_nuxt/abbb101c0f8ba5f9e60d.js",
    "revision": "822d8ddbe2a28813dbac88d12f76f079"
  }
], {
  "cacheId": "pwa_test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/pwa_test/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/pwa_test/.*'), workbox.strategies.networkFirst({}), 'GET')
