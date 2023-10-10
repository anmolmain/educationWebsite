import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import javaScriptData from './javaScriptCourseData'

const JSCourse = () => {
    return (
        <div>
            <Navbar />
            <p className='topicName'>JavaScript Sheet</p>
            <TempLate props={javaScriptData} />
        </div>
    )
}

export default JSCourse