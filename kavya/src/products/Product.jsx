import React from 'react'
import { productdata } from './ProductData'

const Product = () => {
  return (
    <>
       <h1>Products :-</h1>
       <div className='a'>
       {productdata.map((element)=>{
          let {id,product_name,category,price,product_image}=element

          return(
            <div className='main'>
               <img id="shoe" src={product_image} alt="" />
               <h4>{product_name}</h4>
               <h6>{category}</h6>
               <h4>{price}/-</h4>
            </div>
          )
       })}
       </div>
    </>
  )
}

export default Product