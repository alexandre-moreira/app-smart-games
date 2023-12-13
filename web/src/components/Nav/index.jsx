import React from 'react'
import '../style.css'
import {Link, BrowserRouter} from 'react-router-dom';

const Nav = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <h2>Smart <span>Games</span></h2>
        </div>
        <div>
          <ul> 
            <BrowserRouter>
              <li><Link href="#" className='Link'>Home</Link></li>
              <li><Link href="#" className='Link'>Product</Link></li>
              <li><Link href="#" className='Link'>About</Link></li>
              <li><Link href="#" className='Link'>Contact</Link></li>
            </BrowserRouter>
          </ul>
        </div>
    </div>
    </>
  )
}

export default Nav