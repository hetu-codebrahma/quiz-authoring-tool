import React from 'react';
import './styles.css';

const TextInput = (props) => {
  return (
    <div className="TextInput">
      <span className="TextInputLabel">
        {props.label}
      </span>
      <textarea
        onChange={(e) => props.onChange(e.target.value)}
        className="TextInputField"
        value={props.value}
      />
    </div>
  )
}


export default TextInput;