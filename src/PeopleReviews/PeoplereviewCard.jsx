import React from 'react'
import './reviewCard.css'
const reviewdataArr = [
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Invaluable Resource",
        desc: "The cheatsheets provided here are so valuable. They have helped me tremendously in my coding journey.",
        sName: "John Doe"
    },
    {
        pic: "https://img.freepik.com/premium-vector/hacker-concept-illustration_598748-219.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Great Learning Aid",
        desc: "I love how concise and well-structured the cheatsheets are. They are a great aid in learning new technologies.",
        sName: "Alice Smith"
    },
    {
        pic: "https://img.freepik.com/free-vector/mysterious-gangster-character-design_23-2148474063.jpg",
        heading: "Game Changer",
        desc: "This website has been a game changer for me. It's like having cheat codes for coding challenges!",
        sName: "Bob Johnson"
    },
    {
        pic: "https://img.freepik.com/free-vector/illustration-burglar_53876-6139.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Excellent Reference",
        desc: "These cheatsheets serve as an excellent reference during coding projects. They've become an essential part of my toolkit.",
        sName: "Eva Williams"
    },
    {
        pic: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Highly Recommend",
        desc: "I highly recommend this website to anyone looking to quickly grasp complex programming concepts.",
        sName: "David Lee"
    },
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Fantastic Resource",
        desc: "I stumbled upon this website and it's been fantastic. The cheatsheets are well-designed and extremely helpful.",
        sName: "Grace Johnson"
    },
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Top-Notch Content",
        desc: "The quality of content here is top-notch. These cheatsheets have become an integral part of my learning process.",
        sName: "Michael Brown"
    },
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Impressive Collection",
        desc: "Impressed by the wide collection of cheatsheets available. They cover a variety of topics and are easy to follow.",
        sName: "Olivia Smith"
    },
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "A Coding Companion",
        desc: "Consider this website as your coding companion. It simplifies complex topics and accelerates your progress.",
        sName: "William Davis"
    },
    {
        pic: "https://img.freepik.com/free-vector/hacker-concept-illustration_114360-1978.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        heading: "Highly Beneficial",
        desc: "The cheatsheets are highly beneficial, whether you're a beginner or an experienced developer. I'm grateful to have found them.",
        sName: "Sophia Johnson"
    }
];

const reviewdataArr1 = reviewdataArr.slice(0, 5)

const PeoplereviewCard = () => {
    return (
        <div className='MainCardDivP'>
            {
                reviewdataArr1.map((item) => (
                    <div className='cardDiv'>
                        <div className="imageDivP">
                            <img src={item.pic} alt="" />
                        </div>
                        <div className="textFIelds">
                            <h4>{item.sName}</h4>
                            <p id='itemHead'>{item.heading}</p>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default PeoplereviewCard