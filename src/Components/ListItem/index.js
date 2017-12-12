import React from 'react';
import './styles.css';

const QuestionListItem = (props) => {
  let classes = 'ListItem' + (props.selected ? ' SelectedListItem' : '')
  return (
    <div
      className={classes}
      onClick={() => props.onItemClicked()}
    >
      <span>{ props.value }</span>
    </div>
  )
}

export default QuestionListItem;
