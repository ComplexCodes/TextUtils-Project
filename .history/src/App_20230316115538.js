
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';

// let name = "Balgovind"; //this is js code which is put inside jsx code within h1 tag.
function App() {
  return(
  <>
  <Navbar title = "TextUtils" home ="Home" about = "About"/>
  <div className= "container my-3">
  {/* <TextForm heading = "Enter The Texts Below To Analyze:"/> */}
  <About/>
  </div>
  </>
  );
    
}

export default App;
 