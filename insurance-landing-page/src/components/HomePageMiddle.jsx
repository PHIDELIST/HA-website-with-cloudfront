import React from 'react'
import './HomePageMiddle.css'
import Lightening from '../assets/icon-snappy-process.svg'
import Dollar from '../assets/icon-affordable-prices.svg'
import People from '../assets/icon-people-first.svg'

function HomepageMiddle() {
  return (
    <><hr style={{
      backgroung: 'gray',
      color: 'gray',
      borderColor: 'gray',
      height: '0.5px',
      width: '20%',
    }} />
     <div id='Title'><h2>We're different</h2>  </div>
        <div id='Content'>  
            <div id='Lightening'>
            <img src={Lightening} alt="" />
            <h4>Snappy Process</h4>
            <p>Our application process can be completed in minutes not hours, Don't get stuck filling in tedious forms</p>
            </div>
            <div id='Dollar'>
                <img src={Dollar} alt="" />
                <h4>Affordable Prices</h4>
                <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coveragr posssible.</p>

            </div>
            <div id='People'>
                <img src={People} alt="" />
                <h4>People First</h4>
                <p>Our plans aren't full of conditions and clauses to prevents payouts. We make sure you're covered when you need it.</p>
            </div>   
        </div>
   
    </>
  )
}
export default HomepageMiddle;
