import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import htmlCourseData, { subjectName } from './htmlCourseData.js'
const ExpressCourse = () => {
  return (
    <div>
      <Navbar />
      <TempLate props={htmlCourseData} sname={subjectName} />
    </div>
  )
}

export default ExpressCourse