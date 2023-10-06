import React from 'react'
import Navbar from '../Navbar'
import { useNavigate } from 'react-router-dom'
import { dataArr } from '../../PopularCourses/PopularCourses'
import './Courses.css'
const Courses = () => {
  const nv = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="scrollTemp">
        {dataArr.map((item) => (
          <img src={item.cImg} alt="" />
        ))}
      </div>
      {
        dataArr.map((item) => (
          <div className='mainCDiv row'>
            <div className="col-md-4">
              <div className="cardC">
                <img src={item.cImg} className='courseImg' alt="" />
                <hr /><p className="Ctitle">{item.cName}</p>
                <hr /><input type="button" className='mybtn' value="Click" onClick={() => {
                  nv(item.cLink)
                }} />
              </div>
            </div>
            <div className="col-md-6 textBlock">
              {item.desc}
            </div>
          </div>
        ))

      }

    </div>
  )
}

export default Courses