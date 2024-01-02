import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import "../styles/book.css"

const Books = () => {
  //useLocation is used to not show the delete button in the userportal/books
  let location = useLocation()
  let path = location.pathname.startsWith('/adminPortal')

 let[books,setBooks]= useState([])
 let navigate = useNavigate()

  useEffect(()=>{
    let fetchData=async()=>{
    let response = await fetch('http://localhost:4000/books')
    let data=await response.json()
    setBooks(data)
  }
  fetchData()
  },[books])


  let readBook=(id)=>{
    if(path){
         navigate(`/adminPortal/books/${id}`)
      }else{
         navigate(`/userPortal/books/${id}`)

      }
  }

  let handledelete=(id,title)=>{
    fetch(`http://localhost:4000/books/${id}`,{
      method:'DELETE'
    })
    alert(`${title} got deleted`)
  }
  
  return (
    <div>
      <h1 id='bookscollection' className='my-4 text-center'>Books Collection</h1>

      <div className="books_list">
        {books.map((data)=>(
           <div className="book w-25 my-2 ">
            <div className="bookImage card-image">
            <img width={180} height={200} src={data.thumbnailUrl} alt="" />
            </div>
            <div className="bookDetails">
              <h2 className='fs_6'>{data.title}</h2>
              <p className='fs-6'>written By - {data.authors}</p>
              <button onClick={()=>readBook(data.id)} className='bn' >Read Book</button>
              
              {path&&<button onClick={()=>handledelete(data.id,data.title)} className='bn'>Delete</button>}
            </div>
           </div>
        ))}
      </div>

     
    </div>
  )
}

export default Books
