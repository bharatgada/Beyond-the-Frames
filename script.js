// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  const icon = themeToggle.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// Gallery Fetch from GitHub
const galleryGrid = document.getElementById('gallery-grid');
const repoUrl = 'https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery';

async function loadGallery() {
  try {
    const response = await fetch(repoUrl);
    const files = await response.json();
    galleryGrid.innerHTML = '';
    files.forEach(file => {
      if (file.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(file.name)) {
        const img = document.createElement('img');
        img.src = file.download_url;
        img.alt = file.name;
        img.addEventListener('click', () => openLightbox(file.download_url));
        galleryGrid.appendChild(img);
      }
    });
  } catch (error) {
    console.error('Error loading gallery:', error);
    galleryGrid.innerHTML = '<p>Failed to load gallery. Please try again later.</p>';
  }
}

loadGallery();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(src) {
  lightboxImage.src = src;
  lightbox.style.display = 'flex';
}

lightboxClose.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
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
  if (e.target === contactModal) {
    contactModal.style.display = 'none';
  }
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-content', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.about-content', { delay: 200, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.gallery-grid', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.contact-links', { delay: 200, distance: '50px', origin: 'top' });
