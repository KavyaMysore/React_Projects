import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/readbook.css'

const ReadBook = ({cart,setCart}) => {
 let[book,setBook]= useState([])

 //useParams is used to fetch the id(based on the id it will show the book)
 let params=useParams()
 let book_id =params.id

//useLocation is used to add a favourite to userPortal
 let location = useLocation()
 let path = location.pathname.startsWith('/userPortal')

 useEffect(()=>{
  let fetchData=async()=>{
    let response =await fetch(`http://localhost:4000/books/${book_id}`)
    let data= await response.json()
    setBook(data)
  }
  fetchData()
 })
  return (
    <div className='mainnn'>
      
      
      <div className=''>
        <img className='oneimg' height={450} width={350} src={book.thumbnailUrl} alt="" />
      </div>

      <div>
        <h1 className='tit'>{book.title}</h1>
        <p className='descript'>{book.shortDescription}</p>
        <p className='descript'>{book.longDescription}</p>
        {/* <button className='back'>Back</button> */}
        {path? <button className='back'><Link style={{color:"white", textDecoration:"none"}} to="/userPortal/books">Back</Link></button>:<button className='back'><Link style={{color:"white", textDecoration:"none"}} to="/adminPortal/books">Back</Link></button>}

        {path &&<button onClick={()=>setCart([...cart,book])} style={{backgroundColor:"cornflowerblue", color:"white",height:30 }} className='fav' ><Link  style={{color:"white", textDecoration:"none"}} >Add to favourites</Link></button>}
      </div>
   
      
     
      
    </div>
  )
}

export default ReadBook
