export const cartReducer=(state,action)=>{
  const {shoppingCart,totalPrice,qty} = state;
  let product;
  let index;
  let updatePrice;
  let updateQty;
switch(action.type){

  case 'ADD_TO_CART':
    const check = shoppingCart.find(product=> product.id === action.id)
    if(check){
      return state;
    }else{
      product=action.product;
      product['qty'] = 1;
      updateQty = qty + 1;
      updatePrice = totalPrice + product.Price;
      return{shoppingCart:[product,...shoppingCart],totalPrice:updatePrice,qty:updateQty}

    }
  break;

   case 'INC':
    product = action.cart;
    product.qty = product.qty + 1;
    updatePrice = totalPrice + product.Price;
    updateQty = qty + 1;
    index = shoppingCart.findIndex(cart => cart.id === action.id);
    shoppingCart[index]=product;
    return{shoppingCart:[...shoppingCart],totalPrice:updatePrice,qty:updateQty}
  break;

  case 'DEC':
    product = action.cart;
    if(product.qty > 1){
        product.qty = product.qty - 1;
        updatePrice = totalPrice - product.Price;
        updateQty = qty - 1;
        index = shoppingCart.findIndex(cart => cart.id === action.id);
    shoppingCart[index]=product;
        return {shoppingCart:[...shoppingCart],totalPrice:updatePrice,qty:updateQty}
    }else{
      return state;
    }
  break;
  
  case 'DELETE':
    const filtered = shoppingCart.filter(product => product.id !== action.id)
    product = action.cart;
    updateQty = qty - product.qty;
    updatePrice = totalPrice - product.Price  * product.qty;
    return {shoppingCart:[...filtered],totalPrice:updatePrice,qty:updateQty}
  
  break;

  case 'EMPTY':
    return  {shoppingCart:[],totalPrice:0,qty:0}



   
  default:
    return state;
}
}

export default cartReducer;