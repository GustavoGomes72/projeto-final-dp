import React from 'react'
import './header.css';
import headerlogo from '../assets/headerlogo.jpg';
import './headerlogo.css';

export default function Header() {
  return (
    <header className='header'>
        <img src={headerlogo} className='headerlogo' alt="headerlogo"/>

        <nav>
            <ul>
                <li>
                    <a href='/'>Home</a>
                </li>

                <li>
                    <a href='/cart'>Cart</a>
                </li>

                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}
