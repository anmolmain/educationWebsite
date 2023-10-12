import React from 'react'
import cssTopics,{ subjectName } from './CssCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const CssCourse = () => {
    return (
        <>
            <Navbar />
            {/* <p className='topicName'>CSS Sheet</p> */}

            <TempLate props={cssTopics} sname={subjectName}/>
        </>
    )
}

export default CssCourse