import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import '../styles/product.css'

const Product = ({cart,setCart}) => {
   let[product,setProduct]= useState([])
   //useParams is used to fetch the data
   let params= useParams()
   let id=params.id
   console.log(cart)
   
   useEffect(()=>{
    let fetchData=async()=>{
      let response = await fetch(`https://dummyjson.com/products/${id}`)
  let data=await response.json()
  setProduct(data)
    }
    fetchData()
   
 },[])

//  let addToCart=()=>{
//     cart.map(x=>{
//         if(x.length==0){
//             alert('product already present')
//         }else{
//             setCart([...cart,setCart])
//         }
//     })
//  }
  return (
    <div className='promain'>
        <div>
            <img height={300} width={360} src={product.thumbnail} alt="" />
        </div>
        <div className='det'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </div>
       <Link to='/' className='lastbuts'><button>Back</button></Link>
       <Link to='/cart' className='lastbuts'><button  onClick={()=>setCart([...cart,product])} >Add To Cart</button></Link>
    </div>
  )
}

export default Product
