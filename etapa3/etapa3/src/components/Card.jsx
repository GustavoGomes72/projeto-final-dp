import React from 'react'
import './Card.css'; 

function Card({nome, imagem, genero, preco}) {
  return (
    <>
    <div className='card-container'>
        <img className='img' src={imagem}/>
        <p className='name'>{nome}</p>
        <p className='genre'>Gênero: {genero}</p>
        <p className='price'>R${preco}</p>
    </div>
    </>
  )
}

export default Card;