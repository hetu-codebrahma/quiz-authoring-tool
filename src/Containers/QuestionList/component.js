import React, { Component } from 'react';
import uuid from 'uuid/v1';
import QuestionListItem from '../../Components/QuestionListItem';
import './styles.css';

class QuestionList extends Component {

  addNewQuestion(){
    const { addQuestion, questions } = this.props;
    const newQuestionNumber = questions.list.length + 1;
    const question = {
      id: uuid(),
      title: `Question ${newQuestionNumber}`,
    };
    addQuestion(question);
  }

  render(){
    return (
      <div className="QuestionList">
        <p>Select your Questions</p>
        <div>
          {
            this.props.questions.list.map(question => {
              return (
                <QuestionListItem
                  key={question.id}
                  question={question}
                />
              );
            })
          }
        </div>
        <div>
          <button onClick={() => this.addNewQuestion()}>
            Add
          </button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
};

export default QuestionList;
