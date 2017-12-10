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
      showList: false,
    }
  }

  addNewQuestion(){
    const { addQuestion, questions, selectQuestion } = this.props;
    const newQuestionNumber = questions.list.length + 1;
    const question = {
      id: uuid(),
      title: `Question ${newQuestionNumber}`,
      image: null,
      options: ["Option", "Option"],
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

  onShowListButtonClicked() {
    this.setState({
      showList: true,
    })
  }

  onHideListButtonClicked() {
    this.setState({
      showList: false,
    })
  }

  render(){
    const { list, selectedQuestion } = this.props.questions;
    const { showList } = this.state;
    let QuestionListClasses = 'QuestionList';
    if(showList){
      QuestionListClasses = QuestionListClasses + ' QuestionListMobileDisplay'
    }
     
    return (
      <div className="QuestionListContainer">
        <div className="QuestionListButton">
          {!showList && (
            <Button 
              label={<i className="material-icons">menu</i>}
              onClick={() => this.onShowListButtonClicked()}
            />  
          )}
        </div>
        <div className={QuestionListClasses}>
          <div className="QuestionListButton">    
            <Button 
              label={<i className="material-icons">close</i>}
              onClick={() => this.onHideListButtonClicked()}
              labelColor="white"
            />  
          </div>
          <h3 className="heading">List of questions</h3>
          <div>
            {
              list.map((question, i) => {
                return (
                  <div key={question.id} className="QuestionListItemContainer">
                    {this.state.deleteMode ? (
                      <Button
                        onClick={() => this.deleteQuestion(question.id)}
                        label="X"
                        labelColor="white"
                        backgroundColor="#e74c3c"
                      />
                    ) : <span className="QuestionIndex">{i + 1}.</span>}
                    <QuestionListItem
                      question={question}
                      selected={selectedQuestion === question.id}
                      onQuestionClicked={() => this.selectQuestion(question.id)}
                    />
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
                backgroundColor="white"              
              />
            </div>
          ) : (
            <div className="ButtonsContainer">
              <Button
                onClick={() => this.addNewQuestion()}
                label="Add"
                backgroundColor="#CDDC39"
                labelColor="#333"
              />
              <Button
                onClick={() => this.activateDeleteMode()}
                label="Delete"
                backgroundColor="crimson"
                labelColor="white"
              />
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default QuestionList;
