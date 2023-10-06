import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import ExpressCourseData from './ExpressCourseData'

const ExpressCourse = () => {
  return (
    <div>
        <Navbar/>
        <TempLate props = {ExpressCourseData}/>
    </div>
  )
}

export default ExpressCourse