
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
    {/* <Navbar title ="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Navbar/> */}
  <Router>
    <Navbar title = "TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    
    
  <div className= "container my-3">
      <Switch>
            <Route exact path="/about">
             <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading = "Enter The Texts Below To Analyze:" mode={mode}/>
            </Route>
            
       </Switch>
    </div>
   
  </Router>
          
  </>
  );
    
}

export default App;
 