
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(()=>{
        console.log('Service Worker Registerd')
    })
}

if('caches' in window){
    caches.open('data').then((cachex)=>{
        cachex.addAll([
            '/index.html',
            '/undraw_yoga_248n.svg',
            '/app.js'
        ])
    })
}



document.getElementById('btn').addEventListener('click',(e)=>{
    if(e.target.innerText==='Start'){
        document.getElementById('pseudox').classList.add('pseudoactive')

    function NameChange(){
        setTimeout(()=>{document.getElementById('message').innerText="Breath In ..";}, 2500);
        setTimeout(()=>{document.getElementById('heart').className='in'}, 2000);
        setTimeout(()=>{document.getElementById('message').innerText="Hold !";}, 6000);
        setTimeout(()=>{document.getElementById('message').innerText="Breath out ..";}, 9000);
        setTimeout(()=>{document.getElementById('heart').className='out'}, 9000);
        
    
    }
    
    NameChange();
    
    setInterval(()=>NameChange(),13000) 
    e.target.innerText='Stop'
    }
    else{
        window.location.reload()

    }

})