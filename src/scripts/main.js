import { Header } from "../components/Header"
import { ProductsSection1 } from "../components/ProductsSection";
import { ProductsSection2 } from "../components/ProductsSection";
import { ProductsSection3 } from "../components/ProductsSection";
import { ProductsSection4 } from "../components/ProductsSection";
import { ProductsSection5 } from "../components/ProductsSection";
import { ProductsSection6 } from "../components/ProductsSection";
import { ProductsSection7 } from "../components/ProductsSection";
import { ProductsSection8 } from "../components/ProductsSection";
import { ProductsSection9 } from "../components/ProductsSection";
import { ProductsSection10 } from "../components/ProductsSection";
import { ProductsSection11 } from "../components/ProductsSection";



import "../styles/main.css"

import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const link = document.getElementById("header-link-third")
const salesman = document.getElementById("main-sales")
const app = document.getElementById("app")


app.innerHTML = `
  ${Header}
  
    <div class="swiper">

    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="public/images/Screenshot_32-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_31-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_29-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_28-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_27-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_26.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_25-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_24.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_23.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_22-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_21-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_20.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_19-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_18.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_17-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_16.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_15.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_14.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_13.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_12.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_11.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_10.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_30.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_9-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_8.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_7.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_6-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_5-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshoot_4.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_3-Photoroom.jpg"></div>
      <div class="swiper-slide"><img src="public/images/Screenshot_1.jpg"></div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>

    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
  </div>

  <section id="under-swiper">
    <div id="under-swiper-section">
      <img id="im" src="public/icons/free-icon-teddy-bear-620744.png" alt="teddy">
      <a id="aaaa" href="#">Детский мир</a>
    </div>

    <div id="under-swiper-section">
      <img id="im" src="public/icons/free-icon-tick-11708440.png" alt="prises">
      <a id="aaaa" href="#">Гарантия низких цен</a>
    </div>

    <div id="under-swiper-section">
      <img id="im" src="public/icons/free-icon-summer-clothing-7707925.png" alt="clouth">
      <a id="aaaa" href="#">Модный базар</a>
    </div>

    <div id="under-swiper-section">
      <img id="im" src="public/icons/free-icon-christmas-tree-3699499.png" alt="elka">
      <a id="aaaa" href="#">Новый год</a>
    </div>
  </section>

    <section id="recomended">
      <h1>Популярное</h1>

      <ul id="recomended-section">
        ${ProductsSection1}
      </ul>

      <ul id="recomended-section">
        ${ProductsSection2}
      </ul>

      <ul id="recomended-section">
        ${ProductsSection3}
      </ul>

    </section>

      <div id="more-button">
        <span id="more-button-text" >Показать ешё 10</span>
      </div>

    <section id="sales-for-electronics">
      <h1>Скидки на технику</h1>

      <ul id="recomended-section">
        ${ProductsSection6}
      </ul>

    </section>

      <div id="more-button2">
        <span id="more-button-text" >Показать ешё 5</span>
      </div>

    <section id="low-prise">
      <h1>Гарантия низких цен</h1>

      <ul id="recomended-section">
        ${ProductsSection8}
      </ul>

    </section>

    <section id="household-appliances">
      <h1>Бытовая техника</h1>

      <ul id="recomended-section">
        ${ProductsSection9}
      </ul>

    </section>

      <div id="more-button3">
        <span id="more-button-text" >Показать ешё 5</span>
      </div>

    <section id="lowquality-TV">
      <h1>Телевизоры низкого качества (буквально)</h1>

      <ul id="recomended-section">
        ${ProductsSection10}
      </ul>

    </section>

      <div id="more-button4">
        <span id="more-button-text" >Показать ешё 5</span>
      </div>
      

  <footer class="footer-top">
    <div id="footer-div">
      <span>О нас</span>

      <a href="pvz.html">Пункты выдачи</a>
      <a href="vakansii.html">Вакансии</a>
    </div>

    <div id="footer-div">
      <span>Пользователям</span>

      <a href="#">Связаться с нами</a>
      <a href="#">Вопрос - Ответ</a>
    </div>

    <div id="footer-div">
      <span>Для предпринимателей</span>

      <a href="becomeSalesman.html">Продавайте на DEN4K</a>
      <a href="becomeSalesman.html">Вход для продавцов</a>
      <a href="becomeSalesman.html">Открыть пункт выдачи</a>
    </div>

    <div id="footer-div">
      <div id="footer-div4-top">
        <img id="qr-code" src="public/images/Screeneeshot_7.jpg" alt="qr-code">
        <div id="ya-xz">
          <span id="blyat">Покупать удобнее в <br> приложении</span>
          <span>Наведите камеру и скачайте <br>бесплатное приложение в App <br>Store и Google Play</span>
        </div>
      </div>
      <span>DEN4K в соцсетях</span>
      <div id="footer-div4-bottom">
        <img id="footer-icon" src="public/icons/Screenshot_1-Photoroom.png" alt="">
        <img id="footer-icon" src="public/icons/Screenshot_3-Photoroom.png" alt="">
        <img id="footer-icon" src="public/icons/Screenshot_4-Photoroom.png" alt="">
        <img id="footer-icon" src="public/icons/Screenshot_5-Photoroom.png" alt="">
      </div>
    </div>
  </footer>

  <footer class="footer-bottom">
    <a class="footer-link" href="#">Соглашение о конфиденциальности</a>
    <a class="footer-link" href="#">Пользовательское соглашение</a>
    <a class="footer-link" href="#">Положение по обработке персональных данных</a>
    <span id="footer-span">2026 © ИП ООО «DEN4K MARKET». ИНН 335110733. Все права защищены»</span>
  </footer>
`

