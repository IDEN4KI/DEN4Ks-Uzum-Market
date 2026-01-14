export let ProductsSection1 = ``
export let ProductsSection2 = ``
export let ProductsSection3 = ``
export let ProductsSection4 = ``
export let ProductsSection5 = ``
export let ProductsSection6 = ``
export let ProductsSection7 = ``
export let ProductsSection8 = ``
export let ProductsSection9 = ``
export let ProductsSection10 = ``
export let ProductsSection11 = ``

export let ProductsSectionFavorite = ``

const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()

const recomendedList = document.getElementById("recomended-section");

for (let i = 0; i < 5; i++) {
  const price = data[i].price / 10
  ProductsSection1 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 10000} </span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 7; i < 12; i++) {
  const price = data[i].price / 10
  ProductsSectionFavorite += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 10000} </span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}



for (let i = 30; i < 35; i++) {
  const price = data[i].price / 10
  ProductsSection2 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 15; i < 20; i++) {
  const price = data[i].price / 10
  ProductsSection3 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 26; i < 31; i++) {
  const price = data[i].price / 10
  ProductsSection4 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 10000} </span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 40; i < 45; i++) {
  const price = data[i].price / 10
  ProductsSection5 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
       <div class="image-wrapper">
        <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
        <img class="item-img" src="${data[i].media[0]}" alt="item-img">
       </div>

       <div class="colors">${data[i].colors}</div>

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 5; i < 10; i++) {
  const price = data[i].price / 10
  ProductsSection6 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price - 3000}</span>
      <span class="item-price-withoutcard">${data[i].price - 1000}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 18; i < 23; i++) {
  const price = data[i].price / 10
  ProductsSection7 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 1; i < 6; i++) {
  const price = data[i].price / 10
  ProductsSection8 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price - 5000}</span>
      <span class="item-price-withoutcard">${data[i].price - 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 9; i < 14; i++) {
  const price = data[i].price / 10
  ProductsSection9 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 22; i < 28; i++) {
  const price = data[i].price / 10
  ProductsSection10 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[1]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 20; i < 25; i++) {
  const price = data[i].price / 10
  ProductsSection11 += `
    <li id="recomended-section-item" data-id="${data[i].id}">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img class="item-img" src="${data[i].media[1]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span class="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div class="colors">${data[i].colors}</div>

      <div class="item-button">
        <img class="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span class="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

document.addEventListener("click", (e) => {
  console.log("ЭТО:", e.target);
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
  }

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!e.target.classList.contains("item-favorite-img")) return;

  const card = e.target.closest(".recomended-section-item");
  if (!card) return;

  const product = {
    id: card.dataset.id,
    img: card.querySelector(".item-img")?.src || "",
    title: card.querySelector(".item-title")?.textContent || "",
    price: card.querySelector(".item-price-card")?.textContent || "",
    priceWithoutCard: Number(card.querySelector(".item-price-card")?.textContent || 0) + 100,
    installment: card.querySelector(".installment-plan span")?.textContent || "",
    rating: card.querySelector(".reviews-block span")?.textContent || "",
    reviews: card.querySelector(".reviews-block span:nth-child(3)")?.textContent || ""
  };

  if (favorites.some(item => item.id === product.id)) return;

  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));

  e.target.classList.add("active");
});

document.addEventListener("click", (e) => {
  console.log("ЭТО:", e.target);
  const cart = e.target.closest(".item-button");
  if (!cart) return;

  if (e.target.classList.contains("item-button")) {

    const card = e.target.closest("#recomended-section-item");
    if (!card) return;

    const id = card.dataset.id;
  }

  let myCart = JSON.parse(localStorage.getItem("myCart")) || [];

  if (!e.target.classList.contains("item-button")) return;

  const card = e.target.closest(".recomended-section-item");
  if (!card) return;

  const product = {
    id: card.dataset.id,
    img: card.querySelector(".item-img")?.src || "",
    title: card.querySelector(".item-title")?.textContent || "",
    price: card.querySelector(".item-price-card")?.textContent || "",
    priceWithoutCard: Number(card.querySelector(".item-price-card")?.textContent || 0) + 100,
    installment: card.querySelector(".installment-plan span")?.textContent || "",
    rating: card.querySelector(".reviews-block span")?.textContent || "",
    reviews: card.querySelector(".reviews-block span:nth-child(3)")?.textContent || "",
    colors: card.querySelector(".colors")?.textContent || "",
  };

  if (myCart.some(item => item.id === product.id)) return;

  myCart.push(product);
  localStorage.setItem("myCart", JSON.stringify(myCart));

  e.target.classList.add("active");
});