import React from 'react';
import './styles.css';

const QuestionListItem = (props) => {
  let classes = 'QuestionListItem' + (props.selected ? ' SelectedQuestion' : '')
  return (
    <div 
      className={classes}
      onClick={() => props.onQuestionClicked()}
    >
      <span>{ props.question.title }</span>
    </div>
  )
}

export default QuestionListItem;