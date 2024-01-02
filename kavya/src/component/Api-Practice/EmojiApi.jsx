import axios from 'axios'
import React, { useEffect, useState } from 'react'

const EmojiApi = () => {

   let[state, setState] = useState([])
   let[emojiname,setEmojiName]=useState("")
   let[newEmoji,setNewEmoji]=useState("")

   useEffect(()=>{
    axios.get(`https://emoji-api.com/emojis?search=${emojiname}&access_key=3b268ebd15e9bf0f9f9127484e6799abb10e71ff`)
    .then(res=>{
        setState(res.data)
    },[newEmoji])
   })


   function handleChange(e){
    setEmojiName(e.target.value)
   }

   function handleSubmit(e){
    e.preventDefault()
    setNewEmoji(emojiname)
   }

  return (
    <div>
      <h1>Search Emoji</h1>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="" id="" placeholder='Enter Emoji Name' value={emojiname} />
      <button>Search</button>
      </form>
 <br /><br />
 <ul>
      {
        state.map((user,i)=>{
           return <li key={i}>{user.character}</li>
        })
      }
      </ul>
    </div>
  )
}

export default EmojiApi
