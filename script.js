// ===== Loader Logic (Fixed) =====
window.addEventListener("load", () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 1000); // After fade animation finishes
});

// ===== Theme Toggle =====
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;

function applyTheme() {
  const isDark = body.classList.contains('dark');
  themeSwitch.querySelector('.ri-moon-line').style.display = isDark ? 'none' : 'block';
  themeSwitch.querySelector('.ri-sun-line').style.display = isDark ? 'block' : 'none';
}

themeSwitch.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
  applyTheme();
});
applyTheme(); // On page load

// ===== Load Gallery Images Dynamically from GitHub =====
async function loadGalleryFromGitHub() {
  const res = await fetch("https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery");
  const files = await res.json();
  const gallery = document.getElementById('gallery-grid');

  files.filter(file => file.type === "file" && /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .forEach(file => {
      const div = document.createElement('div');
      div.className = "overflow-hidden rounded-xl shadow-lg hover:scale-105 transition";
      div.innerHTML = `<img src="${file.download_url}" alt="Gallery Image" class="w-full h-72 object-cover">`;
      gallery.appendChild(div);
    });
}
loadGalleryFromGitHub();

// ===== ScrollReveal Animations =====
ScrollReveal().reveal('section', {
  distance: '50px',
  duration: 1200,
  easing: 'ease',
  origin: 'bottom',
  interval: 200
});
