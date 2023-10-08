import React from 'react'
import './footer.css'
import githubLogo from './githubLogo.png'
import footerLogo from './footerLogo.png'

const Footer = () => {
    const tDate = new Date();
    let tYear = tDate.getFullYear();
    console.log(tYear);
    return (
        <div className='footerDiv'>
            <div className="ResAndIns">
                <p id='FooterHeading' className='col-12'>Resources and Insigts</p>
            </div>
            <div className='fullDiv row'>
                <div className="imgageDiv col-md-3">
                    <img id='divImg' src={footerLogo} alt="" />
                </div>
                <div className="TextDiv col-md-8">
                    <div className="col-1">
                        <div id="VerticalHrTag"></div>
                    </div>
                    <div className="col-5">
                        <p className='AboutUsHeadingFooter'>
                            About
                        </p>
                        <hr className='myHrTag' />
                        <p className="AboutUsTextFooter">
                            At CheatSheet Mania, we are committed to fostering a lifelong love for learning. Our mission is to empower individuals of all ages and backgrounds to pursue their educational goals and unlock their full potential.
                        </p>
                    </div>
                    <div className="col-1">
                        <div id="VerticalHrTag"></div>
                    </div>

                    <div className=" AboutUsHeadingFooter col-5">
                        <p className=''>Contact US</p>
                        <hr className='myHrTag' />
                        <p className="AboutUsTextFooter">

                            XYZ street
                            Mycity , MyState - India
                            Phone: 1234567890
                            Email: email123@email.com
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="myLinks row" >
                        <div className="row imageLinks">
                            <div className="col-3">
                                <a href="#">
                                    <img className='linkedImages' src={githubLogo} alt="" />
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#">
                                    <img className='linkedImages' src={githubLogo} alt="" />
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#">
                                    <img className='linkedImages' src={githubLogo} alt="" />
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#">
                                    <img className='linkedImages' src={githubLogo} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="bottomRowc row">
                        <div className="col-12 bottomLayer">Copyright @{tYear} CheatSheet Mania (dummyWebsite)</div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer