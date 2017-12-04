import React from 'react';

const QuestionListItem = (props) => {
  return (
    <div>
      <p>{ props.question.title }</p>
    </div>
  )
}

export default QuestionListItem;