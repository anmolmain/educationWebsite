import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import JqueryCourseData from './JqueryCourseData'

const JqueryCourse = () => {
    return (
        <div>
            <Navbar />
            <p className='topicName'>JQuery Sheet</p>
            <TempLate props={JqueryCourseData} />
        </div>
    )
}

export default JqueryCourse