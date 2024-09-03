import { cart,removefromcart} from "../data/cart.js";
import { products } from "../data/products.js";
import { paymentsum, total_cost } from "./ordersummary.js";

export function deletebtn(){
    

document.querySelectorAll('.js-delete')
.forEach((link)=>{
    link.addEventListener('click',()=>{
         
           const productId=link.dataset.productId;
           console.log(productId)
           removefromcart(productId);
        

      const container = document.querySelector(`.js-cart-item-container-${productId}`)
          
      container.remove();
     });
    

    
 });
}

 export function update(){
  let totalno_ofitems=0;
 cart.forEach((item)=>{
    totalno_ofitems+=item.quantity;
  })

 document.querySelector('.payment-summary').innerHTML=
 ` <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalno_ofitems}):</div>
            <div class="payment-summary-money">$${(total_cost.toFixed(2))}</div>
          </div>
            
          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$4.99</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(Math.round(total_cost)+4.99).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(Math.round(total_cost*10/100)).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(Math.round(total_cost+4.99)+(Math.round(total_cost*10/100))).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
      </div> 
 `
 ;

 }
