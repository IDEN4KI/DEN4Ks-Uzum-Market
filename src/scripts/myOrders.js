let myOrdersitemnotmain1 = document.querySelector(".myOrders-item-notmain1")
let myOrdersrightbutton1 = document.querySelector(".myOrders-right-button1")
let myOrdersrightbutton2 = document.querySelector(".myOrders-right-button2")
let myOrdersrightbuttonactive = document.querySelector(".myOrders-right-button-active")
let myOrdersright = document.getElementById("myOrders-right")

document.addEventListener("click", (e) => {
    console.log("CLICK", e.target);
    const rating = e.target.closest(".myOrders-item-notmain1");
    const allOrders = e.target.closest(".myOrders-right-button1")
    const notpurchased = e.target.closest(".myOrders-right-button2")
    const active = e.target.closest(".myOrders-right-button-active")


    if (allOrders) {
        myOrdersright.innerHTML = `
        <div id="myOrders-right-top">
            <div class="myOrders-right-button1">Все заказы</div>
            <div class="myOrders-right-button2">Неоплаченные</div>
            <div class="myOrders-right-button-active">Активные</div>
        </div>

        <div id="myOrders-right-main">
            <h1 id="myOrders-right-main-text">Здесь пусто</h1>
            <div id="span-spanich">
                <span class="myOrders-right-main-span">У вас отсутствуют активные заказы!</span>
                <span class="myOrders-right-main-span">Воспользуйтесь поиском, чтобы найти всё что нужно.</span>
            </div>

            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button1">Начать покупки</div>
            </a>
            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button2">Вернуться на главную</div>
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

    if (notpurchased) {
        myOrdersright.innerHTML = ` 
        <div id="myOrders-right-top">
            <div class="myOrders-right-button1">Все заказы</div>
            <div class="myOrders-right-button2">Неоплаченные</div>
            <div class="myOrders-right-button-active">Активные</div>
        </div>

        <div id="myOrders-right-main">
            <h1 id="myOrders-right-main-text">Здесь пусто</h1>
            <div id="span-spanich">
                <span class="myOrders-right-main-span">У вас отсутствуют активные заказы!</span>
                <span class="myOrders-right-main-span">Воспользуйтесь поиском, чтобы найти всё что нужно.</span>
            </div>

            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button1">Начать покупки</div>
            </a>
            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button2">Вернуться на главную</div>
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

    if (active) {
        myOrdersright.innerHTML = `
        <div id="myOrders-right-top">
            <div class="myOrders-right-button1">Все заказы</div>
            <div class="myOrders-right-button2">Неоплаченные</div>
            <div class="myOrders-right-button-active">Активные</div>
        </div>

        <div id="myOrders-right-main">
            <h1 id="myOrders-right-main-text">Здесь пусто</h1>
            <div id="span-spanich">
                <span class="myOrders-right-main-span">У вас отсутствуют активные заказы!</span>
                <span class="myOrders-right-main-span">Воспользуйтесь поиском, чтобы найти всё что нужно.</span>
            </div>

            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button1">Начать покупки</div>
            </a>
            <a id="liink" href="index.html">
                <div id="myOrders-right-main-button2">Вернуться на главную</div>
            </a>
        </div>

        `
    }


})
