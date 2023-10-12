import React from 'react'
import './Template.css'
import CoursesScrollBar from '../HomePage/Navbar/NavbarRouting/CoursesScrollBar';
const TempLate = (prop) => {
    const copyText = (index) => {
        var cText = document.getElementById(`codeText_${index}`);
        const tempInput = document.createElement('input')
        tempInput.value = cText.textContent;

        document.body.appendChild(tempInput)
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

    }
    return (
        <>
            {/* {
                console.log(prop.sname);
                console.log(prop.props)
            } */}
            <CoursesScrollBar />
            <div className="btnDiv">
                <button id='moveToTopBtn' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <p>^</p></button>
            </div>
            {
                <div style={{ backgroundColor: "rgb(10,43,102)" }}>
                    <br /><br />
                    <div className="row" style={{ backgroundColor: "rgb(10,43,102)", display: "flex" }}>
                        <p className='col-12  topicName'> {`${prop.sname} Sheet`}</p>
                        {/* <div className="col-2" style={{display:"flex"}}>
                        <button style={{margin:"auto",width:"30%",borderRadius:"50%",backgroundColor:"rgb(10,43,102",outline:"none",border:"none"}}>
                            <img id='nightModeBtn' style={{width:"120%",borderRadius:"50%"}} src="https://img.icons8.com/?size=100&id=15348&format=png" alt="" />
                            </button>
                    </div> */}
                        <hr style={{ width: "90%" }} />
                    </div >
                </div>
            }
            {
                prop.props.map((item, key) => (
                    <div className="DataSection">
                        <div className='mainDivLanding row'>
                            <div className="col-12">
                                <p id='div1Text'>{item.topic_name}</p>
                                <h4 style={{ marginLeft: "6%" }}>{item.topic_description}</h4>
                            </div>

                            <p style={{ fontFamily: 'Josefin Sans', marginTop: "3%", marginLeft: "7%" }}>
                                {
                                    item.subtopics.map((item2, subkey) => (
                                        <>
                                            <h4 key={subkey} style={{ marginLeft: "0%", fontFamily: "'Josefin Sans', sans-serif", fontWeight: "700" }}>{item2.subtopic_name}</h4>
                                            <div style={{ backgroundColor: "whitesmoke", width: "90vw" }}>
                                                <h5 style={{ color: "rgb(110, 110, 110)", padding: "1%", marginLeft: "2%", fontFamily: "sans-serief" }}>
                                                    <div className="codeDiv">
                                                        <button id='copyTextBtn' onClick={() => { copyText(subkey) }}>

                                                        </button>
                                                        <pre class='codeText' id={`codeText_${subkey}`} >
                                                            {item2.example_code}
                                                        </pre>

                                                    </div>
                                                </h5>
                                            </div>
                                        </>
                                    ))
                                }
                            </p >
                        </div >
                    </div>
                ))
            }
            {window.scrollTo({ top: 0, behavior: 'smooth' })}
        </>
    )
}

export default TempLate;





