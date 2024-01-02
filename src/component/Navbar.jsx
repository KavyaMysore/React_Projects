import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/navbar.css"


const Navbar = () => {
  //uselocation for userPortal== loc:3000/userPortal......
  let location = useLocation()
  // console.log(location)
  let path = location.pathname.startsWith('/adminPortal')
  return (
    <div className='mainnav'>
      {/* <h1>Navbar Page</h1> */}
      <div className="logo">
        <h1 style={{fontStyle:"italic"}}>Book Hub</h1>
        {/* <img className='logo' src={"./images/bookhublogo.jpeg"} alt="" /> */}
      </div>
      <div className="links">
        {path ? 
          <div>
        <Link className='link' to="/adminPortal/">Home</Link>
        <Link className='link' to="/adminPortal/books">Books</Link>
        <Link className='link' to="/adminPortal/users">Users</Link> 
        <Link className='link' to="/adminPortal/addbooks">Add Books</Link>  
        <Link className='link' to="/adminPortal/addusers">Add Users</Link> 
        <Link className='link' to="/adminLogin">Logout</Link>
          </div> :

           <div>
              <Link className='link' to="/userPortal/">Home</Link>
              <Link className='link' to="/userPortal/books">Books</Link>
              <Link className='link' to="/userPortal/favourites">Favourites</Link>
              <Link className='link' to="/userLogin">Logout</Link>
           </div>
}  
      </div>
    </div>
  )
}

export default Navbar
