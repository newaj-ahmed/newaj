/* =====================================================
MOBILE MENU
===================================================== */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML = "✕";

}else{

menuBtn.innerHTML = "☰";

}

});

}

/* =====================================================
AUTO CLOSE MENU
===================================================== */

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach((item)=>{

item.addEventListener("click",()=>{

navLinks.classList.remove("active");

if(menuBtn){

menuBtn.innerHTML = "☰";

}

});

});

/* =====================================================
ACTIVE NAV LINK
===================================================== */

const currentPage =
window.location.href;

const menuLinks =
document.querySelectorAll(".nav-links a");

menuLinks.forEach((link)=>{

if(link.href === currentPage){

link.classList.add("active");

}

});

/* =====================================================
TYPING EFFECT
===================================================== */

const typingText =
document.querySelector(".typing-text");

const words = [

"Political Science Intern Teacher",
"Educational Internship Portfolio",
"Academic Excellence 2026",
"Teaching • Learning • Growth"

];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

if(!typingText) return;

const currentWord =
words[wordIndex];

if(isDeleting){

typingText.textContent =
currentWord.substring(
0,
charIndex--
);

}else{

typingText.textContent =
currentWord.substring(
0,
charIndex++
);

}

let speed = 120;

if(isDeleting){

speed = 60;

}

if(!isDeleting &&
charIndex === currentWord.length){

speed = 1800;
isDeleting = true;

}

if(isDeleting &&
charIndex === 0){

isDeleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

setTimeout(typeEffect,speed);

}

typeEffect();

/* =====================================================
COUNTER ANIMATION
===================================================== */

const counters =
document.querySelectorAll(".counter");

const counterObserver =
new IntersectionObserver(
(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

const counter =
entry.target;

const target =
+counter.getAttribute(
"data-target"
);

let count = 0;

const updateCounter = ()=>{

const increment =
target / 100;

count += increment;

if(count < target){

counter.innerText =
Math.floor(count);

requestAnimationFrame(
updateCounter
);

}else{

counter.innerText =
target;

}

};

updateCounter();

counterObserver.unobserve(
counter
);

}

});

},
{
threshold:0.5
}
);

counters.forEach((counter)=>{

counterObserver.observe(
counter
);

});

/* =====================================================
FAQ TOGGLE
===================================================== */

const faqItems =
document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

const question =
item.querySelector(".faq-question");

if(question){

question.addEventListener("click",()=>{

item.classList.toggle(
"active-faq"
);

});

}

});

/* =====================================================
TESTIMONIAL SLIDER
===================================================== */

const testimonials =
document.querySelectorAll(
".testimonial-slider-card"
);

let testimonialIndex = 0;

function showTestimonial(index){

if(testimonials.length === 0)
return;

testimonials.forEach((card)=>{

card.classList.remove(
"active-slide"
);

});

testimonials[index]
.classList.add(
"active-slide"
);

}

function nextTestimonial(){

testimonialIndex++;

if(testimonialIndex >=
testimonials.length){

testimonialIndex = 0;

}

showTestimonial(
testimonialIndex
);

}

function prevTestimonial(){

testimonialIndex--;

if(testimonialIndex < 0){

testimonialIndex =
testimonials.length - 1;

}

showTestimonial(
testimonialIndex
);

}

if(testimonials.length > 0){

showTestimonial(0);

setInterval(
nextTestimonial,
5000
);

}

/* =====================================================
LIGHTBOX GALLERY
===================================================== */

const galleryImages =
document.querySelectorAll(
".gallery-card img"
);

const lightbox =
document.getElementById(
"lightbox"
);

const lightboxImg =
document.getElementById(
"lightbox-img"
);

galleryImages.forEach((image)=>{

image.addEventListener(
"click",
()=>{

if(lightbox){

lightbox.style.display =
"flex";

lightboxImg.src =
image.src;

}

});

});

if(lightbox){

lightbox.addEventListener(
"click",
()=>{

lightbox.style.display =
"none";

});

}

/* =====================================================
PREMIUM GALLERY SLIDER
===================================================== */

const sliderImage =
document.getElementById(
"slider-image"
);

const sliderImages = [

"HAAM1.png",
"HAAM2.png",
"HAAM3.png",
"HAAM4.png",
"HAAM5.png",
"HAAM6.png",
"HAAM7.png",
"HAAM8.png",
"HAAM9.png",
"HAAM10.png"

];

