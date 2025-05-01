// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');

  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// Load Gallery Images
const galleryGrid = document.getElementById('gallery-grid');
const imageNames = [
  'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg'
]; // Add more if needed

const baseUrl = 'https://raw.githubusercontent.com/bharatgada/Beyond-the-Frames/main/images/gallery/';
imageNames.forEach(name => {
  const img = document.createElement('img');
  img.src = `${baseUrl}${name}`;
  img.alt = name;
  img.addEventListener('click', () => openLightbox(img.src));
  galleryGrid.appendChild(img);
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
}

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});

// Contact Modal
const contactBtn = document.getElementById('contact-btn');
const contactModal = document.getElementById('contact-modal');
const modalClose = document.getElementById('modal-close');

contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'flex';
});

modalClose.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

contactModal.addEventListener('click', (e) => {
  if (e.target === contactModal) contactModal.style.display = 'none';
});
