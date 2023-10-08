import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import htmlCourseData from './htmlCourseData.js'
const ExpressCourse = () => {
  return (
    <div>
        <Navbar/>
        <TempLate props = {htmlCourseData}/>
    </div>
  )
}

export default ExpressCourse