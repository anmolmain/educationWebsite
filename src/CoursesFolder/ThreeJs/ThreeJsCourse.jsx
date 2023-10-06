import React from 'react'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
import ThreeJsData from './ThreeJsData'
const ThreeJsCourse = () => {
    return (
        <div>
            <Navbar />
            <TempLate props={ThreeJsData} />
        </div>
    )
}

export default ThreeJsCourse