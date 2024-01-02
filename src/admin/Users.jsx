import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import '../styles/adduser.css'

const Users = () => {
  let[users,setUsers]= useState([])
 let navigate = useNavigate()

 useEffect(()=>{
  let fetchData=async()=>{
  let response = await fetch('http://localhost:4000/user')
  let data=await response.json()
  setUsers(data)
}
fetchData()
},[users])


let readBook=(id)=>{
  navigate(`/adminPortal/user/${id}`)
}

let handledelete=(id,firstName)=>{
  fetch(`http://localhost:4000/user/${id}`,{
    method:'DELETE'
  })
  alert(`${firstName} got deleted`)
}


  return (
    <div>
      <h1 id='bookscollection'>Users Page</h1>

      <div className="books_list">
        {users.map((data)=>(
           <div className="book w-25 my-2 ">
            
            <div className="bookDetails">
              <h2 className='fs_6'>First_Name: {data.firstName}</h2>
              <p className='fs-6'>Last_Name: {data.lastName}</p>
              <p>Email: {data.email}</p>
              <p>Phone_No: {data.phoneNo}</p>
              <button onClick={()=>readBook(data.id)} className='bn' >Read Book</button>
              <button onClick={()=>handledelete(data.id,data.firstName)} className='bn'>Delete</button>
            </div>
           </div>
        ))}
      </div>
    </div>
  )
}

export default Users
