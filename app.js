let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]

let level = 0;
let started = false;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false)
    {
        console.log("A");
        started = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 200);
    
}

function userFlash(btn) {
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    }, 200);
    
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameFlash(randBtn);
}

function btnPress() {
    let btn = this;
    userFlash(btn);    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}
