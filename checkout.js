import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkoutHeader.js";
import {loadProducts , loadProductsFetch} from '../data/products.js'
import { loadCart } from "../data/cart.js";

async function loadPage(){
    try{
        await loadProductsFetch();

        const value = await new Promise((resolve , reject) =>{

            loadCart(() =>{
                resolve('value3');
            });
        });
         
    } catch (error){
        console.log('Unexpected error. Please try again later.');
    }
    
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();


// let calculate = ((Math.round(2000.5)).toFixed(2)/100);
 