
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').then(()=>{
        console.log('Service Worker Registerd')
    })
}

if('caches' in window){
    caches.open('relax-data').then((cachex)=>{
        cachex.addAll([
            '/undraw_yoga_248n.svg',
            '/sounds/background.mp3',
            '/sounds/inhale.mp3',
            '/sounds/exhale.mp3',
            '/sounds/hold.mp3'  
        ])
    })
}

document.getElementById('btn').addEventListener('click',(e)=>{
    e.target.style.backgroundColor="#019031";
    document.body.classList.toggle('bodygreen')
    if(e.target.innerText==='Start'){
        document.getElementById('pseudox').classList.add('pseudoactive')
        document.getElementById('background').play();
        setTimeout(()=>{document.getElementById('quote').style.visibility="visible";}, 1000);

    function NameChange(){
        setTimeout(()=>{document.getElementById('message').innerText="Inhale ..";}, 4500);
        setTimeout(()=>{document.getElementById('inhale').play()}, 4500);
        setTimeout(()=>{document.getElementById('heart').className='in'}, 4500);
        setTimeout(()=>{document.getElementById('hold').play()}, 9500);
        setTimeout(()=>{document.getElementById('message').innerText="Hold!";}, 9500);
        setTimeout(()=>{document.getElementById('exhale').play()}, 15000);
        setTimeout(()=>{document.getElementById('message').innerText="Exhale..";}, 15000);
        setTimeout(()=>{document.getElementById('heart').className='out'}, 15000);
        
    
    }
    
    NameChange();
    
    setInterval(()=>NameChange(),21000) 
    e.target.innerText='Stop'
    }
    else{
        window.location.reload()

    }

})