const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()



const recomendedList = document.getElementById("recomended-section-favorite");

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

  if (!e.target.classList.contains("remove-favorite")) return;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(item => item.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  card.remove();
});

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

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




