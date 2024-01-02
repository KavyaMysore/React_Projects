import React from 'react'
import { useState } from 'react'
                                             

                            //   ONLY ON AND OFF ONETIME

// const State = () => {
//  let [state, setState] = useState("ON")

//  function changeText(){
//     setState("off")
//  }
//   return (
//     <div>
//       <button onClick={changeText}>{state}</button>
//     </div>
//   )
// }



        //    ON AND OFF EVERYTIME

const State = () => {
    let [bool , setBool] = useState(true)
    function changeText(){
        setBool(!bool)
    }
  return (
    <div>
      <button onClick={changeText}>{bool ? "ON" : "OFF"}</button>
    </div>
  )
}

export default State





