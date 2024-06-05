import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("TextBox Cleared", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied", "success")
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Covert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Covert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words & {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    )
}
