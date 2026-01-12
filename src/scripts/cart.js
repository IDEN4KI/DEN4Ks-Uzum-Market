const savedData = JSON.parse(localStorage.getItem("userProfile"));
const divchik = document.getElementById("divchik")

let myname = document.getElementById("myname")


if (savedData === null) {
  myname.textContent = `Войти`
} else {
  myname.textContent = `${savedData.firstName}`
}

divchik.addEventListener("click", () => {
  alert("Перевод временно недоступен")
})

let cartContent = document.getElementById("cart-main-section")
let cart = [1]

if (cart.length === 0) {
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


