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

const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()





for (let i = 7; i < 12; i++) {
  const price = data[i].price / 10
  ProductsSection1 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 10000} </span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 25; i < 30; i++) {
  const price = data[i].price / 10
  ProductsSection2 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 13; i < 18; i++) {
  const price = data[i].price / 10
  ProductsSection3 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 45; i < 50; i++) {
  const price = data[i].price / 10
  ProductsSection4 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 10000} </span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 40; i < 45; i++) {
  const price = data[i].price / 10
  ProductsSection5 += `
    <li id="recomended-section-item">
       <div class="image-wrapper">
        <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
        <img id="item-img" src="${data[i].media[0]}" alt="item-img">
       </div>

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 11; i < 16; i++) {
  const price = data[i].price / 10
  ProductsSection6 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 16; i < 21; i++) {
  const price = data[i].price / 10
  ProductsSection7 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 19; i < 24; i++) {
  const price = data[i].price / 10
  ProductsSection8 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 40; i < 45; i++) {
  const price = data[i].price / 10
  ProductsSection9 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[0]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 30; i < 35; i++) {
  const price = data[i].price / 10
  ProductsSection10 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[1]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 35; i < 40; i++) {
  const price = data[i].price / 10
  ProductsSection11 += `
    <li id="recomended-section-item">
      <img class="item-favorite-img" src="public/icons/free-icon-favoritere-13426236.png" alt="item-favorite-img">
      <img id="item-img" src="${data[i].media[1]}" alt="item-img">

      <span class="item-price-card">${data[i].price}</span>
      <span class="item-price-withoutcard">${data[i].price + 100}</span>
      <div class="installment-plan">
        <span id="item-installment-plan">${price.toFixed(0)} сум/мес</span>
      </div> 
      <span class="item-title">${data[i].title}</span>
      <div class="reviews-block">
        <img class="star" src="public/icons/icons8-звезда-48.png" alt="star">
        <span class="item-rating">${data[i].rating}</span>
        <span class="item-amount-reviews">(${Math.round(price.toFixed(0) / 100)} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

