let stopLightElement = document.getElementById("stopLight");
let readyLightElement = document.getElementById("readyLight");
let goLightElement = document.getElementById("goLight");
let redButtonElement = document.getElementById("stopButton");
let yellowButtonElement = document.getElementById("readyButton");
let greenButtonElement = document.getElementById("goButton");

function stopButton() {
    stopLightElement.style.backgroundColor = "#cf1124";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#4b5069";
    redButtonElement.style.backgroundColor = "#cf1124";
    yellowButtonElement.style.backgroundColor = "#1f1d41";
    greenButtonElement.style.backgroundColor = "#1f1d41";
}

function readyButton() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#f7c948";
    goLightElement.style.backgroundColor = "#4b5069";
    redButtonElement.style.backgroundColor = "#1f1d41";
    yellowButtonElement.style.backgroundColor = "#f7c948";
    greenButtonElement.style.backgroundColor = "#1f1d41";
}

function goButton() {
    stopLightElement.style.backgroundColor = "#4b5069";
    readyLightElement.style.backgroundColor = "#4b5069";
    goLightElement.style.backgroundColor = "#199473";
    redButtonElement.style.backgroundColor = "#1f1d41";
    yellowButtonElement.style.backgroundColor = "#1f1d41";
    greenButtonElement.style.backgroundColor = "#199473";


}