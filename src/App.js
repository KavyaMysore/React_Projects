import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import AdminPortal from './admin/AdminPortal';
import AdminLogin from './admin/AdminLogin';

import UserLogin from './user/userLogin';
import UserPortal from './user/UserPortal';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path='/' />
          <Route element={<AdminLogin />} path='/adminLogin' />
          <Route element={<AdminPortal />} path='/adminPortal/*' />


          <Route element={<UserLogin/>} path='/userLogin' />
          <Route element={<UserPortal/>} path='/UserPortal/*' />

          

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
