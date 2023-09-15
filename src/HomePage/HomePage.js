import React from 'react'
import Navbar from './Navbar/Navbar.js'
import { LandingPage } from './LandingSection/LandingPage.js'
import Adv from './AdvSection/Adv.js'
import Special from './OurSpecialSection/Special.js'
import PopularCourses from './PopularCourses/PopularCourses.js'
import Footer from './Footer/Footer.js'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <LandingPage />
      <Adv/>
      <Special/>
      <PopularCourses/>
      <Footer/>
    </div>
  )
}

export default HomePage