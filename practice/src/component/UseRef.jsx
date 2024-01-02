import React, { useRef } from 'react'

const UseRef = () => {
   let elem= useRef()

   let textChange=()=>{
    if(elem.current.innerText=="hello..."){
        elem.current.innerText="Bye..."
        elem.current.style.color="red"
    }else{
        elem.current.innerText="hello..."
        elem.current.style.color="green"
    }
   }
  return (
    <div>
        <h1 ref={elem}>hello...</h1>
      <button onClick={textChange}>Change</button>
    </div>
  )
}

export default UseRef
