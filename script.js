document.addEventListener('DOMContentLoaded', function () {
  // Loader fade-out
  setTimeout(() => {
    document.querySelector('.loader').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
    }, 500);
  }, 1000);

  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const toggleCircle = document.querySelector('.toggle-circle');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      document.body.classList.contains('dark') ? 'dark' : 'light'
    );
  });

  // Email modal
  const emailBtn = document.querySelector('.email-btn');
  const emailModal = document.querySelector('.email-modal');
  const closeModal = document.querySelector('.close-modal');

  emailBtn.addEventListener('click', () => {
    emailModal.classList.add('active');
  });

  closeModal.addEventListener('click', () => {
    emailModal.classList.remove('active');
  });

  emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) {
      emailModal.classList.remove('active');
    }
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeLightbox = document.querySelector('.close-lightbox');

  function openLightbox(src) {
    lightboxImage.src = src;
    lightbox.classList.add('active');
    lightbox.style.opacity = '1';
    lightbox.style.visibility = 'visible';
    document.body.style.overflow = 'hidden';
  }

  closeLightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
    lightbox.style.opacity = '0';
    lightbox.style.visibility = 'hidden';
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      lightbox.style.opacity = '0';
      lightbox.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }
  });

  // Auto-load images from GitHub repo
  const galleryGrid = document.getElementById('gallery-grid');
  const imageNames = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg']; // Add your images here
  const baseUrl = 'https://raw.githubusercontent.com/bharatgada/Beyond-the-Frames/main/images/gallery/';

  imageNames.forEach((img) => {
    const item = document.createElement('div');
    item.className = 'gallery-item rounded overflow-hidden shadow-md';
    item.innerHTML = `<img src="${baseUrl}${img}" alt="${img}" class="w-full h-64 md:h-72 object-cover object-top">`;
    item.addEventListener('click', () => openLightbox(`${baseUrl}${img}`));
    galleryGrid.appendChild(item);
  });

  // Parallax hero effect (optional enhancement)
  const heroParallax = document.querySelector('.hero-parallax');
  const parallaxStrength = 40;
  document.addEventListener('mousemove', (e) => {
    if (heroParallax) {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      const translateX = mouseX * parallaxStrength;
      const translateY = mouseY * parallaxStrength;
      const scale = 1.1;
      heroParallax.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    }
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
});
