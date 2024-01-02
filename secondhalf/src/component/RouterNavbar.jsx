import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/routerNavbar.css'

const RouterNavbar = () => {
  return (
    <div className='mnav'>
        <div>
            <h1 style={{marginTop:"0px"}}>Router</h1>
        </div>
        <div className='links'>
      <Link className='link' to="/">Home</Link>
      <Link className='link' to="/about">About</Link>
      <Link className='link' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default RouterNavbar
