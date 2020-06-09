self.addEventListener('install',(e)=>{
    console.log('Service Worker Installed',e)
    e.waitUntil(caches.open('Static')
    .then((cache)=>{
        cache.addAll([
            '/',
            '/App.js',
            '/index.html',
            '/undraw_yoga_248n.svg'
        ])
    }))
});

self.addEventListener('activate',(e)=>{
    console.log('Service Worker Activated',e);

});

self.addEventListener('fetch',(e)=>{
    e.respondWith(
        fetch(e.request)
        .catch((err)=>{
            console.log('could not fetch items',err)
            return caches.match(e.request)
        })
    )
});