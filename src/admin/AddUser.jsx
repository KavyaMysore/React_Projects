import React from 'react'
import { useRef } from 'react'

const AddUser = () => {
  let Firstname= useRef()
  let Lastname= useRef()
  let Phone_no= useRef()
  let Email= useRef()
  
  let AddUsers=(e)=>{
    e.preventDefault()
    let users={
      firstName:Firstname.current.value,
      lastName:Lastname.current.value,
      phoneNo:Phone_no.current.value,
      email:Email.current.value,
     
    }

    fetch('http://localhost:4000/user',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(users)
    })
    alert('User Added Successfully....')
  }
 
  return (
    <div>

      <h1 className='head'>Add User</h1>
      <div className='addingbooks'>
      <form onSubmit={AddUsers}>
        <div>
        {/* <label htmlFor="">Title</label> */}
        <input className='inp' placeholder='Enter the firstname' ref={Firstname} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">ThumbnailURL</label> */}
        <input className='inp' placeholder='Enter the lastname' ref={Lastname} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">Author</label> */}
        <input className='inp' placeholder='Enter the phone no' ref={Phone_no} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">PageCount</label> */}
        <input className='inp' placeholder='Enter the email' ref={Email} type="text" />
        </div>
        <br />
     

      <button className='bu'>Add User</button>
      </form>
      </div>
    </div>
  )

}

export default AddUser
