import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Registration = () => {
//    let [state,setState]= useState([])

   useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        console.log(res.data)
    },[])
   })
  return (
    <>
      <h2>Registration Form</h2>
      <form action="">
        <label htmlFor="">Title:</label>
        <select name="" id="">
            <option value="">Mr</option>
            <option value="">Ms</option>
            <option value="">Mrs</option>
            
        </select>
      




      </form>

    </>
  )
}

export default Registration
