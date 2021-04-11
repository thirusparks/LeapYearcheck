var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPut = document.querySelector("#output");
//var clear = document.querySelector("#btn-clear");

//outPut.innerText = "thiru is good!"

function clickEventHandler() { 
    // console.log("clicked");
     console.log("input : " ,txtInput.value);
    // console.log("isisisisi", txtInput.innerText);
    // outPut.innerText = "Google it you lazy goose :"+ txtInput.value;
    if((txtInput.value)%4 == 0 ){
        outPut.innerText = "It's a leap year"
    }
    else{
        outPut.innerText = "It's a non-leap year"
    }

    
}

btnTranslate.addEventListener("click", clickEventHandler );

