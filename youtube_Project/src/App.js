import logo from './logo.svg';
import './App.css';
import React from 'react';


import Navbar from './component/Navbar';
import Categories from './component/Categories';
import Videos from './component/Videos';
import VideosLogic from './component/VideosLogic';
import Addvideo from './component/Addvideo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Categories/>
      <Routes>
         <Route element={<Addvideo/>} path='/addvideo'/>
         <Route element={<VideosLogic/>} path='/'/>
      </Routes>
   </BrowserRouter>

  
  

    </>
  );
}

export default App;
