import React, { Component } from 'react';
import uuid from 'uuid/v1';
import ListItem from '../../Components/ListItem';
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
    const {
      addQuestion,
      questions,
      selectQuestion,
      addOption,
    } = this.props;
    const newQuestionNumber = questions.length + 1;
    const question = {
      id: uuid(),
      value: `Question ${newQuestionNumber}`,
      image: null,
    };
    addQuestion(question);
    // Every question needs a minimum of 2 questions
    addOption(question.id, uuid());
    addOption(question.id, uuid());
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
    const { questions, selectedQuestionID } = this.props;
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
              questions.map((question, i) => {
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
                    <ListItem
                      value={question.value}
                      selected={selectedQuestionID === question.id}
                      onItemClicked={() => this.selectQuestion(question.id)}
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
