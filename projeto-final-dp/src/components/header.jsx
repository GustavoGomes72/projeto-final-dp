import React from 'react'
import './header.css';
import headerlogo from '../assets/headerlogo2.png';
import './headerlogo.css';
import cart from '../assets/cart2.png';
import home from '../assets/home2.png';

export default function Header() {
  return (
    <header className='header'>
        <a className='navbutton' href='/'>
        <img src={headerlogo} className='headerlogo' alt="headerlogo"/>
        </a>

        
        <nav className='nav'>
            <ul>
                
                    <a className='navbutton' href='/'>
                    <img src={home} alt="cart" className='icon'/>
                    Home
                    </a>

                    <a className='navbutton' href='/cart'>
                    <img src={cart} alt="cart" className='icon'/>
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
