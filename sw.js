importScripts('/pwa_test/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa_test/_nuxt/47fad98ccae235574044.js",
    "revision": "336f0c55058affe63e8a1e8799fb83db"
  },
  {
    "url": "/pwa_test/_nuxt/a05f6df0c402684eae1b.js",
    "revision": "44a80d37f24838fcb67204e34dd4f7e0"
  },
  {
    "url": "/pwa_test/_nuxt/bf81a42352c9e38430dd.js",
    "revision": "9d07a7ae2cb1861620a96e998d811b2a"
  },
  {
    "url": "/pwa_test/_nuxt/f6bdc6370c3736e5d115.js",
    "revision": "e0071fdd3391040b0769fc8c15d3d33a"
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
