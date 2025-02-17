let choices=["rock","paper","scissor"];
const disp=document.getElementById("disp");
const disc=document.getElementById("disco");
const disr=document.getElementById("disres");
const pscore=document.getElementById("pscore");
const cscore=document.getElementById("cscore");
const gr=document.getElementById("gr");
let ps=0;
let cs=0;
function playgame(choice){
    const comc=choices[Math.floor(Math.random()*3)];
    let result="";
    if(choice===comc){
        result="It's an TIE";
    }
    else{
        switch(choice){
            case "paper":
                result=(comc==="rock")? "You Win!":"You Lost";
                break;
            case "rock":
                result=(comc==="scissor")? "You Win!":"You Lost";
                break;
            case "scissor":
                result=(comc==="paper")? "You Win!":"You Lost";
                break;
        }
    }
    disp.textContent=`Player Choice: ${choice}`;
    disc.textContent=`Computer Choice: ${comc}`;
    disr.textContent=result;
    disr.classList.remove("greentext","redtext","bluetext");
    switch(result){
        case "You Win!":
            disr.classList.add("greentext");
            ps++;
            pscore.textContent=ps;
            break;
        case "You Lost":
            disr.classList.add("redtext");
            cs++;
            cscore.textContent=cs;
            break;
        case "It's an TIE":
            disr.classList.add("bluetext");
            break;
    }
}
function finres(){
    if (ps>cs){
        gr.textContent=`Player Won the Game`;
    } 
    else if (cs>ps){
        gr.textContent=`Computer Won the Game`;
    } 
    else{
        gr.textContent=`It's an Tie Game`;
    }
}