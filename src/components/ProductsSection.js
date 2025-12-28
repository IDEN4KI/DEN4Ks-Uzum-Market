export let ProductsSection = ``
let innerHTML = `
        <li id="recomended-section-item">
          <img id="item-img" src="https://img.mvideo.ru/Big/50110498bb.jpg" alt="item-img">

          <span id="item-price-card"></span>
          <span id="item-price-withoutcard"></span>
          <span id="item-installment-plan"></span>
          <span id="item-title"></span>
          <span id="item-rating"></span>
          <span id="item-amount-reviews">( отзывов)</span>

          <div id="item-button">
            <img id="item-button-img" src="public/icons/free-icon-add-to-cart-7541102.png" alt="addCart">
            <span id="item-button-text">Никогда</span>
          </div>
        </li>
`

for (let i = 0; i < 5; i++) {
  ProductsSection += innerHTML;
}
