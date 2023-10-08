import React from 'react'
import './LandingPage.css'
import manImage from './manImage.jpeg'
import footerLogo from './footerLogo.png'
export const LandingPage = () => {
    return (
        <div>
            <div className="mainDivLandingPage row">
                <div className="div1 col-md-8 col-sm-12">

                    <div className="landingText">
                        <p id="div1TextLandingPage">Find your course ,<br />Change the way you Learn</p>
                        <div className="flogoDiv">
                            <img className='landingPageLogoPic' src={footerLogo} alt="" />
                        </div>
                        <hr className='myHrTag' style={{ width: "50%", }} />
                        <p id="div1TMiniext">Welcome to our Cheat sheat mania! We provide concise, expertly crafted cheatsheets for a multitude of technologies. Whether you're a newbie or a seasoned pro, our cheatsheets simplify learning and coding. Covering HTML, CSS, JavaScript, React, and more, our quick references are your go-to resources. Elevate your skills, streamline development, and build stellar web apps. Explore our cheatsheets to master tech effortlessly!</p>
                    </div>

                </div>
                <div className="div2 col-md-3 col-sm-12">
                    <img id='LandingPageManPic' src={manImage} alt="" />
                </div>
            </div>
            <div className="svgImage">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#002B66" fill-opacity="1" d="M0,128L30,149.3C60,171,120,213,180,208C240,203,300,149,360,160C420,171,480,245,540,250.7C600,256,660,192,720,149.3C780,107,840,85,900,112C960,139,1020,213,1080,234.7C1140,256,1200,224,1260,218.7C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}
