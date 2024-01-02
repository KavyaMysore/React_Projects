import { Link } from 'react-router-dom'
import React from 'react'
import '../styles/landingPage.css'

const LandingPage = () => {
  return (
    <div className=''>
    <div className='main' >
      <h1><center>Book Hub</center></h1>
      <div className="loginOptions">
        <Link  to="/adminLogin"> <button className='btn1'>Admin Login</button></Link>
        <Link  to="/userLogin"> <button className='btn2'>User Login</button></Link>
      </div>
    </div>
    </div>
  )
}

export default LandingPage