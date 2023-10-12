import React from 'react'
import MongoDbData ,{ subjectName }from './MongoDbData'
import Navbar from '../../HomePage/Navbar/Navbar'
import TempLate from '../Template'
const MongoDbCourse = () => {
    return (
        <div>
            <Navbar />
            {/* <p className='topicName'>MongoDB Sheet</p> */}
            <TempLate props={MongoDbData} sname={subjectName}/>
        </div>
    )
}

export default MongoDbCourse