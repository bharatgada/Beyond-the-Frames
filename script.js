
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, 1000);

  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.body.classList.add('dark');
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });

  const emailBtn = document.querySelector('.email-btn');
  const emailModal = document.querySelector('.email-modal');
  const closeModal = document.querySelector('.close-modal');
  emailBtn.addEventListener('click', () => emailModal.classList.add('active'));
  closeModal.addEventListener('click', () => emailModal.classList.remove('active'));
  emailModal.addEventListener('click', (e) => {
    if (e.target === emailModal) emailModal.classList.remove('active');
  });

  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImage.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  document.querySelector('.close-lightbox').addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  const galleryGrid = document.getElementById('gallery-grid');
  const imageNames = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'];
  const baseUrl = 'https://raw.githubusercontent.com/bharatgada/Beyond-the-Frames/main/images/gallery/';
  imageNames.forEach((img) => {
    const div = document.createElement('div');
    div.className = 'gallery-item rounded overflow-hidden shadow-md';
    div.innerHTML = \`<img src="\${baseUrl + img}" alt="\${img}" class="w-full h-64 md:h-72 object-cover object-top">\`;
    div.addEventListener('click', () => {
      lightboxImage.src = baseUrl + img;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    galleryGrid.appendChild(div);
  });
});
