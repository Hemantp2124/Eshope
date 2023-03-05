import React,{useContext} from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { Banner } from './Banner';
import {CartContext} from '../Global/CartContext'


 const Products=()=>{
    const {products}= useContext(ProductsContext);
    const {dispatch} = useContext(CartContext);
    
    
  return (

   <div className='container-fluid'>
      <Banner/>
    <div className="products">
       {products.map((product,index)=>(
        <div className="product" key={index}>
         <div className="product-img" >
            <img src={product.img} alt="not found"/>
         </div>
         <div className="product-details">
            <div className="product-name">
            {product.name}
            </div>
            <div className="product-price">
            ${product.Price}.00
            </div>
         </div>
         <div className="add-to-cart" onClick={()=>dispatch({type:"ADD_TO_CART",id:product.id,product})}>Add to cart</div>
         {product.status === 'hot' ? <div className="hot">Hot</div>:''}
         {product.status === 'new'? <div className='new'>New</div>:''}
        </div>

       ))}
    </div>
    </div>
  )
}

export default Products;