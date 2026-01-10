let myOrdersitemnotmain1 = document.querySelector(".myOrders-item-notmain1")
let myOrdersrightbutton1 = document.querySelector(".myOrders-right-button1")
let myOrdersrightbutton2 = document.querySelector(".myOrders-right-button2")
let myOrdersrightbuttonactive = document.querySelector(".myOrders-right-button-active")
let myOrdersright = document.getElementById("myOrders-right")

document.addEventListener("click", (e) => {
    console.log("CLICK", e.target);
    const waitFor = e.target.closest(".myOrders-right-button1")
    const already = e.target.closest(".myOrders-right-button-active")


    if (waitFor) {
        myOrdersright.innerHTML = `
                <h2 id="my-rating">Мои отзывы</h2>
                <div id="myOrders-right-top">
                    <div class="myOrders-right-button1">Ждут оценку</div>
                    <div class="myOrders-right-button-active">Уже оценили</div>
                </div>

                <div id="myOrders-right-main">
                    <img id="kotik" src="public/images/kotikt_2.jpg" alt="kotik">
                    <div id="span-spanich">
                        <span class="myOrders-right-main-span1">Здесь появятся ваши отзывы о покупках</span>
                        <span class="myOrders-right-main-span">Делитесь впечатлениями — это поможет сделать выбор другим покупателям</span>
                    </div>

                    <a id="liink" href="index.html">
                        <div id="myOrders-right-main-button1">Перейти на главную</div>
                    </a>
                </div>

        <style>
            .myOrders-right-button1{
                background-color: var(--gray-10);
                color: white;
                padding: 1%;
                border-radius: 20px;
                cursor: default;
            }

            .myOrders-right-button1:hover{
                background-color: var(--gray-10);
            }

            .myOrders-right-button-active{
                background-color: var(--gray-90);
                padding: 1%;
                border-radius: 20px;
                cursor: pointer;
                transition: 0.2s;
                color: black;
            }

             .myOrders-right-button-active:hover{
              background-color: var(--gray-80);
            }

        </style>

        `
    }

    if (already) {
        myOrdersright.innerHTML = ` 
                <h2 id="my-rating">Мои отзывы</h2>
                <div id="myOrders-right-top">
                    <div class="myOrders-right-button1">Ждут оценку</div>
                    <div class="myOrders-right-button-active">Уже оценили</div>
                </div>

                <div id="myOrders-right-main">
                    <img id="kotik" src="public/images/kotikt_2.jpg" alt="kotik">
                    <div id="span-spanich">
                        <span class="myOrders-right-main-span1">Здесь появятся ваши отзывы о покупках</span>
                        <span class="myOrders-right-main-span">Делитесь впечатлениями — это поможет сделать выбор другим покупателям</span>
                    </div>

                    <a id="liink" href="index.html">
                        <div id="myOrders-right-main-button1">Перейти на главную</div>
                    </a>
                </div>

        <style>
            .myOrders-right-button2{
                background-color: var(--gray-10);
                color: white;
                padding: 1%;
                border-radius: 20px;
                cursor: default;
            }

            .myOrders-right-button2:hover{
                background-color: var(--gray-10);
            }

            .myOrders-right-button-active{
                background-color: var(--gray-10);
                padding: 1%;
                border-radius: 20px;
                transition: 0.2s;
                color: white;
                cursor: default;
            }

             .myOrders-right-button-active:hover{
              background-color: var(--gray-10);
            }

        </style>

        `
    }

})

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