let Timer = 60;
let Score  = 0;


function increaseScore(){
    Score += 10;
    document.querySelector('#Scoreval').textContent = Score;
}






function getNewHit(){
    let rn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = rn;
}


function makeBubble(){
    let clutter = "";

for (let i = 0; i <= 75; i++) {
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
}
document.querySelector('#pbtm').innerHTML = clutter;
}


function runTimer(){
    let timerint = setInterval(function(){
        if(Timer>0){
            Timer--;
        document.querySelector("#Timerval").textContent = Timer;
        }
        else{
            clearInterval(timerint)
        }
    }, 1000);
}




runTimer()
makeBubble()
getNewHit()
