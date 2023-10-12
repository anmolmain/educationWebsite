import React from 'react'
import './Template.css'
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
        // console.log(prop.sname);
                console.log(prop.props)
            } */}
            <div className="btnDiv">
                <button id='moveToTopBtn' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <p>^</p></button>
            </div>
            {
                prop.props.map((item, key) => (
                    <div className="DataSection">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                            <p className='topicName'> {`${prop.sname} `}</p>
                            </div>
                            <div className="col-2"></div>
                        </div>
                        <hr />
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





