import React from 'react'

export default function ProductCard({product, onAdd}) {
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src= {product.image} alt={product.title}/>
      </div>
      <div className='product-title'>
        <h3>{product.title}</h3>
      </div>
      <div className='product-price'>
        <p>{product.price}</p>
      </div>
        
        <button onClick={() => onAdd(product.id)}>Adicionar</button>
    
    </div>
  )
}
