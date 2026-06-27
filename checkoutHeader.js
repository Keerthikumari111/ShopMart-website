import {cart} from "../../data/cart.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

export function renderCheckoutHeader(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    const checkoutHeaderHTML = `
    <div class="header-content">
        <div class="checkout-header-left-section">
          <a href="shopMart.html">
            <img class="amazon-logo" src="images/logo.png">
            <img class="amazon-mobile-logo" src="images/logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section">
          Checkout (<a class="return-to-home-link js-checkout"
            href="shopMart.html">${cartQuantity} items</a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
      </div>
    `;

    document.querySelector('.js-checkout-header').innerHTML = checkoutHeaderHTML;

    renderOrderSummary();
}