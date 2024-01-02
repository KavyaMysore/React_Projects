import React from 'react'
import "../styles/categories.css"

const Categories = () => {

  let links=[
    {category:"All"},
    {category:"Live"},
    {category:"Music"},
    {category:"Comedy"},
    {category:"Sports"},
    {category:"Gaming"},
    {category:"Vlogs"},
    {category:"Movies"},
    {category:"TV Shows"},
    {category:"Bollywood"},
    {category:"News"},
  ]
  return (
  <div className='categories'>
    <div className='categories_links'>
     {links.map((data)=>(
      <a href="">{data.category}</a>
     ))}
  </div> 
    </div>
  )
}

export default Categories
