import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      showAlert("dark mode has been enabled", "success");
      document.title = 'textUtils - dark mode';
      setInterval(() => {
        document.title = 'textUtils is Amazing mode';
      }, 2500);

      setInterval(() => {
        document.title = 'Install textUtils Now';
      }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("light mode has been enabled", "success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="JI-LAY-INDIA" aboutText="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
      <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter the text to analyze Below"/>} />
      
      <Route path="/about" element={<About />} />
          
      </Routes>
      {/* <About/> */}
    </div>
    </Router>
    </>
  );
}

export default App;
