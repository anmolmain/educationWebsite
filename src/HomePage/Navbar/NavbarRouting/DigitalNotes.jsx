import React from 'react'
import Navbar from '../Navbar'
import './DigitalNotes.css'

const DigitalNotes = () => {
  return (
    <div>
      <Navbar />
      <div className="digitalNotesDiv">
        <div className="imgDiv">
          <img src="https://img.freepik.com/free-vector/digital-marketing-team-constructing-landing-home-page_74855-10590.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph" alt="" />
        </div>
        <p>
          Hold on, this page will contain pdf files of notes , and we are working our best to do it ASAP
        </p>
      </div>
    </div>
  )
}

export default DigitalNotes