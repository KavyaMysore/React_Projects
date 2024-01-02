import React, { useState } from 'react'

const Props2 = ({data}) => {
 let[state,update]= useState(data)
  
  return (
    <div>
      <h1>{state}</h1>
      <button>increase</button>
    </div>
  )
}

export default Props2
