import { Header } from "../components/Header"
import "../styles/main.css"

import Swiper from 'swiper';

import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';


const app = document.getElementById("app")

app.innerHTML = `
  ${Header}
  
    <div class="swiper">

    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="public/icons/free-icon-flame-4535728.png"></div>
      <div class="swiper-slide"><img src="public/icons/free-icon-flame-4535728.png"></div>
      <div class="swiper-slide">Slide 3</div>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>

    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>
  </div>
`

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],

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
