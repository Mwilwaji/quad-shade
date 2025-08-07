// Select the Hamburger and Nav Links
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(" .nav-links");
const navItems = document.querySelectorAll(" .nav-links li a");
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

// modal.js
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const closBtn = document.querySelector('.modal-close');

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

// JavaScript to handle the active link on scroll
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});

// Smooth Scrolling Functionality
document.addEventListener("DOMContentLoaded", () => {
    // Select all navigation links with hash (#)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault(); // Prevent default anchor click behavior

            const targetId = link.getAttribute("href").substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId); // Find the target element

            // Scroll to the target element smoothly
            if ('scrollBehavior' in document.documentElement.style) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            } else {
                const yOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: yOffset, behavior: "smooth" });
            }
        });
    });
});

// Initialize Swiper for Testimonials Section
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});


const services = {
  "pergola": {
    title: "Pergola",
    desc: "Elegant, freestanding or attached shade structures crafted for timeless outdoor luxury.",
    images: ["/images/services-images/pergola1.jpg", "/images/services-images/pergola2.jpg", "/images/services-images/pergola3.jpg"]
  },
  "canopies": {
    title: "Canopies",
    desc: "Custom canopies that protect and beautify — for doors, walkways, and open spaces.",
    images: ["/images/services-images/canopies1.jpg", "/images/services-images/canopies2.jpg", "/images/services-images/canopies3.jpg"]
  },
  "gazebo": {
    title: "Gazebo",
    desc: "Architectural outdoor pavilions for relaxation and social spaces.",
    images: ["/images/services-images/gazebo1.jpg", "/images/services-images/gazebo2.jpg", "/images/services-images/gazebo3.jpg"]
  },
  "sailor-shades": {
    title: "Sailor Shades",
    desc: "Modern sun sails offering UV protection and open-air style.",
    images: ["/images/services-images/sailor1.jpg", "/images/services-images/sailor2.jpg", "/images/services-images/sailor3.jpg"]
  },
  "car-covers": {
    title: "Car Covers",
    desc: "Durable, fitted car covers for superior outdoor protection.",
    images: ["/images/services-images/carcover1.jpg", "/images/services-images/carcover2.jpg", "/images/services-images/carcover3.jpg"]
  },
  "car-parking-shades": {
    title: "Car Parking Shades",
    desc: "Protective shades for parking lots with high UV resistance and water protection.",
    images: ["/images/services-images/carshade1.jpg", "/images/services-images/carshade2.jpg", "/images/services-images/carshade3.jpg"]
  }
};

// Open modal on click
document.querySelectorAll('.service-item').forEach(item => {
  item.addEventListener('click', () => {
    const key = item.getAttribute('data-service');
    const service = services[key];
    if (service) {
      modalTitle.textContent = service.title;
      modalDescription.textContent = service.desc;
      img1.src = service.images[0];
      img2.src = service.images[1];
      img3.src = service.images[2];
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    }
  });
});

// Close modal
closBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});