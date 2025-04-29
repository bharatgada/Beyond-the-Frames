// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Check if user already selected a theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

// Toggle dark/light theme
toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Loader Fade Out
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  loader.classList.add('hide');
});

// Load Gallery Images from GitHub Repo
const galleryGrid = document.getElementById('galleryGrid');
fetch('https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery')
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      if (file.download_url.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        const img = document.createElement('img');
        img.src = file.download_url;
        img.alt = file.name;
        div.appendChild(img);
        galleryGrid.appendChild(div);
      }
    });
  })
  .catch(error => {
    console.error('Gallery loading failed:', error);
    galleryGrid.innerHTML = "<p style='text-align:center;'>Gallery could not load. Please check images folder or GitHub repo settings.</p>";
  });

// Scroll Reveal Animations
ScrollReveal().reveal('.about-content', {
  delay: 200,
  distance: '50px',
  origin: 'left',
  duration: 1000,
});

ScrollReveal().reveal('.gallery-item', {
  interval: 100,
  origin: 'bottom',
  distance: '20px',
  duration: 800,
});

ScrollReveal().reveal('.contact .container', {
  delay: 300,
  distance: '30px',
  origin: 'bottom',
  duration: 800,
});
