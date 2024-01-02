import React, { useRef } from 'react'

const UseRef = () => {
   let elem= useRef()
   let textChange=()=>{
     if(elem.current.innerText=="Hi"){
        elem.current.style.color="green"
        elem.current.innerText="Bye"
     }
     else{
        elem.current.style.color="red"
        elem.current.innerText="Hi"
     }
   }
  return (
    <div>
      <h1 ref={elem}>Hi</h1>
      <button onClick={textChange}>Change</button>
    </div>
  )
}

export default UseRef
