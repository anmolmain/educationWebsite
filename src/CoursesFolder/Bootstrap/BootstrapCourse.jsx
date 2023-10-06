import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import BootstrapData from './BootstrapData'

const BootstrapCourse = () => {
    return (
        <div>
            <Navbar />
            <TempLate props={BootstrapData} />
        </div>
    )
}

export default BootstrapCourse