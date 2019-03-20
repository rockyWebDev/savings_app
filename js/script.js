let el= document.getElementById("calculate");
let initial;
let sum;
let total;
let result
el.addEventListener("click", calculate, false);
function calculate(initial=0){
    initial=document.getElementById("initialSum").value;
    sum=document.getElementById("savingSum").value;
    total=document.getElementById("endSum").value;
    let time
    document.getElementById("week").checked?time="weeks":time="months";
    result=Math.ceil((total-initial)/sum);
    return document.getElementById("result").innerHTML="it will take you "+result+" "+time;
}