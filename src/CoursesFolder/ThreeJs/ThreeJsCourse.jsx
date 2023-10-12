import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import ThreeJsData, { subjectName } from './ThreeJsData'
const ThreeJsCourse = () => {
    return (
        <div>
            <Navbar />
            {/* <p className='topicName'>Three.JS Sheet</p> */}
            <TempLate props={ThreeJsData} sname={subjectName} />
        </div>
    )
}

export default ThreeJsCourse