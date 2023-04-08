
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';


// let name = "Balgovind"; //this is js code which is put inside jsx code within h1 tag.
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='#343a40';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return(
  <>
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} home ="Home" about = "About" />
  <div className= "container my-3">
  <TextForm heading = "Enter The Texts Below To Analyze:"/>
  {/* <About/> */}
  </div>
  </>
  );
    
}

export default App;
 