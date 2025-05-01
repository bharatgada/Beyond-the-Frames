// Copy everything into script.js

// Theme toggle
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
}

// Initial theme
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark");

  // Hide loader
  setTimeout(() => document.getElementById("loading").style.display = "none", 1000);

  // Scroll reveal
  ScrollReveal().reveal('.hero-text, .about-container, .gallery-grid img, footer', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px',
    reset: false
  });

  // Load gallery images dynamically
  fetch('https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery')
    .then(res => res.json())
    .then(images => {
      const gallery = document.getElementById('gallery-grid');
      document.querySelector('.gallery-loading').style.display = 'none';
      images.forEach(img => {
        if (img.download_url.match(/\\.(jpe?g|png|gif)$/)) {
          const image = document.createElement('img');
          image.src = img.download_url;
          image.alt = img.name;
          image.onclick = () => openLightbox(img.download_url);
          gallery.appendChild(image);
        }
      });
    });
});

// Contact modal
function openContactModal() {
  document.getElementById("email-modal").style.display = "flex";
}
function closeContactModal() {
  document.getElementById("email-modal").style.display = "none";
}

// Lightbox
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
  document.getElementById("lightbox-img").src = "";
}
