import React from 'react'

const Test1 = ({user}) => {
  return (
    <div>
        {/* <h2>{user}</h2> */}
      {user.map((data)=>(
        <div>
          <img src={data.Images[0]} alt="" />
         <h1>{data.Title}</h1>
         <h3>{data.Genre}</h3>
         <h3>{data.imdbRating}</h3>
         <h3>{data.Released}</h3>
         </div>
      ))}
    </div>
  )
}

export default Test1
