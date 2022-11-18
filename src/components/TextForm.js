import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () =>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase","success");
    }  

    const handleClearClick = () =>{
      console.log("Clear text was clicked");
      let newText = "";
      setText(newText);
    }

    const handleLowClick = () =>{
      console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase","success");
    }  

    const handleOnChange = (event) =>{
      console.log("handleOnChange was clicked");
      setText(event.target.value);
    }  

    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style ={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>
        <textarea className="form-control" value ={text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-2" onClick = {handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-primary my-2 mx-2" onClick = {handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2" style ={{color: props.mode==='dark'?'white':'black'}}>
      <h1 >Your Text Summary</h1>
      <p>{text.split(" ").length-1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Write some text in the above Text Box to preview it here"}</p>
    </div>
    </>
  );
}
