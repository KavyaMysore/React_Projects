import React from 'react'


let bool = true


// const Conditionalrendering = () => {
//     if(bool){
//   return (
//     <div>
//         HELLO WORLD
//     </div>
//   )
//     }
//     else{
//         return(
//             <div>Hi World</div>
//         )
//     }
// }




// const Conditionalrendering = () => {
//   return (
//     <>
//       {
//         !bool ? <h1>HELLO WORLD</h1> : ""
//       }
//     </>
        
    
//   )
// }





const Conditionalrendering = () => {
  return (
    <>
    {
      !bool && <h1>HELLO WORLD</h1>
    }
    </>
      
    
  )
}



export default Conditionalrendering


