import React from 'react'
import Navbar from './Navbar/Navbar.js'
import { LandingPage } from './LandingSection/LandingPage.js'
import Adv from './AdvSection/Adv.js'
import Special from './OurSpecialSection/Special.js'
import PopularCourses from './PopularCourses/PopularCourses.js'
import Footer from './Footer/Footer.js'
import Cara from './Cara/Cara.jsx'
import { MostPopText } from './PopularCourses/MostPopText.jsx'
import Contact from './Navbar/NavbarRouting/Contact.jsx'
const HomePage = () => {
  return (
    <div>
      {/* <Navbar />
      <LandingPage />
      <Adv />
      <Special />
      <Cara />
      <MostPopText />
      <PopularCourses />
      
      <Footer /> */}
      <Contact />
    </div>
  )
}

export default HomePage