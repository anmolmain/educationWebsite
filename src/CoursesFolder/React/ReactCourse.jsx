import React from 'react'
import ReactData from './ReactCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const ReactCourse = () => {
  return (
    <div>
        <Navbar/>
        <p className='topicName'>React Sheet</p>
        <TempLate props = {ReactData}/>
    </div>
  )
}

export default ReactCourse