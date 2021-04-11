var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPut = document.querySelector("#output");

//outPut.innerText = "thiru is good!"

function clickEventHandler() { 
    console.log("clicked");
    console.log("input : " ,txtInput.value);
    console.log("isisisisi", txtInput.innerText);
    outPut.innerText = "Google it you lazy goose :"+ txtInput.value;
}

btnTranslate.addEventListener("click", clickEventHandler );