import React, { useEffect, useState } from 'react'

const VideosLogic = ({ videos_data, fn, title }) => {
   let [state, setState] = useState([])

   useEffect(() => {
      let fetchData = async () => {
         let response = await fetch('http://localhost:4000/youtube')
         let data = await response.json()
         // console.log(data)
         setState(data)
      }
      fetchData()
   }, [])
   return (
      <div className="vids">
         <h1>{title}</h1>
         <div className='videos_Logic'>
            {state.map((data) => (

               <div className="video">
                  <div className="thumbnail">
                     <img height={250} width={350} src={data.thumbnail} alt="" />
                  </div>


                  <div className="details">

                     <div className="channelicon">
                        <img height={35} width={40} src={data.channelIcon} alt="" />

                     </div>

                     <div className='title'>
                        <span>{data.title}</span>
                        <br />
                        <span className='view'>{data.channelname}</span>

                        <span className='view'>{data.views}M views</span>
                        {/* <a style={{ cursor: "pointer" }} onClick={() => fn(data.id)}>Delete Video</a> */}


                        <button onClick={() => setState(state.filter(x => x.id !== data.id))}>Delete</button>
                     </div>

                  </div>

               </div>

            ))}

         </div>
      </div>

   )
}

export default VideosLogic
