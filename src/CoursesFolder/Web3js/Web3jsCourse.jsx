import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import Web3jsCourseData from './Web3jsCourseData'

const Web3jsCourse = () => {
    return (
        <div>
            <Navbar />
            <TempLate props={Web3jsCourseData} />
        </div>
    )
}

export default Web3jsCourse