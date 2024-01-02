import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SuperheroApi = () => {
    let [state, setState]= useState([])

    useEffect(()=>{
       axios.get("https://akabab.github.io/superhero-api/api/all.json")
       .then(data_api => setState(data_api.data))
    },[])
  return (
    <>
      <h1>SuperHeroes</h1>

      <ol>
        {
            state.map((user)=>{
                  return <li>{user.name}</li>
            })
        }
      </ol>
    </>
  )
}

export default SuperheroApi
