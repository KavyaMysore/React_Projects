import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const SnapShotNavbar = () => {
  return (
 
    <div className='but'>
        <h1 className='snap'>Snap Shots</h1>
      <NavLink to={"beaches"}><button className='but1'>BEACHES</button></NavLink>
      <NavLink to={"birds"}><button className='but1'>BIRDS</button></NavLink>
      <NavLink to={"mountains"}><button className='but1'>MOUNTAINS</button></NavLink>
      <NavLink to={"foods"}><button className='but1'>FOODS</button></NavLink>
    </div>
  )
}

export default SnapShotNavbar
