import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './SingleProduct.css'
const SingleProduct = () => {
  const [product,setProduct]=useState([])
  const {id}=useParams()
 
  useEffect(()=>{
    const getsingleProduct=async()=>{
      await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }
    getsingleProduct()
  },[])

  return (
    <div className="product-container">
    <div key={product.id} className='product'>
       <div className='image-conatainer'>
        <img className="single-images" src={product.image} alt={"logo"}/>
       </div>
       <div className='description-container'>
        <h1 className='title'>{product.title}</h1>
        <p className='description'>{product.decription}</p>
        <p className='price'>{`Price-${product.price}`}</p>
        <p className='description'>{product.category}</p>
       </div>
    </div>
    </div>
  )
}

export default SingleProduct