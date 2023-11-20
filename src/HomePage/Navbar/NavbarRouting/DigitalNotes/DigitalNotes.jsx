import React from 'react'
import Navbar from '../../Navbar'
import './DigitalNotes.css'
import { useNavigate } from 'react-router-dom'

const DigitalNotes = () => {
  var allCourses = [
    { topic: "HTML" },
    { topic: "CSS" },
    { topic: "JAVASCRIPT" },
    { topic: "BOOTSTRAP" },
    { topic: "MONGODB" },
    { topic: "JQUERY" },
    { topic: "REACT" },
    { topic: "EXPRESSJS" },
    { topic: "NODEJS" },
    { topic: "ANGULAR" },
    { topic: "NEXTJS" },
    { topic: "WEB3JS" },
  ]
  const nv = useNavigate()
  function checkAndDownload(mitem) {
    
    // alert(mitem);
    nv("/"+"courses/"+mitem+"course")
    setTimeout(() => {
      window.print()
    }, 500);
    
  }
  return (
    <div>
      <Navbar />
      <br />
      <div className="MainDigitalNotesDiv">
        {
          allCourses.map((item, key) => (
            <div id='topicWithDownloadBtn'>
              <p>{item.topic}</p>
              <button onClick={() => {
                checkAndDownload(item.topic)
              }} id='buttonDownload'><img src="https://img.icons8.com/?size=512&id=63791&format=png" alt="" /></button>
              {/* <hr /> */}
            </div>
          ))
        }
        {/* <div className="digitalNotesDiv"> */}
        {/* <div className="imgDiv"> */}
        {/* <img src="https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page_74855-10590.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph" alt="" /> */}
        {/* </div> */}

        {/* </div> */}
      </div>
    </div>
  )
}

export default DigitalNotes