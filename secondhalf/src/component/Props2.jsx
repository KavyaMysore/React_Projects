import React from 'react'

const Props2 = ({data,fn}) => {
    // console.log(x)
  return (
    <div>
        <h1>Props 2</h1>
      
      {/* <h2>{score}</h2> */}
      <h2>{data}</h2>
      <button>increase</button>
      <button onClick={fn}>give an alert</button>
    </div>
  )
}

export default Props2
