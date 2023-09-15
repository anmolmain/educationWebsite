import React from 'react'
import './PopularCourses.css'

const PopularCourses = () => {
    const dataArr = [
        {
            cImg: "https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4099.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "HTML",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/advanced-computer-skills-abstract-concept-illustration_335657-2255.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "CSS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/javascript-abstract-concept-illustration_335657-3702.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "JavaScript",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "Bootstrap",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/gradient-website-hosting-illustration_23-2149247164.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "MongoDB",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/creative-cms-concept-illustration-flat-design_23-2148800729.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "React",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/programming-language-illustration_24908-61529.jpg?size=626&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "Express.JS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/static-asset-illustration-concept_114360-885.jpg?size=338&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "Node.JS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8173.jpg?size=338&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "Next.JS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-psd/3d-illustration-man-with-ship-cargo-delivery-boat-shipping_1150-65979.jpg?size=338&ext=jpg&ga=GA1.1.348035570.1694454835&semt=ais",
            cName: "Three.JS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-psd/3d-nft-icon-chain_629802-28.jpg?size=338&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "web3.JS",
            cLink: "",
        },
        {
            cImg: "https://img.freepik.com/free-vector/javascript-abstract-concept-illustration_335657-3702.jpg?size=338&ext=jpg&ga=GA1.1.348035570.1694454835&semt=sph",
            cName: "jQuery",
            cLink: "",
        },
    ]
    return (
        <div>
            <div className="HeadingDiv">
                <h1 id='cHeading'>Most Popular Courses</h1>
                {/* <h1 id='cHeading'>Portfolio</h1> */}
                <p id='miniTextCHeading'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic, id enim repellendus dolore aperiam </p>
            </div>
            <div className='mainDivCourse'>
                {dataArr.map((item) => (
                    <div className="cardCourse">
                        <img src={item.cImg} className='courseImg' alt="" />
                        <hr /><p className="Ctitle">{item.cName}</p>
                        <hr /><input type="button" className='mybtn' value="Click" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularCourses