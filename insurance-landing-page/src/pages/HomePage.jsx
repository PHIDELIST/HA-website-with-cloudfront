import React from 'react'
import './HomePage.css'
import HomePageHeading from '../components/HomePageHeading'
import HomePageMiddle from '../components/HomePageMiddle'
import HomePageFindMore from '../components/HomePageFindMore'

function HomePage() {
  return (
    <>
    <div id='MainContent'>
    <div id='Heading'>
     <HomePageHeading />   
    </div>
    <div id='Middle'>
      <HomePageMiddle /></div>
    <div id='FindMore'><HomePageFindMore /></div>
    </div>
    </>
  )
}
export default HomePage;