importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2a537e71713a677826fb.js",
    "revision": "f7a3a73bbcce617a0cc5a5aca6cca876"
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
    "url": "/_nuxt/ceea056b6864435ba7f8.js",
    "revision": "e2bf4018132037e87fb6c8673094481d"
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
