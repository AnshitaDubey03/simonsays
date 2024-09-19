let gameSeq=[];
let userSeq=[];
let btns=['yellow','green','purple','red'];
let started=false;
let level=0;
let h2=document.querySelector('h2');
let scores=[];
let h3=document.querySelector('h3');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
    
    levelUP();
    }
    
    
    
});
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },200);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(function(){
        btn.classList.remove('userFlash');
    },200);
}

function levelUP(){
    level++;
    userSeq=[];
    h2.innerText=`level ${level} `; 
    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
    
};

function checkAns(idx){
   
    if( userSeq[idx]===gameSeq[idx]){
   
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUP,1000);
            scores.push(level);
            console.log(scores);
        }
    }else{
        h2.innerHTML=`Game over!<b> your score is ${level} <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';

        },200);
        max();

        reset();
    }


}

function btnPress(){
    let btn=this;
    userFlash(btn);
    let userColor=btn.getAttribute('id');
   
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}; 
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
};

function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    
    level=0;
    
};

function max(){
    let max=0;
    for(score of scores){
        if(score>max){
            max=score;
        };
    };
    h3.innerText=`MAXIMUM SCORE ${max}`;
    


};

