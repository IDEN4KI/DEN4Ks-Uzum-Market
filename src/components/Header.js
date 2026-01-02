export const Header = `
  <header>

      <section id="header-top">
          <div id="header-top-left">
            <div id="header-top-left-inside">
              <img id="map-tracker" src="public/icons/free-icon-location-pin-2776077.png" alt="map-tracker">
              <a id="header-link-first" href="#">Самарканд</a>
              <img id="arrow" src="public/icons/free-icon-down-arrow-748063.png" alt="arrow">
              <a id="header-link-second" href="pvz.html">Пункты выдачи</a>
            </div>
          </div>
          <div id="header-top-right">
            <a id="header-link-third" href="becomeSalesman.html">Стать продавцом</a>
            <span id="palka">|</span>
            <a id="header-link-fouth" href="openPVZ.html">Открыть пункт выдачи</a>
            <span id="palka2">|</span>
            <a id="header-link-fifth" href="#">Вопрос-ответ</a>
            <span id="palka2">|</span>
            <a id="header-link-sixth" href="#">Мои заказы</a>
            <span id="palka2">|</span>

          <div id="divchik">
            <img id="russia" src="public/icons/free-icon-russia-197408.png" alt="russia">
            <button id="button">Русский</button>
          </div>
        
        </div>
      </section>

       <div class="wrapper">
      <section id="header-middle">
        <div id="header-middle-left">
          <a href="index.html">
            <img href="index.html" src="public/images/Uzum-Market-Logo-Vector.svg-.png" alt="logo" id="logo">
          </a>
          <div id="midale">
            <img src="public/icons/Screenshot_3.png" alt="ya xz" id="midale-icon">
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
            <a href="#">Войти</a>
          </div>
          <div id="favorite-btn">
            <img id="icon" src="public/icons/free-icon-favorite-13426236.png" alt="login">
            <a href="favorite.html">Избранное</a>
          </div>
          <div id="cart-btn">
            <img id="icon" src="public/icons/free-icon-shopping-bag-icon-17287783.png" alt="login">
            <a href="cart.html">Корзина</a>
          </div>
        </div>
      </section>

      <ul id="header-bottom">
        <li id="categories">
          <img id="header-bottom-icon" src="public/icons/free-icon-flame-4535728.png" alt="fire">
          <a id="aa" href="#">Товары недели</a>
        </li>

        <li id="categories">
          <img id="header-bottom-icon" src="public/icons/free-icon-jacket-5987724.png" alt="collection">
          <a id="aa" href="#">Зимняя коллекция</a>
        </li>

        <li id="categories">
          <img id="header-bottom-icon" src="public/icons/free-icon-lipstick-8167676.png" alt="fashion">
          <a id="aa" href="#">Ваша красота</a>
        </li>

        <li id="categories">
          <img id="header-bottom-icon" src="public/icons/free-icon-spanish-guitar-262421.png" alt="hobby">
          <a id="aa" href="#">Хобби и творчество</a>
        </li>

        <li id="categories">
          <img id="header-bottom-icon" src="public/icons/free-icon-phone-11970327.png" alt="phones">
          <a id="aa" href="#">Смартфоны</a>
        </li>

        <li id="categories2">
          <div id="poloska-nevedimka"></div>
          <a id="aaa" href="#">Туризм,рыбалка и охота</a>
          <div id="poloska"></div>
        </li>

        <li id="categories2">
          <div id="poloska-nevedimka"></div>
          <a id="aaa" href="#">Электроника</a>
          <div id="poloska"></div>
        </li>

        <li id="categories2">
          <div id="poloska-nevedimka"></div>
          <a id="aaa" href="#">Бытовая техника</a>
          <div id="poloska"></div>
        </li>

        <li id="categories3">
          <a id="aaa" href="#">Ещё</a>
          <img id="arrow2" src="public/icons/free-icon-down-arrow-748063.png" alt="arrow">
        </li>
      </ul>
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

      #palka2{
        color: var(--gray-95);
      }

      #poloska{
        height: 2px;
        background-color: var(--black-a95);
        width: 0%;
        transition: 0.5s;
      }

      #categories2:hover{
        #aaa{
          color: var(--black-a80);
        }
        #poloska{
          
          height: 2px;
          background-color: var(--black-a95);
          width: 100%;
        }
      }

      #poloska-nevedimka{
        height: 2px;
        background-color: white;
        width: 100%;
      }

      .wrapper{
        display: flex;
        flex-direction: column;
        width: 69%;
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
        background-color: var(--gray-95);
      }

      #arrow{
        width: 1.5%;
      }

      #arrow2{
        width: 10%;
      }

      #russia{
        width: 15%;
      }

      #header-link-first{
        color: var(--black-a95);
      }

      #header-link-second{
        color: var(--black-a85);
        margin-left: 15px;
      }

      #header-link-third{
        color: var(--violet-55);
      }

      #header-link-third:hover{
        color: var(--violet-45);
      }

      #header-link-fouth{
        color: var(--violet-55);
      }

      #header-link-fouth:hover{
        color: var(--violet-45);
      }

      #header-link-fifth{
        color: var(--black-a55);
      }

      #header-link-fifth:hover{
        color: var(--black-a75);
      }

      #header-link-sixth{
        color: var(--black-a55);
      }

      #header-link-sixth:hover{
        color: var(--black-a75);
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
        flex-direction: column; 
        width: 100%;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
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

      #aa{
        color: var(--black-a95);
        font-size: 13px;
        font-weight: 500;
      }

    #aaa{
        color: var(--black-a60);
        font-size: 13px;
        font-weight: 500;
      }

      #categories{
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center; 
        gap: 5px; 
      }

      #categories3{
        display: flex;
        cursor: pointer;
        align-items: center;
        justify-content: center; 
        gap: 5px; 
        margin-left: 10px;
      }

      #categories3 :hover{
        color: var(--black-a80);
      }

      #categories2{
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        gap: 5px;
        cursor: pointer; 
      }

      #header-bottom-icon{
        width: 11%;
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
        background-color: var(--gray-95);
        display: flex;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 16.5%;
        font-size: 15px;
        font-weight: 440;
        width: 100%;
      }

      #header-bottom{
        display: flex;
        height: 30px;
        width: 100%;
        align-items: center;
        justify-content: center;

      }

      #header-bottom #categories{
        display: flex;
        height: 30px;
        width: 80%;
        align-items: center;
        justify-content: center;


      }

      #header-bottom #categories2{
        display: flex;
        height: 30px;
        width: 20%;
        align-items: center;
        justify-content: center;

      }

      #midale{
        display: flex;
        align-items: center;
        border-radius: 5px;
        padding: 3px;
        background: var(--uzum-violet-95);
        cursor: pointer;
      }

      #midale:hover{
        background: var(--uzum-violet-90);
        transition-duration: 0.3s;
      #catalog-btn{
        background: var(--uzum-violet-90);
        transition-duration: 0.3s;
      }
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
        margin-left: 20px;
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
        justify-content: space-around;
      }

      #login-btn{
        display: flex;
        gap: 10px;
        cursor: pointer;
        align-items: center;
        justify-content: center; 

      }

      #login-btn:hover{
        background: var(--black-a10);
        border-radius:5px;
      }

      #favorite-btn{
        display: flex;
        gap: 10px;
        cursor: pointer;
        align-items: center;
        justify-content: center; 
        height: 42px;
      }

      #favorite-btn:hover{
        background: var(--black-a10);
        border-radius:5px;
        
      }

      #cart-btn{
        display: flex;
        gap: 10px;
        cursor: pointer;
        align-items: center;
        justify-content: center; 
      }

      #cart-btn:hover{
        background: var(--black-a10);
        border-radius:5px;
      }

      
    </style>
`;
