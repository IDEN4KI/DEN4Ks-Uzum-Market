const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()

import { removeFavorite } from "./favoritesService.js";


const recomendedList = document.getElementById("recomended-section-favorite");
const recomended = document.getElementById("recomended-favorite");
const moijelania = document.getElementById("moijelania")


document.addEventListener("click", (e) => {
  const fav = e.target.closest(".item-favorite-img");
  if (!fav) return;

  fav.classList.toggle("active");

  fav.src = fav.classList.contains("active")
    ? "public/icons/free-icon-favoritere-on-13426236.png"
    : "public/icons/free-icon-favoritere-13426236.png";

  fav.classList.remove("animate");
  void fav.offsetWidth;
  fav.classList.add("animate");

  if (e.target.classList.contains("item-favorite-img")) {

    const card = e.target.closest("#recomended-section-item");
    if (!card) return;


    const id = card.dataset.id;
    if (recomendedList.querySelector(`[data-id="${id}"]`)) return;


    const clone = card.cloneNode(true);
    recomendedList.appendChild(clone);
  }
});

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

if (favorites.length === 0) {
  recomendedList.style.display = `none`
  moijelania.style.display = `none`
  recomended.innerHTML = `
  <div id="dimon">
    <img id="favoite-img" src="public/images/Screenshot_9.jpg" alt="">
    <h2>Здесь сохраним ваши любимые товары</h2>
    <span id="sp">Нажмите ♡ в товарах, которые обычно заказываете</span>
    <span>или хотите купить позже</span>
  </div>  
  `
}

const dropdown = document.querySelector('.dropdownMain');
const btn = document.querySelector('.dropdown-btnMain');
const items = document.querySelectorAll('.dropdown-listMain li');

btn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});

items.forEach(item => {
  item.addEventListener('click', () => {
    btn.firstChild.textContent = item.textContent;
    dropdown.classList.remove('active');
  });
});



favorites.forEach(item => {
  const price = item.price / 10
  recomendedList.insertAdjacentHTML("beforeend", `
    <li id="recomended-section-item" data-id="${item.id}">
      <img class="item-favorite-img active" src="public/icons/free-icon-favoritere-on-13426236.png">

      <img class="item-img" src="${item.img}">

      <span class="item-price-card">${item.price}</span>
      <span class="item-price-withoutcard">${Number(item.price) + 100}</span>

      <div class="installment-plan">
        <span>${Number(price.toFixed(0))} сум/мес</span>
      </div>

      <span class="item-title">${item.title}</span>

      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png">
        <span>${item.rating}</span>
        <span>(${Number(Math.round(price.toFixed(0) / 100))} отзывов)</span>
      </div>

      <div class="item-button">
        <img src="public/icons/free-icon-add-to-cart-7541102.png">
        <span>В корзину</span>
      </div>
    </li>
  `);
});

document.addEventListener("click", (e) => {
  const heart = e.target.closest(".item-favorite-img");
  if (!heart) return;

  const card = heart.closest("#recomended-section-item");
  if (!card) return;

  const id = card.dataset.id;

  removeFavorite(id);
  card.remove();
});

const savedData = JSON.parse(localStorage.getItem("userProfile"));

let myname = document.getElementById("myname")

const divchik = document.getElementById("divchik")

if (savedData === null) {
  myname.textContent = `Войти`
}else{
  myname.textContent = `${savedData.firstName}`
}

divchik.addEventListener("click" , () => {
  alert("Перевод временно недоступен")
})