const map = L.map("map").setView([41.3111, 69.2797], 13); // Ташкент

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap",
}).addTo(map);

L.marker([41.3111, 69.2797])
  .addTo(map)
  .bindPopup("Мы здесь")
  .openPopup();

const dropdown = document.querySelector('.dropdown');
const btn = document.querySelector('.dropdown-btn');
const items = document.querySelectorAll('.dropdown-list li');

btn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    btn.firstChild.textContent = item.textContent;
    dropdown.classList.remove('active');
  });
});

const savedData = JSON.parse(localStorage.getItem("userProfile"));
const divchik = document.getElementById("divchik")
let myname = document.getElementById("myname")

if (savedData === null) {
  myname.textContent = `Войти`
} else {
  myname.textContent = `${savedData.firstName}`
}

divchik.addEventListener("click", () => {
  alert("Перевод временно недоступен")
})
