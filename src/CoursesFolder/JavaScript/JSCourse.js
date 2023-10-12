import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import javaScriptData,{ subjectName } from './javaScriptCourseData'

const JSCourse = () => {
    return (
        <div>
            <Navbar />
            {/* <p className='topicName'>JavaScript Sheet</p> */}
            <TempLate props={javaScriptData} sname={subjectName}/>
        </div>
    )
}

export default JSCourse