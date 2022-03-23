import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

import Navbar  from './components/Navbar';
import Form from './components/Form'
import Alert from './components/Alert';
// import About from './components/About';

import React, { useState } from 'react'
// import Contact from './components/Contact';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  let showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  let comStyle = (event) => {
    if (!(mode === event.target.value)) {
      setMode(`${event.target.value}`);
      document.body.style.backgroundColor = `${event.target.value}`;
      showAlert(`${event.target.value} mode has been enabled` , "success")
      document.title = `First Form - ${event.target.value} mode`
    } else{
      setMode('light');
      event.target.checked = false;
      document.body.style.backgroundColor = 'white';
      showAlert(`${event.target.value} mode has been disabled`, "success");
      document.title = `First Form`
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title = "First" mode={mode} comStyle={comStyle} link1 = "Home" link2="About" link3="Contact"/>
      <Alert alert= {alert}/>
      <div className='container my-3'>    
        {/* <Routes> */}
          {/* <Route exact path="about" element={<About />} /> */}
          {/* <Route exact path="/" element={ */}
          <Form heading="Change texts as you wish" showAlert={showAlert} mode={mode}/>
          {/* } /> */}
          {/* <Route exact path="contact" element={<Contact />}/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
