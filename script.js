// Theme Toggle (Light/Dark)
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
// Initialize theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  const icon = toggleBtn.querySelector('i');
  if (body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'light');
  }
});

// Navbar Shrink on Scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Loading Screen Fade-Out
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  loader.classList.add('hide');
  setTimeout(() => loader.style.display = 'none', 500);
});

// Gallery: Fetch images from GitHub repository folder
const galleryGrid = document.getElementById('galleryGrid');
fetch('https://api.github.com/repos/bharathgada/portfolio/contents/images/gallery')
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      if (file.type === 'file') {
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
    console.warn('Gallery fetch failed:', err);
    // Fallback: add placeholder images if needed
    const placeholderImages = ['gallery1.jpg','gallery2.jpg','gallery3.jpg','gallery4.jpg','gallery5.jpg','gallery6.jpg'];
    placeholderImages.forEach(src => {
      const img = document.createElement('img');
      img.src = 'images/gallery/' + src;
      const div = document.createElement('div');
      div.className = 'gallery-item';
      div.appendChild(img);
      galleryGrid.appendChild(div);
    });
  });

// ScrollReveal Animations for smooth entrance&#8203;:contentReference[oaicite:7]{index=7}
ScrollReveal().reveal('.about-content', { origin: 'left', distance: '50px', duration: 800 });
ScrollReveal().reveal('.gallery-item', { origin: 'bottom', distance: '20px', interval: 100 });
ScrollReveal().reveal('.contact .container', { origin: 'bottom', distance: '20px', duration: 800 });
