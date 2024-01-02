import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api = () => {
    let[state,setState]=useState([])


    useEffect(()=>{
        axios.get("https:api.github.com/users")
        .then(res=>{
            setState(res.data)
        })
    },[])
   
  return (
    
    <>
    <br /><br />
      <div>
          <ol>
            {state.map((element)=>{
               return <li>
                <img src={element.avatar_url} alt="" />
               </li>
            })}
          </ol>
      </div>
    </>
  )
}

export default Api
