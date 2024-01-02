import React, { useState } from 'react'

const Todo = () => {
    let [state , setState] = useState("")
    let [newstate , setNewState] = useState([])

    function handleChange(e){
        setState(e.target.value)
    }

    function handleSubmit(e){
        setNewState((preval)=>{
            return [...preval,state]
        })
        setState("")
        e.preventDefault()
    }




  return (
    <>
    <br /><br /><br />
    <form action="" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" placeholder='Enter a Todo' value={state} />
      <button>Add Todo</button>
      </form>

      <ul>
       {
        newstate.map((item)=>{
            return <li>{item}</li>
        })
       }    
    
    

      </ul>
    </>
  )
}

export default Todo
