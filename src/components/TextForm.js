import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{
    console.log("Uppercase was clicked")
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked")
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("text Lowercase", "success")
  }

  const handleOnChange = (event) =>{
    console.log("Uppercase was clicked")
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // setText('srijan'); to change text variable value
  return (
    <>
      <div className="container my-5">
      <h1 className="mb-3">{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'dark' ? 'grey':'white', color: props.mode === 'dark' ? 'white':'grey'}} rows="8" placeholder="Enter text here"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
      </div>

      <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview: </h2>
        <p>{text.length>0?text:"Enter someting to preview here"}</p>
      </div>
    </>
  )
}
