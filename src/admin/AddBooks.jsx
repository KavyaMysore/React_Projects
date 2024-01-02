import React, { useRef } from 'react'
import '../styles/addbook.css'

const AddBooks = () => {
  let Title= useRef()
  let thumbnailUrl= useRef()
  let authors= useRef()
  let pageCount= useRef()
  let categories= useRef()

  let AddBook=(e)=>{
    e.preventDefault()
    let users={
      title:Title.current.value,
      thumbnailUrl:thumbnailUrl.current.value,
      authors:authors.current.value,
      pageCount:pageCount.current.value,
      categories:categories.current.value
    }

    fetch('http://localhost:4000/books',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(users)
    })
    alert('Book Added Successfully....')
  }

  return (
    <div>
      <h1 className='head'>Add Books</h1>
      <div className='addingbooks'>
      <form onSubmit={AddBook}>
        <div>
        {/* <label htmlFor="">Title</label> */}
        <input className='inp' placeholder='Enter the title' ref={Title} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">ThumbnailURL</label> */}
        <input className='inp' placeholder='Enter the thumbnail' ref={thumbnailUrl} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">Author</label> */}
        <input className='inp' placeholder='Enter the Authors name' ref={authors} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">PageCount</label> */}
        <input className='inp' placeholder='Enter the pagecount' ref={pageCount} type="text" />
        </div>
        <br />
        <div>
        {/* <label htmlFor="">Category</label> */}
        <input className='inp' placeholder='Enter the categories' ref={categories} type="text" />
        </div>
        <br />

      <button className='bu'>Add Book</button>
      </form>
      </div>
    </div>
  )
}

export default AddBooks
