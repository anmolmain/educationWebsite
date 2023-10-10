import React from 'react'
import cssTopics from './CssCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const CssCourse = () => {
    return (
        <>
            <Navbar />
            <p className='topicName'>CSS Sheet</p>

            <TempLate props={cssTopics} />
        </>
    )
}

export default CssCourse