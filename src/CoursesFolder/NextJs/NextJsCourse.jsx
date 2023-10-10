import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import NextjsCourseData from './NextJsCourseData'
import TempLate from '../Template'

const NextJsCourse = () => {
    return (
        <div>
            <Navbar />
            <p className='topicName'>Next.JS Sheet</p>
            <TempLate props = {NextjsCourseData}/>;
        </div>
    )
}

export default NextJsCourse