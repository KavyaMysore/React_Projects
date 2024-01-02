import React, { useEffect, useState } from 'react'
import axios from 'axios'

const FetchApiBoot = () => {
    let [state, setState]=useState([])

    useEffect(()=>{
        axios.get("https://api.github.com/users")
        .then(res => setState(res.data))
    },[])
  return (
    <>
          <h1 className='text-center py-5'>GITHUB USERS</h1>
          <div style={{display:'grid', gridTemplateColumns:"auto auto auto auto", rowGap:"30px"}}>
            {
                state.map((user , i)=>{
                    return <GitCard key={i} user={user} />
                })
            }
          </div>
    </>
  )
}

export default FetchApiBoot





// Card Component

export function GitCard(props){
    let {login , avatar_url}= props.user
    return(
        <div className="card text-center" style={{width:"15rem"}}>
                    <img src={avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h4 className="card-title" style={{textTransform:"uppercase"}}>{login}</h4>
                    
                    </div>
                  </div>
    )
}
