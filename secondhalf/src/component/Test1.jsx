import React from 'react'

const Test1 = ({user,fn,title}) => {
  return (
    <div>
      <center><h1>{title}[{user.length}]</h1></center>
      <div className='mainmovie'>
        {user.map((data)=>{
            <div className='main'>
                <div>
                    <img style={{height:"250px",width:"250px"}} src={data.Images[0]} alt="" />
                </div>
                <div>
                    <p id='title'>{data.Title}</p>
                    <p id='title1'>{data.Genre}</p>
                    <p id='title1'>{data.Released}</p>
                    <p id='title1'>{data.imdbRating}</p>
                    <button onClick={()=>fn(data.Title)} id='title1' >Delete</button>
                </div>    
            </div>
        })

        }
      </div>
    </div>
  )
}

export default Test1;
