import React, { useRef } from 'react'

const UseRef1 = () => {
   let name= useRef()
   let email= useRef()
   let num= useRef()
   

   let Submit=()=>{
      let users={
        fname:name.current.value,
        Email:email.current.value,
        Num:num.current.value
      }
      console.log(users)
   }
  return (
    <div>
      <form action="">
        <input ref={name} type="text" placeholder='Enter your Name' />
        <input ref={email} type="email" name="" id="" placeholder='Enter your email' />
        <input ref={num} type="number" name="" id="" placeholder='Enter your Number' />
        <button onClick={Submit}>Submit</button>
      </form>
    </div>
  )
}

export default UseRef1
