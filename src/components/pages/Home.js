import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import './Home.css'
const Home = () => {

const [products,setProducts]=useState([])
const navigate=useNavigate()
  
useEffect(()=>{
  const fetchProducts=async ()=>{
    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  }
  fetchProducts()
  console.log(products)
},[])
  return (
    <div className='products-container'>
    {products && products.map((item)=>{
      return(
        <Link to={`/products/${item.id}`} style={{color:'black',textDecoration:"none"}} key={item.id}>
        <div key={item.id} className='products'>
       <div className='images-conatainer'>
        <img className="images" src={item.image} alt={"logo"}/>
       </div>
       <div className='description-container'>
        <h1 className='title'>{item.title}</h1>
        <p className='description'>{item.decription}</p>
        <p className='price'>{`Price-${item.price}`}</p>
        <p className='description'>{item.category}</p>
       </div>
    </div>
    </Link>
      )
    })}
   </div>
        
    
  )
}

export default Home