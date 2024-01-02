import React from 'react'

const Otpgeneration = () => {
    let num = Math.trunc( 1000 + Math.random()*9000)       //OTP Generation
    
  return (
    <div>
   <h1>{num}</h1>
    
    </div>
  )
}

export default Otpgeneration