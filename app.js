let usersc=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const score=document.querySelector("#user-score");
const comso=document.querySelector("#comp-score");
const rt=document.querySelector(".reset-cont");
const getcom= ()=>{
    const option =["rock","paper","scissors"];
    const ri=Math.floor(Math.random()*3);
    return option[ri];
};
const matchdraw=()=>{
    msg.innerText="Match is Draw";
    msg.style.backgroundColor="black";
}
const play=(userchoice)=>{
        console.log("user choice:",userchoice);
        const compc=getcom();
        console.log("cpmputer choice:",compc);
        if(compc===userchoice){
           matchdraw();
        }
        else{
            userwin=true;
            if(userchoice==="paper"){
                userwin=compc==="scissors"?false:true;
            }
            else if(userchoice==="rock"){
                userwin=compc==="paper"?false:true;
            }
            else{
                userwin=compc==="rock"?false: true;
            }
            userwinshow(userwin);
        }
       
};
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        rt.classList.remove("hide");
        const userchoice=choice.getAttribute("id");
        play(userchoice)
    })
});
var count =0;
var count1=0;
const userwinshow=(userwin)=>{
    if(userwin==true){
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
        count++;
        score.innerText=count;
    }
    else{
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
        count1++;
        comso.innerText=count1;
    }
}
rt.addEventListener("click",()=>{
    count=reset(count,count1);
    count1=reset(count,count1);
})
const reset=(count,count1)=>{
    if(count>0 || count1>0){
        comso.innerText=0;
        score.innerText=0;
        count=0;
        count1=0;
        msg.innerText="Play your move";
        msg.style.backgroundColor="rgb(29, 27, 27)";
        return count*count1;
    }
}