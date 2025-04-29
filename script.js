// Theme Toggle
const themeSwitch = document.getElementById('themeSwitch');
const body = document.body;
let dark = localStorage.getItem("theme") === "dark";

function applyTheme() {
  body.classList.toggle("dark", dark);
  body.classList.toggle("light", !dark);
  themeSwitch.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
}
applyTheme();
themeSwitch.addEventListener("click", () => {
  dark = !dark;
  applyTheme();
});

// GitHub API Gallery
async function loadGalleryFromGitHub() {
  const res = await fetch("https://api.github.com/repos/bharatgada/Beyond-the-Frames/contents/images/gallery");
  const files = await res.json();
  const gallery = document.getElementById("gallery-grid");

  files
    .filter(file => file.type === "file" && /\.(jpg|jpeg|png|webp)$/i.test(file.name))
    .forEach(file => {
      const div = document.createElement("div");
      div.className = "gallery-item overflow-hidden rounded shadow-lg hover:scale-105 transition-transform";
      div.innerHTML = `<img src="${file.download_url}" alt="Gallery" class="w-full h-72 object-cover">`;
      gallery.appendChild(div);
    });
}
loadGalleryFromGitHub();

// Contact Info Toggle
function toggleContactInfo() {
  const box = document.getElementById("contactInfo");
  box.classList.toggle("hidden");
}
