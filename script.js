// === Theme Toggle ===
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// === Loader Fade Out ===
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  loader.classList.add('hide');
});

// === Gallery Load from GitHub ===
const galleryGrid = document.getElementById('galleryGrid');
fetch('https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery')
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      if (file.download_url.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const img = document.createElement('img');
        img.src = file.download_url;
        img.alt = file.name;
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.appendChild(img);
        galleryGrid.appendChild(div);
      }
    });
  })
  .catch(err => {
    galleryGrid.innerHTML = "<p style='text-align:center;'>Could not load gallery images.</p>";
    console.error(err);
  });

// === Lightbox Zoom ===
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.getElementById('closeLightbox');

document.addEventListener('click', (e) => {
  if (e.target.closest('.gallery-item img')) {
    lightboxImg.src = e.target.src;
    lightbox.style.display = 'flex';
  }
});
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
    contactModal.style.display = 'none';
  }
});

// === Contact Modal ===
const emailTrigger = document.getElementById('email-trigger');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');

emailTrigger.addEventListener('click', () => {
  contactModal.style.display = 'flex';
});
closeModal.addEventListener('click', () => {
  contactModal.style.display = 'none';
});

// === Scroll Reveal ===
ScrollReveal().reveal('.about-content', {
  delay: 100,
  distance: '50px',
  origin: 'left',
  duration: 800,
});
ScrollReveal().reveal('.gallery-item', {
  interval: 100,
  origin: 'bottom',
  distance: '20px',
  duration: 800,
});
ScrollReveal().reveal('.contact .container', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
});
