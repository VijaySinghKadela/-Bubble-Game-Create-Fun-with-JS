let Timer = 60;
let Score  = 0;
let hitrn = 0;

function increaseScore(){
    Score += 10;
    document.querySelector('#Scoreval').textContent = Score;
}






function getNewHit(){
    let hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
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
            document.querySelector('#pbtm').innerHTML = "";
        }
    }, 1000);
}


document.querySelector('#pbtm')
.addEventListener("click",function(dets){
    let Clickednum = Number(dets.target.textContent)
    if(Clickednum === hitrn){
        increaseScore()
        makeBubble()
        getNewHit()
    }
})


runTimer()
makeBubble()
getNewHit()
