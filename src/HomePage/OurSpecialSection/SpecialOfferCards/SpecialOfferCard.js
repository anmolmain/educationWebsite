import React from 'react'
import './SpecialOfferCard.css'
const data = [
    {
        pic: "https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        title: "Pro Program",
        text: "Elevate your skills with our exclusive pro program today!"
    },
    {
        pic: "https://img.freepik.com/free-vector/helping-partner-concept-illustration_114360-8867.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        title: "24/7 Suppourt",
        text: "24/7 support: We're here whenever you need assistance. Contact us anytime!."
    },
    {
        pic: "https://img.freepik.com/premium-vector/graduation-cap-diploma-design-illustration-isolated-white-background_216222-81.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        title: "Carrear Planning",
        text: "Discover career opportunities with our expert guidance and resources. Plan ahead!"
    },
    {
        pic: "https://img.freepik.com/free-vector/seminar-concept-illustration_114360-7700.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
        title: "Trainings",
        text: "Explore career-enhancing training programs and supercharge your professional journey."
    },

]
const SpecialOfferCard = () => {
    return (
        < div >
            <div className="cardsSection">
                <div className="cardLayout row">
                    {
                        data.map((item, index) => (
                            <div key={index} className='mainCard col-lg-2 col-md-3 col-sm-4 col-5 '>
                                <a id='SpecialOfferLinks' href="#">
                                    <img id='pic' src={item.pic} alt="" />
                                    <p id='titleText'>{item.title}</p>
                                    <p id='mainText'>{item.text}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div >
    )
}

export default SpecialOfferCard