//hiding notify
document.getElementById("notifyRight").style.display = "none";
document.getElementById("notifyWrong").style.display = "none";
document.getElementById('action-left').innerHTML = "3  try left";

//random side
document.getElementById("randomClick").addEventListener("click", function () {

    let number = Math.random() * 10000;
    let finalValue = Math.round(number);
    if (finalValue < 1000) {
        finalValue = finalValue + 1000;
    }

    document.getElementById("randomDisplay").value = finalValue;
})
// calculator Side.

// Display your number
function callNumber(Id, num ) {

    document.getElementById(Id).addEventListener("click", function () {
        document.getElementById("displayNumber").value+= num;
    })
}
callNumber("call1", "1");
callNumber("call2", "2");
callNumber("call3", "3");
callNumber("call4", "4");
callNumber("call5", "5");
callNumber("call6", "6");
callNumber("call7", "7");
callNumber("call8", "8");
callNumber("call9", "9");
callNumber("call0", "0");


//  matching Part
let checkNumber = document.getElementById("submitButton").addEventListener("click",function(){

let calcInput = document.getElementById("displayNumber").value; 
let randomInput = document.getElementById("randomDisplay").value;
let tryWarning = document.getElementById('action-left').textContent; 
let tryLeft = parseInt(tryWarning);
    if( tryWarning == 'Sorry you have tried 3 times. Please Try again later.' ){
        document.getElementById("notifyWrong").style.display = "none";
        document.getElementById("notifyRight").style.display = "none";
    }
    else if (calcInput != '' && calcInput == randomInput){

        document.getElementById("notifyRight").style.display = "block";
        document.getElementById("notifyWrong").style.display = "none";
        document.getElementById('action-left').style.display = "none";
    }
    else{
    
        document.getElementById("notifyWrong").style.display = "block";
        document.getElementById("notifyRight").style.display = "none";
        if(tryLeft === 3){
            tryWarning = document.getElementById('action-left').innerText = '2 try left';
        }else if(tryLeft === 2 ){
            tryWarning = document.getElementById('action-left').innerText = '1 try left';
        }else if(tryLeft === 1){
            tryWarning = document.getElementById('action-left').innerText = 'Sorry you have tried 3 times. Please Try again later.';
        }
    }
    
      
})
// clear last item


document.getElementById("clearLastOne").addEventListener("click",function () {
        "use strict";
        var a = document.getElementById("displayNumber"),
            b = a.value;
        a.value = b.substring(0, b.length - 1);
    });


// clear all
document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("displayNumber").value ="";
})




