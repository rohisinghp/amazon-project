
const products = [
    {
    image :'images/products/athletic-cotton-socks-6-pairs.jpg',
    title :'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating :{
         imagerate: 'images/ratings/rating-45.png',
        rating_number: 87
    },
    price: 1090
},

{
    image :'images/products/intermediate-composite-basketball.jpg',
    title :'Intermediate Size Basketball',
    rating :{
         imagerate: 'images/ratings/rating-45.png',
        rating_number: 127
    },
    price: 700
},

{
    image :'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    title :'T-shirt',
    rating :{
         imagerate: 'images/ratings/rating-45.png',
        rating_number: 57
    },
    price: 799
}

];

let html='';

products.forEach((product) => {
    
html += `
 <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.title}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.rating.imagerate}">
            <div class="product-rating-count link-primary">
             ${product.rating.rating_number}
            </div>
          </div>

          <div class="product-price">
            $${product.price}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
`
});

const pro = document.querySelector('.products-grid');
pro.innerHTML=html;
