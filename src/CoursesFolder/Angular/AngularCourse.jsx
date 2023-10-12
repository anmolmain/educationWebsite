import React from 'react'
import NavBar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import AngularData, { subjectName } from './AngularData'
const AngularCourse = () => {
  return (
    <div>
      <NavBar />
      {/* <p className='topicName'>Angular Sheet</p> */}
      <TempLate props={AngularData} sname={subjectName} />
    </div>
  )
}

export default AngularCourse