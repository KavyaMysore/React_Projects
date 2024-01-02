import React, { useState } from 'react'
import Props2 from './Props2'

const Props1 = () => {
    let num=5
   let[count,setCount]= useState(0)

    function handleClick(){
       setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
      <Props2 data={count}/>
    </div>
  )
}

export default Props1
