import React from 'react'
import ReactData from './ReactCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const ReactCourse = () => {
  return (
    <div>
        <Navbar/>
        <TempLate props = {ReactData}/>
    </div>
  )
}

export default ReactCourse