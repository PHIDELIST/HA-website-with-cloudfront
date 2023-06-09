import React from 'react'
import './HomePageHeading.css'
import PeoplePhoto from '../assets/image-intro-desktop.jpg'

function HomePageHeading() {
  return (
    <>
    <div id='Main'>
        <div id='LeftContainer'>
            <h1>Humanizing your insurance.</h1>
            <p>Get your life insurance coverage easier and faster. We blend our expertise and technlogy to help you find the plan that's right for you. Ensure you and your loved ones are protected</p>
            <button id='btnPeople'><p>VIEW PLANS</p></button> 
        </div>
        <div id='RightContainerImg'>
            <img src={PeoplePhoto} alt="" />
        </div>
    </div>
    </>
  )
}
export default HomePageHeading;