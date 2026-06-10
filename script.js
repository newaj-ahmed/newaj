/* =========================
MOBILE NAVBAR
========================= */

const menuBtn =
document.querySelector(".menu-btn");

const navLinks =
document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    navLinks.classList.toggle("show-menu");

});

/* =========================
STICKY NAVBAR EFFECT
========================= */

window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("sticky-nav");

    }

    else{

        navbar.classList.remove("sticky-nav");

    }

});

/* =========================
SCROLL REVEAL ANIMATION
========================= */

const revealElements =
document.querySelectorAll(

    ".preview-card,\
    .student-card,\
    .resource-card,\
    .tip-card,\
    .contact-card,\
    .statistics-card,\
    .gallery-item,\
    .review-card,\
    .highlight-card,\
    .achievement-main-card,\
    .timeline-content,\
    .memory-card,\
    .challenge-card,\
    .learning-card,\
    .teacher-comment-card,\
    .event-card,\
    .certificate-showcase-card,\
    .featured-note-card,\
    .pdf-card"

);

function revealOnScroll(){

    const windowHeight =
    window.innerHeight;

    revealElements.forEach((element)=>{

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 80){

            element.classList.add("active-reveal");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();

/* =========================
AUTO HERO IMAGE SLIDER
========================= */

const heroSections =
document.querySelectorAll(

    ".hero,\
    .about-hero,\
    .rank-hero,\
    .gallery-hero,\
    .journey-hero,\
    .resources-hero,\
    .testimonial-hero,\
    .achievement-hero,\
    .faq-hero,\
    .contact-hero"

);

const heroImages = [

    "images/gallery/HAAM1.png",
    "images/gallery/HAAM2.png",
    "images/gallery/HAAM3.png",
    "images/gallery/HAAM4.png",
    "images/gallery/HAAM5.png",
    "images/gallery/HAAM6.png",
    "images/gallery/HAAM7.png",
    "images/gallery/HAAM8.png",
    "images/gallery/HAAM9.png",
    "images/gallery/HAAM10.png"

];

let heroIndex = 0;

function changeHeroBackground(){

    heroIndex++;

    if(heroIndex >= heroImages.length){

        heroIndex = 0;

    }

    heroSections.forEach((section)=>{

        section.style.background =
        `linear-gradient(rgba(0,0,0,0.45),
        rgba(0,0,0,0.45)),
        url('${heroImages[heroIndex]}')`;

        section.style.backgroundSize = "cover";

        section.style.backgroundPosition = "center";

    });

}

setInterval(changeHeroBackground,5000);

/* =========================
TYPEWRITER EFFECT
========================= */

const typingElement =
document.querySelector(".typing-text");

if(typingElement){

    const text =
    "Political Science Intern Teacher";

    let index = 0;

    function typeText(){

        if(index < text.length){

            typingElement.innerHTML +=
            text.charAt(index);

            index++;

            setTimeout(typeText,100);

        }

    }

    typeText();

}

/* =========================
COUNTER ANIMATION
========================= */

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText = "0";

    const updateCounter = ()=>{

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        target / 100;

        if(current < target){

            counter.innerText =
            `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,25);

        }

        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

/* =========================
GALLERY LIGHTBOX
========================= */

const galleryImages =
document.querySelectorAll(

    ".gallery-item img,\
    .mini-gallery-grid img,\
    .memory-card img,\
    .event-card img"

);

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

if(lightbox){

    galleryImages.forEach((image)=>{

        image.addEventListener("click",()=>{

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        });

    });

    lightbox.addEventListener("click",()=>{

        lightbox.style.display = "none";

    });

}

/* =========================
FAQ TOGGLE
========================= */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach((question)=>{

    question.addEventListener("click",()=>{

        const faqItem =
        question.parentElement;

        faqItem.classList.toggle("active");

    });

});

/* =========================
TESTIMONIAL SLIDER
========================= */

const testimonials =
document.querySelectorAll(".testimonial-card");

let currentTestimonial = 0;

function showTestimonial(index){

    testimonials.forEach((card)=>{

        card.classList.remove("active-slide");

    });

    if(testimonials[index]){

        testimonials[index]
        .classList.add("active-slide");

    }

}

function nextTestimonial(){

    currentTestimonial++;

    if(currentTestimonial >= testimonials.length){

        currentTestimonial = 0;

    }

    showTestimonial(currentTestimonial);

}

function prevTestimonial(){

    currentTestimonial--;

    if(currentTestimonial < 0){

        currentTestimonial =
        testimonials.length - 1;

    }

    showTestimonial(currentTestimonial);

}

if(testimonials.length > 0){

    setInterval(nextTestimonial,4000);

}

/* =========================
ACTIVE NAV LINK
========================= */

const currentPage =
window.location.pathname.split("/")
.pop();

const navItems =
document.querySelectorAll(".nav-links a");

navItems.forEach((item)=>{

    const href =
    item.getAttribute("href");

    if(href === currentPage){

        item.classList.add("active");

    }

});

/* =========================
SMOOTH BUTTON HOVER EFFECT
========================= */

const buttons =
document.querySelectorAll(

    ".primary-btn,\
    .secondary-btn"

);

buttons.forEach((button)=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform =
        "translateY(-5px) scale(1.02)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform =
        "translateY(0px) scale(1)";

    });

});

/* =========================
PRELOADER
========================= */

window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");

    if(loader){

        loader.style.display = "none";

    }

});

/* =========================
PARALLAX EFFECT
========================= */

window.addEventListener("scroll",()=>{

    const scrolled =
    window.pageYOffset;

    const parallax =
    document.querySelectorAll(

        ".hero,\
        .about-hero,\
        .rank-hero,\
        .gallery-hero,\
        .journey-hero,\
        .resources-hero,\
        .testimonial-hero,\
        .achievement-hero,\
        .faq-hero,\
        .contact-hero"

    );

    parallax.forEach((section)=>{

        section.style.backgroundPositionY =
        `${scrolled * 0.4}px`;

    });

});

/* =========================
IMAGE FADE ANIMATION
========================= */

const allImages =
document.querySelectorAll("img");

allImages.forEach((image)=>{

    image.addEventListener("load",()=>{

        image.classList.add("image-loaded");

    });

});

/* =========================
SCROLL TO TOP BUTTON
========================= */

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.classList.add("scroll-top-btn");

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.style.opacity = "1";

        scrollBtn.style.visibility = "visible";

    }

    else{

        scrollBtn.style.opacity = "0";

        scrollBtn.style.visibility = "hidden";

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =========================
AUTO GALLERY SLIDER
========================= */

const sliderImage =
document.getElementById("slider-image");

const sliderImages = [

    "images/gallery/HAAM1.png",
    "images/gallery/HAAM2.png",
    "images/gallery/HAAM3.png",
    "images/gallery/HAAM4.png",
    "images/gallery/HAAM5.png",
    "images/gallery/HAAM6.png",
    "images/gallery/HAAM7.png",
    "images/gallery/HAAM8.png",
    "images/gallery/HAAM9.png",
    "images/gallery/HAAM10.png"

];

let currentSlide = 0;

function changeSlider(){

    if(sliderImage){

        currentSlide++;

        if(currentSlide >= sliderImages.length){

            currentSlide = 0;

        }

        sliderImage.style.opacity = "0";

        setTimeout(()=>{

            sliderImage.src =
            sliderImages[currentSlide];

            sliderImage.style.opacity = "1";

        },400);

    }

}

setInterval(changeSlider,3500);

/* =========================
CONTACT FORM
========================= */

const contactForm =
document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Message Sent Successfully!");

        contactForm.reset();

    });

}

/* =========================
END
========================= */