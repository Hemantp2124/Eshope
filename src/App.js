// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { Routes,Route } from 'react-router-dom';
import CartContextProvider from './Global/CartContext';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './component/Products';
import NotFound from './component/NotFound';
import Cart from './component/Cart';
import Home from './component/Home';



function App() {
  return (
    <div className="App">
     
    
     <ProductsContextProvider>
      <CartContextProvider>
      <Navbar/>

       <Routes>
       <Route path='/' element={<Products/>}/>
         <Route path='*'  element={<NotFound/>}/> 
         <Route path='/cart'  element={<Cart/>}/> 
         <Route path='/home' exact element={<Home/>}/> 
       </Routes>
       </CartContextProvider>
     </ProductsContextProvider>
      
      
    </div>
  );
}

export default App;
