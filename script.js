function toggleMenu(){
var nav = document.querySelector("nav ul");

if(nav.style.display=="block"){
nav.style.display="none";
}else{
nav.style.display="block";
}
}

function toggleNotice(){
var box = document.getElementById("noticeBox");

if(box.style.display=="block"){
box.style.display="none";
}else{
box.style.display="block";
loadNotice();
}
}

function loadNotice(){

fetch("https://script.google.com/macros/s/AKfycbzKA6wm04fjWNXjAcTf5SIzvApixOeqRJ1W5qljSWsQkaGpNXm7vyveK0n8g30snhO5QQ/exec")
.then(res => res.json())
.then(data => {

var html="";

data.forEach(function(n){
html += `<a href="${n.link}" target="_blank">${n.title}</a><br>`;
});

document.getElementById("noticeBox").innerHTML=html;

});
}
