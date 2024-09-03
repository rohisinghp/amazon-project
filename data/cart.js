export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=
  
  [

]}

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

   