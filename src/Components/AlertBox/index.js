import React from 'react';
import './styles.css';

const AlertBox = (props) => {
  return (
    <div className="AlertBox">
      <span>{props.value}</span>
    </div>
  )
}


export default AlertBox;
