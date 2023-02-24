
const CACHE_NAME = 'version_1';
const urlToCache = [
    '/index.html',
    '/offline.html',
    '/assets/bg.jpg',
    '/assets/bottomPacks.png',
    '/assets/bottomPacks_1.png',
    '/assets/login_bg.jpg',
    '/assets/main_bg.jpg',
    '/assets/package1.png',
    '/assets/package2.png',
    '/assets/package3.png',
    '/assets/package4.png',
];

const self = this;

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')

                return cache.addAll(urlToCache)
            })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match('offline.html'))
            })
    )
})

self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)

    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map(name => {
                    if(!cacheWhiteList.includes(name)) {
                        return caches.delete(name)
                    }
                })
            ))
    )
})