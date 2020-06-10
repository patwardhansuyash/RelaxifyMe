self.addEventListener('install',(e)=>{
    console.log('Service Worker Installed',e)
    e.waitUntil(caches.open('Static')
    .then((cache)=>{
        cache.addAll([
            '/',
            '/index.html',
            '/App.js',
            '/style.css',
            '/sounds/background.mp3',
            '/sounds/inhale.mp3',
            '/sounds/exhale.mp3',
            '/sounds/hold.mp3'
            
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