import React, { useState } from 'react'

const TogglePara = () => {
   let [state, setState] = useState(true)
   function handleClick(){
    setState(!state)
   }

  return (
    <>
      <br /><br />
    <button onClick={handleClick}>
        {
             state ? "Hide" : "Show"
        }
    </button>
          <br /><br />
    {
        state ? <p style={{color:"white", backgroundColor:"black" ,}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nihil natus nostrum officiis illo, tempore et ipsum aut eligendi ut incidunt quidem quas excepturi explicabo odio amet facilis similique quisquam, asperiores commodi exercitationem dolor. Dolorem illo animi molestias dolor facere numquam asperiores temporibus nemo, velit, inventore repellendus aperiam facilis ullam?</p> : ""
    }

    </>
  )
}

export default TogglePara
