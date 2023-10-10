import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import NodeJsCourseData from './NodeJsCourseData'

const NodeJsCourse = () => {
    return (
        <div>
            <Navbar />
            <p className='topicName'>Node.JS Sheet</p>
            <TempLate props={NodeJsCourseData} />
        </div>
    )
}

export default NodeJsCourse