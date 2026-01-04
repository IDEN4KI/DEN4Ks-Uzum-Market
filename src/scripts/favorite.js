const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()

const recomendedList = document.getElementById("recomended-section");

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

favorites.forEach(item => {
  recomendedList.insertAdjacentHTML("beforeend", `
    <li class="recomended-section-item" data-id="${item.id}">
      <img class="item-img" src="${item.img}">
      <span class="item-title">${item.title}</span>
      <span class="item-price-card">${item.price}</span>

      <button class="remove-favorite">Удалить</button>
    </li>
  `);
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("remove-favorite")) return;

  const card = e.target.closest(".recomended-section-item");
  const id = card.dataset.id;

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(item => item.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  card.remove();
});




