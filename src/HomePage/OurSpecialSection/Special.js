import React from 'react'
import './special.css'
import SpecialOfferCard from './SpecialOfferCards/SpecialOfferCard'
const Special = () => {
    return (
        <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280"><path fill="#002B66" fill-opacity="1" d="M0,128L30,149.3C60,171,120,213,180,208C240,203,300,149,360,160C420,171,480,245,540,250.7C600,256,660,192,720,149.3C780,107,840,85,900,112C960,139,1020,213,1080,234.7C1140,256,1200,224,1260,218.7C1320,213,1380,235,1410,245.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
            <div id='mainDivSpO'>
                <div className="SpecialOfferMain">
                    <p id='SpecialOfferText'>
                        Our Special Features for you
                    </p>
                    <p id='specialOfferMiniText'>Don't miss our limited-time special offer! Unlock exclusive access to premium cheatsheets and supercharge your tech skills. Elevate your coding game with our expertly crafted resources. Upgrade now and stay ahead!
                    </p>
                    <br />
                </div>
            </div >
            <SpecialOfferCard />
        </>
    )
}

export default Special