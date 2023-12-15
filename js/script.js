let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x-circle");
    navbar.classList.toggle("active")
}




ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-img', { origin: "bottom" });
ScrollReveal().reveal('.about-me-content p, .about-me-content h3, .home-content h1', { origin: "left" });
ScrollReveal().reveal('.home-content p', { origin: "rigth" });




const typed = new Typed(".multiple-text", {
    strings: ["Programmer", "Developer", "Helper", "YouTuber"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
} )
