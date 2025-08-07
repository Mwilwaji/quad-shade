// Select the Hamburger and Nav Links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(" .nav-links");
const navItems = document.querySelectorAll(" .nav-links li a");
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// Toggle Active Class on Hamburger Click
hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Hide Nav Links on Link Click
navItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
    });
})

// Add scroll event listener
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    // Check scroll position
    if (window.scrollY > 50) {
        navbar.classList.remove("home-nav");
        navbar.classList.add("scrolled-nav");
    } else {
        navbar.classList.remove("scrolled-nav");
        navbar.classList.add("home-nav");
    }
});

// Set initial navbar style
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("home-nav");
});