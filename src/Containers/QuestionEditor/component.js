import React from 'react';
import './styles.css';

const QuestionEditor = (props) => {
  console.log(props)
  return (
    <div className="QuestionEditor">
      <p>{props.question && props.question.title}</p>    
    </div>
  );
};

export default QuestionEditor;