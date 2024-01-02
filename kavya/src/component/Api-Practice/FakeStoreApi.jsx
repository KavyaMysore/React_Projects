import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FakeStoreApi = () => {
   let [state,setState]= useState([])

   useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>{
        setState(res.data)
    })
   },[])
  return (
    <>
      <h1>FakeStore Api</h1>
      <div className='main'>
      {
        state.map((images)=>{
          return  <div className='main1'>
        

           
            <img  src={images.image} alt="" />
            <br /> <br />
            <h4> Title:{images.title}</h4>
            <h4> Price:${images.price}</h4>
            <h4> Category:{images.category}</h4>
            <h5> Rating:{images.rating.rate}</h5>
          
        </div>

    
        })
      }
      </div>
    </>
  )
}

export default FakeStoreApi
