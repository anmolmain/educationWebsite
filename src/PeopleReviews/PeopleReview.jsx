import React from 'react'
import PeoplereviewCard from './PeoplereviewCard'
const PeopleReview = () => {
    return (
        <div>
            <div className="HeadingDiv" >
                <h1 id='cHeading'>Know what others said about us</h1>
                {/* <h1 id='cHeading'>Portfolio</h1> */}
                <p id='miniTextCHeading'>Discover what our satisfied learners say about our top-notch cheatsheets. Join our educational platform and experience excellence in tech education.</p>
            </div>
            <PeoplereviewCard />
        </div>
    )
}

export default PeopleReview