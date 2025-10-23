import React from 'react'
import './header.css';
import headerlogo from '../assets/headerlogo.jpg';
import './headerlogo.css';
import cart from '../assets/cart.svg';

export default function Header() {
  return (
    <header className='header'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/f5e884102732761.5f3d3d9493dd6.jpg" className='headerlogo' alt="headerlogo"/>

        <nav className='nav'>
            <ul>
                
                    <a className='navbutton' href='/'>
                    Home
                    </a>

                    <a className='navbutton' href='/cart'>
                    <img src={cart} alt="cart" className='carticon'/>
                    Cart
                    </a>
                
                    <a className='navbutton' href='/about'>
                    About
                    </a>
               
            </ul>
        </nav>
    </header>
  )
}
