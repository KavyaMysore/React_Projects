import './App.css';
import React from 'react';

import Otpgeneration from './component/Otpgeneration';
import Events from './component/Events';
import Props1 from './component/Props1';
import UseRef from './component/UseRef';
import UseRef1 from './component/UseRef1';
import Test from './component/Test';
import Server from './component/Server';
import Api from './data/api';

import Home from './router/home';
import Contact from './router/contact';
import About from './router/about';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import RouterNavbar from './component/RouterNavbar';
import Test1 from './component/Test1';




function App() {
  return (
    <div className="App">


      

      <BrowserRouter>
      <RouterNavbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<About/>} path='/about'/>
        <Route element={<Contact/>} path='/contact'/>
      </Routes>
      </BrowserRouter>
     
  {/* <Otpgeneration/> */}
  {/* <Events/> */}
  {/* <Props1/> */}
  {/* <Server/> */}
  <Test/>
  {/* <Api/> */}

  {/* <UseRef/>
  <UseRef1/>
  <Test/>
  <Server/>
  <Api/>
  <Home/>
  <Contact/>
  <About/> */}


    </div>
  );
}

export default App;
