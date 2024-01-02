import React, { useState } from 'react'
import Home from '../component/Home'
import Books from '../component/Books'
import Navbar from '../component/Navbar'
import ReadBook from '../component/ReadBook'
import Favourites from './Favourites'
import { Routes,Route } from 'react-router-dom'

const UserPortal = () => {
  //useState is used to adding the favourites book to favourites collection by clicking the add to favoiurites button
  let[cart,setCart]= useState([])
  return (
    <div className='userPortal'>
        <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBook cart={cart} setCart={setCart} />} path="/books/:id" />
        <Route element={<Favourites cart={cart} setCart={setCart}/>} path='/favourites'/>
        
      </Routes>
    </div>
  )
}

export default UserPortal
