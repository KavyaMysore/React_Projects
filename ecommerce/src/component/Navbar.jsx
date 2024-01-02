import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const Navbar = () => {
  return (
    <div className='mainnav'>
        <div>
            <h1 className='prod'>E-Commerce</h1>
        </div>
        <div className='linksss'>
             <Link to="/" className='link' style={{textDecoration:"none", color:"white"}}>Home</Link>
             <Link to="/cart" className='link' style={{textDecoration:"none", color:"white"}}>Cart</Link>
        </div>

    </div>
  )
}

export default Navbar