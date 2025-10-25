import React from 'react'
import './Card.css'; 

function Card(nome, imagem, genero, preco) {
  return (
    <>
    <div className='card-container'>
        <img className='' src={imagem}/>
        <a className='name'>{nome}</a>
        <p className='genre'>Gênero: {genero}</p>
        <p className='price'>R${preco}</p>
    </div>
    </>
  )
}

export default Card;