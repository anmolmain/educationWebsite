import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import JqueryCourseData from './JqueryCourseData'

const JqueryCourse = () => {
    return (
        <div>
            <Navbar />
            <TempLate props={JqueryCourseData} />
        </div>
    )
}

export default JqueryCourse