import React, { useEffect, useState } from 'react'

const PhotoApi = () => {
   let[state,updated]= useState([])

   useEffect(()=>{
    let fetchData=async ()=>{
        let response=await fetch('http://localhost:4000/user')
        let data=await response.json()
        // console.log(data)
        updated(data)
    }
    fetchData()
   },[])
  return (
    <div>
        <h1>helooooooo......</h1>
      {state.map((data)=>{
         <div>
             <h1>{data.username}</h1>
             <h2>{data.email}</h2>
            
            
         </div>
        
      })}
    </div>
  )
}

export default PhotoApi
