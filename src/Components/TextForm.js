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
                <button className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to LowerCase </button>
                <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear </button>
            </div>
            <div className="container my-3">
                <h3>Your Text Summary</h3>
                <p>
                    It has {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} minutes worth of read</p>
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