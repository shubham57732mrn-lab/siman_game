let gameseq = [];
let userSeq = [];


let elements = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

let pera = document.querySelector("p");

document.addEventListener("keypress",function() {
    if(started == false ) {
    console.log("game strted !!");
    started = true;

    levelup();
    }
})

function levelup(){ 
    userSeq = []; 
    level++; 
    pera.innerText = `level ${level}`; 

    let randindx = Math.floor(Math.random() * 4); 
    let randColor = elements[randindx]; 
    let randiv = document.querySelector(`.${randColor}`); 

    gameseq.push(randColor); 
    console.log(gameseq); 

    btnflash(randiv); 
}

function checkAns(idx){
    if (userSeq[idx] === gameseq[idx]) {
        if (userSeq.length == gameseq.length) {
            setTimeout(levelup, 200);
        }
    }else {
        pera.innerHTML = `Game over! Your score is <b> ${level} </b> <br>Press any key to start`;
        started = false;
        document.querySelector("body").style.backgroundColor = "red"
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white"
        },2000)
        reset();
    }
}

function btnflash(divs) {
    divs.classList.add("flash");
    setTimeout(function() {
        divs.classList.remove("flash")
    }, 100);     
}

function divpress() {
    console.log(this);
    let div = this;
    btnflash(this);
}



let allbtns = document.querySelectorAll(".inner");
    for(let btn of allbtns) {
        btn.addEventListener("click", function() {
         let userColor = btn.classList[0];
        userSeq.push(userColor);
        console.log(userSeq);

        checkAns(userSeq.length-1);
    });
}


function reset() {
    started = false;
    gameseq = [];
    userSeq =[];
    level = 0;
}