import React, { useState } from 'react'
import Props2 from './Props2'

const Props1 = () => {
  let x=5
 let[state,setState]= useState(10)
  // let count=10
  // let course="react"

  function handleClick()
  {
    setState(state+1)
  }

  function greet(){
    alert("hello")
  }
  
  // let course="reactjs"
  return (
    <div>
      <h1>props 1</h1>
      {/* <Props2  score={count} data={course}/> */}
      <h2>{state}</h2>
      <button onClick={greet}>give an alert</button>
      <button onClick={handleClick}>increase</button>
      <Props2 data={x}  fn={greet}/>
    </div>
  )
}

export default Props1
