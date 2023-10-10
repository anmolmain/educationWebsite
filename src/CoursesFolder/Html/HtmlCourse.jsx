import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import htmlCourseData from './htmlCourseData.js'
const ExpressCourse = () => {
  return (
    <div>
        <Navbar/>
        <p className='topicName'>HTML Sheet</p>
        <TempLate props = {htmlCourseData}/>
    </div>
  )
}

export default ExpressCourse