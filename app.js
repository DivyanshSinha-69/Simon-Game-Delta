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
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

function checkAns() {
    let idx = level-1;

    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length)
        {
            setTimeout(function() {
                levelUp();
            }, 1000);
        }
    }
    else
    {
        h2.innerText = `Game Over! Press any key to start.`;
        let body = document.querySelector("body");
        body.classList.add("Game-Over");
        setTimeout(function() {
            body.classList.remove("Game-Over")
        }, 1000);
        
        level=0;
        gameSeq = [];
        userSeq = [];
        started = false;
    }
}

function btnPress() {
    let btn = this;
    userSeq.push(this.id);
    console.log(userSeq);
    userFlash(btn);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click", btnPress);
}
