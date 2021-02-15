
// I. Homepage Animation
const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const topnav = document.querySelector(".topnav");
const headline = document.querySelector(".headline");

const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height:"100%", ease: Power2.easeInOut })
.fromTo(hero, 1.2, {width: "100%"}, {width:"85%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(topnav, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
//.fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")


// II. Animated Responsive Hamburger Navbar
const hamburger = document.querySelector(".icon");
const navLinks = document.querySelector(".hamburger-links");
const links = document.querySelector(".hamburger-links li");

const ham2 = document.querySelector(".hamburger-links li #ham2");
const ham3 = document.querySelector(".hamburger-links li #ham3");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// make hamburger button roll back after click
// only links.addEventListener doesn't work for the last two links
links.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
ham2.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
ham3.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});


// III. Sticky Navbar
window.onscroll = function() {myFunction()};

//const navbar = document.querySelector(".topnav");
var navbar = document.getElementById("my-topnav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}