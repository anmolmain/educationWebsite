import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import ExpressCourseData, { subjectName } from './ExpressCourseData'

const ExpressCourse = () => {
  return (
    <div>
      <Navbar />
      {/* <p className='topicName'>Express Sheet</p> */}
      <TempLate props={ExpressCourseData} sname={subjectName} />
    </div>
  )
}

export default ExpressCourse