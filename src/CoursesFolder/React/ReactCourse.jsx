import React from 'react'
import ReactData, { subjectName } from './ReactCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const ReactCourse = () => {
  return (
    <div>
      <Navbar />
      {/* <p className='topicName'>React Sheet</p> */}
      <TempLate props={ReactData} sname={subjectName} />
    </div>
  )
}

export default ReactCourse