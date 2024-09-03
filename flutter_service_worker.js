'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8f42d10a625199b12c11e9f55920d8fd",
"version.json": "b80cf7ab62434289deedf34b04505dc1",
"index.html": "7dcc947e6ed0b5176cace935080e7c7d",
"/": "7dcc947e6ed0b5176cace935080e7c7d",
"main.dart.js": "7ff17b90084ea9f2218427dc95516777",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "290e4414066a06c088dc9311282043d4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "927ecf832db7dc65a08a13ee809093ba",
"assets/AssetManifest.json": "814ca46db8ba653ab24448057df9cd85",
"assets/NOTICES": "a2fe2c91afc4ecaccdcb372f577ec3a9",
"assets/FontManifest.json": "9f7e637a4af63a3b09af7a2b65d2523a",
"assets/AssetManifest.bin.json": "4400403211231d9da6e97771a6dc498f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d04bfd1c337cb64cfc96e3856860baa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a680013f289ccc19f4a98cd743616cc6",
"assets/fonts/MaterialIcons-Regular.otf": "66d10cfb799e3e0c8e8309f749773d94",
"assets/assets/images/support.png": "f3f15a95007354633f372c8eee9f1be4",
"assets/assets/images/update.png": "d429bc6ce581e4acddaec7be0832db4c",
"assets/assets/images/wallet.png": "36c96798b1b882501ef0ff5a67e06ee5",
"assets/assets/images/details.png": "ae779ec950922961c96c695144ac4b5e",
"assets/assets/images/authFooter.png": "afcc3339219ced7ec5a060db2e671e85",
"assets/assets/images/settings.png": "b0fc16e3b6d9609653975ef7e48f65b8",
"assets/assets/images/talk.png": "414d5d16bb91cab8256252ed7e3f936c",
"assets/assets/images/loteriasDiariasLogo.png": "290e4414066a06c088dc9311282043d4",
"assets/assets/images/empty.png": "0eda47fdb137e7cc180a1be41d8fc0fb",
"assets/assets/images/default_drawer_logo.png": "dac08c46c06f62bbe1332839ab6d36d5",
"assets/assets/images/banner2.png": "f3986c40b24c5d2e31e19e3ca4f37665",
"assets/assets/images/walletListIcon.png": "c84c752b2f09d48a8475b4d5013e176c",
"assets/assets/images/sorry_circular.png": "7ed4fecef55da7eecfd391207f27feb2",
"assets/assets/images/login_image.png": "6383675224fa7f2991c045fac0a4e1db",
"assets/assets/images/bike.png": "1ddaeaff9e5ca6eb75c872abc3c9bacd",
"assets/assets/images/banner1.jpg": "3943e766f4a404541cd6edc6896d5e8d",
"assets/assets/images/banner1.png": "6b5cbd1f7f9b1cb763635dfd3a24ba0c",
"assets/assets/images/cancel.png": "ca9ae452d23e8abb130e01dd0fa56792",
"assets/assets/images/logout.png": "cabf4f98c1c24536f5b53bce62bef603",
"assets/assets/images/deleteIcon.png": "fab5b45b39dcf5757dd3cb2a87a07bbd",
"assets/assets/images/cancelFilled.png": "5a1c91cb9983a96415813d318afe0464",
"assets/assets/images/hey.png": "cc0af86108c15a6effbfaafa83d6f86e",
"assets/assets/images/backgroud.png": "b1f60c4b7e89f5faa28badc94c9ef449",
"assets/assets/images/avatar.png": "4b1bb228bf826befdb5e9d530b8738fa",
"assets/assets/images/menu.png": "c52e8d9cf21689198cbc6e1245c2e8fd",
"assets/assets/images/back.svg": "2f4150ab1bfca86ec4c75ca4a307d458",
"assets/assets/images/your_gigs.png": "09577dfda26f44a94fe30858d4e80ff8",
"assets/assets/images/LD_Splash.gif": "3130dfadf77da7e18a6ebef53c1a08c8",
"assets/assets/images/car.png": "4317f446c95c02b2a0635f5f696a26e3",
"assets/assets/images/success_circular.png": "125eef9c8a4d333cf431b0088608da7a",
"assets/assets/images/infoIcon.png": "07569c0998e0b5a7fd0c57455b6c9cd4",
"assets/assets/images/noInternet.png": "a1dd598305094fb3354e8b70ead2d096",
"assets/assets/images/journeryTimeIconSmall.png": "ba3d162975db87e62349f9f6366fe994",
"assets/assets/images/recordNotFound.png": "6b97720de45b81befb005b604bdda69e",
"assets/assets/images/your_rides.png": "e904ef48f1f557f76bb926b680b40526",
"assets/assets/images/inputFieldTick.png": "e28690c0ce76e25a4a19f4fc161ca5f5",
"assets/assets/images/truck.png": "6e225a14b51b8df54eb1dc9dfc41c730",
"assets/assets/images/whatsapp.png": "33de2c3925e5243fc62d6e5ea684d034",
"assets/assets/images/menu.svg": "a52ab1ca995313b54b8a00cc0316bf59",
"assets/assets/images/back.png": "c6be97fc9745bdfa7c56968defbb09ee",
"assets/assets/images/bg.jpg": "680afb00653463a51e63670a40bea24a",
"assets/assets/files/catalog.json": "687bde59781d7e569cf65a9dcd3de766",
"assets/assets/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
