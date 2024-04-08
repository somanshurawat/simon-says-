let gameSeq =[];
let userSeq =[];
let color =["yellow","red","green","purple"];

let start = false;
let level = 0;
let h5 = document.querySelector("h5");

document.addEventListener("keypress",()=>{
    if(start == false){
        start = true;
        console.log("game Started");
    }
    levelup();
});

function levelup(){
    userSeq=[];
    level++;
    h5.innerHTML=`Level ${level} <br>your current score is ${level-1}`; 
    let ranNum = Math.floor(Math.random()*3);
    let ranColor = color[ranNum];
    let sel = document.querySelector(`.${ranColor}`);
    btnFlash(sel);
    let gameColor=gameSeq.push(ranColor);
    console.log(ranColor);
}

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },200);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelup,1000);
        }
    }else{
        h5.innerText = `Game over ! press any key to start`;
        reset();
    }
}

function btnPress(){
    console.log("button was pressed");
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkAns(userSeq.length-1);
}

let btn = document.querySelectorAll(".btn");
for(btns of btn){
    btns.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    userSeq=[];
    gameSeq=[];
    level = 0;
}