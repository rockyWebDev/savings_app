let el= document.getElementById("calculate");
let initial;
let sum;
let total;
let result;
el.addEventListener("click", calculate, false);
function calculate(initial=0){
    initial=document.getElementById("initialSum").value;
    sum=document.getElementById("savingSum").value;
    total=document.getElementById("endSum").value
    document.getElementById("week").checked?result=Math.ceil((total-initial)/sum):result=(Math.ceil((total-initial)/sum))*4;
    if (result>53&&result%53!=0&& (result%53)%4!=0){
        return document.getElementById("result").innerHTML="It will take you "+parseInt(result/53)+" years "+parseInt((result%53)/4)+" months and "+parseInt(((result%53)/4))%4+" weeks";}
    else if (result>53&&result%53!=0&& (result%53)<4){
        return document.getElementById("result").innerHTML="It will take you "+parseInt(result/53)+" years and"+(result%53)+" weeks";}
    else if (result>=53&&result%53==0){
        return document.getElementById("result").innerHTML="It will take you "+(result/53)+" years";}
    else if (result>=4 && result%4!=0){
        return document.getElementById("result").innerHTML="It will take you "+parseInt(result/4)+" months and "+(result%4)+" weeks";}
    else if (result>=4 && result%4==0){
        return document.getElementById("result").innerHTML="It will take you "+(result/4)+" months";}
    else if (result<4){ 
        return document.getElementById("result").innerHTML="It will take you "+result+" weeks";}
    
    }     
