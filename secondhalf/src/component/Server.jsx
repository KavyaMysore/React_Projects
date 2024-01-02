import React, { useEffect, useState } from 'react'

const Server = () => {
    let[name,setName]= useState("React")
    let[count,setCount]= useState(0)

    useEffect(()=>{
        console.log("useEffect Worked")
    },[])

  return (
    <div> 
      <h1>Server</h1>
      <h2>{name}</h2>
      <button onClick={()=>setName("Node")}>Change</button>


      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Change</button>

    </div>
  )
}

export default Server
