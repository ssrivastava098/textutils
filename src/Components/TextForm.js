import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.handleAlert("Converted to UpperCase", "success")
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.handleAlert("Converted to LowerCase", "success")
    }
    const handleToClear = () => {
        setText("")
    }
    const onChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control"  onChange={onChange} style = {{backgroundColor: props.mode==='dark'?'grey':'light', color: props.mode ==='light'?'black':'white'}} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-2" onClick={handleUpperCase} disabled={text.length===0}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowerCase} disabled={text.length===0}>Convert to LowerCase </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleToClear} disabled={text.length===0}>Clear </button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>
                    It has {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes worth of read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string
};

TextForm.defaultProps = {
    heading: 'Add your Title here'
};