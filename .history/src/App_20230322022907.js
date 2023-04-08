
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

// let name = "Balgovind"; //this is js code which is put inside jsx code within h1 tag.
function App() {
  const [darkMode, setDarkMode] = useState(false)
  return(
  <>
  <Navbar title = "TextUtils" mode={darkMode} home ="Home" about = "About" />
  <div className= "container my-3">
  <TextForm heading = "Enter The Texts Below To Analyze:"/>
  {/* <About/> */}
  </div>
  </>
  );
    
}

export default App;
 