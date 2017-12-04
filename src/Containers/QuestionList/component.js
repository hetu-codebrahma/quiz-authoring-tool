import React, { Component } from 'react';
import uuid from 'uuid/v1';
import QuestionListItem from '../../Components/QuestionListItem';
import Button from '../../Components/Button';
import './styles.css';

class QuestionList extends Component {

  addNewQuestion(){
    const { addQuestion, questions, selectQuestion } = this.props;
    const newQuestionNumber = questions.list.length + 1;
    const question = {
      id: uuid(),
      title: `Question ${newQuestionNumber}`,
    };
    addQuestion(question);
    selectQuestion(question.id);
  }

  selectQuestion(questionID){
    this.props.selectQuestion(questionID);
  }

  activateDeleteMode(){

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
                  selected={this.props.selectedQuestion === question.id}
                  onQuestionClicked={() => this.selectQuestion(question.id)}
                />
              );
            })
          }
        </div>
        <div className="ButtonsContainer">
          <Button 
            onClick={() => this.addNewQuestion()}
            label="Add"
          />
          <Button
            onClick={() => this.activateDeleteMode()}
            label="Delete"
            style={{ backgroundColor: 'crimson' }}
          />
        </div>
      </div>
    );
  }
};

export default QuestionList;
