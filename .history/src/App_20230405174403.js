
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState} from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



// let name = "Balgovind"; //this is js code which is put inside jsx code within h1 tag.
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert =(message, type) => {
     setAlert({            
      msg: message,        
      type: type
     })
     setTimeout(() => {
         setAlert(null);
     }, 1500);
  }
  const toggleMode =()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor='rgb(2 6 34)';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success");
    }
  }
  return(
  <>
  <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    
    
     <Switch>
            <Route path="/">
            <div className= "container my-3">
    <TextForm showAlert={showAlert} heading = "Enter The Texts Below To Analyze:" mode={mode}/>
    </div>
            </Route>
            <Route path="/">
            </Route>
            
     </Switch>
   
  </Router>
            <About />
  </>
  );
    
}

export default App;
 