import React from 'react'
import '../styles/cart.css'

const Cart = ({cart,setCart}) => {
  let subTotal=cart.reduce((sum,x)=>{
    return sum+x.price
  },0)
  return (
    <div>
      <h1></h1>
      <div className='pruthvi'>
       {cart.map((data)=>(
           <div className='fav_book'>
            <img src={data.thumbnail} alt="" />
            <h4>Title: {data.title}</h4>
            <h4>Price: {data.price}</h4>
           </div>
       ))}
       <h1>SubTotal: Rs.{subTotal}</h1>
    </div>
    </div>
  )
}

export default Cart
