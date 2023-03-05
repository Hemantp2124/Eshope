import { type } from '@testing-library/user-event/dist/type';
import React, { useContext } from 'react'
import {CartContext} from '../Global/CartContext';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';



 const Cart = (props) => {
 
  const {shoppingCart,totalPrice,qty,dispatch} = useContext(CartContext);
  const handleToken = async (token) =>{
    
             const product = {name:'All product',Price:'totalPrice'}
             const response = await axios.post('http://localhost:8080/checkout',{
                   product,
                   token
              
             })

             const {status} = response.data;
             if(status === "success"){
              dispatch({type:'EMPTY'});
              props.history.push('/cart');
              
             }
  }
  
  return (
    <div className='cart-container'>
        <div className='cart-details'>
           {shoppingCart.length > 0 ? shoppingCart.map(cart=>(
            <div className='cart' key={cart.id}>
              <span  className='cart-image'>
                <img src={cart.img} alt="not found"/>
              </span>

              <span className='cart-product-name'>{cart.name}</span>
              <span className='cart-product-price'>${cart.Price}.00</span>
              <span className='inc'onClick={()=> dispatch({type:'INC', id: cart.id, cart})}><i className="fa fa-plus"></i></span>
              <span className='product-quantity'>{cart.qty}</span>
              <span className='dec' onClick={()=> dispatch ({type:'DEC', id:cart.id, cart})}><i className='fa fa-minus'></i></span>

              <span className='product-total-price'>${cart.Price * cart.qty}.00</span>
              <span className='delet-product' onClick={()=> dispatch({type:'DELETE', id:cart.id ,cart})}><i className="fa-solid fa-trash"></i></span>

              
            </div>
           ))
           :'sorry your cart is currently empty'}
        </div>
        {shoppingCart.length > 0 ? <div className='cart-summary'>
          <div className='Summary'>
           <h3>Cart Summary</h3>
             <div className='total-item'>
                <div className='items'>Total Items</div>
                <div className='items-count'>{qty}</div>
             </div>


             <div className='total-price-section'>
               <div className='just-title'>Total price</div>
               <div className='items-price'>${totalPrice}.00</div>
             </div>

             <div className='stripe-section'>
                <StripeCheckout 
                stripeKey='pk_test_51MgNFHSFC4YjFhyDnra56kmGnMpCevqeAZB9QQgr7mHFFvg9aigZKAXBeh3gRv7xPDvwqKvTuLMZT5wjBu7587u5009wdW8elL'
                token={handleToken}
                billingAddress
                shippingAddress 
                amount={totalPrice * 100}
                name="All products"
                >

                </StripeCheckout>
             </div>
          </div>
        </div>:''}
    </div>
  )
}
export default Cart;