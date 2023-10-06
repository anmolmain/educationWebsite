import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import NodeJsCourseData from './NodeJsCourseData'

const NodeJsCourse = () => {
    return (
        <div>
            <Navbar />
            <TempLate props={NodeJsCourseData} />
        </div>
    )
}

export default NodeJsCourse