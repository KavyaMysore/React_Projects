import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Omdb = () => {
let [state , setState]= useState([])
let movie = "don"
console.log(state)

    useEffect(()=>{
        axios.get("https://www.omdbapi.com/?s=${movie}&apikey=2d8bcc40")
      .then(res=> setState(res.data))
    },[])
  return (
    <>
      <h1>OMDB</h1>
    </>
  )
}

export default Omdb
