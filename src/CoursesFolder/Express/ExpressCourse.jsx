import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import ExpressCourseData from './ExpressCourseData'

const ExpressCourse = () => {
  return (
    <div>
        <Navbar/>
        <p className='topicName'>Express Sheet</p>
        <TempLate props = {ExpressCourseData}/>
    </div>
  )
}

export default ExpressCourse