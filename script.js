function toggleMenu(){
var nav = document.querySelector("nav ul");

if(nav.style.display=="block"){
nav.style.display="none";
}else{
nav.style.display="block";
}
}

function toggleUPSC(){
var box = document.getElementById("upscBox");

if(box.style.display=="block"){
box.style.display="none";
}else{
box.style.display="block";
loadUPSC();
}
}

function toggleDegree(){
var box = document.getElementById("degreeBox");

if(box.style.display=="block"){
box.style.display="none";
}else{
box.style.display="block";
loadDegree();
}
}

function loadUPSC(){

fetch("https://script.google.com/macros/s/AKfycbwSYQVNy_5Re6Yil-U_pX3ZlXE47vXTrBaROvNXue4HTDEQKHPQeGeRyU6hR8MBf26Bww/exec")
.then(res => res.json())
.then(data => {

var html="";

data.forEach(function(n){
if(n.type=="UPSC"){
html += `<a href="${n.link}" target="_blank">${n.title}</a><br>`;
}
});

document.getElementById("upscBox").innerHTML=html;

});
}

function loadDegree(){

fetch("https://script.google.com/macros/s/AKfycbwSYQVNy_5Re6Yil-U_pX3ZlXE47vXTrBaROvNXue4HTDEQKHPQeGeRyU6hR8MBf26Bww/exec")
.then(res => res.json())
.then(data => {

var html="";

data.forEach(function(n){
if(n.type=="Degree"){
html += `<a href="${n.link}" target="_blank">${n.title}</a><br>`;
}
});

document.getElementById("degreeBox").innerHTML=html;

});
}
