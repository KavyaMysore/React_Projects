import React, { useState } from 'react'

const OnAndOff = () => {
   let [state,setState] = useState(true)
   function changetext (){
    setState(!state)
   }
  return (
    <>
    <br /><br />
      <button onClick={changetext}>{state ? "ON": "OFF"}</button>
    </>
  )
}

export default OnAndOff
