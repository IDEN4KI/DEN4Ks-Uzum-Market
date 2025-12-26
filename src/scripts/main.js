import { Header } from "../components/Header"
import "../styles/main.css"

import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';


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
      <a id="aaaaa" href="#">Рекомендуем</a>

      <ul id="recomended-section">
        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">
          
        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>
      </ul>

      <ul id="recomended-section">
        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">

        </li>
      </ul>

      <ul id="recomended-section">
        <li id="recomended-section-li">
          
        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li">
          
        </li>

        <li id="recomended-section-li">

        </li>

        <li id="recomended-section-li"></li>
      </ul>

    </section>
`

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
      `${
        import.meta.env.VITE_BACKEND_BASE_URL
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
      `${
        import.meta.env.VITE_BACKEND_BASE_URL
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


getData()
healthcheck()
// registerUser()
loginUser()
removeFromFavorites()
addToCart()
getAllProducts()
getUserInfo()
