import React, { useState } from 'react'
import './Template.css'
const TempLate = (prop) => {
    const [copyStatus, changeCopyStatus] = useState(Array(prop.props.length).fill('Copy'))
    const copyText = (index) => {
        const newCopyStatus = [...copyStatus];
        // newCopyStatus[index] = newCopyStatus[index] === "Copy" ?  "Code Copied":"Copy"
        if (newCopyStatus[index] === "Copy") {
            newCopyStatus[index] = "Code Copied"
            var cText = document.getElementById("codeText");
            const tempInput = document.createElement('input')
            tempInput.value = cText.textContent;

            document.body.appendChild(tempInput)
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            // alert("code copied")
        }
        else {
            newCopyStatus[index] = "Copy"
        }
        changeCopyStatus(newCopyStatus);
    }
    return (
        <>
            {/* {
                console.log(prop.props)
            } */}
            <div className="btnDiv">
                <button id='moveToTopBtn' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                    <p>^</p></button>
            </div>
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
                                                            {copyStatus[subkey]}
                                                        </button>
                                                        <pre id='codeText' >
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