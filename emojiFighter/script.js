let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById('stage-el');

let playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click',function(){
    let fighter1 = randomFighter();
    let fighter2 = randomFighter();
    
    stageEl.textContent= `${fighter1} vs ${fighter2}`;
})

const randomFighter = () => {
    return fighters[Math.floor(fighters.length * Math.random())];     
}