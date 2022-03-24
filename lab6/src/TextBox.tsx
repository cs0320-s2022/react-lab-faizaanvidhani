import React from 'react';
import './App.css';
import "react-awesome-button/dist/styles.css";

type labelAndChange = {
    label: string,
    change: Function;
}
function TextBox(props: labelAndChange) {
    return (
        <div className="TextBox">
            <label htmlFor="textbox">Enter {props.label}: </label>
            <input type="text" name="textbox" id="textbox" onChange={(event) =>
            {props.change(event.target.value)}}></input>
        </div>
    );
}

export default TextBox