export let cart = JSON.parse(localStorage.getItem('cart'));

// if(!cart){
  cart=[{
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2,
  },
{
  productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
  quantity: 1,
}]
// }



function savetostorage(){
    localStorage.setItem('cart',JSON.stringify(cart));
}

export function addtocart(productId){
    let matchingitem;

  cart.forEach((cartitem)=>{
    if(cartitem.productId === productId){
            matchingitem=cartitem;
    }

  });

  if(matchingitem){
    matchingitem.quantity+=1;
  }
  else{
    cart.push({
        productId: productId,
        quantity: 1
    
    })

}
savetostorage();

   }

  
   export function removefromcart(productId){
    const newcart=[];

    cart.forEach((pro)=>{
      if(pro.productId !== productId)
        {
          newcart.push(pro);
          
        }

    })
    cart=newcart;
    savetostorage();
    
   }

   