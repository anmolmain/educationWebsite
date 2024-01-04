import React from 'react';
import Navbar from '../Navbar';
import './Contact.css';

const Contact = () => {
  function handleSubmit(e) {
    // e.preventDefault();
    // let fname = document.getElementById('fname').value;
    // let lname = document.getElementById('lname').value;
    // let email = document.getElementById('email').value;
    // let mobile = document.getElementById('mobile').value;
    // let message = document.getElementById('message').value;

    // console.log(fname);
    // console.log(lname);
    // console.log(email);
    // console.log(mobile);
    // console.log(message);
  }

  return (
    <div>
      <Navbar />
      <form action="https://formsubmit.co/eac40862ec6626ce75fb03a5cb6b4188" method="POST">
        <div className="bg">
          <div className="MainDivContact">
            <h1>Contact/Report</h1>
            <div className="inputContainer">
              <div className="inputGroup">
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
              </div>

              <div className="inputGroup">
                <input type="text" name="email" placeholder="Email Id" />
                <input type="text" name="mobile" placeholder="Mobile Number" />
              </div>
            </div>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button className="submitButton" type='submit'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
