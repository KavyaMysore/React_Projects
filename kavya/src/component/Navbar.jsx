import React from 'react'
import { NavLink,link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
      <NavLink to={"togglebtn"}>Toggle button</NavLink>
      <NavLink to={"togglepara"}>Toggle Para</NavLink> 
      <NavLink to={"products"}>products</NavLink>
    </div>
  )
}

export default Navbar
