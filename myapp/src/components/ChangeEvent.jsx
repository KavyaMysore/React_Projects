import React, { useState } from 'react'

const ChangeEvent = () => {
   let [state, setState] = useState("")
   function handleChange(e){
    setState(e.target.value)
   }
  return (
    <>
    <br /><br />
    <div>
        <input onChange={handleChange} type="text" placeholder='Enter Name' />
        <br /><br />
        <h3>NAME : {state}</h3>
    </div>
    </>
  )
}

export default ChangeEvent
