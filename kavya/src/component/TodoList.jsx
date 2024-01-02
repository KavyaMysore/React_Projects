import React, { useState } from 'react'

const TodoList = () => {
  let[todo,settodo] = useState("") //onchange()
  let[todonew,settodonew]=useState([])  //onsubmit

  function handleChange(e){
   settodo (e.target.value)
  }

  function handleSubmit(e){
   settodonew((preval)=>{
   return [...preval,todo]

})
settodo("")
e.preventDefault()

  }

  return (
    <>
    <br /><br />
    <div className='top'>Todo Add</div>
    <div className='whole'>
    <div className='form' >
    <form onSubmit={handleSubmit} >
       <input className='input' type="text" onChange={handleChange}  value={todo} placeholder='enter todo'/>  <br />
       <button className='btn' style={{backgroundColor:"blue" , color:"white"}} type="submit">AddTodo</button>
       </form>
       </div>

      <div className='list'>
        <h2 id="title">Here is the list</h2>
        <ul>
          {todonew.map((items,i)=>{
             return <li key={i}>{items}</li>
          })}
        </ul>
      </div>

</div>


       {/* {
        addtodo !=[] && addtodo.map((item,index)=>{
            return (
             <div key={index}>
                <p>{item}</p>
             </div>
            )
        })
       } */}
    </>
  )
}

export default TodoList
