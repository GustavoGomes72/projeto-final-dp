import React from 'react'
import './productCard.css'

export default function ProductCard({product, onAdd}) {
  return (
    <div className='product-card'>
      <div>
        <img className='product-image' src= {product.image} alt={product.title}/>
      </div>
      <div>
        <h3 className='product-title'>{product.title}</h3>
      </div>
      <div>
        <p className='product-price'>{product.price}</p>
      </div>
        
        <button className='button' onClick={() => onAdd(product.id)}>Add to cart</button>
    
    </div>
  )
}
