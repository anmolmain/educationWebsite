import React, { useState } from 'react';
import NavBar from '../Navbar';

const CodeEditor = () => {
  const [code, setCode] = useState("console.log('Let's code in Javascript')");

  const runCode = () => {
  const outputFrame = document.getElementById('output');
  const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

  outputDocument.body.innerHTML = '';

  const logs = [];
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    logs.push(args.map(arg => JSON.stringify(arg)).join(' '));
    originalConsoleLog(...args);
  };

  try {
    eval(code);

    logs.forEach(log => {
      const pre = outputDocument.createElement('pre');
      pre.appendChild(outputDocument.createTextNode(log));
      outputDocument.body.appendChild(pre);
    });
  } catch (error) {
    const pre = outputDocument.createElement('pre');
    pre.style.color = 'red';
    pre.appendChild(outputDocument.createTextNode(error.toString()));
    outputDocument.body.appendChild(pre);
  } finally {
    console.log = originalConsoleLog;
  }
};


  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex', height: '100vh'}}>
        <div style={{ flex: 1, border: '1px solid #ccc' }}>
          <textarea
            style={{ width: '100%', height: '70%', boxSizing: 'border-box', }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <button onClick={runCode} style={{ width: '100%', height: '10%',backgroundColor:"rgb(10,43,102",color:"white",fontSize:"1.3rem" }}>
            Run Code
          </button>
        </div>
        <div style={{ flex: 1, border: '1px solid #ccc' }}>
          <iframe title="output" id="output" style={{ width: '100%', height: '90%', border: 0 }}></iframe>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
