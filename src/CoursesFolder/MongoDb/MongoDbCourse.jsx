import React from 'react'
import MongoDbData from './MongoDbData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const MongoDbCourse = () => {
    return (
        <div>
            <Navbar />
            <p className='topicName'>MongoDB Sheet</p>
            <TempLate props={MongoDbData} />
        </div>
    )
}

export default MongoDbCourse