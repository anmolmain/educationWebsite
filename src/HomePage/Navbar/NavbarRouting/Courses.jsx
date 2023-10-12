import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import dataArr from '../../../CoursesFolder/MainCourseData'
import './Courses.css'
import CoursesScrollBar from './CoursesScrollBar'
// import {moveToRight} from '../../AdvSection/Adv'
const Courses = () => {
  const nv = useNavigate();
  return (
    <div>
      <Navbar />
      <CoursesScrollBar />
      {/* <button className="LeftScroll" onClick={moveToRight} style={{ border: "1px solid black", borderRadius: "10px", border: "none", outline: "none" }}>&lt;</button> */}
      {/* <button className="rightScroll" onClick={} style={{ border: "1px solid black", borderRadius: "10px", border: "none", outline: "none" }}>&gt;</button> */}

      <div className="CoursesFolder">
        {
          dataArr.map((item) => (
            <div className='mainCDiv row'>
              <button className='cardBtn col-md-4  ' onClick={() => {
                nv(item.cLink)
              }}>
                <div className="cardC">
                  <img src={item.cImg} className='courseImg' alt="" />
                  <hr /><p className="Ctitle">{item.cName}</p>
                  <hr /><input type="button" className='mybtn' id='imgBelowBtn' value="Click" onClick={() => {
                    nv(item.cLink)
                  }} />
                </div>
              </button>
              <div className="col-md-7 textBlock">
                {item.desc}
              </div>
            </div>
          ))

        }
      </div>
      {window.scrollTo({ top: 0, behavior: 'smooth' })}
    </div >

  )
}

export default Courses