import React from 'react'
import cssTopics from './CssCourseData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const CssCourse = () => {
    return (
        <>
            <Navbar />
            <TempLate props = {cssTopics}/>
        </>
    )
}

export default CssCourse