
// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==============================
// SMOOTH SCROLL
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    });
});

// ==============================
// BACK TO TOP BUTTON
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".project-card,.skill-card,.timeline-box,.about-card,.info-box"
);

function revealOnScroll() {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ==============================
// ACTIVE NAV LINK
// ==============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ==============================
// CONTACT FORM
// ==============================

const form = document.querySelector(".contact-form form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}

// ==============================
// CURRENT YEAR IN FOOTER
// ==============================

const year = new Date().getFullYear();

const footerText = document.querySelector("footer p:last-child");

if (footerText) {
    footerText.innerHTML = `© ${year} Shalini Sharma. All Rights Reserved.`;
}

console.log("Portfolio Loaded Successfully 🚀");
// ======================================
// TYPING EFFECT
// ======================================

const typingElement = document.querySelector(".typing-text");

if (typingElement) {

const words = [

"Programmer",

"Data Analyst",

"Python Developer",

"CSE Student",

"Web Developer",

"Machine Learning Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

const currentWord = words[wordIndex];

if(!deleting){

typingElement.textContent =
currentWord.substring(0,charIndex++);

if(charIndex > currentWord.length){

deleting = true;

setTimeout(typeEffect,1200);

return;

}

}

else{

typingElement.textContent =
currentWord.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

}

// ======================================
// DARK MODE
// ======================================

const themeBtn =
document.getElementById("theme-toggle");

if(themeBtn){

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("light");

const icon=themeBtn.querySelector("i");

if(document.body.classList.contains("light")){

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

localStorage.setItem("theme","light");

}

else{

icon.classList.remove("fa-sun");

icon.classList.add("fa-moon");

localStorage.setItem("theme","dark");

}

});

}

if(localStorage.getItem("theme")=="light"){

document.body.classList.add("light");

if(themeBtn){

const icon=themeBtn.querySelector("i");

icon.classList.remove("fa-moon");

icon.classList.add("fa-sun");

}

}

// ======================================
// COUNTER ANIMATION
// ======================================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const value=+counter.innerText;

const increment=target/100;

if(value<target){

counter.innerText=Math.ceil(value+increment);

setTimeout(update,20);

}

else{

counter.innerText=target;

}

}

update();

});

// ======================================
// PROJECT CARD HOVER
// ======================================

const cards =
document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

// ======================================
// NAVBAR SHADOW
// ======================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.3)";

}

else{

header.style.boxShadow="none";

}

});

// ======================================
// LOADER
// ======================================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});

// ======================================
// PARALLAX EFFECT
// ======================================

window.addEventListener("mousemove",(e)=>{

const circle=document.querySelector(".circle");

if(circle){

const x=(window.innerWidth/2-e.pageX)/35;

const y=(window.innerHeight/2-e.pageY)/35;

circle.style.transform=

`translate(${x}px,${y}px)`;

}

});

console.log("JS Part 2 Loaded ✅");
// ======================================
// SCROLL PROGRESS BAR
// ======================================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    if (!progressBar) return;

    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

// ======================================
// BUTTON RIPPLE EFFECT
// ======================================

const buttons = document.querySelectorAll(".btn, .btn2");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width = circle.style.height =
            diameter + "px";

        circle.style.left =
            e.offsetX - diameter / 2 + "px";

        circle.style.top =
            e.offsetY - diameter / 2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if(ripple){
            ripple.remove();
        }

        this.appendChild(circle);

    });

});

// ======================================
// RANDOM FLOATING ICONS
// ======================================

const floatingIcons =
document.querySelectorAll(".skill-card");

floatingIcons.forEach(icon=>{

const random=Math.random()*4+2;

icon.style.animation=

`floating ${random}s ease-in-out infinite`;

});

// ======================================
// IMAGE ROTATION EFFECT
// ======================================

const heroCircle =
document.querySelector(".circle");

if(heroCircle){

setInterval(()=>{

heroCircle.style.transform +=

" rotate(1deg)";

},80);

}

// ======================================
// SECTION FADE-IN
// ======================================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},
{
threshold:.2
});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});

// ======================================
// DISABLE RIGHT CLICK
// ======================================

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});

// ======================================
// KEYBOARD SHORTCUT
// Press D to Toggle Theme
// ======================================

document.addEventListener("keydown",e=>{

if(e.key==="d"||e.key==="D"){

if(themeBtn){

themeBtn.click();

}

}

});

// ======================================
// CONSOLE MESSAGE
// ======================================

console.log("%cWelcome to Shalini Sharma's Portfolio 🚀",
"color:#38bdf8;font-size:20px;font-weight:bold;");

console.log("%cDesigned with HTML, CSS & JavaScript",
"color:#ffffff;font-size:14px;");


