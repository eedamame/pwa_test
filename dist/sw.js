importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3b10f0a4a28885f7781d.js",
    "revision": "808e522d15f78cb8ff7078fe3134f3b6"
  },
  {
    "url": "/_nuxt/79d760be3ee3db459fc3.js",
    "revision": "69b2a971837cd937259ef9a5028aebfa"
  },
  {
    "url": "/_nuxt/a05f6df0c402684eae1b.js",
    "revision": "44a80d37f24838fcb67204e34dd4f7e0"
  },
  {
    "url": "/_nuxt/abbb101c0f8ba5f9e60d.js",
    "revision": "822d8ddbe2a28813dbac88d12f76f079"
  }
], {
  "cacheId": "pwa_test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
