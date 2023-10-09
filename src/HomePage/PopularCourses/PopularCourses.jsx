import React from 'react'
import './PopularCourses.css'
import { useNavigate } from 'react-router-dom';
import dataArr from '../../CoursesFolder/MainCourseData'
const PopularCourses = (props) => {
    var nv = useNavigate();
    const { val } = props;
    const dataArr2 = (val === 'dispAll') ? dataArr : dataArr.slice(0, 5);
    return (
        <>
            <div className='mainDivCourse'>
                {dataArr2.map((item) => (
                    <div className="cardCourse">
                        <img src={item.cImg} className='courseImg' alt="" />
                        <hr /><p className="Ctitle">{item.cName}</p>
                        <hr /><input type="button" onClick={() => {
                            var x = item.cLink
                            nv('/courses/' + x)
                        }} className='mybtn' value="Click" />
                    </div>
                ))}
            </div>
            <div className="enclosedButton">
                <div className="col-2 twoColDiv">
                    <img src="https://img.icons8.com/?size=512&id=63775&format=png" alt="" />
                </div>
                <div className="col-8 eightCOlDiv" >
                    <button id='exploreButton' onClick={() => {
                        nv('/courses')
                    }}>
                        <p className='exploreMore'>Explore more Courses</p>
                    </button>
                </div>
                <div className="col-2 twoColDiv">
                    <img src="https://img.icons8.com/?size=512&id=63775&format=png" alt="" />
                </div>
            </div>
        </>

    )
}

export default PopularCourses
