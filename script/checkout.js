import { cart,removefromcart} from "../data/cart.js";
import { products } from "../data/products.js";

console.log(dayjs());
let total_cost=0;
let htmldetail='';
cart.forEach((product)=>{
    let cartitem=product.productId;
    let item;
    let matchitem;
    let quantity=product.quantity;
    

    products.forEach((item)=>{
        if(item.id === cartitem){
             matchitem = item;

             total_cost+=matchitem.priceCents*product.quantity/100; //for order summary
             
        }
    })

    
    
 htmldetail+=
   `<div class="cart-item-container js-cart-item-container-${matchitem.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchitem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchitem.name}
                </div>
                <div class="product-price">
                  ${matchitem.priceCents/100}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete"
                   data-product-id = "${matchitem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-1">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`

})

let totalno_ofitems=0;
cart.forEach((item)=>{
  totalno_ofitems+=item.quantity;
})

document.querySelector('.order-summary').innerHTML=htmldetail;
document.querySelector('.checkout-header-middle-section').innerHTML=
`Checkout (<a class="return-to-home-link"
            href="amazon.html">${totalno_ofitems} items</a>)`
            ;

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




