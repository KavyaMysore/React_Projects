import React from 'react'
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="logo">
            <Link to="/"><img width="100" src="/images/logo.png" alt="" /></Link>
        </div>
        <div className="search">
            <input type="text" placeholder='Search' />
        </div>
        <div className="options">
         <Link to ="/addvideo"><button>Add Video</button></Link>
            <button>Sign In</button>
        </div>
      
    </div>
  )
}

export default Navbar