const recomended = document.getElementById("recomended")
const moreButton = document.getElementById("more-button")
const content = `      
  <ul id="recomended-section">
    ${ProductsSection4}
  </ul>

  <ul id="recomended-section">
    ${ProductsSection5}
  </ul>
`


moreButton.addEventListener('click', () => {
  recomended.innerHTML += content
  moreButton.style.display = 'none'
});

const electronics = document.getElementById("sales-for-electronics")
const moreButton2 = document.getElementById("more-button2")
const content2 = `      
  <ul id="recomended-section">
    ${ProductsSection7}
  </ul>
`

moreButton2.addEventListener('click', () => {
  electronics.innerHTML += content2
  moreButton2.style.display = 'none'
});

const household = document.getElementById("household-appliances")
const moreButton3 = document.getElementById("more-button3")
const content3 = `      
  <ul id="recomended-section">
    ${ProductsSection4}
  </ul>
`

moreButton3.addEventListener('click', () => {
  household.innerHTML += content3
  moreButton3.style.display = 'none'
});

const lowqualityTV = document.getElementById("lowquality-TV")
const moreButton4 = document.getElementById("more-button4")
const content4 = `      
  <ul id="recomended-section">
    ${ProductsSection11}
  </ul>
`

moreButton4.addEventListener('click', () => {
  lowqualityTV.innerHTML += content4
  moreButton4.style.display = 'none'
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("item-favorite-img")) return;

  const card = e.target.closest("#recomended-section-item");
  if (!card) return;

  const product = {
    id: card.dataset.id,
    img: card.querySelector(".item-img").src,
    title: card.querySelector(".item-title").textContent,
    price: card.querySelector(".item-price-card").textContent,
    rating: card.querySelector(".item-rating")?.textContent || ""
  };

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];


  if (favorites.some(item => item.id === product.id)) return;

  favorites.push(product);
  localStorage.setItem("favorites", JSON.stringify(favorites));


  e.target.classList.add("active");
});

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

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],

  loop: true,

  spaceBetween: 0,

  pagination: {
    el: '.swiper-pagination',
  },


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

async function getData() {
  try {
    const res = await fetch("/backend/db.json")
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error")
  }
}

async function healthcheck() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/healthcheck`
    )
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

async function registerUser() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: "+998941234567",
          password: "test1",
        }),
      }
    )
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

async function loginUser() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: "+998941234567",
          password: "test1",
        }),
      }
    )
    const data = await res.json()

    localStorage.setItem("access-token", data.data.token)

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

async function getAllProducts() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/main/products`
    );
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}


async function removeFromFavorites() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL
      }/api/v1/user/favorites/693d0b2d7b7d4a5c0f2c71b9`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    );
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

async function addToCart() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL
      }/api/v1/user/cart/693d0b2d7b7d4a5c0f2c71b9`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    );
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

async function getUserInfo() {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL}/api/v1/user/user-info`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access-token")}`,
        },
      }
    )
    const data = await res.json()

    console.log(data)
  } catch (error) {
    throw new Error("Internal Server Error", error)
  }
}

const savedData = JSON.parse(localStorage.getItem("userProfile"));
const divchik = document.getElementById("divchik")

let myname = document.getElementById("myname")


if (savedData === null) {
  myname.textContent = `Войти`
}else{
  myname.textContent = `${savedData.firstName}`
}

divchik.addEventListener("click" , () => {
  alert("Перевод временно недоступен")
})

getData()
healthcheck()
// registerUser()
loginUser()
removeFromFavorites()
addToCart()
getAllProducts()
getUserInfo()



