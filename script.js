// Theme Toggle
const toggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Preloader
window.addEventListener('load', () => {
  document.getElementById('loading').classList.add('hide');
});

// Contact Popup
const contactBtn = document.getElementById('contact-btn');
const contactPopup = document.getElementById('contact-popup');
const popupClose = document.getElementById('popup-close');

contactBtn.onclick = () => contactPopup.style.display = 'block';
popupClose.onclick = () => contactPopup.style.display = 'none';
window.onclick = (e) => { if (e.target === contactPopup) contactPopup.style.display = 'none'; };

// Gallery Auto Loader
const galleryGrid = document.getElementById('galleryGrid');
const maxImages = 50;
const formats = ['jpg', 'jpeg', 'png', 'webp'];

for (let i = 1; i <= maxImages; i++) {
  formats.forEach(format => {
    const img = new Image();
    img.src = `images/gallery/photo${i}.${format}`;
    img.onload = () => {
      const imgElem = document.createElement('img');
      imgElem.src = img.src;
      galleryGrid.appendChild(imgElem);
    };
  });
}
