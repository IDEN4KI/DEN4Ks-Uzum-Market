const res = await fetch(
  `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json()

console.log(data);


const savedData = JSON.parse(localStorage.getItem("userProfile"));
const divchik = document.getElementById("divchik")
let cartContainer = document.getElementById("cart-Content-Left")
const myCart = JSON.parse(localStorage.getItem("myCart")) || [];
let ugaBuga = document.getElementById("uga-buga")

let cartContent = document.getElementById("cart-main-section")
let myname = document.getElementById("myname")
let cartlistitem1 = document.getElementById("cart-list-item1")



// ugaBuga.innerHTML = `Товаров: ${myCart.length}`
// cartlistitem1.innerHTML = `Товары (${myCart.length}):`

if (savedData === null) {
  myname.textContent = `Войти`
} else {
  myname.textContent = `${savedData.firstName}`
}

divchik.addEventListener("click", () => {
  alert("Перевод временно недоступен")
})

if (myCart.length === 0) {
  cartContent.innerHTML = `
  <div id="dimon">
    <img id="kotik" src="public/images/kotikt_2.jpg" alt="kotik">
    <h2>В корзине пока пусто</h2>
    <div id="dimonchik">
    <span id="sp">Начните с главной страницы — нужный товар можно найти</span>
    <span>через поиск или заглянуть в подборки</span>
    </div>
    <a id="cart-button" href="index.html">
      <span>На главную</span>
    </a>
  </div>  
  `
}

myCart.forEach(item => {
  const price = item.price / 10
  cartContainer.insertAdjacentHTML("beforeend", `
    <div id="cart-item" data-id="${item.id}">

      <h3>Доставка DEN4K Market</h3>

      <h2>Доставим завтра</h2>

      <div id="cart-item-itema"> 

        <img class="item-img" src="${item.img}">

        <section id="item-block">
          <div id="item-block-top">
             <span class="item-title">${item.title}</span>

             <button id="delete">Удалить товар</button>
          </div>
          
          <div id="item-block-bottom">
            <div id="info">
              <div class="reviews-block">
                <span id="rating">Рейтинг:</span>
                <span>${item.rating}</span>
                <span>(${Number(Math.round(price.toFixed(0) / 100))} отзывов)</span>
              </div>

              <div class="colors"><strong>Цвет:</strong> ${item.colors}</div>
            </div>

            <div id="console">
              <span class="minus">-</span>
              <span class="number">1</span>
              <span class="plus">+</span>
            </div>

            <div id="prices">
              <span class="item-price-card">${item.price} сум</span>

              <span class="item-price-withoutcard">без карты DEN4K ${Number(item.price) + 3000} сум</span>
            </div> 
          </div>  
        </section>
      </div>
    </div>
  `);
});


document.addEventListener("click", (e) => {
  const remove = e.target.closest("#delete");
  if (!remove) return;

  const cart = remove.closest("#cart-item");
  if (!cart) return;

  const id = cart.dataset.id;

  removeProduct(id);
  cart.remove();
});

function clearCart() {
  localStorage.removeItem("myCart");

  location.reload()

  alert("Заказ успешно оформлен!");

  
}

const buyButton = document.getElementById("Buy-button");

buyButton.addEventListener("click", () => {
  clearCart();
});


updateCartSummary();


function getProduct() {
  return JSON.parse(localStorage.getItem("myCart")) || [];
}

function saveProduct(myCart) {
  localStorage.setItem("myCart", JSON.stringify(myCart));
}

function isProduct(id) {
  return getProduct().some(item => item.id === id);
}

function removeProduct(id) {
  const myCart = getProduct().filter(item => item.id !== id);
  saveProduct(myCart);
  location.reload()
  if (myCart.length === 0) {
    location.reload()
  }
}

cartContainer.addEventListener("click", (e) => {

  if (e.target.classList.contains("plus")) {
    changeCount(e.target, 1);
  }


  if (e.target.classList.contains("minus")) {
    changeCount(e.target, -1);
  }
});

function changeCount(target, delta) {
  const cartItem = target.closest("#cart-item");

  const numberEl = cartItem.querySelector(".number");
  const priceCardEl = cartItem.querySelector(".item-price-card");
  const priceWithoutCardEl = cartItem.querySelector(".item-price-withoutcard");

  let count = Number(numberEl.textContent);

  if (count + delta < 1) return;

  const basePrice =
    Number(priceCardEl.textContent.replace(/\D/g, "")) / count;

  count += delta;
  numberEl.textContent = count;

  const newPrice = basePrice * count;

  priceCardEl.textContent = `${newPrice} сум`;
  priceWithoutCardEl.textContent = `без карты DEN4K ${newPrice + 3000} сум`;

  updateCartSummary();
}

function updateCartSummary() {
  const cartItems = document.querySelectorAll("#cart-item");

  let totalPrice = 0;
  let totalCount = 0;

  cartItems.forEach(item => {
    const priceEl = item.querySelector(".item-price-card");
    const countEl = item.querySelector(".number");

    const price = Number(priceEl.textContent.replace(/\D/g, ""));
    const count = Number(countEl.textContent);

    totalPrice += price;
    totalCount += count;
  });

  document.getElementById("cart-list-item2").textContent = `${totalPrice} сум`;
  document.getElementById("cart-list-item4").textContent = `${totalPrice} сум`;
  document.getElementById("cart-list-item1").textContent = `Товары (${totalCount}):`;
  document.getElementById("uga-buga").textContent = `Товаров:${totalCount}`;

}