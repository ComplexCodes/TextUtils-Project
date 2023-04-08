import React, {useState} from 'react'

export default function TeaxtForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("on Change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Texts</button>
    </div>
    <div className="container my-3">
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} Words and  {text.length} Characters  and  {0.008 * text.split(" ").length} Minutes Read</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
  </>
  
  )
}
