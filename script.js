
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => document.getElementById('loading').style.display = 'none', 1000);

  const toggle = document.getElementById('theme-toggle');
  const iconLight = document.getElementById('icon-light');
  const iconDark = document.getElementById('icon-dark');
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }

  function updateThemeIcon() {
    const isDark = document.documentElement.classList.contains('dark');
    iconLight.classList.toggle('hidden', !isDark);
    iconDark.classList.toggle('hidden', isDark);
  }

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    updateThemeIcon();
  });

  updateThemeIcon();

  document.getElementById('email-trigger').onclick = () =>
    document.getElementById('contactModal').classList.remove('hidden');
  document.getElementById('closeModal').onclick = () =>
    document.getElementById('contactModal').classList.add('hidden');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  document.getElementById('galleryGrid').addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      lightboxImg.src = e.target.src;
      lightbox.classList.remove('hidden');
    }
  });
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });

  const repo = 'bharatgada/Beyond-the-Frames';
  const gallery = document.getElementById('galleryGrid');
  fetch(`https://api.github.com/repos/${repo}/contents/images/gallery`)
    .then(res => res.json())
    .then(files => {
      files
        .filter(file => /\.(jpg|jpeg|png)$/i.test(file.name))
        .forEach(file => {
          const img = document.createElement('img');
          img.src = file.download_url;
          img.alt = file.name;
          img.className = 'w-full mb-4 rounded-lg shadow-md break-inside-avoid transition-transform duration-300 hover:scale-105 cursor-pointer';
          gallery.appendChild(img);
        });
    });

  ScrollReveal().reveal('#about, #gallery, #contact, .fade-in, .slide-up', {
    distance: '50px',
    duration: 800,
    interval: 100,
    reset: false,
  });
});

// Add scroll-based navbar darkening
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});
