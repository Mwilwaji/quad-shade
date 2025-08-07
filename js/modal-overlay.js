// modal.js
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const closBtn = document.querySelector('.modal-close');

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