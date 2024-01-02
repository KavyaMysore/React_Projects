import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
       <ul>
        <li><Link to="/CovidTable">Covid19Table</Link></li>
        <li><Link to="/Covidcards">Covid19INDIA</Link></li>
        <li><Link to="/form">Form</Link></li>
        <li><Link to="/github">Github</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/togglepara">Toggle Para</Link></li>
       </ul>
    </>
  )
}

export default Navbar
