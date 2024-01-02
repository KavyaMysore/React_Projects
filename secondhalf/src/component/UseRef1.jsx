import React, { useRef } from 'react'

const UseRef1 = () => {
   let first= useRef()
   let last= useRef()
   let email= useRef()
   let pass= useRef()

   let handleClick=()=>{
    let users={
        firstname:first.current.value,
        lastname:last.current.value,
        Email:email.current.value,
        password:pass.current.value
    }
    console.log(users)
   }

  return (
    <div>
        <br />
      <form action="">
        <label htmlFor="">FirstName</label>
        <input ref={first} type="text" /> <br />
        <label htmlFor="">LastName</label>
        <input ref={last} type="text" /> <br />
        <label htmlFor="">Email</label>
        <input ref={email} type="email" name="" /> <br />
        <label htmlFor="">Password</label>
        <input ref={pass} type="password" name=""  /> <br />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default UseRef1
