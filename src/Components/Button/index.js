import React from 'react';
import './styles.css';

const Button = (props) => {
  return (
    <button
      className="Button"
      style={{backgroundColor: props.backgroundColor}}
      onClick={() => props.onClick()}
    >
      <span 
        className="ButtonLabel" 
        style={{color: props.labelColor}}
      >
        {props.label}
      </span>
    </button>
  )
}

export default Button;