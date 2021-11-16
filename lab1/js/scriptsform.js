/*!
* Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
"use strict";
document.body.style.backgroundColor = "#FFF59E";
document.body.style.fontFamily = "Georgia";


document.body.style.fontSize = "110%";
document.getElementById("formimage").style.filter="grayscale(100%)";
let formbutton = document.getElementById("formbutton");
formbutton.onclick = CreateForm;
formbutton.className  = "btn btn-secondary";

let formtile = document.getElementById("formintro");

let formElements = document.getElementsByClassName("formcentered");
for(let i = 0; i< formElements.length;i++){
    formElements[i].style.padding = "0.95%";
}


function CreateForm(){
    let nickname = document.getElementById("nickname").value
    let email = document.getElementById("email").value
    let pick1 = document.getElementById("pick1").value
    let pick2 = document.getElementById("pick2").value
    let pick3 = document.getElementById("pick3").value
    let pick4 = document.getElementById("pick4").value
    let pick5 = document.getElementById("pick5").value

    document.getElementById("formsummaryid").style.visibility = "visible" ;
    document.getElementById("formbutton").style.visibility = "hidden";
    document.getElementById("campaignform").style.display = "none";
    document.getElementById("nicksummary").appendChild(document.createTextNode(": "+nickname))
    document.getElementById("emailsummary").appendChild(document.createTextNode(": "+email))
    document.getElementById("pick1summary").appendChild(document.createTextNode(": "+pick1))
    document.getElementById("pick2summary").appendChild(document.createTextNode(": "+pick2))
    document.getElementById("pick3summary").appendChild(document.createTextNode(": "+pick3))
    document.getElementById("pick4summary").appendChild(document.createTextNode(": "+pick4))
    document.getElementById("pick5summary").appendChild(document.createTextNode(": "+pick5))
    
    let formsummary=document.getElementById("formsummaryid");
    formsummary.style.border="3px solid black";
    formsummary.style.width="75%";
    formsummary.style.color="green";
    formsummary.style.opacity="70%";
    formsummary.style.textDecoration="underline";
    formsummary.style.textShadow="1px 1px blue";
    
    formsummary.addEventListener("mouseenter",mouseEnterControl);
}   

document.addEventListener("copy",copyFunction);
document.addEventListener("scroll", recolorImage);
window.addEventListener("resize",resizeControl);
window.addEventListener("dblclick",doubleClickControl);
document.addEventListener("offline",offlineControl);
document.getElementById("formimage").addEventListener("dragstart", imageDragControl);
document.getElementById("formimage").addEventListener("dragend", imageDragEndControl);
document.addEventListener("cut",cutControl);
document.getElementById("formbutton").addEventListener("contextmenu", contextMenuControl)
document.addEventListener("click",clickControl)
function copyFunction(){
    alert("Copying complete!");
}
function recolorImage(){
    document.getElementById("formimage").style.filter="grayscale(10%)";
    document.removeEventListener("scroll", recolorImage);
}
function resizeControl(){
    document.body.style.fontSize = "300%";
}
function offlineControl(){
    alert("You are offline now");
}
function doubleClickControl(){
    document.body.style.backgroundColor = "red";
}
function imageDragControl(){
    formbutton.className  = "btn btn-primary";
}
function imageDragEndControl(){
    formbutton.className  = "btn btn-secondary";
}
function cutControl(){
    alert("That hurt");
}
function contextMenuControl(){
    document.body.style.fontFamily = "Comic Sans MS";
}
function clickControl(){
    document.body.style.opacity="80%";
}
function mouseEnterControl(){
    document.getElementById("formsummaryid").style.backgroundColor = "lightblue";
}