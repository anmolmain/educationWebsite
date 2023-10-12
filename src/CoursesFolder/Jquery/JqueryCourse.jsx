import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import JqueryCourseData ,{ subjectName }from './JqueryCourseData'

const JqueryCourse = () => {
    return (
        <div>
            <Navbar />
            {/* <p className='topicName'>JQuery Sheet</p> */}
            <TempLate props={JqueryCourseData} sname={subjectName}/>
        </div>
    )
}

export default JqueryCourse