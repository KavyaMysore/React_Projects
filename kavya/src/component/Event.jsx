import React, { useState } from 'react'

const Event = () => {

    let handleClick=(x)=>{
        console.log(`hello ${x}`)
    }

    let user=[
        {name:"kavya", age:22, id:1},
        {name:"sharath", age:23, id:2},
        {name:"darshan", age:23, id:3},
    ]

//showing hello ......
    function Submit(k){
        alert("hi "+k)
    }

 //deleting the selected user data
    let[state,setState] = useState(user)
    let remove=(id)=>{
    setState(state.filter((data)=>id!=data.id))
    }
    
    return (
        <div>
                                                                       {/* by using another function to execute when the submit button is clicked */}
          <button onClick={()=>handleClick("kavya")}>Submit</button> 
    
          {state.map((data)=>(
            <div>
                 <div>
                    <p>{data.name}</p>
                    <p>{data.age}</p>
                    <p>{data.id}</p>
                    <button onClick={()=>{Submit(data.name)}}>Show</button>
                    <button onClick={()=>remove(data.id)}>Delete</button>
                 </div>
            <hr />
            </div>
          ))}
    
        </div>
      )
}


export default Event
