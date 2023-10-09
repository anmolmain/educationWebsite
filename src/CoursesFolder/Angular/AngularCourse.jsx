import React from 'react'
import NavBar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import AngularData from './AngularData'
const AngularCourse = () => {
  return (
    <div>
        <NavBar/>
        <TempLate props={AngularData}/>
    </div>
  )
}

export default AngularCourse