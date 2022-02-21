import React from 'react';
import './header.scss';

export const Header = () => {
  return (
    <div className='header'>
      Chipmunk Client
      <nav>
        <ul className='nav_links'>
          <li><a href="#">Main</a></li>
          <li><a href="#">Test</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
      <a className='btn' href=""><button>Get</button></a>
    </div>
  )
}