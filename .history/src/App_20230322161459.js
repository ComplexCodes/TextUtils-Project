
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';
import Alert from './Components/Alert';


// let name = "Balgovind"; //this is js code which is put inside jsx code within h1 tag.
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='rgb(2 6 34)';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return(
  <>
  <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} home ="Home" about = "About" />
  <Alert/>
  <div className= "container my-3">
  <TextForm heading = "Enter The Texts Below To Analyze:" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
  );
    
}

export default App;
 