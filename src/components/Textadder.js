import { useState } from "react"
import React from 'react'

export default function Textadder(props) {

//ALl the text functions are present here .

const [text,setText]=useState("")
const changeHandler=(event)=>{
    setText(event.target.value)

}
const textlowerHandler=()=>{
  let lowerText=text.toLowerCase()
  setText(lowerText)

}

const textHandler=()=>{
    let upperText=text.toUpperCase()
    setText(upperText)
}
const clearText=()=>{
  setText("")
}
const removeSpace=(event)=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}
const handleCopy=()=>{
  var text=document.getElementById("my-box");
  text.select();
  navigator.clipboard.writeText(text.value);
}
// All text functions end here.
  return (
    <div>
        <div className="mb-3 container" >
            <h1 style={{color:props.mode==="light"?'black':'white'}}>{props.heading} </h1>
           
            <textarea style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==="light"?'black':'white'}} placeholder="Enter the Text" className="form-control" id='myBox' rows='3'value={text} onChange={changeHandler}></textarea>
        <div className="container my-1">
        <button className="btn btn-primary mx-2" onClick={textHandler}>Capitalize</button>
        <button className="btn btn-primary mx-2" onClick={textlowerHandler}>loweraize</button>
        <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
        <button className="btn btn-primary mx-2" onClick={removeSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
        </div>
      </div>
        <div className="container">
          <h2 style={{color:props.mode==="light"?'black':'white'}}>Text Stats</h2>
          <div style={{color:props.mode==="light"?'black':'white'}}>No. of words={text.split(" ").length-1}</div>
          <div style={{color:props.mode==="light"?'black':'white'}}>No, of character={text.length}</div>
          <div style={{color:props.mode==="light"?'black':'white'}}>Time required to read={0.08*text.split(" ").length}</div>
      </div>
      <div className="container">
      <h2 style={{color:props.mode==="light"?'black':'white'}}>PREVIEW</h2>
      <p style={{color:props.mode==="light"?'black':'white'}}>{text}</p>
      </div>
    </div>
   
  
  )
}
