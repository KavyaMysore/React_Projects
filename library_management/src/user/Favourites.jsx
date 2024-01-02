import React from 'react'
import "../styles/fav.css"
const Favourites = ({cart,setCart}) => {
  return (
    <div>
      <div className='pruthvi'>
       {cart.map((data)=>(
           <div className='fav_book'>
            <img src={data.thumbnailUrl} alt="" />
            <h4>{data.title}</h4>
           </div>
       ))}
    </div>
    </div>
  )
}

export default Favourites;
