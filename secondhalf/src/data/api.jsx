import React, { useEffect, useState } from 'react'

const Api = () => {
   let[users,setUsers]= useState([])

    useEffect(()=>{
        let fetchData =async()=>{
            let response =await fetch('http://localhost:4000/user')
            let data =await response.json()
            // console.log(data)
            setUsers(data)
        }
        fetchData()
    },[])

  

  return (
    <div>
      <h1 style={{textDecoration:"underline"}}>Display All the users :-</h1>
      {users.map((data)=>{
        return(
            <div>
            <h1>{data.username}</h1>
            <h2>{data.email}</h2>
            <button onClick={()=>setUsers(users.filter(x=>x.id!==data.id))}>Delete</button>           
        </div>  
        )
    
      })}
    </div>
  )
}

export default Api
