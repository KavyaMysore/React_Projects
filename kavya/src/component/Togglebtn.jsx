import React, { useState } from 'react'

const Togglebtn = () => {
  let[state,setState]= useState(true)

  function changeText()
  {
    setState(!state)
  }
  return (
    <>
      
   <button onClick={changeText}>{ state ? "ON": "Off"}</button>

    </>
  )
}

export default Togglebtn
