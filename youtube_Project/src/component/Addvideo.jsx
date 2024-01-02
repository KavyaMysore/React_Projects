import React, { useRef } from 'react'
import '../styles/addvideo.css'

const Addvideo = () => {
   let ThumbnailUrl= useRef()
   let ChannelIcon= useRef()
   let Title= useRef()
   let ChannelName= useRef()
   let Views= useRef()

   let AddVideos=(e)=>{
    let users={
        thumbnail:ThumbnailUrl.current.value,
        channelIcon:ChannelIcon.current.value,
        title:Title.current.value,
        channelname:ChannelName.current.value,
        views:Views.current.value
    }
    fetch('http://localhost:4000/youtube',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(users)
    })
    alert('Video Added Successfully....')
    
   }
  return (
    <div>
      <h1 className='head1'>Add videos</h1>
    <div className='addingbooks'>
      <form onSubmit={AddVideos}>
        <div>
            <input className='inp' ref={ThumbnailUrl} placeholder='Enter the thumbnailUrl' type="text" />
        </div>
        <br />
        <div>
            <input className='inp' ref={ChannelIcon} placeholder='Enter the channelIcon' type="text" />
        </div>
        <br />
        <div>
            <input className='inp' ref={Title} placeholder='Enter the title' type="text" />
        </div>
        <br />
        <div>
            <input className='inp' ref={ChannelName} placeholder='Enter the channelName' type="text" />
        </div>
        <br />
        <div>
            <input className='inp' ref={Views} placeholder='Enter the views' type="text" />
        </div>
        <br />
        <button className='bu'>Add Video</button>
      </form>
      </div>
    </div>
  )
}

export default Addvideo
