import React, { useEffect, useState } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'

const Home = () => {
   let[Products,setProducts]= useState([])
   useEffect(()=>{
      let fetchData=async()=>{
        let response = await fetch('https://dummyjson.com/products')
    let data=await response.json()
    setProducts(data.products)
      }
      fetchData()
     
   },[])
  return (
    <div>
        <div className='product_list'>
      {Products.map((data)=>(
         <div >
              <div>
            <img width={180} height={200} src={data.thumbnail} alt="" />
            </div>
            <div>
                <h1>{data.brand}</h1>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
                <h6>{(data.price*80)-((data.price*80)*10)/100} M.R.P: <strike>&#8377;{data.price*80}</strike>(10% off)</h6>
            </div>
                   <Link to={`/${data.id}`}><button>View</button></Link>
         </div>
         
      ))}
      </div>
    </div>
  )
}

export default Home