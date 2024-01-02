import React, { useState } from 'react'

const Form = () => {
    let [state, setState] = useState({name:"", age:"", phone:"",email:""})
    let [newstate , setNewState] = useState(state)

    function handleChange(e){
        setState ((preval) =>{
            if(e.target.name === "name"){
                return {...preval , name:e.target.value}
            }
            else if(e.target.name === "age"){
                return {...preval, age:e.target.value}

            }
            else if(e.target.name === "phone"){
                return {...preval,  phone:e.target.value}

            }
            else if(e.target.name == "email"){
                return {...preval , email:e.target.value}

            }
        })
    }

    function handleSubmit(e){
        setNewState(state)
        setState({name:"", age:"", phone:"", email:""})

        e.preventDefault()
    }
  return (
    <>
    <br /><br /><br />
       <form action="" onSubmit={handleSubmit}>
        <div>
            <input onChange={handleChange} type="text" placeholder='Name' name='name'  value={state.name}/>
        </div>
        <div>
            <input onChange={handleChange} type="text" placeholder='Age' name='age' value={state.age}/>
        </div> 
        <div>
            <input onChange={handleChange} type="text" placeholder='Phone' name='phone' value={state.phone}/>
        </div> 
        <div>
            <input onChange={handleChange} type="text" placeholder='email' name='email' value={state.email} />
        </div>
        <br />
        <div>
            <button type='submit'>Submit</button>
        </div>
       </form> 

       <h3>Name: {newstate.name}</h3>
       <h3>Age: {newstate.age}</h3>
       <h3>Phone: {newstate.phone}</h3>
       <h3>Email: {newstate.email}</h3>

    </>
  )
}

export default Form
