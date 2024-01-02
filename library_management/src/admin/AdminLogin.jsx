import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/adminLogin.css"

const AdminLogin = () => {
   let navigate= useNavigate()
   let email= useRef()
   let pass= useRef()
   let handleSubmit=(e)=>{
     console.log(email.current.value)
     console.log(pass.current.value)
     e.preventDefault()
    //  email.current.value=""
    //  pass.current.value=""

     let admin = {
        email:"admin@gmail.com",
        pass:12345
     }
     if(email.current.value==admin.email && pass.current.value==admin.pass){
          //navigate to admin portal
        navigate('/adminPortal')
     }else{
        alert("Invalid admin credentials")
     }
   }
  return (
   <div>
    <div className='adminmain'>
      <h1>Admin Login</h1>

      <div className='adminForm'>
         <form onSubmit={handleSubmit}>
            <div className="adminEmail">
                <input className='in1' ref={email} placeholder='Enter your email' type="email" name="" id="" />
            </div>
            {/* <br /> */}
            <div className='adminPassword'>
                <input className='in2' ref={pass} placeholder='Enter your password' type="password" name="" id="" />
            </div>
            <div className="loginBtn">
                <button className='bt'>Login</button>
            </div>
         </form>
      </div>
    </div>
    </div>
  )
}

export default AdminLogin