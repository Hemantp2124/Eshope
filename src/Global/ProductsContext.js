import React,{createContext,useState} from 'react'
import casule from "../assets/casule.jpg"
import girlswatch from "../assets/girlswatch.jpg"
import Headphones from "../assets/Headphones.jpg"
import iphone from "../assets/iphone.jpg"
import menswatch from "../assets/menswatch.jpg"
import perfumelite from "../assets/perfumelite.jpg"
import perfumepink from "../assets/casule.jpg"
import clothes from "../assets/clothes.jpg"

export const ProductsContext =createContext();

 const ProductsContextProvider = (props) => {
const [products]=useState([
  {id:1,name:"casule",Price:500,img:casule,status:'hot'},
  {id:2,name:"girlswatch",Price:1250,img:girlswatch,status:'new'},
  {id:3,name:"Headphones",Price:500,img:Headphones,status:'hot'},
  {id:4,name:"iphone",Price:10000,img:iphone,status:'new'},
  {id:5,name:"menswatch",Price:28000,img:menswatch,status:'new'},
  {id:6,name:"perfumelite",Price:3000,img:perfumelite,status:'new'},
  {id:7,name:"perfumepink",Price:2500,img:perfumepink,status:'hot'},
  {id:7,name:"clothes",Price:500,img:clothes,status:'new'}
])


  return (

    <ProductsContext.Provider value={{products:[...products]}}>
     {props.children}
    </ProductsContext.Provider>
  )
}
export default ProductsContextProvider;