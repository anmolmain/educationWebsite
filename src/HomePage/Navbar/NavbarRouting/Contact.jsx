import React from 'react';
import Navbar from '../Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="bg">
        <div className="MainDivContact">
          <h1>Contact/Report</h1>

          <div className="inputContainer">
            <div className="inputGroup">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <div className="inputGroup">
              <input type="text" placeholder="Email Id" />
              <input type="text" placeholder="Mobile Number" />
            </div>
          </div>

          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
