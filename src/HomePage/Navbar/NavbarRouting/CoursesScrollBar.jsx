import React from 'react'
import dataArr from '../../../CoursesFolder/MainCourseData'
import { useNavigate } from 'react-router-dom'

const CoursesScrollBar = () => {
    const nv = useNavigate();
    return (
        <div className="scrollTemp">
            {dataArr.map((item) => (
                <button style={{ backgroundColor: "rgb(10, 43, 102)" }} onClick={() => {
                    var x = item.cLink
                    nv('/courses/' + x)
                }}>
                    <img src={item.cImg} alt="" />
                </button>
            ))}
        </div>
    )
}

export default CoursesScrollBar