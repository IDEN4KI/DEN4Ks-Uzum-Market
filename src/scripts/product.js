import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const productContainer = document.getElementById("product");

const res = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
);
const data = await res.json();

const product = data.find(item => String(item.id) === productId);

if (!product) {
    productContainer.innerHTML = "<h2>Товар не найден</h2>";
} else {
    const price = product.price / 10
    productContainer.innerHTML = `
<main data-id="${product.id}">
  <section id="product-section-left">
    <h2 id="product-title">${product.title}</h2>

    <div id="rating-div">
       <img id="rating-img" src="public/icons/icons8-звезда-48.png" />
       <span id="product-rating">${product.rating} (${Math.round(price.toFixed(0) / 100)} отзывов) • ${Math.round(price.toFixed(0) / 220)} фото • ${Math.round(price.toFixed(0) / 10)} заказов </span>
    </div>

    <div id="rating-content">
      Суперцена
    </div>
    <div id="images">
       <img id="product-img" src="${product.media[0]}" />
    </div>

    <div id="rerere">
      <span id="product-rating-mini">${product.rating}</span>
      <img id="rating-imge" src="public/icons/icons8-звезда-48.png" />
      <span id="product-rating-mini2">${Math.round(price.toFixed(0) / 100)} отзывов</span>
    </div>
    

    <div class="swiper">

    <div class="swiper-wrapper">
    
      <div class="swiper-slide"><img src="public/images/Screenshotcoment_1.jpg"></div>

      <div class="swiper-slide"><img src="public/images/Screenshotcoment_2.jpg"></div>

      <div class="swiper-slide"><img src="public/images/Screenshotcoment_3.jpg"></div>

      <div class="swiper-slide"><img src="public/images/Screenshotcoment_4.jpg"></div>

      <div class="swiper-slide"><img src="public/images/Screenshocomentt_5.jpg"></div>

      <div class="swiper-slide"><img src="public/images/Screenshotcoment_6.jpg"></div>

      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-scrollbar"></div>
    </div>
    </div>

    <div id="description">Описание</div>

    <ul id="description-list">
      <li class="description-item1">Данный товар обладает волшебными свойствами и способен поднять как настроение так и самооценку</li>
      <li class="description-item">Материал: Гидромега карбонат натрия </li>
      <li class="description-item">Дизайн: Им занимались Давинчи и Пекассо</li>
      <li class="description-item">Качество: Качественно </li>
      <li class="description-item">Легкий: Его вес составляет всего 3.14......</li>
      <li class="description-item">Компактный: Можно положить в карман</li>
      <li class="description-item">Вкусный: (без коментариев) </li>
    </ul>
    </section>  

        <section id="product-section-right">
            <span id="product-color">Цвет: ${product.colors}</span>

            <img id="product-imgae" src="${product.media[0]}" />

            <div id="right-section-top">
                <div id="right-section-likvidation">
                    <span id="right-section-likvidation-text">Хиты ликвидации</span>
                    <img id="right-section-likvidation-img" src="public/images/Screensывфыhot_7.jpg" />
                </div>

                <div id="e">
                    <span id="product-price">${product.price} сум</span>
                    <span id="product-price-without">Без карты DEN4K ${product.price + 2000} сум</span>
                </div>

                <div class="field">
                    <div class="ceni">
                        <button type="button">24 мес</button>
                        <button type="button">12 мес</button>
                        <button type="button">6 мес</button>
                        <button type="button">3 мес</button>
                    </div>
                    <span class="field-item">${product.price} сум</span>
                </div>

                <div id="kakoyto-item">
                    <a href="openPVZ.html" id="kakoyto-item1">
                        <span id="kakoyto-item1-text">Купить в 1 клик</span>
                    </a>

                    <div id="kakoyto-item2">
                        <img id="kakoyto-item1-шьп" src="public/icons/free-icon-favorite-13426236.png"  data-active="false" />
                    </div>
                </div>

                <div id="item-button">
                    <span class="item-button-text1">Добавить в корзину</span>
                    <span class="item-button-text2">Доставим завтра</span>
                </div>

                <div id="item-info">
                    <img id="produect-img" src="public/images/Screenshsfdfot_2.jpg" />
                    <span class="item-button-text3">Можно купить 100 шт</span>
                </div>

                <div id="item-info2">
                    <img id="produect-img" src="public/images/Screensqqhot_2.jpg" />
                    <span class="item-button-text3">1337 человек купили на этой неделе</span>
                </div>
            </div>

            <div id="right-section-middale">
                <span id="middale-text1">Доставим завтра</span>
                <span id="middale-text2">В пункт выдачи или курьером</span>
            </div>

            <div id="right-section-bottom">
                <span class="bottom-text1">Безопасная оплата удобным способом</span>
                <span class="bottom-text2">Оплачивайте картой, наличными или в рассрочку</span>
                <img class="product-img" src="public/images/Screenshot_234.jpg" />
                <div class="poloska"></div>
                <span class="bottom-text3">Простой и быстрый возврат</span>
                <span class="bottom-text4">Примем товары в течение 10 дней и сразу вернём</span>
                <span class="bottom-text5">деньги. <a href="#">Подробнее</a></span>
            </div>
        </section>
</main>    
  `;
}

