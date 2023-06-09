import React from 'react'
import './Footer.css'
import logo from '../assets/logo.svg'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
    <div id='FooterMain'>
        <div id='FooterHeader'>
        <div><Link to ="/"><img src={logo} alt="" /></Link></div>
            <h3>Icons</h3>
        </div>
    
        <div id='FooterContent'>
            <div id='OurCompany'>
            <h4>OUR COMPANY</h4>
            <li> HOW WE WORK</li>
            <li>WHY INSURE</li>
            <li>VIEW PLANS</li>
            <li>REVIEWS</li>
            </div>
            <div id='HelpMe'>
            <h4>HELP ME</h4>
            <li> FAQ</li>
            <li>TERMS OF USE</li>
            <li>PRIVACY POLICY</li>
            <li>COOKIES</li> 
            </div>
            <div id='Contact'>
            <h4>CONTACT</h4>
            <li> SALES</li>
            <li>SUPPORT</li>
            <li>LIVE CHAT</li>
            </div>
            <div id='Others'>
            <h4>OTHERS</h4>
            <li> CAREERS</li>
            <li>PRESS</li>
            <li>LICENSES</li>
            </div>
        </div>
    </div>

    </>
  )
}
export default Footer;