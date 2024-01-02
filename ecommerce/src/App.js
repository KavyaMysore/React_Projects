import React, { useState } from 'react';
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Cart from './component/Cart';
import Product from './component/Product';

function App() {
 let[cart,setCart]= useState([])
  return (
    <div className="App">
    
   <BrowserRouter>
   <Navbar/>
      <Routes>
         <Route element={<Home/>} path='/'/>
         <Route element={<Cart cart={cart} setCart={setCart}/>} path='/cart'/>
         <Route element={<Product cart={cart} setCart={setCart}/>} path='/:id'/>

      </Routes>
   </BrowserRouter>

    </div>
  );
}

export default App;
