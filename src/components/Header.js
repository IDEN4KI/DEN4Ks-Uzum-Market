export const Header = `
  <header>
    <div class="wrapper">
      <section id="header-top">
        <div id="header-top-left">
          <div id="header-top-left-inside">
            <img id="map-tracker" src="public/icons/free-icon-location-pin-2776077.png" alt="map-tracker">
            <a id="header-link-first" href="#">Самарканд</a>
            <img id="arrow" src="public/icons/free-icon-down-arrow-748063.png" alt="arrow">
            <a id="header-link-second" href="#">Пункты выдачи</a>
          </div>
        </div>
        <div id="header-top-right">
          <a id="header-link-third" href="#">Стать продавцом</a>
          <span id="palka">|</span>
          <a id="header-link-fouth" href="#">Открыть пункт выдачи</a>
          <a id="header-link-fifth" href="#">Вопрос-ответ</a>
          <a id="header-link-sixth" href="#">Мои заказы</a>

          <div id="divchik">
            <img id="russia" src="public/icons/free-icon-russia-197408.png" alt="russia">
            <button id="button">Русский</button>
          </div>
        
        </div>
      </section>

      <section id="header-middle">
        <div id="header-middle-left">
          <img src="public/images/Uzum-Market-Logo-Vector.svg-.png" alt="logo" id="logo">
          <div id="midale">
            <img src="public/icons/Screenshot_3.jpg" alt="ya xz" id="midale-icon">
            <button id="catalog-btn">Каталог</button>
          </div>
        </div>

        <div id="header-middle-center">
          <input type="text" placeholder="Искать товары и категории">
          <div id="search-div">
            <img src="public/icons/free-icon-search-5636698.png" alt="ya xz" id="search-icon">
          </div> 
        </div>

        <div id="header-middle-right">
          <div id="login-btn">
            <img id="icon" src="public/icons/free-icon-user-icon-4360835.png" alt="login">
            <a href="#">Данил</a>
          </div>
          <div id="favorite-btn">
            <img id="icon" src="public/icons/free-icon-favorite-13426236.png" alt="login">
            <a href="#">Избранное</a>
          </div>
          <div id="cart-btn">
            <img id="icon" src="public/icons/free-icon-shopping-bag-icon-17287783.png" alt="login">
            <a href="#">Корзина</a>
          </div>
        </div>
      </section>

      <section id="header-bottom"></section>
    </div> 
  </header>

    <style>


      *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      #app{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      #palka{
        color: var(--black-a15);
      }

      .wrapper{
        display: flex;
        flex-direction: column;
        width: 70%;
        align-items: center;
        justify-content: center;
      }

      #map-tracker{
        width: 3%;
      }

      #search-icon{
        width: 30% ;
        cursor: pointer;
      }

      #search-div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15% ;
        border: 1px solid var(--black-a20) ;
        border-radius: 0 5px 5px 0;
        border-left: none;
        cursor: pointer;
        background-color: #edeff2;
      }

      #arrow{
        width: 1.5%;
      }

      #russia{
        width: 15%;
      }

      #header-link-first{
        color: black
      }

      #header-link-second{
        color: #2a2b33;
        margin-left: 15px;
      }

      #header-link-third{
        color: var(--violet-55);
      }

      #header-link-fouth{
        color: var(--violet-55);
      }

      #header-link-fifth{
        color: var(--black-a55);
      }

      #header-link-sixth{
        color: var(--black-a55);

      }

      #icon{
        width: 17%;
      }

      #catalog-btn{
        padding: 10px 14px;
        background: var(--uzum-violet-95);
        border: none;
        border-radius: 5px;
        font-weight: 500;
        font-size: 14px;
        color: var(--violet-55);
        cursor: pointer;
      }
      
      header{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
      }

      #button{
        display: flex;
        cursor: pointer;
        border: none;
        align-items: center;
        justify-content: center;
        width: 10%;
      }

      a{
        text-decoration: none;
      }

      #divchik{
        cursor: pointer;
        display: flex;
        width: 15%;
        align-items: center;
        justify-content: center;
        justify-content: space-around;
      }

      #header-top{
        background-color: #edeff2;
        display: flex;
        height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
        font-size: 15px;
        font-weight: 440;
        width: 100%;
      }

      #midale{
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 3px;
        background: var(--uzum-violet-95);
        cursor: pointer;
      }

      #midale-icon{
        margin-left: 10px ;
      }

      #header-middle{
        display: flex;
        align-items: center;
        justify-content: space-around; 
        width: 100%;
        height: 80px;
        background: #fff;
      }

      #header-middle-center{
        flex: 1;
        max-width: 500px;
        min-width: 500px;
        display: flex;
        margin: 0 10px;
      }

      #header-middle-right{
        display: flex;
        min-width: 330px;
        gap: 10px;
      }

      #header-middle-right a {
        text-decoration: none;
        color: #000;
        font-weight: 450;
      }

      #header-middle-center input{
        flex: 1;
        padding: 12px;
        border: 1px solid var(--black-a20);
        border-radius: 5px 0 0 5px;
        outline: none;
        border-right: none;
      }

      #header-middle-left{
        display: flex;
        align-items: center;
        gap: 16px;
      }

      #logo {
        height: 32px;
        margin-left: 40px;
        cursor: pointer;
      }

      #search-btn{
        padding: 0 16px;
        border: 1px solid var(--black-a20);
        border-left: none;
        background: #fff;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }

      #header-top-left{
        display: flex;
        margin-left: 15px;
        justify-content: space-around;
      }

      #header-top-left-inside{
        display: flex;
        align-items: center;
        gap: 6px;

      }

      #header-top-right{
        display: flex;
        align-items: center;
        width: 100%;
        margin-right: 15px;
        justify-content: space-around;
      }

      #login-btn{
        display: flex;
        gap: 10px;
        margin-left: 40px;
        cursor: pointer;

      }

      #favorite-btn{
        display: flex;
        gap: 10px;
        margin-right: 20px;
        cursor: pointer;

      }

      #cart-btn{
        display: flex;
        gap: 10px;
        margin-right: 25px;
        cursor: pointer;

      }
    </style>
`;
