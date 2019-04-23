let el= document.getElementById("calculate");
let initial;
let sum;
let total;
let result
el.addEventListener("click", calculate, false);
function calculate(initial=0){
    initial=document.getElementById("initialSum").value;
    sum=document.getElementById("savingSum").value;
    total=document.getElementById("endSum").value
    document.getElementById("week").checked?result=Math.ceil((total-initial)/sum):result=(Math.ceil((total-initial)/sum))*4;
    if (result<4){ 
        return document.getElementById("result").innerHTML="it will take you "+result+" weeks";}
    else if (result>=4){
        return document.getElementById("result").innerHTML="it will take you "+(result/4)+" months";}
}