let currentSlide = 0;

function showSlide(){

if(!sliderImage) return;

sliderImage.style.filter =
"blur(10px) brightness(40%)";

sliderImage.style.transform =
"scale(1.10)";

sliderImage.style.opacity =
"0.6";

setTimeout(()=>{

sliderImage.src =
sliderImages[currentSlide];

sliderImage.style.filter =
"blur(0px) brightness(100%)";

sliderImage.style.transform =
"scale(1)";

sliderImage.style.opacity =
"1";

},500);

}

function nextSlide(){

currentSlide++;

if(currentSlide >=
sliderImages.length){

currentSlide = 0;

}

showSlide();

}

function previousSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide =
sliderImages.length - 1;

}

showSlide();

}

if(sliderImage){

setInterval(
nextSlide,
4000
);

}

/* =====================================================
SCROLL REVEAL
===================================================== */

const revealElements =
document.querySelectorAll(

".statistics-card,\
.contact-card,\
.resource-card,\
.experience-card,\
.learning-card,\
.achievement-card,\
.summary-card,\
.tip-card,\
.rank-card,\
.timeline-box,\
.gallery-card,\
.skill-card,\
.education-card,\
.info-box"

);

function revealOnScroll(){

const windowHeight =
window.innerHeight;

revealElements.forEach((element)=>{

const elementTop =
element.getBoundingClientRect().top;

if(elementTop <
windowHeight - 80){

element.style.opacity = "1";

element.style.transform =
"translateY(0px)";

}

});

}

revealElements.forEach((element)=>{

element.style.opacity = "0";

element.style.transform =
"translateY(40px)";

element.style.transition =
"all 0.9s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

revealOnScroll();

/* =====================================================
NAVBAR EFFECT
===================================================== */

window.addEventListener(
"scroll",
()=>{

const navbar =
document.querySelector(
".navbar"
);

if(window.scrollY > 50){

navbar.style.background =
"rgba(10,10,10,0.95)";

navbar.style.padding =
"12px 7%";

}else{

navbar.style.background =
"rgba(0,0,0,0.78)";

navbar.style.padding =
"15px 7%";

}

});

/* =====================================================
SCROLL TOP BUTTON
===================================================== */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

document.body.appendChild(
scrollBtn
);

scrollBtn.style.position =
"fixed";

scrollBtn.style.bottom =
"20px";

scrollBtn.style.left =
"20px";

scrollBtn.style.width =
"45px";

scrollBtn.style.height =
"45px";

scrollBtn.style.border =
"none";

scrollBtn.style.borderRadius =
"50%";

scrollBtn.style.background =
"#5c1d2b";

scrollBtn.style.color =
"white";

scrollBtn.style.fontSize =
"22px";

scrollBtn.style.cursor =
"pointer";

scrollBtn.style.display =
"none";

scrollBtn.style.zIndex =
"999";

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 300){

scrollBtn.style.display =
"block";

}else{

scrollBtn.style.display =
"none";

}

});

scrollBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* =====================================================
LOADER
===================================================== */

window.addEventListener(
"load",
()=>{

const loader =
document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity = "0";

loader.style.visibility =
"hidden";

},1200);

}

});

/* =====================================================
IMAGE HOVER EFFECT
===================================================== */

const allImages =
document.querySelectorAll("img");

allImages.forEach((img)=>{

img.addEventListener(
"mouseenter",
()=>{

img.style.transition =
"0.5s";

});

});
const launchDate =
new Date("July 1, 2026 09:00:00").getTime();

const launchScreen =
document.getElementById("launch-screen");

const countdownTimer =
setInterval(function(){

const now =
new Date().getTime();

const distance =
launchDate - now;

const days =
Math.floor(distance / (1000 * 60 * 60 * 24));

const hours =
Math.floor(
(distance % (1000 * 60 * 60 * 24))
/
(1000 * 60 * 60)
);

const minutes =
Math.floor(
(distance % (1000 * 60 * 60))
/
(1000 * 60)
);

const seconds =
Math.floor(
(distance % (1000 * 60))
/
1000
);

document.getElementById("days").innerHTML = days;
document.getElementById("hours").innerHTML = hours;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;

if(distance <= 0){

clearInterval(countdownTimer);

launchScreen.style.display = "none";

}

},1000);

/* =====================================================
END
===================================================== */