import React, { useState } from 'react'

const SubmitEvent = () => {
   let [state, setState] = useState("")
   function handleSubmit(e){
    setState(e.target[0].value)

    e.preventDefault()
   }
  return (
    <>
    <br /><br /><br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
      </form>

      <h2>Username : {state}</h2>
    </>
  )
}

export default SubmitEvent
