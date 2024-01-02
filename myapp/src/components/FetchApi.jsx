import React, { useEffect, useState } from 'react'
import axios from "axios"

const FetchApi = () => {
let [state, setState] = useState([])
    
    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(api_data => setState(api_data.data))                                         
    },[])
    
                                                                                            //   ( ...api_data) is a any variable name
    
  return (
    <>
        <h1>Github Users List</h1>

        <ol>
            {
                state.map((user)=>{
                    return <li>{user.login}</li>
                })
            }
        </ol>
    </>
  )
}

export default FetchApi
