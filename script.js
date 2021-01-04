let canvas = document.querySelector('#canvas');
let guess = document.querySelector('#guess');
let time = document.querySelector('#time');
let score = document.querySelector('#score');

function makebubbles() {
    for (i = 1; i < 37; i++) {
        let random = Math.floor(Math.random() * 10);
        canvas.innerHTML = canvas.innerHTML + '<div class="bubble">' + random + '</div>';
    }
}
makebubbles();

function GuessNumber() {
    let random2 = Math.floor(Math.random() * 10);
    guess.innerHTML = random2
}
GuessNumber();

let start = 60;

function timer() {
    if (start > 0) {
        start = start - 1;
    }
    else{
        canvas.innerHTML = '<h1> Game Over</h1>'
    }

console.log(start)
time.innerHTML = start;
}
setInterval(timer,100)
let points = 0;

canvas.addEventListener('click', function(event){
    // console.log(event.target.textContent);
    let clicked = event.target.textContent;

    if(clicked == guess.textContent){
        points = points + 10;
        score.innerHTML = points;
        GuessNumber()
        canvas.innerHTML = '';
        makebubbles()
    }
})