importScripts('/pwa_test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa_test/_nuxt/3b894cb35d66a119c3d9.js",
    "revision": "85744eda42f0fab59015056aae737787"
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
    "url": "/pwa_test/_nuxt/d9d4222f2a13df030318.js",
    "revision": "2340212a468d7f929f17fc602971d2ae"
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
