import "./App.css";
import React, { useState } from 'react'
// import About from "./Components/About";
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from "./Components/Alert";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  const [mode, setmode] = useState('light')
  const [switchstyle, setSwitchStyle] = useState('text-dark')
  const [Text, setText] = useState("Enable Dark")
  const [alert, setAlert] = useState(null)

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handleToggle = ()=> {
    if (mode === 'light') {
      setmode('dark')
      setSwitchStyle("text-light");
      setText("Enable Light");
      document.body.style.backgroundColor = '#2b2a2a';
      document.body.style.color = 'white';
      handleAlert("Dark Mode Enabled","success")
  }
  else {
    setmode('light')
    setSwitchStyle("text-dark");
      setText("Enable Dark");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      handleAlert("Light Mode Enabled","success")
  }
  }
  
  return (
    <>
      {/* <BrowserRouter>
        <Navbar title='Text Utils' aboutText='About Text Utils' mode={mode} enableToggle={handleToggle} SwitchText={Text} SwitchStyle={switchstyle} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element = {<About />}></Route>
            <Route path="/" element = {<TextForm heading="Enter the Text to analyze" mode={mode} handleAlert={handleAlert} />}></Route>
          </Routes>
        </div>
        </BrowserRouter> */}
      <Navbar title='Text Utils' aboutText='About Text Utils' mode={mode} enableToggle={handleToggle} SwitchText={Text} SwitchStyle={switchstyle} />
      <Alert alert={alert} />
      <div className="container">
        {/* <About /> */}
        <TextForm heading="Enter the Text to analyze" mode={mode} handleAlert={handleAlert} />
      </div>
    </>
  );
}

export default App;