document.addEventListener("click", (e) => {
    console.log("ЭТО:", e.target);
    const fav = e.target.closest("#kakoyto-item2");
    if (!fav) return;

    fav.classList.toggle("active");

    fav.src = fav.classList.contains("active")
        ? "public/icons/free-icon-favoritere-on-13426236.png"
        : "public/icons/free-icon-favoritere-13426236.png";

    fav.classList.remove("animate");
    void fav.offsetWidth;
    fav.classList.add("animate");

    e.target.classList.add("active");
});

const rassrochka = document.querySelectorAll(".ceni button");

let selecteditem = null;


rassrochka.forEach(btn => {
    btn.addEventListener("click", () => {
        rassrochka.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],

    loop: true,

    spaceBetween: 0,

    slidesPerView: 2,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        speed: 2000,

    },

})

document.addEventListener("click", (e) => {
    const heart = e.target.closest("#kakoyto-item1-шьп");
    if (!heart) return;

    const card = e.target.closest("main");
    if (!card) return;

    card.classList.toggle("active");

    heart.src = heart.classList.contains("active")
        ? "public/icons/free-icon-favoritere-on-13426236.png"
        : "public/icons/free-icon-favoritere-13426236.png";

    heart.classList.remove("animate");
    void heart.offsetWidth;
    heart.classList.add("animate");

    const product = {
        id: card.dataset.id,
        img: card.querySelector("#product-img").src,
        title: card.querySelector("#product-title").textContent,
        price: card.querySelector("#product-price").textContent,
        rating: card.querySelector("#product-rating-mini")?.textContent || "",
        colors: card.querySelector("#product-color")?.textContent || "",
    };

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


    if (favorites.some(item => item.id === product.id)) return;

    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));


    e.target.classList.add("active");
});

const savedData = JSON.parse(localStorage.getItem("userProfile"));

let myname = document.getElementById("myname")

const divchik = document.getElementById("divchik")

if (savedData === null) {
    myname.textContent = `Войти`
} else {
    myname.textContent = `${savedData.firstName}`
}

document.addEventListener("click", (e) => {
    const button = e.target.closest("#item-button");
    if (!button) return;

    if (button.classList.contains("added")) return;

    button.classList.add("added");

    const text = button.querySelector(".item-button-text1");
    const texte = button.querySelector(".item-button-text2");
    text.textContent = "Добавлено в корзину";
    texte.style.display = `none`
});

const recomendedList = document.getElementById("product");

document.addEventListener("click", (e) => {
  const button = e.target.closest("#item-button");
  if (!button) return;

  const card = button.closest("main");
  if (!card) return;

  const product = {
    id: card.dataset.id,
    img: card.querySelector("#product-img")?.src,
    title: card.querySelector("#product-title")?.textContent,
    price: card.querySelector("#product-price")?.textContent,
    rating: card.querySelector("#product-rating-mini")?.textContent || "",
    colors: card.querySelector("#product-color")?.textContent || "",
  };

  let myCart = JSON.parse(localStorage.getItem("myCart")) || [];

  if (myCart.some(item => item.id === product.id)) return;

  myCart.push(product);
  localStorage.setItem("myCart", JSON.stringify(myCart));

  button.classList.add("active");
});