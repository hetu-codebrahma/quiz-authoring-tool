import React, { Component } from 'react';
import uuid from 'uuid/v1';
import QuestionListItem from '../../Components/QuestionListItem';
import Button from '../../Components/Button';
import './styles.css';

class QuestionList extends Component {

  constructor(props){
    super(props);
    this.state = {
      deleteMode: false,
    }
  }

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

  deleteQuestion(questionID){
    this.props.deleteQuestion(questionID);
  }

  selectQuestion(questionID){
    this.props.selectQuestion(questionID);
  }

  activateDeleteMode(){
    this.setState({
      deleteMode: true,
    })
  }

  deactivateDeleteMode(){
    this.setState({
      deleteMode: false,
    })
  }

  render(){
    return (
      <div className="QuestionList">
        <p>Select your Questions</p>
        <div>
          {
            this.props.questions.list.map(question => {
              return (
                <div key={question.id} className="QuestionListItemContainer">
                  <QuestionListItem
                    question={question}
                    selected={this.props.selectedQuestion === question.id}
                    onQuestionClicked={() => this.selectQuestion(question.id)}
                  />
                  {this.state.deleteMode && (
                    <Button
                      onClick={() => this.deleteQuestion(question.id)}
                      label="X"
                      style={{ backgroundColor: 'white' }}
                      labelStyle={{ color: 'red' }}
                    />
                  )}
                </div>
              );
            })
          }
        </div>
        {this.state.deleteMode ? (
          <div className="ButtonsContainer">
            <Button 
              onClick={() => this.deactivateDeleteMode()}
              label="Done"
            />
          </div>
        ) : (
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
        )}
      </div>
    );
  }
};

export default QuestionList;
