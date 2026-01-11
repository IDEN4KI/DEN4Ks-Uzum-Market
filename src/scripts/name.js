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