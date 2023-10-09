import React from 'react'
import Navbar from './Navbar/Navbar.js'
import { LandingPage } from './LandingSection/LandingPage.js'
import Adv from './AdvSection/Adv.js'
import Special from './OurSpecialSection/Special.js'
import PopularCourses from './PopularCourses/PopularCourses.jsx'
import Footer from './Footer/Footer.js'
import Cara from './Cara/Cara.jsx'
import PeopleReview from '../PeopleReviews/PeopleReview.jsx'
import PopularCourseText from './PopularCourses/PopularCourseText.jsx'
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Adv />
      <Special />
      <Cara />
      <PopularCourseText/>
      <PopularCourses />
      <PeopleReview />
      <Footer />
    </div>
  )
}

export default HomePage