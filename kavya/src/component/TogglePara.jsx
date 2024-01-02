import React, { useState } from 'react'

const TogglePara = () => {
   let[state,setState]= useState(true)

   function handleClick(){
    setState (!state)
   }
  return (
    <>
    <br /><br />
      <button onClick={handleClick}>{state?"Hide":"Show"}</button>
 <br />
 {
    state ? <p style={{backgroundColor:"black", color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, cum itaque ut quisquam sed animi, quo tenetur accusamus facilis adipisci odit, qui iste magnam totam reprehenderit. Enim sunt ullam itaque debitis doloremque qui adipisci ipsam ea at, voluptatum reiciendis harum necessitatibus a explicabo sapiente nulla facere, tempora laboriosam quidem numquam dolore aliquam! Deserunt praesentium neque nemo minus voluptates aperiam repellendus nostrum modi consectetur ea, ipsum odit voluptatibus molestiae asperiores, sunt magni at debitis commodi, beatae numquam laborum sit totam voluptas quis! Autem consectetur, recusandae iusto possimus maxime laborum, quaerat, repudiandae labore animi alias dolorum! Alias, veritatis! Optio ut quod numquam.</p>:""
 }
    </>
  )
}

export default TogglePara