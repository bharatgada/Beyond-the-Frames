// Dark/Light mode toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Loader fade out
window.addEventListener('load', () => {
  const loader = document.getElementById('loading');
  loader.classList.add('hide');
});

// Auto-load gallery images from GitHub repo
const galleryGrid = document.getElementById("galleryGrid");
fetch("https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery")
  .then(res => res.json())
  .then(files => {
    files.forEach(file => {
      if (file.download_url.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const div = document.createElement("div");
        div.className = "gallery-item";
        const img = document.createElement("img");
        img.src = file.download_url;
        img.alt = file.name;
        div.appendChild(img);
        galleryGrid.appendChild(div);
      }
    });
  })
  .catch(err => {
    galleryGrid.innerHTML = "<p style='text-align:center;'>Gallery could not load. Please check GitHub setup.</p>";
    console.error("Gallery error:", err);
  });

// Scroll reveal animations
ScrollReveal().reveal('.about-content', { delay: 200, duration: 1000, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.gallery-item', { interval: 100, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('.contact .container', { duration: 800, origin: 'bottom', distance: '30px' });
