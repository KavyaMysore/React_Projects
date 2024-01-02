import React, { useState } from 'react'

const Events = () => {
 let[count,setCount] = useState(0)

 let inc=()=>{
  setCount(count+1)
 }

 let dec=()=>{
  setCount(count-1)
 }

 let res=()=>{
  setCount(0)
 }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
      <button onClick={res}>RESET</button>

    </div>
  )
}

export default Events
