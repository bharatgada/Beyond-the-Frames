document.addEventListener('DOMContentLoaded', function () {
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
    if (document.documentElement.classList.contains('dark')) {
      iconLight.classList.remove('hidden');
      iconDark.classList.add('hidden');
    } else {
      iconLight.classList.add('hidden');
      iconDark.classList.remove('hidden');
    }
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

  // ✅ Only close lightbox when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }
  });

  const repo = 'bharatgada/Beyond-the-Frames';
  const gallery = document.getElementById('galleryGrid');
  fetch(`https://api.github.com/repos/${repo}/contents/images/gallery`)
    .then((res) => res.json())
    .then((files) => {
      files
        .filter((file) => /\.(jpg|png|jpeg)$/i.test(file.name))
        .forEach((file) => {
          const div = document.createElement('div');
          div.innerHTML = `<img src="${file.download_url}" alt="${file.name}" class="w-full h-72 object-cover rounded shadow hover:scale-105 transition duration-300 cursor-pointer" />`;
          gallery.appendChild(div);
        });
    });

  ScrollReveal().reveal('#about, #gallery, #contact', {
    distance: '50px',
    duration: 800,
    interval: 100,
    reset: false,
  });
});
