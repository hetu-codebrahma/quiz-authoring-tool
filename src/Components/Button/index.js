import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <div
      className="Button"
      style={props.style}
      onClick={() => props.onClick()}
    >
      <span className="ButtonLabel" style={props.labelStyle}>
        {props.label}
      </span>
    </div>
  )
}

export default Button;