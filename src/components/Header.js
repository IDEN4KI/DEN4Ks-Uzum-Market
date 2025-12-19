export const Header = `
  <header>
    <section id="header-top">
      <div id="header-top-left">
        <a id="header-link-first" href="#">Самарканд</a>
        <a id="header-link-second" href="#">Пункты выдачи</a>
      </div>
      <div id="header-top-right">
        <a id="header-link-third" href="#">Стать продавцом</a>
        <a id="header-link-fouth" href="#">Открыть пункт выдачи</a>
        <a id="header-link-fifth" href="#">Вопрос-ответ</a>
        <a id="header-link-sixth" href="#">Мои заказы</a>

        <div>
          <img src="" alt="">
          <button>Русский</button>
        </div>
        
      </div>
    </section>

    <section id="header-middle"></section>

    <section id="header-bottom"></section>
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
      }
      
      header{
        display: flex;
        justify-content: space-around;
      }

      a{
        text-decoration: none;
      }

      #header-top{
        background-color: #edeff2;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
      }
    </style>
`;
