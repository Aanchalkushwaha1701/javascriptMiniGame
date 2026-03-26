let body=document.querySelector("body");
let h2=document.querySelector("h2");
let userseq=[];
let gameseq=[];
let highestscore=0;
//let btn=document.querySelectorAll(".btn");
let isStarted=false;
let level=0;
let btns=["red","yellow","green","purple"];
body.addEventListener("keypress",function(){
    if(isStarted==false){
    
     levelup();
    isStarted=true;
    }
 
})
function levelup(){
    userseq=[];
level++;
h2.innerHTML=`level ${level}`;
    let idx=Math.floor(Math.random()*3);
    let randomcolor=btns[idx];
    let randbtn=document.querySelector(`.${randomcolor}`);
    //console.log(randomcolor);
    gameseq.push(randomcolor);
   // console.log(gameseq);
btnflash(randbtn);

}
function btnflash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}
function checkans(idx){
    //console.log(`current level:${level}`)
    //let idx=level-1;
    if(userseq[idx]==gameseq[idx]){
        //console.log("game save");
        if(userseq.length==gameseq.length){
           // console.log("correct");
            setTimeout(levelup,1000);
        }
    }
    else{
         h2.innerHTML=`Game over!Your score is:<b>${level}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundImage="url('gamered.jpeg')";
        setTimeout(function(){
             document.querySelector("body").style.backgroundImage="url('game.jpg')";
        },150);
      let h3=document.createElement("h2");
      h3.classList.add("head3");
      highestscore=Math.max(highestscore,level);
      h3.innerText=`Your highest score was:${highestscore}`;
      h2.appendChild(h3);
       reset();
       
    }
}
function reset(){
    isStarted=false;
    userseq=[];
    gameseq=[];
    level=0;
}
function btnpress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}