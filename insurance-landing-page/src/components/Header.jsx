import React from 'react'
import './Header.css'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom';
function Header() {
  return (
    <>
    <div id='NavItems'>
      <div><Link to ="/"><img src={logo} alt="" /></Link></div>
      <div id='NavLinks'> 
          <ul id='links'>
              <Link to ="/HowWeWork">HOW WE WORK</Link>
              <Link to ="/Blog">BLOG</Link>
              <Link to ="/Account">ACCOUNT</Link>
          </ul>
          <button id='PlansBtn'>VIEW PLANS</button>
      </div>
    </div>
    </>
  )
}
export default Header;