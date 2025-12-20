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

      <section id="header-middle"></section>

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
      }

      #palka{
        color: var(--black-a15);
      }

      .wrapper{
        display: flex;
        width: 70%;
        align-items: center;
        justify-content: center;
      }

      #map-tracker{
        width: 3%;
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


      
      header{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: #edeff2;
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
    </style>
`;
