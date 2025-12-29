export let ProductsSection1 = ``
export let ProductsSection2 = ``
export let ProductsSection3 = ``

 const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
    );
    const data = await res.json()





for (let i = 0; i < 5; i++) {
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
        <span class="item-amount-reviews">(${price.toFixed(0) / 100} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 5; i < 10; i++) {
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
        <span class="item-amount-reviews">(${price.toFixed(0) / 100} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}

for (let i = 10; i < 15; i++) {
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
        <span class="item-amount-reviews">(${price.toFixed(0) / 100} отзывов)</span>
      </div>

      <div id="item-button">
        <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
        <span id="item-button-text">В корзину</span>
      </div>
    </li>
  `;
}