import React from 'react'
import './HtmlCourse.css'
import Navbar from '../../HomePage/Navbar/Navbar'
import htmlData from './htmlCourseData'

const HtmlCourse = () => {
    return (
        <>
            <Navbar />
            {
                htmlData.map((item, key) => (
                    <div className='mainDivLanding row'>
                        <div className="col-12">
                            <p id='div1Text'>{item.sectionName}</p>
                        </div>

                        <p className="div1TMiniext" style={{ fontFamily: 'Josefin Sans', padding: "6%", paddingTop: "1%" }}>
                            {
                                item.subSection.map((item2, key) => (
                                    <>
                                        <h5 key={key}>{item2.sName}</h5>
                                        {item2.sdes.map((item3, key) => (
                                            <p key={key}>{item3}</p>
                                        ))}
                                    </>
                                ))
                            }
                        </p >
                        <div className="codeWindow"><pre>{item.code}</pre></div>
                    </div >
                ))
            }
        </>
    )
}
export default HtmlCourse
